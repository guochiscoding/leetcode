const M = require("minimatch");

/**
 * @param {number} x
 * @return {number}
 * 输入: 4
   输出: 2
   输入: 8
   输出: 2
   说明: 8 的平方根是 2.82842..., 
   由于返回类型是整数，小数部分将被舍去。                     
 */
var mySqrt = function (x) {
        let left = 0;
        let right = x;
        if (x < 2) {
                return x;
        }
        while (left <= right) {
                let mid = (left + right) >> 1;
                if ((x / mid) == mid) {
                        return mid;
                } else if (mid < (x / mid)) {
                        left = mid + 1;
                } else {
                        right = mid - 1;
                }

        }
        return right;

};
console.log(mySqrt(9))