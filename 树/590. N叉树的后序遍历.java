// 题目：N叉树的后序遍历
/*
给定一个 N 叉树，返回其节点值的后序遍历。
例如，给定一个 3叉树 :

返回其后序遍历: [5,6,3,2,4,1].
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
    public List<Integer> postorder(Node root) {
        List <Integer> arr = new ArrayList<>();
        if (root == null) return arr;
        for(Node node : root.children) {
            arr.addAll(postorder(node));
        }
        arr.add(root.val);
        return arr;
    }
}
