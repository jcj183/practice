// var b = 'B'
//
// function fun(a, b) {
//     console.log(b)
//     return {
//         fun: function(c) {
//             return fun(c, a)
//         }
//     }
// }
//
// var a = fun(0);//undefined
// a.fun(1);//0
// a.fun(2);//0
// a.fun(3); //0
//
// var b = fun(0).fun(1).fun(2).fun(3); //undefined 0-1-2
// var c = fun(0).fun(1);//0
// debugger
// c.fun(2);//1
// c.fun(3); // 1





// function Mom() {
//     this.money = 20
//     this.arr = []
//     this.show = function() {
//         console.log(this)
//         console.log(this.money, this.arr)
//     }
// }
// function Child() {
//     this.money = 10
//     this.change = function() {
//         this.arr.push(this.money--)
//     }
// }
// Child.prototype = new Mom()
//
// const mom = new Mom()
// const child1 = new Child()
// const child2 = new Child()
//
// child1.money = 5
// child2.money = 6
// mom.show() // 输出什么20      //this.money指向mom
// child1.show() // 输出什么5        //this.money指向child
//
// child1.change()     //arr.push(5),push完成之后自减为4
//
// mom.show() // 输出什么20[]       //this.money指向mom
// child1.show() // 输出什么4[5]        //this指向child,this.arr标识符为上一次change的push 5 push完成自减 child.money现在为4
// child2.show() // 输出什么 6 [ 5 ]   //this指向child   child.money赋值为6，数组不变是之前push的5
//
//
//
// //	（1）写出各行执行时show()方法中的this指向；
// // 	（2）写出每次show()中this.money与this.arr标识符最终从哪找到的值；
