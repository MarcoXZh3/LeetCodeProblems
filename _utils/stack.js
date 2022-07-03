/**
 * The stack definition
 */
const Stack = module.exports.Stack = class {
    constructor() {
        this._vals = [];
    }


    /**
     * push the given value to the stack
     * @param {object} val  the value to push
     */
    push(val) {
        this._vals.push(val);
    }


    /**
     * pop the top value from the stack
     * @returns     the top value from the stack, or `null` if not available
     */
    pop() {
        return this._vals.length === 0 ? null : this._vals.pop();
    }


    /**
     * query the top value from the stack
     * @returns      the top value from the stack, or `null` if not available
     */
    peek() {
        return this._vals.length === 0 ? null : this._vals[this._vals.length - 1];
    }


    /**
     * check whether the stack is empty or not
     * @returns     `true` if stack is empty; otherwise `false`
     */
    empty() {
        return this._vals.length === 0;
    }


    /**
     * clear the entire stack to make it empty
     */
    clear() {
        this._vals = [];
    }


    /**
     * cast the stack into a string representation
     * @returns     the string representation of the stack
     */
    toString() {
        return `[${this._vals.join(", ")}]<=`;
    }
};


function main() {
    const stack = new Stack();
    console.log(`${stack}; empty? ${stack.empty()}`);

    stack.push(1);
    console.log(`${stack}; empty? ${stack.empty()}`);
    stack.push(3);
    console.log(`${stack}; empty? ${stack.empty()}`);
    console.log(`popped: ${stack.pop()}`);
    console.log(`${stack}; empty? ${stack.empty()}`);
    stack.push(5);
    console.log(`${stack}; empty? ${stack.empty()}`);
    console.log(`popped: ${stack.pop()}`);
    console.log(`${stack}; empty? ${stack.empty()}`);
    console.log(`popped: ${stack.pop()}`);
    console.log(`${stack}; empty? ${stack.empty()}`);
    console.log(`popped: ${stack.pop()}`);
    console.log(`${stack}; empty? ${stack.empty()}`);
}

// main();
