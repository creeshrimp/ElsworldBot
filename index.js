import commandGetSheet from "./commands/getSheet.js"
import 'dotenv/config'

(async () => {
    const sheetResult = await commandGetSheet(
        process.env.DOC_ID,
        process.env.SHEET_ID
    )
    console.log(sheetResult)
})()