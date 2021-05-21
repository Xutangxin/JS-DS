let LinkedList = require('./singlyLinkedList').LinkedList;//导入链表
//解决哈希表冲突的几种方法：1.分离链接 2.线性探查 3.双散列法
function HashMap() {
    this.table = [];
    this.put = put;//向哈希表中添加元素
    this.remove = remove;//根据键值移除元素
    this.get = get;//根据键值获取元素
    this.print = print;
    this.loseloseHashCode = function (key) {//哈希函数 根据组成key的每个字符的ASCII码值的和得到一个数字，该数字便是值的地址
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }
    this.ValuePair = ValuePair;

}

function ValuePair(key, val) {//要加入LinkedList类的元素，用于解决冲突
    this.key = key;
    this.val = val;
    this.toString = function () {
        return `[${this.key}==${this.val}] `;
    }
}

function put(key, val) {//1.将key转换为地址 2.如果该地址没有被占用，初始化一个链表实例 3.在链表实例中添加键值
    let position = this.loseloseHashCode(key);
    // console.log(`${position}--${key}`);
    // this.table[position] = val;
    if (this.table[position] === undefined) {
        this.table[position] = new LinkedList();
    }
    this.table[position].append(new ValuePair(key, val));
}

function remove(key) {
    this.table[this.loseloseHashCode(key)] = undefined;
}

function get(key) {
    let position = this.loseloseHashCode(key);
    // return this.table[this.loseloseHashCode(key)];
    if (this.table[position] !== undefined) {
        let currNode = this.table[position].head;
        while (currNode.next) {
            if (currNode.el === key) return currNode.el;
            currNode = currNode.next;
        }
        if (currNode.el === key) return currNode.el;
    }
    return undefined;
}

function print() {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
            console.log(`${i} : ${this.table[i]}`);
        }
    }
}

let hashmap = new HashMap();
hashmap.put('Gandalf', 'gandalf@email.com');
hashmap.put('John', 'johnsnow@email.com');
hashmap.put('Tyrion', 'tyrion@email.com');
hashmap.put('Aaron', 'aaron@email.com');
hashmap.put('Donnie', 'donnie@email.com');
hashmap.put('Ana', 'ana@email.com');
hashmap.put('Jonathan', 'jonathan@email.com');
hashmap.put('Jamie', 'jamie@email.com');
hashmap.put('Sue', 'sue@email.com');
hashmap.put('Mindy', 'mindy@email.com');
hashmap.put('Paul', 'paul@email.com');
hashmap.put('Nathan', 'nathan@email.com');
// console.log(hashmap);
console.log(hashmap.get('Gandalf'));
hashmap.print();
