from typing import List


class ListNode:
    """Head of a singly-linked list.
    """
    def __init__(self, val: any, next = None) -> None:
        """Constructor of the singly-linked list head.
        Args:
            val: value of the node.
            next: next node in the list.
        """
        self.val = val
        self.next = next


class SinglyLinkedList:
    """The singly-linked list.
    """
    def __init__(self, head) -> None:
        self.head = head
        self.size = 0
        if head is not None:
            if isinstance(head, ListNode):
                self.head = head
            else:
                self.head = ListNode(head)
            self.size += 1
    def __str__(self):
        return SinglyLinkedList.printList(self.head)


    @staticmethod
    def array2list(vals: None) -> ListNode | None:
        """Create a list out of the given iterable.
        Args:
            vals: the iterable of values for the list.
        Returns:
            the head of the list.
        """
        if vals is None or len(vals) == 0:
            return None
        head = None
        cur = None
        for val in vals:
            if head is None:
                cur = ListNode(val)
                head = cur
            else:
                cur.next = ListNode(val)
                cur = cur.next
        return head


    @staticmethod
    def printList(head: ListNode | None, toString = None) -> str:
        """Print the singly-linked list.
        Args:
            head: first node of the list.
            toString: the custom function to print each node.
        Returns:
            the string representation of the list.
        """
        def _print(val) -> str:
            try:
                return toString(val)
            except:
                return str(val)

        if head is None:
            return _print(head)
        connector = " -> "
        re = ""
        while True:
            if head is not None:
                re += _print(head.val) + connector
                head = head.next
            elif re.endswith(connector):
                return re[:-len(connector)]
            else:
                return _print(head)


def main() -> None:
    import json

    vals = None
    head = SinglyLinkedList.array2list(vals)
    print(f"vals={json.dumps(vals)}")
    print(SinglyLinkedList.printList(head))

    vals = []
    head = SinglyLinkedList.array2list(vals)
    print(f"vals={json.dumps(vals)}")
    print(SinglyLinkedList.printList(head))

    vals = [1, 3, 5, 7, 9, 2, 4, 6, 8]
    head = SinglyLinkedList.array2list(vals)
    print(f"vals={json.dumps(vals)}")
    print(SinglyLinkedList.printList(head))

    print(SinglyLinkedList(head))


# if __name__ == "__main__":
#     main()
