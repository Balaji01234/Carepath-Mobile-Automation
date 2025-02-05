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

    async zipReportFolder(reportPath) {
        return new Promise((resolve, reject) => {
            const absPath = path.resolve(reportPath);

            if (!fs.existsSync(absPath) || fs.readdirSync(absPath).length === 0) {
                return reject(new Error(`Report folder is empty or does not exist: ${absPath}`));
            }

            console.log('Zipping folder:', absPath);
            console.log('Files in folder:', fs.readdirSync(absPath));

            const zipFilePath = path.resolve('./Test-report.zip');
            const output = fs.createWriteStream(zipFilePath);
            const archive = archiver('zip', { zlib: { level: 9 } });

            output.on('close', () => {
                console.log('Zipping completed. Total bytes:', archive.pointer());
                resolve(zipFilePath);
            });

            archive.on('error', err => reject(err));

            archive.pipe(output);
            archive.directory(absPath, true); // Change `false` to `true` if necessary
            archive.finalize();
        });
    }

    async sendMail(HTMLResultsDir) {
        try {
            const testResultsPath = './reports/test-results.json';
            if (!fs.existsSync(testResultsPath)) {
                console.error('Test results file not found:', testResultsPath);
                return;
            }
    
            const testResults = JSON.parse(fs.readFileSync(testResultsPath, 'utf-8'));
            let totalExecuted = testResults.length;
            let passedCount = testResults.filter(test => test.status === 'passed').length;
            let failedCount = testResults.filter(test => test.status === 'failed').length;
    
            const summaryTable = `
                <h4 style="font-family: Arial, sans-serif;">Summary Table</h4>
                <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; border: 1px solid #ddd;">
                    <thead>
                        <tr style="background-color: #4CAF50; color: white;">
                            <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">S.No</th>
                            <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Testcase Name</th>
                            <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">1</td>
                            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">Total No of Executed</td>
                            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${totalExecuted}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">2</td>
                            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">No of Passed</td>
                            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${passedCount}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">3</td>
                            <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">No of Failed</td>
                            <td style="border: 1px solid #ddd; padding: 10px; text-align: center; color: red; font-weight: bold;">${failedCount}</td>
                        </tr>
                    </tbody>
                </table>
            `;
    
            const detailsTable = `
                <h4 style="font-family: Arial, sans-serif;">Detailed Test Results</h4>
                <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; border: 1px solid #ddd;">
                    <thead>
                        <tr style="background-color: #4CAF50; color: white;">
                            <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">S.No</th>
                            <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Testcase Name</th>
                            <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Status</th>
                            <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Failure Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${testResults.map((test, index) => `
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${index + 1}</td>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${test.title}</td>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: center; ${test.status === 'failed' ? 'color: red; font-weight: bold;' : ''}">${test.status}</td>
                                <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${test.status === 'failed' ? test.error : 'N/A'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
    
            const emailBody = `
                <h2 style="font-family: Arial, sans-serif;">Carepath - Test Execution Summary</h2>
                ${summaryTable}<br>${detailsTable}
            `;
    
            const zipFilePath = await this.zipReportFolder(HTMLResultsDir);
            if (!fs.existsSync(zipFilePath)) {
                console.error('Zip file was not created successfully.');
                return;
            }
    
            const mailOptions = {
                from: `"Carepath Reports" <your-email@yourdomain.com>`, // Use a recognized domain
                to: receiver,
                subject: 'Carepath - Test Execution Results',
                html: `
                    <h3>Please find the attached report for the latest test execution.</h3>
                    ${emailBody}
                    <p>Best Regards,<br/>Carepath Team</p>
                `,
                attachments: [
                    {
                        filename: 'Test-report.zip',
                        path: zipFilePath,
                        contentType: 'application/zip' // Explicitly define content type
                    }
                ]
            };
    
            const info = await this.transporter.sendMail(mailOptions);
            console.log(`Email sent: ${info.response}`);
    
            fs.unlink(zipFilePath, (err) => {
                if (err) {
                    console.error(`Error deleting zip file: ${err.message}`);
                } else {
                    console.log('Zip file deleted successfully');
                }
            });
        } catch (error) {
            console.error(`Error sending email: ${error.message}`);
        }
    }
    



}
