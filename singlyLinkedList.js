function Node(el) {
    this.el = el;
    this.next = null;
}

function LinkedList() {
    this.length = 0;
    this.head = null;
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
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        currNode.next = node;
    }
    this.length++;//更新链表长度

}

function insert(pos, el) {
    let node = new Node(el);
    let currNode = this.head;
    let index = 0, pre;
    if (pos >= 0 && pos < this.length) {
        if (pos === 0) {//在第一个位置添加
            node.next = currNode;
            this.head = node;
        } else {//在其他位置添加
            while (index++ < pos) {
                pre = currNode;
                currNode = currNode.next;
            }
            node.next = currNode;//在currNode前面插入
            pre.next = node;
        }
        this.length++;
        return true;

    } else {
        return false;
    }

}

function removeAt(pos) {
    if (pos >= 0 && pos < this.length) {
        let currNode = this.head;
        let pre, index = 0;
        if (pos === 0) this.head = currNode.next;//移除第一项元素
        else {//移除非第一项元素
            while (index++ < pos) {
                pre = currNode;
                currNode = currNode.next;
            }
            pre.next = currNode.next;

        }
        this.length--;
        return currNode.el;
    } else {
        return null;
    }

}

function remove(el) {
    // 方式1 硬撸
    // let currNode = this.head;
    // let pre;
    // if (el === this.head.el) this.head = currNode.next;
    // else {
    //     while (currNode.next !== null && currNode.el !== el) {
    //         pre = currNode;
    //         currNode = currNode.next;
    //     }
    //     pre.next = pre.next.next;
    // }
    // this.length--;

    // 方式2 使用已写api
    let index = this.indexOf(el);
    this.removeAt(index);
}

function indexOf(el) {
    let currNode = this.head;
    let index = 0;
    while (currNode !== null) {
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
    while (currNode !== null) {
        re += currNode.el;
        currNode = currNode.next;
    }
    return re;
}

function print() {
    let re = '';
    let currNode = this.head;
    while (currNode !== null) {
        re += `${currNode.el} `;
        currNode = currNode.next;
    }
    console.log(re);
}

let linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.append(5);
// linkedList.append(6);
// linkedList.insert(2, 'js');
// linkedList.insert(4, 'ts');
// linkedList.print();
module.exports.LinkedList = LinkedList;