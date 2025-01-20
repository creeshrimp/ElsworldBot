import getSheet from './getSheet.js'
import { config } from '../config/config.js'

async function searchBuff(characterName) {
    try {
        // 參數處理 去空白
        characterName = characterName.trim()

        // 取得試算表資料
        const sheetCharBf = await getSheet(config.DOC_ID, config.BF_LIST_SHEET_ID)
        const rows = await sheetCharBf.getRows()

        // 角色搜尋
        const characters = []
        for (const [index, row] of rows.entries()) {
            // if (row._rawData[0]) characters.push(row._rawData[0])
            if (row._rawData[0] && row._rawData[0] === characterName) {
                console.log(row, `row${index}`)
            }
        }
        // rows.forEach((row, i) => {
        //     console.log(row)
        // })

        // // 角色搜尋
        if (characters.includes(characterName)) {
            console.log(`顯示 ${characterName} 角色BUFF`)
        } else {
            console.log('沒有這個角色')
        }
    } catch (error) {
        console.log(error)
    }
}

searchBuff('RS  ')

export { searchBuff }
