const path = require("path");
const {ListNode, SinglyLinkedList} = require(path.resolve("_utils/list"));


/**
 * Add two nums:
 * @param {ListNode}  l1      the first list
 * @param {ListNode}  l2      the second list
 * @return {ListNode}         the sum of the two lists
 */
const addTwoNumbers = (l1, l2) => {

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
    });
};


main();
