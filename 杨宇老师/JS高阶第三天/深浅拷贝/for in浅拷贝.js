//1使用for in 的浅拷贝
//2使用object.assign的浅拷贝

let user = {
    name:'张三',
    age :90,
    fav:['css','js','html']
}

let user2 = {}
//浅拷贝基本数据类型不会共享，引用数据类型会共享数据
for (const userKey in user) {
    user2[userKey] = user[userKey]
}

console.log(user)
console.log(user2)
user2.name  = '李四'
user2.fav[1]  = 'php'   //连带老数据一起修改fav[1]的值
console.log(user2)
console.log(user)
