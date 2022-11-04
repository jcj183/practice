function fn(n){
    if (n<0){
        return n
    }
    return fn(n-1)
}

console.log(fn(5));