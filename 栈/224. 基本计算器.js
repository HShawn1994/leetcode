/*
实现一个基本的计算器来计算一个简单的字符串表达式的值。

字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。

示例 1:

输入: "1 + 1"
输出: 2
示例 2:

输入: " 2-1 + 2 "
输出: 3
示例 3:

输入: "(1+(4+5+2)-3)+(6+8)"
输出: 23
说明：

你可以假设所给定的表达式都是有效的。
请不要使用内置的库函数 eval。
*/

/**
 * @param {string} s
 * @return {number}
 */
// 反转字符串
var calculate = function(s) {
    let stack = [], n = s.length - 1
    const eval = arr => {
        if (!arr.length) return 0
        let result = arr.pop()
        while (arr.length && arr[arr.length - 1] !== ')') {
            const operator = stack.pop(), num = stack.pop()
            if (operator === '+') result += num
            else result -= num
        }
        return result
    }
    while (n >= 0) {
        if (s[n] === ' ') n--
        else if (!isNaN(s[n])) {
            let temp = s[n--]
            while (!isNaN(s[n])) temp = s[n--] + temp
            stack.push(Number(temp)) 
        } else if (s[n] === '(') {
            let temp = eval(stack)
            stack.pop()
            stack.push(temp)
            n--
        } else {
            stack.push(s[n--])
        }
    }
    return eval(stack)
  };

// 波兰表达式
var calculate = function(s) {
    const evalRPN = tokens => {
        const operators = '+-*/', nums = [], result = 0
        for (let i = 0; i < tokens.length; i++) {
            const c = tokens[i]
            if (operators.indexOf(c) === -1) {
                nums.push(Number(c))
            } else {
                const num1 = nums.pop(), num2 = nums.pop()
                if (c === '+') nums.push(num1 + num2)
                else if (c === '-') nums.push(num2 - num1)
                else if (c === '*') nums.push(num1 * num2)
                else if (c === '/') nums.push(~~(num2 / num1)) 
            }
        }
        return nums[0]
    };
    const getPRN = s => {
        let i = 0, n = s.length, result = [], stack = []
        while (i < n) {
            if (s[i] === ' ') i++
            else if (!isNaN(s[i])) {
                let temp = s[i++]
                while (!isNaN(s[i])) temp += s[i++]
                result.push(Number(temp)) 
            } else if (s[i] === '+' || s[i] === '-') {
                while (stack.length && stack[stack.length - 1] !== '(') result.push(stack.pop())
                stack.push(s[i++])
            } else if (s[i] === '(') {
                stack.push(s[i++])
            } else {
                while(stack.length && stack[stack.length - 1] !== '(') result.push(stack.pop())
                stack.pop()
                i++
            }
        }
        while (stack.length) result.push(stack.pop())
        return result
    }
    return evalRPN(getPRN(s))
};

// 双栈法
var calculate = function(s) {
    let i = 0, n = s.length, nums = [], operators = []
    while (i < n) {
        if (s[i] === ' ') i++
        else if (!isNaN(s[i])) {
            let temp = s[i++]
            while (!isNaN(s[i])) temp += s[i++]
            nums.push(Number(temp)) 
        } else if (s[i] === '+' || s[i] === '-') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                let a = nums.pop(), b = nums.pop(), op = operators.pop()
                if (op === '+') nums.push(a + b)
                else nums.push(b - a)
            }
            operators.push(s[i++])
        } else if (s[i] === '(') {
            operators.push(s[i++])
        } else {
            while (operators[operators.length - 1] !== '(') {
                let a = nums.pop(), b = nums.pop(), op = operators.pop()
                if (op === '+') nums.push(a + b)
                else nums.push(b - a)
            }
            operators.pop()
            i++
        }
    }
    while (operators.length) {
        let a = nums.pop(), b = nums.pop(), op = operators.pop()
        if (op === '+') nums.push(a + b)
        else nums.push(b - a)
    }
    return nums.pop()
};