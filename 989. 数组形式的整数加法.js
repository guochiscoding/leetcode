/*对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

 

示例 1：

输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
示例 2：

输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455
示例 3：

输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021
示例 4：

输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
输出：[1,0,0,0,0,0,0,0,0,0,0]
解释：9999999999 + 1 = 10000000000
 

提示：

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
如果 A.length > 1，那么 A[0] != 0
*/

function sub(a, k) {
        let subNum = 0;
        let aStr = "";
        k = k.toString()
        a.forEach(item => {
                aStr += item;
        });


        let maxLength = Math.max(aStr.length, k.length)

        aStr = aStr.padStart(maxLength, 0);
        k = k.padStart(maxLength, 0);
        console.log(maxLength, aStr, k, subNum)

        let t = 0;
        let f = 0;   //"进位"
        for (let i = maxLength - 1; i >= 0; i--) {
                t = parseInt(aStr[i]) + parseInt(k[i]) + f;
                f = Math.floor(t / 10);
                subNum = t % 10 + subNum;
        }
        if (f == 1) {
                subNum = "1" + subNum;
        }
        console.log(subNum)
        subNum = subNum.toString().split("")
        console.log(subNum)
        return subNum;
}
return (sub([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
        516))