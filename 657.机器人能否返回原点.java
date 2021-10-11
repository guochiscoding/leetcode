/*
 * @lc app=leetcode.cn id=657 lang=java
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
class Solution {

  public boolean judgeCircle(String moves) {
    if (moves == "") return true;
    if (moves.length() < 2) return false;
    moves = "LL";
    String[] moveArray = moves.split("");
    int lr = 0, ud = 0;
    for (int i = 0; i < moveArray.length; i++) {
      if (moveArray[i] == "R") {
        lr++;
      } else if (moveArray[i] == "L") {
        lr--;
      } else if (moveArray[i] == "U") {
        ud++;
      } else if (moveArray[i] == "D") {
        ud--;
      }
    }
    if (lr == 0 && ud == 0) {
      return true;
    } else {
      return false;
    }
  }
}
// @lc code=end
