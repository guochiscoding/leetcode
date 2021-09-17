/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
        let left = 0;
        let right = n - 1;
        while (left <= right) {
                let min = guess(left + (right - left) /2);
                console.log(guess(min))
                if (min == 0) { return min }
                else if (min < 0) {
                        left = min + 1;
                } else {
                        right = min - 1;
                }
        }
        return -1;

};
console.log(guessNumber(10))