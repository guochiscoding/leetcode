
/**
 * @param {string} s
 * @return {number}
 */
let s = "abcabcbb"

var lengthOfLongestSubstring = function (s) {
  let arr = s.split('');
  console.log(arr)
  let set = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i],set)
    if (set.includes(arr[i])) {
      console.log(arr[i], set.findIndex(s => s == arr[i]), set)
      set.splice(0,set.findIndex(s => s == arr[i])+1)
    }
    set.push(arr[i]);

  }


  console.log(set)

  //  console.log(count, start, end)
};
lengthOfLongestSubstring(s)

