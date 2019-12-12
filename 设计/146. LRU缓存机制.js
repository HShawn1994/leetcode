/***
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
***/

class Node {
  constructor (key, value) {
      this.next = null
      this.prev = null
      this.key = key
      this.value = value
  }
}

class DoubleList {
  constructor () {
      this.head = new Node(0, 0)
      this.tail = new Node(0, 0)
      this.head.next = this.tail
      this.tail.prev = this.head
      this.size = 0
  }
  addFirst (node) {
      node.prev = this.head
      node.next = this.head.next
      this.head.next.prev = node
      this.head.next = node
      this.size++
  }
  removeLast () {
     if (this.tail === this.head) return null
     const last = this.tail.prev
     this.remove(last)
     return last
  }
  remove (node) {
      node.prev.next = node.next
      node.next.prev = node.prev
      this.size--
  }
}

/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
  this.cache = new DoubleList()
  this.cap = capacity
  this.map = {}
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.map[key]) {
      this.put(key, this.map[key].value)
      return this.map[key].value
  }
  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  const node = new Node(key, value)
  if (this.map[key]) {
      this.cache.remove(this.map[key])
  } else {
      if (this.cap === this.cache.size) {
          const last = this.cache.removeLast()
          delete this.map[last.key]
      }
  }
  this.cache.addFirst(node)
  this.map[key] = node

};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
