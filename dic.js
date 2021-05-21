//字典构造函数
function Dictionary() {
    this.items = {};
    this.set = set;//添加元素
    this.remove = remove;//根据key删除元素
    this.has = has;//判断是否有该键值存在
    this.get = get;//根据键值返回元素
    this.clear = clear;//清空字典
    this.size = size;//获得字典元素数量
    this.keys = keys;//以数组形式返回所有键值
    this.values = values;//以数组形式返回所有元素值
    this.getItems = getItems;
}

function set(key, val) {
    this.items[key] = val;
}

function has(key) {
    return key in this.items;
}

function remove(key) {
    if (this.has(key)) {
        delete this.items[key];
        return true;
    }
    return false;

}

function get(key) {
    if (this.has(key)) return this.items[key];
    return 'Not Found';

}

function clear() {
    for (let key in this.items) {
        if (this.has(key)) {
            delete this.items[key];
        }
    }

}

function size() {
    return this.keys().length;
}

function keys() {
    let keys = [];
    for (let key in this.items) {
        if (this.has(key)) keys.push(key);
    }
    return keys;
}

function values() {
    let values = [];
    for (let key in this.items) {
        if (this.has(key)) values.push(this.items[key]);
    }
    return values;
}

function getItems() {
    return this.items;
}

// let dic = new Dictionary();
// dic.set('name', 'xutangxin');
// dic.set('hobby', 'coding');
// dic.set('occupation', 'free');
// console.log(dic.getItems());
module.exports.Dictionary = Dictionary;//导出字典