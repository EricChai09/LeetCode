/*
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
*/



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return treeDeep(root)!=-1
};
var treeDeep = function(root){
    if(root == null){
        return 0
    }
    var l_height = treeDeep(root.left);
    var r_height = treeDeep(root.right);
    if(l_height !=-1&&r_height !=-1&&Math.abs(l_height-r_height)<=1){
        return Math.max(l_height,r_height)+1;
    }
    return -1;
}
