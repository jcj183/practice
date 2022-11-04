//some()    数组元素有一个元素满足条件则返回true

let arr = [4,7,3,9,6,8];

let a = arr.some(function (value){
    return value>8
})
console.log(a)