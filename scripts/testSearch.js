import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'
import 'dotenv/config'

async function search (docID = process.env.DOC_ID, sheetID = process.env.SHEET_ID) {
    try {
        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        })

        const doc = new GoogleSpreadsheet(docID, serviceAccountAuth)
        await doc.loadInfo()

        const sheet = doc.sheetsById[sheetID]
        const rows = await sheet.getRows()
        const characters = []
        for (const row of rows) {
            characters.push(row._rawData[0])
        }
        console.log(characters.filter(Boolean))
        // const rows = await sheet.getRows()
        // console.log(rows[1]._rawData)
    } catch (error) {
        console.log(error)
    }
}

search()
