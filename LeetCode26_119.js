/*
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？
*/


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
   
    var arr = [];
    var row = [];
    for(var i = 1;i<=rowIndex+1;i++){
        row = []
        for(var j=0; j<i;j++){
            if(j==0||j==i-1){
                row.push(1)
            }else{
                row.push(arr[i-2][j-1]+arr[i-2][j])
            }
        }
        arr.push(row)
    }
    return row
};