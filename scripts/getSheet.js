import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'
import 'dotenv/config'

export default async (docID, sheetID) => {
    try {
        const serviceAccountAuth = new JWT({
            // keyFile
            keyFile: './credentials/onyx-descent-442318-r1-5e018ad24c00.json',
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        })

        const doc = new GoogleSpreadsheet(docID, serviceAccountAuth)

        await doc.loadInfo()
        console.log(`
-------- getSheet --------
載入文件
文件標題: ${doc.title}
文件ID: ${doc.spreadsheetId}
--------------------------
        `)

        const sheet = doc.sheetsById[sheetID]
        return sheet
    } catch (error) {
        console.log(error)
    }
}
