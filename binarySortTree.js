//二叉查找树是在二叉树基础上，构建该二叉查找树确定子节点时，将较小的值保存到左节点中，将较大的值保存到右节点中，这样有利于节点的查找
//二叉树中的插入和删除操作较复杂，尤其是删除操作，要注意理解

//节点构造函数
function Node(data, left, right) {
    this.data = data;//当前节点数据
    this.left = left;//左节点
    this.right = right;//右节点
    this.showData = showData;//得到当前节点数据
}
//得到当前节点值
function showData() {
    return this.data;
}

//二叉查找树构造函数
function BinarySortTree() {
    this.root = null;//根节点
    this.insert = insert;//插入节点
    this.preOrder = preOrder;//前序遍历
    this.inOrder = inOrder;//中序遍历
    this.postOrder = postOrder;//后序遍历
    this.find = find;//查找节点
    this.getMin = getMin;//查找最小值
    this.getMax = getMax;//查找最大值
    this.remove = remove;//删除节点

}

//插入节点 注意理解算法思想：1.考虑空树和非空树的情况 2.遍历二叉树，根据条件来进行插值
function insert(data) {
    let node = new Node(data, null, null);
    if (this.root === null) {//如果根节点为空，该节点就作为根节点
        this.root = node;
    } else {//根节点不为空的情况
        let currNode = this.root;
        let parentNode;
        while (true) {
            parentNode = currNode;
            if (data < currNode.data) {//如果新节点小于父节点且父节点的左节点为空，新节点就作为左节点
                currNode = currNode.left;
                if (currNode === null) {
                    parentNode.left = node;
                    break;
                }
            } else {//如果新节点大于父节点且父节点的右节点为空，新节点就作为右节点
                currNode = currNode.right;
                if (currNode === null) {
                    parentNode.right = node;
                    break;
                }
            }
        }
    }

}

//前序遍历 根节点》左子树》右子树 递归实现
function preOrder(node) {
    if (node !== null) {
        console.log(node.showData());
        preOrder(node.left);
        preOrder(node.right)
    }

}

//中序遍历:左子树》根节点》右子树
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.showData());
        inOrder(node.right);
    }

}

//后序遍历 左子树》右子树》根节点
function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.showData());
    }

}

//查找给定节点值
//使用遍历实现，如果给定值等于当前节点，直接返回当前节点；如果给定值大于当前节点，往右子树方向找，否则往左子树方向找，没有找到返回相应信息
function find(data) {
    let currNode = this.root;
    while (currNode !== null) {
        if (data === currNode.data) return currNode;
        else if (data > currNode.data) currNode = currNode.right;
        else currNode = currNode.left;
    }
    return 'this data does not exist in this binarySortTree!';

}

//查找最小值 遍历左节点，最后一个节点就是最小值
function getMin() {
    let currNode = this.root;
    while (currNode.left !== null) {
        currNode = currNode.left;
    }
    return currNode.showData();

}

//查找最大值 遍历右节点，最后一个节点就是最大值
function getMax() {
    let currNode = this.root;
    while (currNode.right !== null) {
        currNode = currNode.right;
    }
    return currNode.showData();

}

//删除操作
function remove(data) {
    removeNode(this.root, data);

}
//递归查找树中的最小值
function getSmallest(node) {
    if (node.left === null) return node;
    else return getSmallest(node.left);
}
//删除节点，删除的具体操作
//实现方法：
//1.待删除节点是叶子节点，把父节点指向它的链接改为null
//2.待删除节点有一个子节点，把它的父节点原本指向它的链接指向它的子节点
//3.待删除节点有两个子节点，查找待删除节点右子树上的最小值，用该最小值创建一个临时节点，将临时节点的值赋值给待删除节点，最后删除临时节点
function removeNode(node, data) {
    if (node === null) return null;
    if (data === node.data) {//待删除节点是当前节点
        if (node.left === null && node.right === null) return null;//当前节点是叶子节点
        if (node.left === null) return node.right;//当前节点没有左节点
        if (node.right === null) return node.left//当前节点没有右节点
        //当前节点有两个节点
        let tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;

    } else if (data > node.data) {//待删除节点大于当前节点，往当前节点右子树方向找
        node.right = removeNode(node.right, data);
        return node;
    }
    else {//待删除节点小当前节点，往当前节点左子树方向找
        node.left = removeNode(node.left, data);
        return node;
    }
}


//实例化及测试
let bst = new BinarySortTree();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
console.log(bst);
bst.inOrder(bst.root);
bst.remove(16);
console.log('\n');
inOrder(bst.root);
// console.log('前序遍历');
// preOrder(bst.root);
// console.log('中序遍历');
// inOrder(bst.root);
// console.log('后序遍历');
// postOrder(bst.root);

