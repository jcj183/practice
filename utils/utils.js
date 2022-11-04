
//中文字符
function characters(val){
 return /^[\u4e00-\u9fa5]{1,}$/.test(val)
}

window.$characters = {
    characters,
}