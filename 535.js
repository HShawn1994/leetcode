//题目：  TinyURL 的加密与解密

/**
TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时，
它将返回一个简化的URL http://tinyurl.com/4e9iAk.
要求：设计一个 TinyURL 的加密 encode 和解密 decode 的方法。
你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，
并且这个TinyURL可以用解密方法恢复成原本的URL。
**/

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let obj = {}
var encode = function(longUrl) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('')
    let fn = () => chars[Math.floor(Math.random() * 36)]
    let tinyUrl = `http://tinyurl.com/`
    for (let i = 0; i < 6; i++) {
        tinyUrl += fn()
    }
    obj[tinyUrl] = longUrl
    return tinyUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return obj[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */