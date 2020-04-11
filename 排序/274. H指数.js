/*
示例:

输入: citations = [3,0,6,1,5]
输出: 3 
解释: 给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
     由于研究者有 3 篇论文每篇至少被引用了 3 次，其余两篇论文每篇被引用不多于 3 次，所以她的 h 指数是 3。
 

说明: 如果 h 有多种可能的值，h 指数是其中最大的那个。
*/
/**
 * @param {number[]} citations
 * @return {number}
 */
// 倒序
var hIndex = function(citations) {
  citations.sort((a, b) => b - a)
  for (let i = citations.length - 1; i >= 0; i--) {
      if (citations[i] > i) return i + 1
  }
  return 0
};

// 计数排序
var hIndex = function(citations) {
  let n = citations.length, N = 0
  for (let i = 0; i < n; i++) {
      let count = citations[i]
      if (count < 0) continue
      citations[i] = -1
      if (count >= n) {
          N++
          continue
      }
      while (citations[count] >= 0) {
          let temp = citations[count]
          citations[count] = -2
          count = temp
          if (count >= n) {
              N++
              break
          }
      }
      if (count < n && citations[count] < 0) {
          citations[count]--
      }
  }
  if (N === n) return n
  let count = N
  for (let i = n - 1; i >= 0; i--) {
      count += ~citations[i]
      if (count >= i) return i
  }
  return 0
};