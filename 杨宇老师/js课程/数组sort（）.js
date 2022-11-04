//sort()    排序
let arr = [1, 6, 9, 3, 12, 7, 4, 0];
console.log(arr.sort(function (a, b) {
    //return a - b  //小到大
    return b - a  //大到小
    //形参a是b的后一项
}));
