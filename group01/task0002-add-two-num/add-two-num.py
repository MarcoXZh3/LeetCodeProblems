from _utils.list import ListNode, SinglyLinkedList


def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:
    """Add two numbers.
    Args:
        l1: the 1st number.
        l2: the 2nd number.
    Returns:
        the sum of the two number.
    """

    pass


if __name__ == "__main__":
    print("Task 0002 - Add Two Numbers:")

    for vs in  [
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
    ]:
        l1 = SinglyLinkedList.array2list(vs[0])
        l2 = SinglyLinkedList.array2list(vs[1])
        print(f"  {SinglyLinkedList.printList(l1)}")
        print(f"+ {SinglyLinkedList.printList(l2)}")
        re = addTwoNumbers(l1, l2)
        print(f"= {SinglyLinkedList.printList(re)}")
