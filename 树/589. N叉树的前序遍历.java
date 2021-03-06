// 题目：N叉树的前序遍历
/*
给定一个 N 叉树，返回其节点值的前序遍历。

例如，给定一个 3叉树 :

返回其前序遍历: [1,3,5,6,2,4]。
*/
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    List <Integer> arr = new ArrayList<>();
    public List<Integer> preorder(Node root) {
        if (root == null) return arr;
        arr.add(root.val);
        if (root.children.size() > 0) {
            for (int i = 0; i < root.children.size(); i++) {
                preorder(root.children.get(i));
            }
        };
        return arr;
    }
}
