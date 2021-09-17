
// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
// 示例 2:

// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var head = [1, 2, 3, 4, 5], k = 2;
var rotateRight = function (head, k) {
        let arr = head.subString(k,(head.length-k));
        head.unshift(arr)
        console.log(head)
        return head;
};

rotateRight(head,k);

var rotateRight = function(head, k) {
        if (k === 0 || !head || !head.next) {
            return head;
        }
        let n = 1;
        let cur = head;
        while (cur.next) {
            cur = cur.next;
            n++;
        }
    
        let add = n - k % n;
        if (add === n) {
            return head;
        }
    
        cur.next = head;
        while (add) {
            cur = cur.next;
            add--;
        }
    
        const ret = cur.next;
        cur.next = null;
        return ret;
    };
    