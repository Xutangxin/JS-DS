function Node(el) {
    this.el = el;
    this.prev = null;
    this.next = null;

}
//双向链表
//inset()和removeAt()函数相比与单向链表有较大不同
function DoublyLinkedList() {
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.append = append;//向尾部添加新元素
    this.insert = insert;//向指定位置添加新元素
    this.removeAt = removeAt;//删除指定位置元素
    this.remove = remove;//删除指定值元素
    this.indexOf = indexOf;//返回元素在链表中的索引
    this.isEmpty = isEmpty;//判断链表是否为空
    this.getSize = getSize;//返回链表长度
    this.toString = toString;//只输出元素的值
    this.print = print;//打印链表

}

function append(el) {
    let node = new Node(el);
    let currNode;
    if (this.head === null) this.head = node;//链表为空
    else {//链表不为空，遍历添加到最后一个节点
        currNode = this.head;//currNode暂存头节点
        while (currNode.next) {
            currNode = currNode.next;
        }
        currNode.next = node;
    }
    this.length++;//更新链表长度

}

function insert(pos, el) {
    let node = new Node(el);
    let currNode = this.head;
    let index = 0, preNode;

    if (pos >= 0 && pos < this.length) {
        if (pos === 0) {//在第一个项添加
            if (!this.head) {//空链表
                this.head = node;
                this.tail = node;

            } else {//非空链表
                node.next = currNode;
                node = currNode.prev;
                this.head = node;
            }

        } else if (pos === this.length) {//在最后一项添加
            currNode = this.tail;
            currNode.next = node;
            node.prev = currNode;
            this.tail = node;

        } else {//在中间添加
            while (index++ < pos) {
                preNode = currNode;
                currNode = currNode.next;
            }
            node.next = currNode;
            preNode.next = node;
            currNode.prev = node;
            node.prev = preNode;

        }
        this.length++;
        return true;

    } else return false;
}

function removeAt(pos) {
    if (pos >= 0 && pos < this.length) {
        let currNode = this.head;
        let preNode, index = 0;
        if (pos === 0) {//移除第一项
            this.head = currNode.next;
            if (this.length === 1) this.tail = null;
            else this.head.prev = null;

        } else if (pos === this.length - 1) {//移除最后一项
            currNode = this.tail;
            this.tail = currNode.prev;
            this.tail.next = null;

        } else {//移除中间项
            while (index++ < pos) {
                preNode = currNode;
                currNode = currNode.next;
            }
            preNode.next = currNode.next;
            currNode.next.pre = preNode;

        }
        this.length--;
        return currNode.el;

    } else {
        return null;
    }
}

function remove(el) {
    let index = this.indexOf(el);
    this.removeAt(index);
}

function indexOf(el) {
    let currNode = this.head;
    let index = 0;
    while (currNode) {
        if (currNode.el === el) return index;
        currNode = currNode.next;
        index++;
    }
    return 'Not Found';
}

function isEmpty() {
    return this.length === 0;
}

function getSize() {
    return this.length;
}

function toString() {
    let currNode = this.head;
    let re = '';
    while (currNode) {
        re += currNode.el;
        currNode = currNode.next;
    }
    return re;
}

function print() {
    let currNode = this.head;
    let re = '';
    while (currNode) {
        re += `${currNode.el} `;
        currNode = currNode.next;
    }
    console.log(re);
}

let dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.append(5);
dll.print();
//insert()插在第一项有问题，remove()移除最后一项有问题