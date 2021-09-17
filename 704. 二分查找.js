/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
        let left = 0;
        let right = (nums.length - 1);
        while (left <= right) {
                let mid = right % 2;
                console.log(mid)
                if (nums[mid] == target) {
                        console.log('mid', mid)
                        return mid
                } else if (nums[mid] < target) {
                        console.log('left', left, right, mid)
                        left = mid + 1;
                } else {
                        console.log('right', right)
                        right = mid - 1;
                }

        };
        return -1;
}
console.log(search([-1, 0, 3, 5, 9, 12], 9))
