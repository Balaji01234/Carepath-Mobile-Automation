import fs from 'fs';
import { createRequire } from 'module';
import path from 'path';
import archiver from 'archiver';
import nodemailer from 'nodemailer';
import getValueByComponent from './common.js';

const require = createRequire(import.meta.url); // Allow CommonJS imports in an ES module

const senderEmail = getValueByComponent('Sender');
const password = getValueByComponent('Password');
const receiver = getValueByComponent('Receiver');

export default class Mail {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: senderEmail,
                pass: password
            },
            tls: {
                rejectUnauthorized: false // Allow self-signed certificates
            },
            debug: false,
            logger: false
        });
    }

    async zipReportFolder(reportPath, zipFileName) {
        return new Promise((resolve, reject) => {
            const absPath = path.resolve(reportPath);

            if (!fs.existsSync(absPath) || fs.readdirSync(absPath).length === 0) {
                return reject(new Error(`Report folder is empty or does not exist: ${absPath}`));
            }

            console.log('Zipping folder:', absPath);
            console.log('Files in folder:', fs.readdirSync(absPath));

            const zipFilePath = path.resolve(`./${zipFileName}.zip`);
            const output = fs.createWriteStream(zipFilePath);
            const archive = archiver('zip', { zlib: { level: 9 } });

            output.on('close', () => {
                console.log(`Zipping completed. Total bytes: ${archive.pointer()}`);
                resolve(zipFilePath);
            });

            archive.on('error', err => reject(err));

            archive.pipe(output);
            archive.directory(absPath, true);
            archive.finalize();
        });
    }

    async sendMail(HTMLResultsDir, signUpDataDir) {
        try {
            const testResultsPath = './reports/test-results.json';
            if (!fs.existsSync(testResultsPath)) {
                console.error('Test results file not found:', testResultsPath);
                return;
            }

            const testResults = JSON.parse(fs.readFileSync(testResultsPath, 'utf-8'));
            console.log('Test Results:', testResults); // Debugging

            let totalExecuted = testResults.length;
            let passedCount = testResults.filter(test => test.status === 'passed').length;
            let failedCount = testResults.filter(test => test.status === 'failed').length;

            const summaryTable = `
                <h3>Summary Table</h3>
                <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
                    <thead>
                        <tr style="background-color: #4CAF50; color: white;">
                            <th>S.No</th>
                            <th>Testcase Name</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>Total Executed</td><td>${totalExecuted}</td></tr>
                        <tr><td>2</td><td>Passed</td><td>${passedCount}</td></tr>
                        <tr><td>3</td><td>Failed</td><td style="color: red; font-weight: bold;">${failedCount}</td></tr>
                    </tbody>
                </table>
            `;

            const detailsTable = `
                <h3>Detailed Test Results</h3>
                <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
                    <thead>
                        <tr style="background-color: #4CAF50; color: white;">
                            <th>S.No</th>
                            <th>Testcase Name</th>
                            <th>Status</th>
                            <th>Failure Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${testResults.map((test, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${test.title}</td>
                                <td style="${test.status === 'failed' ? 'color: red; font-weight: bold;' : ''}">${test.status}</td>
                                <td>${test.status === 'failed' ? test.error : 'N/A'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;

            const emailBody = `
                <h2>Carepath - Test Execution Summary</h2>
                ${summaryTable}
                <br>
                ${detailsTable}
            `;

            // Zip both folders
            const reportZipPath = await this.zipReportFolder(HTMLResultsDir, 'Test-report');
            const signUpDataZipPath = await this.zipReportFolder(signUpDataDir, 'SignUpData');

            if (!fs.existsSync(reportZipPath) || !fs.existsSync(signUpDataZipPath)) {
                console.error('Zip files were not created successfully.');
                return;
            }

            const mailOptions = {
                from: `"Carepath Reports" <${senderEmail}>`,
                to: receiver,
                subject: 'Carepath - Test Execution Results',
                html: `
                    <h3>Please find the attached reports for the latest test execution.</h3>
                    ${emailBody}
                    <p>Best Regards,<br/>Carepath Team</p>
                `,
                attachments: [
                    {
                        filename: 'Test-report.zip',
                        path: reportZipPath,
                        contentType: 'application/zip'
                    },
                    {
                        filename: 'SignUpData.zip',
                        path: signUpDataZipPath,
                        contentType: 'application/zip'
                    }
                ]
            };

            const info = await this.transporter.sendMail(mailOptions);
            console.log(`Email sent: ${info.response}`);

            // Delete zip files after sending
            [reportZipPath, signUpDataZipPath].forEach(zipPath => {
                fs.unlink(zipPath, err => {
                    if (err) console.error(`Error deleting zip file: ${err.message}`);
                    else console.log(`${zipPath} deleted successfully`);
                });
            });

        } catch (error) {
            console.error(`Error sending email: ${error.message}`);
        }
    }
}
