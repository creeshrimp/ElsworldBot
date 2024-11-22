import getSheet from './scripts/getSheet.js'
import 'dotenv/config';

(async () => {
    const sheetResult = await getSheet(
        process.env.DOC_ID,
        process.env.BF_LIST_SHEET_ID
    )
    console.log(sheetResult)
})()
