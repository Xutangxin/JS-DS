//栈构造函数
function Stack() {
    this.dataStore = [];//初始化为空数组
    this.top = 0;//栈顶位置
    this.pop = pop;//出栈
    this.push = push;//入栈
    this.peek = peek;//查看栈顶元素
    this.length = length;//查看栈内元素总数
    this.clear = clear;//清除栈内元素

}


//元素入栈 栈顶+1
function push(el) {
    this.dataStore[this.top++] = el;

}

//元素出栈 返回栈顶元素，栈顶-1
function pop() {
    return this.dataStore.splice(--this.top, 1)[0];

}

//查看栈顶元素 栈顶元素即下标第top-1个元素
function peek() {
    if (this.top > 0) {
        return this.dataStore[this.top - 1];
    } else {
        return 'empty';
    }

}

//查看栈内元素总数
function length() {
    return this.top;

}

//清空栈内元素
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;

}

// let stack = new Stack();
// stack.push('javascript');
// stack.push('typescript');
// stack.push('java');
// stack.push('c');
// console.log(stack);
// stack.clear();
// console.log(stack);
// console.log(stack.peek());



//栈的案例-数字进制相互转换
function mulBase(n, base) {
    let stack = new Stack();
    do {
        stack.push(n % base);
        n = Math.floor(n /= base);

    } while (n > 0);
    let result = '';
    while (stack.length() > 0) {
        result += stack.pop();
    }
    return result;
}
console.log(mulBase(125, 2));
console.log(mulBase(125, 8));