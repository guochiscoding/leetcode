var sum = 0;
function sumTree(root, n) {
        if (root == null) return sum;
        let num = n * 10 + root.val;
        if (root.left == null && root.right == null) {
                sum += num;
        } else {
                sumTree(root.left, num);
                sumTree(root.right, num)
        }
}
sumTree(root,0)