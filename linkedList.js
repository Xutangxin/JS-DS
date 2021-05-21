//节点构造函数,next初始值为null
function Node(element) {
    this.element = element;
    this.next = null;
}

// 链表构造函数
function LinkedList() {
    this.head = new Node('head');//创建头节点
    //插入节点 删除节点 查找节点 修改节点值 查找前一个节点 遍历打印链表
    this.insert = insert;
    this.remove = remove;
    this.find = find;
    this.update = update;
    this.findPre = findPre;
    this.display = display;
}

//find查找给定节点
//从头节点开始查找，如果值不相等就往下查找
function find(item) {
    let currNode = this.head;//this指向的是链表实例对象
    while (currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

//insett插入节点
//newElement是要插入的节点，item是当前节点
//1.将当前节点next赋值给插入节点的next 2.当前节点next指向插入节点
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

// display显示链表
function display() {
    let currNode = this.head;
    while (currNode.next !== null) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }

}

//findPre查找指定节点前一个节点
function findPre(item) {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

//remove删除节点
//将待删除节点next赋值给前一个节点的next
function remove(item) {
    let preNode = this.findPre(item);
    if (preNode.next !== null) {//判断前一个节点是否为尾节点
        preNode.next = preNode.next.next;
    }

}

//update修改节点值
function update(oldVal, newVal) {
    let oldElement = this.find(oldVal);
    oldElement.element = newVal;
}


//初始化示例对象，测试功能
let colors = new LinkedList();
colors.insert('pink', 'head');
colors.insert('red', 'pink');
colors.insert('blue', 'red');
colors.insert('purple', 'blue');
colors.insert('black', 'purple');
colors.insert('white', 'black');
colors.display();
colors.remove('blue');
colors.update('purple', 'yellow');
console.log('----------------------------');
colors.display();