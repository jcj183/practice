//every判断元素，全部满足条件返回true，有一个不满足返回false

let arr = [4,7,3,9];
let a = arr.every(function (value){
    if (value<10) {
        return value
    }
})
console.log(a)