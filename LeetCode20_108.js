/*
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
*/



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums == null||nums.length == 0){
        return null;
    }
    return  okMid(nums,0,nums.length-1);
    
};
function okMid(nums,l,r){
        if(r<l){
            return null;
        }
        if(r==l){
            return new TreeNode(nums[l])
        }
        var mid = Math.round((l+r)/2)
        var root  = new TreeNode(nums[mid]);
        root.left = okMid(nums, l, mid-1);
        root.right = okMid(nums, mid+1, r);
        return root;
    }

