from _utils.list import ListNode, SinglyLinkedList


def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:
    """Add two numbers.
    Args:
        l1: the 1st number.
        l2: the 2nd number.
    Returns:
        the sum of the two number.
    """
    re = ListNode(0)
    cur = re
    # repeat whenever there is at least 1 number
    while True:
        sum = cur.val + (l1.val if l1 else 0) + (l2.val if l2 else 0)
        cur.val = sum % 10
        # move next only if carry or at least 1 next available
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
        if l1 or l2 or sum > 9:
            cur.next = ListNode(0 if sum < 10 else 1)
            cur = cur.next
        else:
            break
    return re


def addTwoNumbers2(l1: ListNode, l2: ListNode) -> ListNode:
    """Add two numbers by recursion
    Args:
        l1: the 1st number.
        l2: the 2nd number.
    Returns:
        the sum of the two number.
    """
    def recursion(l1: ListNode, l2: ListNode, re: ListNode) -> ListNode:
        sum = re.val + (l1.val if l1 else 0) + (l2.val if l2 else 0)
        re.val = sum % 10
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
        if l1 or l2 or sum > 9:
            re.next = recursion(l1, l2, ListNode(0 if sum < 10 else 1))
        return re

    return recursion(l1, l2, ListNode(0))


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
        print("================================")
