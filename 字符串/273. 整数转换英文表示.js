/*
将非负整数转换为其对应的英文表示。可以保证给定输入小于 231 - 1 。

示例 1:

输入: 123
输出: "One Hundred Twenty Three"
示例 2:

输入: 12345
输出: "Twelve Thousand Three Hundred Forty Five"
示例 3:

输入: 1234567
输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
示例 4:

输入: 1234567891
输出: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
*/

var numberToWords = function(num) {
  const nm = {
      0: 'Zero',
      1: 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
      10: 'Ten',
      11: 'Eleven',
      12: 'Twelve',
      13: 'Thirteen',
      14: 'Fourteen',
      15: 'Fifteen',
      16: 'Sixteen',
      17: 'Seventeen',
      18: 'Eighteen',
      19: 'Nineteen',
      20: 'Twenty',
      30: 'Thirty',
      40: 'Forty',
      50: 'Fifty',
      60: 'Sixty',
      70: 'Seventy',
      80: 'Eighty',
      90: 'Ninety',
      100: 'Hundred',
      1000: 'Thousand',
      1000000: 'Million',
      1000000000: 'Billion'
  }
  const two = num => {
    if (num === 0) return ''
    if (num <= 20) return nm[num]
    return nm[~~(num / 10) * 10] + (num % 10 === 0 ? '' : ' ' + nm[num % 10])
  }
  const three = num => {
    if (num < 100) return two(num)
    let times = ~~(num / 100)
    return `${nm[times]} ${nm['100']}${num - times * 100 === 0 ? '' :  ' ' + two(num - times * 100)}`
  }
  if (num <= 20) return nm[num]
  let result = '', len = (num).toString().length
  let bs = Math.floor(num / 1000000000)
  let ms = ~~((num - bs * 1000000000) / 1000000)
  let ts = ~~((num - bs * 1000000000 - ms * 1000000) / 1000)
  let rest = num - bs * 1000000000 - ms * 1000000 - ts * 1000
  if (bs) result += `${three(bs)} ${nm[1000000000]} `
  if (ms) result += `${three(ms)} ${nm[1000000]} `
  if (ts) result += `${three(ts)} ${nm[1000]} `
  result += three(rest)
  return result.trim()
};