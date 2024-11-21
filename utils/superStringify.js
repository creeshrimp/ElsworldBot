export function superStringify (obj, space) {
    let cache = []
    const result = JSON.stringify(obj, (key, value) => {
        // 去掉循環引用
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return '已刪除'
            }
            // Store value in our collection
            cache.push(value)
        }
        return value
    }, space)
    cache = null
    return result
}
