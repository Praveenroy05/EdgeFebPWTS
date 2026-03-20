import xlsx from 'xlsx'

export class ExcelUtils{

    // filePath = "sdfsf"
    // sheetName = "Login"

    static getExcelData(filePath: string, sheetName:string){

        // Exception Handling
        try{
            const workbook =  xlsx.readFile(filePath)
            const sheet = workbook.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data
        }
        catch(e){
            console.log(e)
        }

    }

}