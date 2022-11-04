


    let obj1 = {
        'name':'张三',
    }
    let obj2 = {
        'age':181,
        'money':10001,
    }
    let obj3 = {
        'money':10001,
        'QQ':123123123
    }

    //合并对象
    //语法:let 变量 = Object.assign(目标对象,源对象1，源对象2，源对象3.....)
    let res = Object.assign({},obj1,obj2,obj3)
    console.log(res)
