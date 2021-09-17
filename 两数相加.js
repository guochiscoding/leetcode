let a = [0], b = [0];
var addTwoNumbers = function (l1, l2) {
        let a = turnNUmber(l1), b = turnNUmber(l2);
        let sum = ((a + b) + "").split('');
        for (let i = 0; i < sum.length; i++) {
                sum[i] = Number(sum[i])
        }
        console.log(sum)
        return sum;

};
function turnNUmber(args) {
        let ss = '';
        for (let i = 0; i < args.length; i++) {
                let element = args[i];
                ss = element ? ss + '' + element + '' : '';
        }
        return Number(ss);
}
function turnArray(number) {
        let aa;
        aa = number.split('')
        for (let i = 0; i < aa.length; i++) {
                aa[i] = Number(aa[i])
        }
        return aa;
}
addTwoNumbers(a, b)

