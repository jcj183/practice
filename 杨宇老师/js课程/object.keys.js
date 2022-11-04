let obj={
    'name':'张三',
    'age':19,
    'like':"吃饭",
    'fn' :function (){
        console.log('玛卡巴卡')
    }
}
let arr = Object.keys(obj)
//解构赋值
let [name,age,like] =arr
console.log(obj[like])

// console.log(arr)