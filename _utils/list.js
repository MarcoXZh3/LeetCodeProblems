/**
 * Head of a singly-linked list
 * @param {object}    val     value of the node in the list
 * @param {ListNode}  next    next node in the list
 */
const ListNode = module.exports.ListNode = class {
    constructor(val, next) {
        this._val = val;
        this._next = next || null;
    }
    get val() { return this._val; }
    set val(v) { this._val = v; }
    get next() { return this._next; }
    set next(node) { this._next = node; }
};


/**
 * The singly-linked list
 * @param {object}  head    head (value) of the list.
 */
const SinglyLinkedList = module.exports.SinglyLinkedList = class {
    constructor(head) {
        this._size = 0;
        this._head = null;
        if (head !== null && head !== undefined) {
            this._head = head instanceof(ListNode) ? head : new ListNode(head);
            this._size = 1;
        }
    }
    get head() { return this._head; }
    get size() { return this._size; }
    toString() { return SinglyLinkedList.printList(this._head); }


    /**
     * create a list out of an array
     * @param {object[]}    vals      the number array
     * @returns {ListNode}            the head of the created list
     */
    static array2list(vals) {
        if (!vals || vals.length === 0) {
            return null;
        }
        const head = new ListNode(vals[0]);
        let cur = head;
        for (let i = 1; i < vals.length; i++) {
            cur = cur.next = new ListNode(vals[i]);
        }
        return head;
    }


    /**
     * Print the singly-linked list
     * @param {ListNode}  head      first node of the list
     * @param {function}  toString  the custom function to print each node
     * @returns {string}            the string representation of the list
     */
    static printList(head, toString) {
        const _print = (val) => {
            try {
                return toString(val);
            } catch (_) {
                return `${val}`;
            }
        };
        const connector = " -> ";
        let re = "";
        while (true) {
            if (head) {
                re += _print(head.val) + connector;
                head = head.next;
            } else if (re.endsWith(connector)) {
                return re.substring(0, re.length - connector.length);
            } else {
                return _print(head);
            }
        }
    };
};


function main() {
    let vals = null;
    let head = SinglyLinkedList.array2list(vals);
    console.log(`vals=${JSON.stringify(vals)}`);
    console.log(SinglyLinkedList.printList(head));

    vals = [];
    head = SinglyLinkedList.array2list(vals);
    console.log(`vals=${JSON.stringify(vals)}`);
    console.log(SinglyLinkedList.printList(head));

    vals = [1, 3, 5, 7, 9, 2, 4, 6, 8];
    head = SinglyLinkedList.array2list(vals);
    console.log(`vals=${JSON.stringify(vals)}`);
    console.log(SinglyLinkedList.printList(head));

    console.log(`${new SinglyLinkedList(head)}`);
}

main();
