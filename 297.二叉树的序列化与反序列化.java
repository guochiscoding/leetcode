import apple.laf.JRSUIUtils.Tree;
import java.util.Arrays;
import java.util.Deque;
import java.util.LinkedList;
import javax.swing.tree.TreeNode;

/*
 * @lc app=leetcode.cn id=297 lang=java
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

  // Encodes a tree to a single string.
  public String serialize(TreeNode root) {
    if (root == null) {
      return "X,";
    }
    String leftSerialize = serialize(root.left);
    String rightSerialize = serialize(root.right);
    return root.val + "," + leftSerialize + rightSerialize;
  }

  // Decodes your encoded data to tree.
  public TreeNode deserialize(String data) {
    String[] temp = data.split(",");
    Deque<String> dp = new LinkedList<>(Arrays.asList(temp));
    return buildTree(dp);
  }

  private TreeNode buildTree(Deque<String> dq) {
    String s = dq.poll();
    if (s.equals("X")) return null;
    TreeNode node = new TreeNode(Integer.parseInt(s));
    node.left = buildTree(dq);
    node.right = buildTree(dq);
    return node;
  }
}
// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// TreeNode ans = deser.deserialize(ser.serialize(root));
// @lc code=end
