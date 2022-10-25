// 递归求和
// let n = 0
// function random(number){
//     n++
//     if (number===15)return number;
//     return
// }
let a = 0;



function fn(){
    a++
    let random = Math.random()*100
    random = random.toFixed();
    if (random==='10')return a;
    console.log(a)
    return fn()
}
fn()
//     let a = 0
//
// let set = setInterval(()=>{
//     a++
//     let random = Math.random()*100
//     random = random.toFixed();
//     console.log(a,random)
//     if (random === '54')clearInterval(set)
// },100)