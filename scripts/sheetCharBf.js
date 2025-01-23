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
        // 迴圈每一個row          (第一列被當成了 _headerValues 所以總數會少一行喔)
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i]

            // 如果找到對應腳色
            if (row._rawData[0] && row._rawData[0] === characterName) {
                const row2 = rows[i + 1]
                console.log(row._rawData, `row${i}`)
                console.log(row2._rawData, `row${i + 1}`)

                // 找到了後面不用再跑
                break
            }
        }

        // 角色搜尋
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
