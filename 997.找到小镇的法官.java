/*
 * @lc app=leetcode.cn id=997 lang=java
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
class Solution {

  public int findJudge(int n, int[][] trust) {
    if (n == 1) return 1;
    int[] arr = new int[n + 1];
    for (int i = 0; i < trust.length; i++) {
      arr[trust[i][1]]++;
      arr[trust[i][0]]--;
    }
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == n - 1) {
        return i;
      }
    }
    return -1;
  }
}
// @lc code=end
