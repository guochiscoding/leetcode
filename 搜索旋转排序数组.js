// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/binary-search/xeog5j/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * //return  nums.findIndex(item=>item == target);
 */
var search = function (nums, target) {
        let left = 0, right = nums.length-1;
        while (left <= right) {
                let mid = Math.floor(left + (right - left) / 2);
                console.log(left,right,mid)
                if (nums[mid] == target) { return mid }
                else if (nums[mid] < target) {
                        left = mid + 1;
                } else {
                        right = mid - 1;
                }
                

        }
        return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2],0))
不会下一个