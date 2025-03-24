import ExcelJS from 'exceljs';
import * as XLSX from 'xlsx';
import xlsx from "xlsx";
import { readFileSync } from 'fs';
import fs from 'fs';
import path from 'path';
import { glob } from "glob";

let testDataFilePath = null;
const usedEmails = new Set();
/**
  *
  * To generate Random Numbers
  */
export function generateRandomNumber() {
    const randomNum = Math.random() * 9000;
    return Math.floor(1000 + randomNum);
}

export function getRandom8DigitNumber() {
    return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
}


/**
* To get the current timestamp in yyyyMMddHHmmss format
*/
export function getFormattedCurrentDateAndTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");
    const timestamp = year + month + day + hour + minute + second;
    const randomNumber = generateRandomNumber();
    return `${timestamp}${randomNumber}`;
}

export function getRandomString(size = 4) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < size; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * Reads data from an Excel file based on a specified row header and value.
 * Returns the corresponding value under the specified column.
 * @param {string} filePath - Path to the Excel file.
 * @param {string} sheetName - Name of the sheet to read data from.
 * @param {string} rowHeader - The header of the row to match the value.
 * @param {string} rowValue - The value in the specified row header to match.
 * @param {string} columnName - The column header to fetch the corresponding value from.
 * @returns {string | undefined} - The corresponding value or undefined if not found.
 */
export const readData = async function getValueFromExcel(sheetName, rowHeader, rowValue, columnName) {
    try {
        const filePath = './dataFiles/Testdata.xlsx';
        const workbook = new ExcelJS.Workbook();

        // Read the workbook
        await workbook.xlsx.readFile(filePath);

        // Get the specified sheet
        const sheet = workbook.getWorksheet(sheetName);
        if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found.`);
        }

        // Get headers from the first row
        const headers = sheet.getRow(1).values;

        // Find the column indices for the row header and column
        const rowHeaderIndex = headers.indexOf(rowHeader);
        const columnIndex = headers.indexOf(columnName);

        if (rowHeaderIndex === -1) {
            throw new Error(`Row header "${rowHeader}" not found.`);
        }
        if (columnIndex === -1) {
            throw new Error(`Column header "${columnName}" not found.`);
        }

        // Iterate through rows to find the matching row value in the row header column
        for (let i = 2; i <= sheet.rowCount; i++) {
            const row = sheet.getRow(i);
            if (row.getCell(rowHeaderIndex).value === rowValue) {
                return row.getCell(columnIndex).value; // Return the corresponding value
            }
        }

        // Return undefined if no matching value is found
        return undefined;
    } catch (error) {
        console.error('Error reading Excel data:', error.message);
        return undefined;
    }
}

export const readData1 = async (folder, file, sheetName, headerName, rowName) => {
    try {
        const filePath = `./dataFiles/${folder}/${file}.xlsx`;
        const workbook = new ExcelJS.Workbook();

        // Read the workbook
        await workbook.xlsx.readFile(filePath);

        // Get the specified sheet
        const sheet = workbook.getWorksheet(sheetName);
        if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found.`);
        }

        // Get headers from the first row
        const headers = sheet.getRow(1).values;
        const headerIndex = headers.indexOf(headerName.trim());

        if (headerIndex === -1) {
            throw new Error(`Header "${headerName}" not found.`);
        }

        // Iterate through rows to find the row containing rowName
        for (let i = 2; i <= sheet.rowCount; i++) {
            const row = sheet.getRow(i);
            for (let j = 1; j <= row.cellCount; j++) {  // Loop through all columns
                if (row.getCell(j).value === rowName) {
                    return row.getCell(headerIndex).value; // Return the value from the specified header column
                }
            }
        }

        return undefined; // Return undefined if no match is found
    } catch (error) {
        console.error('Error reading Excel data:', error.message);
        return undefined;
    }
};

export const getUniqueEmailByProgramRoleAndScenario = async (folder, file, sheetName, programName, roleName, scenario) => {
    try {
        const filePath = `./dataFiles/${folder}/${file}.xlsx`;
        const workbook = new ExcelJS.Workbook();

        await workbook.xlsx.readFile(filePath);
        const sheet = workbook.getWorksheet(sheetName);
        if (!sheet) throw new Error(`Sheet "${sheetName}" not found.`);

        const headers = sheet.getRow(1).values;
        const conditionIndex = headers.indexOf("Condition");
        const roleIndex = headers.indexOf("Role");
        const programIndex = headers.indexOf("Program");
        const emailIndex = headers.indexOf("Email");
        const approveStatusIndex = headers.indexOf("Approve Status");
        const scenarioIndex = headers.indexOf("Onboarding Scenario");

        if ([conditionIndex, roleIndex, programIndex, emailIndex, approveStatusIndex, scenarioIndex].includes(-1)) {
            throw new Error("Missing required columns.");
        }

        for (let i = 2; i <= sheet.rowCount; i++) {
            const row = sheet.getRow(i);
            const condition = row.getCell(conditionIndex).value?.toString().trim().toLowerCase();
            const role = row.getCell(roleIndex).value?.toString().trim().toLowerCase();
            const program = row.getCell(programIndex).value?.toString().trim().toLowerCase();
            const approveStatus = row.getCell(approveStatusIndex).value?.toString().trim().toLowerCase();
            const onboardingScenario = row.getCell(scenarioIndex).value?.toString().trim().toLowerCase();
            const email = row.getCell(emailIndex).value?.toString().trim();

            if (
                condition === "yes" &&
                role === roleName.toLowerCase() &&
                program === programName.toLowerCase() &&
                approveStatus === "approved" &&
                onboardingScenario === scenario.toLowerCase() &&
                !usedEmails.has(email) // Ensure email hasn't been used
            ) {
                usedEmails.add(email); // Mark this email as used
                return email;
            }
        }

        return undefined; // No new email found
    } catch (error) {
        console.error("Error fetching unique email:", error.message);
        return undefined;
    }
};




export const readTestcase = async (folder, file, sheetName, headerName, rowName) => {
    try {
        const filePath = `./dataFiles/${folder}/${file}.xlsx`;
        const workbook = new ExcelJS.Workbook();

        // Read the workbook
        await workbook.xlsx.readFile(filePath);

        // Get the specified sheet
        const sheet = workbook.getWorksheet(sheetName);
        if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found.`);
        }

        // Get headers from the first row
        const headers = sheet.getRow(1).values;
        const headerIndex = headers.indexOf(headerName);

        if (headerIndex === -1) {
            throw new Error(`Header "${headerName}" not found.`);
        }

        let bestMatchRow = null;
        let highestMatchScore = 0;

        // Function to calculate similarity based on prefix match
        const prefixMatch = (a, b) => {
            if (!a || !b) return 0;
            const cleanedA = a.toString().toLowerCase().split("-")[0].trim();
            const cleanedB = b.toString().toLowerCase().split("-")[0].trim();
            return cleanedA === cleanedB ? 1 : 0; // Exact prefix match
        };

        // Find the best approximate row
        for (let i = 2; i <= sheet.rowCount; i++) {
            const row = sheet.getRow(i);
            const firstCell = row.getCell(1).value; // Assuming row name is in the first column

            if (firstCell) {
                const matchScore = prefixMatch(rowName, firstCell);
                if (matchScore > highestMatchScore) {
                    highestMatchScore = matchScore;
                    bestMatchRow = row;
                }
            }
        }

        if (bestMatchRow && highestMatchScore === 1) { // Exact prefix match
            return bestMatchRow.getCell(headerIndex).value;
        }

        return undefined; // Return undefined if no good match is found
    } catch (error) {
        console.error('Error reading Excel data:', error.message);
        return undefined;
    }
};




// Function to write data using ExcelJS
export const writeExcelData = async (sheetName, rowHeader, rowValue, columnName, newValue) => {
    try {
        const filePath = "./dataFiles/Testdata.xlsx";
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);

        let sheet = workbook.getWorksheet(sheetName);
        if (!sheet) {
            sheet = workbook.addWorksheet(sheetName);
        }

        let headers = sheet.getRow(1).values;
        if (!Array.isArray(headers)) headers = [];

        const rowHeaderIndex = headers.indexOf(rowHeader);
        const columnIndex = headers.indexOf(columnName);

        if (rowHeaderIndex === -1 || columnIndex === -1) {
            throw new Error(`Row header "${rowHeader}" or column "${columnName}" not found.`);
        }

        let targetRow;
        for (let i = 2; i <= sheet.rowCount; i++) {
            const cellValue = sheet.getRow(i).getCell(rowHeaderIndex).value;
            if (cellValue === rowValue) {
                targetRow = sheet.getRow(i);
                break;
            }
        }

        if (!targetRow) {
            targetRow = sheet.addRow([]);
            targetRow.getCell(rowHeaderIndex).value = rowValue;
        }

        targetRow.getCell(columnIndex).value = newValue;
        await workbook.xlsx.writeFile(filePath);

        console.log(`Updated "${rowValue}" in column "${columnName}" with value "${newValue}" successfully.`);
    } catch (error) {
        console.error('Error writing Excel data:', error.message);
    }
};

export const writeExcelData1 = async (folder, file, sheetName, rowValue, columnValue, newValue) => {
    const filePath = `./dataFiles/${folder}/${file}.xlsx`;
    try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);

        let sheet = workbook.getWorksheet(sheetName);
        if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found.`);
        }

        let targetRowIndex = -1;
        let targetColumnIndex = -1;

        // Find row index containing rowValue
        sheet.eachRow((row, rowIndex) => {
            row.eachCell((cell) => {
                if (cell.value === rowValue) {
                    targetRowIndex = rowIndex;
                }
            });
        });

        // Find column index containing columnValue
        sheet.getRow(1).eachCell((cell, colIndex) => {
            if (cell.value === columnValue) {
                targetColumnIndex = colIndex;
            }
        });

        if (targetRowIndex === -1 || targetColumnIndex === -1) {
            throw new Error(`Row value "${rowValue}" or column value "${columnValue}" not found.`);
        }

        // Update the cell with newValue
        sheet.getRow(targetRowIndex).getCell(targetColumnIndex).value = newValue;
        await workbook.xlsx.writeFile(filePath);

        console.log(`Updated "${rowValue}" in column "${columnValue}" with value "${newValue}" successfully.`);
    } catch (error) {
        console.error('Error writing Excel data:', error.message);
    }
};

export function dataSets(iterations) {
    let iterationArray = [];

    if (iterations.includes("-")) {
        const [start, end] = iterations.split("-").map(Number);
        iterationArray = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    } else if (iterations.includes(",")) {
        iterationArray = iterations.split(",").map(Number);
    } else {
        iterationArray = [Number(iterations)];
    }

    return iterationArray;
}


/**
 * Function to get value based on a given component
 * @param {string} filePath - Path to the Excel file.
 * @param {string} sheetName - Name of the sheet to read.
 * @param {string} componentName - Name of the component to search for.
 * @returns {string|undefined} - Corresponding value or undefined if not found.
 */
export default function getValueByComponent(componentName) {
    const filePath = './dataFiles/config.xlsx';
    const sheetName = 'Sheet1';

    // Read the file as a buffer
    const fileBuffer = readFileSync(filePath);

    // Parse workbook from the buffer
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // Find the header row containing "Components" and "Value"
    const headerRow = data.find(row => row.includes("Components") && row.includes("Value"));
    if (!headerRow) {
        console.log("Headers not found in the sheet.");
        return;
    }

    // Identify column indices for "Components" and "Value"
    const componentIndex = headerRow.indexOf("Components");
    const valueIndex = headerRow.indexOf("Value");

    // Search for the component in the rows following the header row
    const dataRows = data.slice(data.indexOf(headerRow) + 1); // Skip header row
    for (const row of dataRows) {
        if (row[componentIndex] === componentName) {
            return row[valueIndex];
        }
    }

    return undefined;
}

export const saveTestDataToJson = async (TestId, description, role, firstName, lastName, email, password, program) => {
    try {
        if (!testDataFilePath) {
            const now = new Date();
            const timestamp = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}-${now.getHours()}-${now.getMinutes()}`;
            const folderPath = path.join(process.cwd(), 'signUpData');

            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, { recursive: true });
            }

            testDataFilePath = path.join(folderPath, `Signup_New_User_${timestamp}.json`);

            fs.writeFileSync(testDataFilePath, JSON.stringify([], null, 2), 'utf8');

            console.log(`Test data file created: ${testDataFilePath}`);
        }

        const existingData = JSON.parse(fs.readFileSync(testDataFilePath, 'utf8'));

        existingData.push({
            Test_ID: TestId,
            Description: description,
            Role: role,
            Program: program,
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: password
        });

        fs.writeFileSync(testDataFilePath, JSON.stringify(existingData, null, 2), 'utf8');

        console.log(`Test data saved successfully: ${testDataFilePath}`);
    } catch (error) {
        console.error('Error saving test data to JSON:', error.message);
    }
};

/**
 * Reads test details from an Excel sheet based on condition.
 * Dynamically selects the first available "TestdataX" column.
 * 
 * @param {string} filePath - Path to the Excel file.
 * @param {string} sheetName - Name of the sheet containing test data.
 * @returns {Array} - Array of objects with Test ID, Test Description, and available TestdataX.
 */

export function getFilteredTests(folder, file, sheetName) {
    const filePath = `./dataFiles/${folder}/${file}.xlsx`;
    // 1. Read the Excel file
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
        throw new Error(`Sheet '${sheetName}' not found in the Excel file.`);
    }

    // 2. Convert sheet to JSON
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // 3. Filter & map data
    return jsonData
        // Only rows with "Condition" = "Yes"
        .filter(row => row["Condition"]?.toLowerCase() === "yes")
        .map(row => ({
            testId: row["Test ID"],
            testDescription: row["Test Description"]
        }));
}

async function findExcelFile(file) {
    const pattern = `./dataFiles/**/${file}.xlsx`; // Search in all subfolders
    const files = await glob(pattern); // Asynchronously find matching files

    if (files.length > 0) {
        console.log(files[0])
        return files[0]; // Return the first matched file
    } else {
        throw new Error(`File ${file}.xlsx not found in any subfolder of dataFiles`);
    }
}
