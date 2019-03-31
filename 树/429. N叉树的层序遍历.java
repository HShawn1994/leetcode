/*
给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。

例如，给定一个 3叉树 :

 



 

返回其层序遍历:

[
     [1],
     [3,2,4],
     [5,6]
]
 

说明:

树的深度不会超过 1000。
树的节点总数不会超过 5000。
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
    public List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> arr = new ArrayList<>();
        if (root == null) return arr;
        LinkedList<Node> quene = new LinkedList<>();
        quene.offer(root);
        while (quene.size() > 0) {
            LinkedList<Node> cloneQuene = (LinkedList<Node>) quene.clone();
            List <Integer> list = new ArrayList<>();
            int size = cloneQuene.size();
            for (int i = 0; i < size; i++) {
                Node tempNode = quene.poll();
                list.add(tempNode.val);
                if (tempNode.children.size() > 0) {
                    quene.addAll(tempNode.children);
                }
            }
            arr.add(list);
            cloneQuene = null;
            list = null;
        }
        return arr;
    }
}
