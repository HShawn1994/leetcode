//题目： 键盘行
/*
给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。

示例：

输入: ["Hello", "Alaska", "Dad", "Peace"]
输出: ["Alaska", "Dad"]
*/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let line1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    let line2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    let line3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    function isFormedByChars (chars, word) {
        word = word.toLowerCase()
        return word.split('').every(char => chars.includes(char))
    }
    return words.filter(word => isFormedByChars(line1, word) || isFormedByChars(line2, word) || isFormedByChars(line3, word))
};
