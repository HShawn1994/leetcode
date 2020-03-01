/*
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) return []
  const result = [], len = s.length
  const isValid = ip => {
      if (ip[0] === '0' && ip.length > 1) return false
      if (ip.length > 4) return false
      return Number(ip) <= 255
  }
  const dfs = (idx, ips, counts) => {
      if (idx === len) {
          if (counts === 0) result.push(ips.join('.'))
          return
      }
      for (let i = idx; i < idx + 3; i++) {
          if (i >= len) break
          if (counts * 3 < len - i) continue
          const ip = s.substring(idx, i + 1)
          if (isValid(ip)) {
              ips.push(ip)
              dfs(i + 1, ips, counts - 1)
              ips.pop()
          }
      }
  }
  dfs(0, [], 4)
  return result
};