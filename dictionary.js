// 字典构造函数
function Dictionary() {
    this.dataStore = [];//字典初始化状态
    this.add = add;//增加元素
    this.remove = remove;//删除元素
    this.find = find;//查找元素
    this.count = count;//字典元素总数
    this.showAll = showAll;//展示所有元素
    this.clear = clear;//清空字典
}

function add(key, val) {
    this.dataStore[key] = val;
}

function remove(key) {//借助js的内置函数，它可以同时删除键及对应的值
    if (this.dataStore[key]) delete this.dataStore[key];
    else return 'Not Found';

}

function find(key) {
    return this.dataStore[key];

}

function count() {//不能直接用length，当键为字符串时，数组的length就不起作用了
    let num = 0;
    for (let item in this.dataStore) {
        num++;
    }
    return num;
}

function showAll() {//使用...in...的方法来遍历
    let sortKeys = Object.keys(this.dataStore).sort();//对key进行排序
    for (let key in sortKeys) {
        console.log(`${sortKeys[key]}-->${this.dataStore[sortKeys[key]]}`);
    }

}

function clear() {
    for (let key in this.dataStore) {
        delete this.dataStore[key];
    }

}


let dic = new Dictionary();
dic.add('name', 'xutangxin');
dic.add('age', 22);
dic.add('sex', 'male');
dic.add('hobby', 'reading');
dic.add('height', 1.70);
dic.add('weight', 58);
dic.showAll();
