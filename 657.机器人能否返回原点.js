/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
        if (moves == "") return true;
        if (moves.length < 2) return false;
        var lr = 0, ud = 0;
        for (let i = 0; i < moves.length; i++) {
                if (moves[i] == "R") {
                        lr++;
                } else if (moves[i] == "L") {
                        lr--;
                } else if (moves[i] == "U") {
                        ud++;
                } else if (moves[i] == "D") {
                        ud--;
                }
        }
        if (lr == 0 && ud == 0) return true;
        return false;

};
// @lc code=end

