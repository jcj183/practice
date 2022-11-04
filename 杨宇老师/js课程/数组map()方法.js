let arr = [1,2,3,4,5,6,7];

// map()方法会把数组内的所有元素都执行一次函数，返回执行完成之后的结果
//返回一个新的数组
//想要返回值用return返回，forEach不能用return（区别）
//不能用空数组
// let a = arr.map(element=>element+=1)
// console.log(a)  //结果为[2,3,4,5,6,7,8]

let a1 = arr.map(function (element,index){
    return element
})
console.log(a1)