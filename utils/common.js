import ExcelJS from 'exceljs';
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

