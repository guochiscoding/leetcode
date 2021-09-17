
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
        let num = [];
        let str = [];
        let result = [];
        let end = ""
        for (let i =0;i<s.length;i++) {
                let char = s[i]
                console.log(char)
                if (Number.isInteger(char)) {
                        num.push(char)
                } else if (char == '[') {
                        str.push(result)
                        result = "";
                        result += char;
                } else if (char == ']') {
                        end = str.pop() + result.repeat(num.pop())

                } else {
                        result += char;
                }
        }
        return end
};

console.log(decodeString('3[a]'))