import json


class Stack:
    def __init__(self) -> None:
        self.vals = []


    def push(self, val):
        """push the given value into the stack.
        Args:
            val     the value to push
        """
        self.vals.append(val)


    def pop(self):
        """pop the top value from the stack.
        Returns:
            the top value from the stack, or `None` if not available.
        """
        if len(self.vals) == 0:
            return None
        else:
            return self.vals.pop()


    def peek(self):
        """peek the top value from the stack.
        Returns:
            the top value from the stack, or `None` if not available.
        """
        if len(self.vals) == 0:
            return None
        else:
            return self.vals[-1]


    def empty(self):
        """Check whether the stack is empty or not.
        Returns:
            `True` if the stack is empty; otherwise `False`.
        """
        return len(self.vals) == 0


    def clear(self):
        """Clear the entire stack.
        """
        self.vals = []


    def __str__(self) -> str:
        """Cast the stack into a string representation.
        Returns:
            the string representation of the stack.
        """
        return f"{json.dumps(self.vals)}<="


def main() -> None:
    stack = Stack()
    print(f"{stack}; empty? {stack.empty()}")

    stack.push(1)
    print(f"{stack}; empty? {stack.empty()}")
    stack.push(3);
    print(f"{stack}; empty? {stack.empty()}")
    print(f"popperd: {stack.pop()}")
    print(f"{stack}; empty? {stack.empty()}")
    stack.push(5);
    print(f"{stack}; empty? {stack.empty()}")
    print(f"popperd: {stack.pop()}")
    print(f"{stack}; empty? {stack.empty()}")
    print(f"popperd: {stack.pop()}")
    print(f"{stack}; empty? {stack.empty()}")
    print(f"popperd: {stack.pop()}")
    print(f"{stack}; empty? {stack.empty()}")


# if __name__ == "__main__":
#     main()
