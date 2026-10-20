import * XLSX from 'xlsx'

export function readexcel (filepath : string, sheetName ? : string ) {
    const workbook = XLSX.readFile(filepath)
    const sheetName = workbook.SheetName[0];
    const worksheet = workbook.sheets[sheetName];
    const data : any = XLSX.utils.sheet_to_json(worksheet)
}