// 题目： 转换成小写字母

/**
实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 
示例 1：

输入: "Hello"
输出: "hello"
**/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.replace(/[A-Z]/g, it => String.fromCharCode(it.charCodeAt(0) | 32))
};
