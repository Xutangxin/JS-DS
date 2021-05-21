//队列构造函数
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;//入队
    this.dequeue = dequeue;//出队
    this.front = front;//查看队首元素
    this.back = back;//查看队尾元素
    this.display = display;//显示队列所有元素
    this.clear = clear;//清除队列元素
    this.empty = empty;//判断队列是否为空
}

//入队
function enqueue(el) {
    this.dataStore.push(el);
}

//出队
function dequeue() {
    if (this.empty()) {
        return 'The queue is empty.'
    } else {
        return this.dataStore.shift();

    }

}

//查看队首元素
function front() {
    if (this.empty()) return 'The queue is empty.';
    else return this.dataStore[0];

}

//查看队尾元素
function back() {
    if (this.empty()) return 'The queue is empty.';
    else return this.dataStore[this.dataStore.length - 1];

}

//显示队列所有元素
function display() {
    for (item of this.dataStore) {
        console.log(item);
    }

}

//清除队列元素
function clear() {
    delete this.dataStore;
    this.dataStore = [];

}

//判断队列是否为空
function empty() {
    if (this.dataStore.length === 0) return true;
    else return false;

}


let queue = new Queue();
queue.enqueue('apple');
queue.enqueue('peach');
queue.enqueue('pineapple');
queue.enqueue('mango');
queue.enqueue('orange');
queue.dequeue();
console.log(queue);
queue.display()
queue.clear();
console.log(queue);
