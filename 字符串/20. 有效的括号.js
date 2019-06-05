/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 != 0) return false
    let i = 0
    let stack = []
    while (i < s.length) {
        let top = stack[stack.length - 1]
        if (!stack.length) stack.push(s[i])
        else if (s[i] == ']' && top == '[') stack.pop()
        else if (s[i] == '}' && top == '{') stack.pop()
        else if (s[i] == ')' && top == '(') stack.pop()
        else stack.push(s[i])
        i++
    }
    return stack.length == 0
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [], left = ['(', '[', '{'], map = {
        ']': '[',
        '}': '{',
        ')': '('
    }
    for (let i = 0; i < s.length; i++) {
     const top = stack[stack.length - 1]
     if (left.includes(s[i])) stack.push(s[i])
     else if (top !== map[s[i]]) return false
     else stack.pop()
    }
    return !stack.length
};
