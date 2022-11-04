//find()是查找第一个符合条件的值,
//查找到第一个元素满足条件，后面的元素就不会再执行了
// 注意: find() 对于空数组，函数是不会执行的。
// 注意: find() 并没有改变数组的原始值。
let arr = [1,6,3,8,4,9];

//查找第一个大6的值
let a = arr.find(function (element,idnex){
    if (element>6)return element
})
console.log(a)

//findIndex查找到第一个符合条件的值的下标
//其他与find一致
let a1 = arr.findIndex(function (element,index){
    if (element>6)return element
})
console.log(a1)