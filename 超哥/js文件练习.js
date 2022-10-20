// let a = 0;
// while (true){
//     a++
//     let Random = random(100,1)
//     if (Random === 5){
//         console.log(`运行了${a}次，这次终于是${Random}了`);
//         break;
//     }
// }
// function random(max,min){
//    return   Math.floor(Math.random()*(max-min+1)+min)
// }

// let arr = ['A','B','C','D','A'];
// let arr1 = ['a','b','c','d'];
// let arr3 = arr.concat(arr1)
// console.log(arr3)
// console.log(arr.indexOf('b'));
// console.log(arr.lastIndexOf('B'));
// console.log(arr.indexOf('A'));
// console.log(arr1.includes('b'));
// console.log(arr1.includes('x'));
// console.log(arr.pop());
// console.log(arr.join('_'));
// console.log(arr.push('v'));
// console.log(arr.slice(1, 4));
// console.log(arr.splice(0, 2));
// arr.forEach(function(element,index){
//     console.log(element)
// })

// function getFile(file){
//     return file.split('.').pop()
// }
//
// console.log(getFile('hfueehfu.txt'))

// function getCod(num = 4){
//     let str = 'qwertyuiopasdfghjklzxcvbnm'
//     let cod = ''
//     for (let i = 0 ; i<4 ; i++){
//         let index = random(str.length-1,0)
//         cod += str[index]
//     }
//  return   cod
// }
//
//
// function random(max,min){
//     return Math.floor(Math.random()*(max-min+1)+min)
// }

// let arr = [[1,2,3,4],[5,6,7,8]]

//     arr.forEach(function (element){
//         element.forEach(function (value){
//             console.log(value)
//         })
//     })
//
// let max = arr[0][0];
// arr.forEach(function(element){
//     element.forEach(function (value){
//         if (max<value) max = value
//     })
// })
// console.log(max)
// let sum = 0;
// let num = 0;
// arr.forEach(function (element){
//     element.forEach(function (value){
//         num++;
//         sum += value
//     })
//
// })
// let pj = sum/num;
// console.log(num)
// console.log(pj)

// let arr = [111, 23, 556, 85, 78, 23,98];
// let arr1 = [14, 37, 48, 59];
// let a = '2222223222';
// let a1 = '2.3.5.4.6.8.7'

// let arr3  = arr.concat(arr1)
// console.log(arr.indexOf(23));
// console.log(arr.lastIndexOf(23));
// console.log(a.replace('3', '*'));
// console.log(a.substr(0, 3));
// console.log(a1.split('.'));
// console.log(arr);
// console.log(typeof arr.join());
// console.log(arr.pop());
// console.log(arr.push(111));
// console.log(arr)
// console.log(arr.indexOf(111));
// console.log(arr.lastIndexOf(111));
// console.log(arr.shift());
// console.log(arr.unshift(333));
// console.log(arr)
// console.log(arr.slice(0, 2));
// console.log(arr.splice(0, 2,));
// console.log(arr)
//     arr.forEach(function (element){
//         console.log(element)
//     })


// function  Max(num1,num2,num3){
//     let max = num1;
//     if (max<num2){
//         max = num2
//     }
//     if(max<num3){
//         max = num3
//     }
//     return max
// }
//
// console.log(Max(777,555,333))


// let sum = 0
// function add(num1,num2){
//     for(let i = num1 ; i<=num2;i++ ){
//         sum += i
//     }
//     return sum
// }
// //
// console.log(add(5,10))

// let arr = [5,18,3,20,14,7,16];
// let sum = 0;
// let pj = 0;
// arr.forEach(function(element,index){
//     sum += element
// })
//     pj = sum/arr.length
//
// console.log(pj)


// let arr = [7,4,2,7,1,5,4,4] ;
// let arr1 = []
// function arr11(){
//     arr.forEach(function (element,index){
//         if (arr1.includes(element) == false)
//              arr1.push(element)
//     })
//     return arr1
// }
// console.log(arr11())

// let arr = [7,4,2,7,1,5,4,4] ;
// let arr1 = [];
// arr.forEach(function(element,index){
//     if(arr1.includes(element) == false)	arr1.push(element)
//
// })
//
// console.log(arr1)

// let arr = [5,18,3,20,14,7,16];
// arr.forEach(function (element,index){
//         console.log(element);
//     }
//
// )
// let arr = [11,22,33,44];
// for(let i = 0 ; i<arr.length ; i++){
//     console.log(arr[i]);
// }
// let sum = 0;
// let pj = 0;
// arr.forEach(function(element,index){
//     sum += element;
// })
// pj = sum/arr.length;
//
// console.log(pj)

// let sum = 0
// function add(num1,num2){
//     for(let i = num1 ; i<=num2;i++ ){
//         sum += i
//     }
//     return sum
// }
//
// console.log(add(5,10))

// function  Max(num1,num2,num3){
//     let max = num1;
//     if (max<num2){
//         max = num2
//     };
//     if(max<num3){
//         max = num3
//     };
//     return max
// };
//
// console.log(Max(111,222,444))

// let a = 0;
// let b = 0;
// let c = 0;
// function get(){
//     a =3;
//     b =4;
//     c = 5;
//     return  c
// }
//
// console.log(get());
// console.log(b)
// console.log(c)

// let arr = [1,4,2,6,9,5 ,1,4,3,2]
// let a = []
// function Arr(arr){
//     arr.forEach(function(element,index){
//         if (a.includes(element) == false){
//             a.push(element)
//         }
//
//     })
//     return  a
// }
//
// console.log(Arr(arr));
//  let a = 'sdjfhweuhfiuhrig';
// console.log(a.substr(7, 5));
// console.log(a.substring(6, 9));
// console.log(a.slice(7, 5));

// let number = 0;
// while (true){
//   number++
//   if (random(1,100) === 5){
//     console.log(number)
//     break
//   }
// }
// let arr =[];
// while (true){
//     number++
//     let num = random(1,10000)
//     if (num ===1024){
//         arr.push(num)
//         if (arr.length ===5){
//             console.log(number,arr)
//             break;
//         }
//     }
// }
// function random(max,min){
//     return Math.floor(Math.random()*(max-min+1)+min)
// }
// console.log((Math.random() * 100).toFixed());//随机整数的取值

// let a = 10;
// function fn() {
//
//     a--;
//     if (a === 0) {
//         console.log('给我停下来');
//         clearInterval(clear)
//     }
//     return a
// }
// let clear = setInterval(function () {
//     fn(a)
//     console.log(a);
// }, 1000)
// let b = '这个字体真的很不错'
//  function Cat(){
//         let a = 222
//      console.log(a)
//  }
// Cat().prototype

//第一题
// function max(number1,number2){
//     let  Max = number1
//     if (Max<number2){
//          Max = number2
//     }
//     console.log(Max)
//     return Max
// }
// max(100,101)

// 第二题
// let arr = [1,2,3,1,3,1,3]
// let arr1  = [];
// function fn(arr){
//     arr.forEach(function (element,index){
//         if (arr1.includes(element) === false) arr1.push(element)
//     })
//     console.log(arr1)
//     return arr1
// }
//
// fn(arr)

//第三题
// let sum = 0;
// let ave = 0;
// let arr = [12, 31, 8, 7, 3, 24, 30, 15, 78];
// let arr1 = [];
// let arr2 = [];
// 求和
// arr.forEach(function (element, index) {
//     sum += element
//     ave = sum / arr.length
// })
// console.log(ave)
//
// arr.forEach(function (element, index) {
//     if (element>ave){
//         arr2.push(element)
//     }else if (element<ave){
//         arr1.push(element)
//     }
// })
// console.log(`大于平均数：${arr2} 小于平均数：${arr1}`)

//第四题
// let arr = [1,2,5,9,5,7]
// let  Sum = 0;
//  function sum(arr){
//     arr.forEach(function (element,index){
//         Sum += element;
//     })
//     return Sum
// }
// sum(arr)
// console.log(Sum)

//第五题
// 100能被3整除的数
let three = []
let sum = 0;
for (let i = 1;i <= 100; i++){
    if (i%3 === 0){
        three.push(i)
        sum += i
    }
}

console.log(`能被3整除的数字${three}`)
console.log(`能被3整除的数字的和${sum}`)
















