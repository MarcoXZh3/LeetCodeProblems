const path = require("path");
const {ListNode, SinglyLinkedList} = require(path.resolve("_utils/list"));


/**
 * Add two nums:
 * @param {ListNode}  l1      the first list
 * @param {ListNode}  l2      the second list
 * @return {ListNode}         the sum of the two lists
 */
 const addTwoNumbers = (l1, l2) => {
    const re = new ListNode(0);
    let cur = re;
    while (true) {
        const sum = cur.val + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        cur.val = sum % 10;
        // move next only if carry or at least 1 next available
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        if (l1 || l2 || sum > 9) {
            cur.next = new ListNode(sum < 10 ? 0 : 1); // set carry as the init value
            cur = cur.next;
        } else {
            break ;
        }
    }
    return re;
};


/**
 * Add two nums by recursion
 * @param {ListNode}  l1      the first list
 * @param {ListNode}  l2      the second list
 * @return {ListNode}         the sum of the two lists
 */
 const addTwoNumbers2 = (l1, l2) => {
    const recursion = (l1, l2, re) => {
        sum = re.val + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        re.val = sum % 10;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        if (l1 || l2 || sum > 9) {
            re.next = recursion(l1, l2, new ListNode(sum < 10 ? 0 : 1));
        }
        return re;
    };
    return recursion(l1, l2, new ListNode(0));
};


/**
 * main function
 */
const main = () => {
    console.log("Task 0002 - Add Two Numbers:");
    [
        [
            [2, 4, 3], [5, 6, 4],
        ],
        [
            [0], [0],
        ],
        [
            [9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9],
        ],
        [
            [2, 4, 3], [5, 6, 8, 2],
        ],
    ].forEach( vs => {
        const l1 = SinglyLinkedList.array2list(vs[0]);
        const l2 = SinglyLinkedList.array2list(vs[1]);
        console.log(`  ${SinglyLinkedList.printList(l1)}`);
        console.log(`+ ${SinglyLinkedList.printList(l2)}`);
        re = addTwoNumbers(l1, l2);
        console.log(`= ${SinglyLinkedList.printList(re)}`);
        console.log("================================");
    });
};


main();
