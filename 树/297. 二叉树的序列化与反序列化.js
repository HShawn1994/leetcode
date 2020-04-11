/*
序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

示例: 

你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


// 层级遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const stack = [root]
  let result = []
  while (stack.length) {
      let len = stack.length
      while (len--) {
          const curr = stack.shift()
          result += (curr ? curr.val : 'null') + ','
          if (curr) stack.push(curr.left, curr.right)
      }
  }
  return result.substring(0, result.length - 1) + ']'
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  const strs = data.replace(/\[|\]/g, '').split(',')
  if (strs[0] === 'null') return null
  const root = new TreeNode(Number(strs[0]))
  let pre = [root]
  let idx = 1, len = strs.length
  while (pre.length) {
      let len1 = pre.length
      let curr = []
      while (len1--) {
          const node = pre.shift()
          if (!node) continue
          if (idx < len && strs[idx] !== 'null') node.left = new TreeNode(Number(strs[idx]))
          curr.push(node.left)
          if (idx + 1 < len && strs[idx + 1] !== 'null') node.right = new TreeNode(Number(strs[idx + 1]))
          curr.push(node.right)
          idx += 2
      }
      pre = curr
  }
  return root
};


// 递归
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const result = []
  const helper = root => {
      if (!root) {
          result.push('null')
          return
      }
      result.push(root.val)
      helper(root.left)
      helper(root.right)
  }
  helper(root)
  return `[${result.join(',')}]`
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  const strs = data.replace(/\[|\]/g, '').split(',')
  const helper = list => {
      if (list[0] === 'null') {
          list.splice(0, 1)
          return null
      }
      const root = new TreeNode(Number(list[0]))
      list.splice(0, 1)
      root.left = helper(list)
      root.right = helper(list)
      return root
  }
  return helper(strs)
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/