//flat主要用于把多维数组变成一维数组
// let arr = [1,[3],[4,2],[2]]
// console.log(arr.flat(1))

//flat中的Infinity为无限拉平，无视多维数组
// let arr = [1,[3],[4,2],[[2]],[[[3]]]]
// console.log(arr.flat(Infinity))