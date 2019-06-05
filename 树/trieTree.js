function trieNode (val) {
  this.sons = {}
  this.num = 1
  this.isEnd = false
  this.val = val
}

function insert (str) {
  if (!str) return
  let node = new trieNode('')
}


class Trie {

  constructor () {
    this.root = new trieNode('')
  }

  insert (str) {
    if (!str) return
    let node = this.root
    for (let i = 0; i < str.length; i++) {
      node.sons[str[i]] = !node.sons[str[i]] ? new trieNode(str[i]) : node.sons[str[i]] + 1
      node = node.sons[str[i]]
    }
    node.isEnd = true
  }

  has (str) {
    if (!str) return
    let node = this.root
    for (let i = 0; i < str.length; i++) {
      if (!node.sons[str[i]]) return false
      node = node.sons[str[i]]
    }
    return node.isEnd
  }

  preTraverse (node) {
    if (!node) return
    console.log("node.val is: " + node.val)
    for (let child of node.sons) {
      preTraverse(child)
    }
  }

  countPrefix (prefix) {
    if (!prefix) return -1
    let node = this.root
    for (let i = 0; i < prefix.length; i++) {
      if (!node.sons[prefix[i]]) return 0
      node = node.sons[prefixp[i]]
    }
    return node.num
  }

  delete (str) {
    if (!str) return
    let node = root
    for (let i = 0; i < str.length; i++) {
      if (node.sons[str[i]]-- === 1) {
        delete node.sons[str[i]]
        return
      }
      node = node.sons[str[i]]
    }
  }
}