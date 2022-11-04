//arguments是实际传递参数的一个集合，它是一个伪数组
//他只能使用数组的属性，不能使用数组的方法
let number = 0;
function sum(){
    for (let i = 0; i < arguments.length; i++) {
        number += arguments[i]
    }
}
sum(1,3,5,2,5,7,4,8,4,9)
console.log(number)
