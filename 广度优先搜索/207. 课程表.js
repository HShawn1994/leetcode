/*
现在你总共有 n 门课需要选，记为 0 到 n-1。

在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]

给定课程总量以及它们的先决条件，判断是否可能完成所有课程的学习？

示例 1:

输入: 2, [[1,0]] 
输出: true
解释: 总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
示例 2:

输入: 2, [[1,0],[0,1]]
输出: false
解释: 总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
说明:

输入的先决条件是由边缘列表表示的图形，而不是邻接矩阵。详情请参见图的表示法。
你可以假定输入的先决条件中没有重复的边。
提示:

这个问题相当于查找一个循环是否存在于有向图中。如果存在循环，则不存在拓扑排序，因此不可能选取所有课程进行学习。
通过 DFS 进行拓扑排序 - 一个关于Coursera的精彩视频教程（21分钟），介绍拓扑排序的基本概念。
拓扑排序也可以通过 BFS 完成。
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const indegrees = Array(numCourses).fill(0), stack = []
  for (let i = 0; i < prerequisites.length; i++) indegrees[prerequisites[i][0]]++
  for (let i = 0; i < numCourses; i++) {
      if (indegrees[i] === 0) stack.push(i)
  }
  while(stack.length) {
      const pre = stack.shift()
      numCourses--
      prerequisites.forEach(req => {
          if (req[1] === pre && --indegrees[req[0]] === 0) stack.push(req[0])
      })
  }
  return numCourses === 0
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const flags = Array(numCourses).fill(0), adj = Array(numCourses).fill().map(_ => [])
  prerequisites.forEach(req => {
      adj[req[1]][req[0]] = 1
  })
  const dfs = (i, flags) => {
      if (flags[i] === 1) return false
      if (flags[i] === -1) return true
      flags[i] = 1
      for (let j = 0; j < adj.length; j++) {
          if (adj[i][j] === 1 && !dfs(j, flags)) return false
      }
      flags[i] = -1
      return true
  } 
  for (let i = 0; i < numCourses; i++) {
      if (!dfs(i, flags)) return false
  }
  return true
};