//冒泡排序
//1.比较相邻的元素，如果第一个比第二个大，就交换他们两个的位置
//2.对每一对相邻元素做同样的操作，从开始第一对到最后一对，这样最大的数就被排到最后面了
//3.除了最后一个元素，针对所有元素做以上操作
//4.重复1~3，直至排序完成
function bubbleSort(data) {
    let temp;
    let len = data.length;
    for (let i = 0; i < len; i++) {//i控制排序趟数
        for (let j = 0; j < len - i - 1; j++) {//针对每一趟的操作
            if (data[j] > data[j + 1]) {
                temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }

        }

    }
    return data;

}

//选择排序
//1.从数组开头开始遍历，将第一个元素和其他元素进行比较，把最小值放到数组第一个位置，然后再继续从第二个元素开始比较
//2.如此重复，直到进行到数组倒数第二个为止，所有数据就完成了排序
function selectionSort(data) {
    let len = data.length;
    let temp;
    for (let i = 0; i < len; i++) {
        let min = data[i];//把最小值设置为每次排序的第一个数
        let index = i;//index用于存放每次排序中最小值的下标
        for (let j = i + 1; j < len; j++) {//将后面的数和第一个数进行比较
            if (data[j] < min) {
                min = data[j];
                index = j;
            }
        }
        //将最小的数和第一个数进行交换
        temp = data[i];
        data[i] = min;
        data[index] = temp;

    }
    return data;

}

//插入排序 这个不好懂
function insertionSort(data) {
    let len = data.length;
    for (let i = 1; i < len; i++) {
        let key = data[i];
        let j = i - 1;
        while (j >= 0 && data[j] > key) {
            data[j + 1] = data[j];
            j--;
        }
        data[j + 1] = key;

    }
    return data;
}

//快速排序（使用递归）
//从数列中选择一个数作为基数，把数列中小于该基数的数字排到该基数左边，大于等于该基数的数字排到该基数右边
//如此重复，直至每个区间只有一个数
function quickSort(data) {
    let len = data.length;
    if (len === 0) return [];
    let left = [];//存放比基数小的数
    let right = [];//存放比基数大的数
    let base = data[0];//基数
    for (let i = 1; i < len; i++) {
        if (data[i] < base) left.push(data[i]);
        else right.push(data[i]);
    }
    //递归以及拼接数字
    return quickSort(left).concat(base, quickSort(right));

}

let dataStore = [72, 1, 68, 95, 75, 58, 10, 35, 6, 28, 45, 69, 13, 88, 82, 72];
let dataStore2 = [72, 1, 68, 95, 75, 58, 10, 35, 6, 28, 45, 69, 13, 88, 82, 72];
let dataStore3 = [72, 1, 68, 95, 75, 58, 10, 35, 6, 28, 45, 69, 13, 88, 82, 72];
let dataStore4 = [72, 1, 68, 95, 75, 58, 10, 35, 6, 28, 45, 69, 13, 88, 82, 72];

console.log('冒泡排序');
console.log(`排序前：${dataStore}`);
console.log(`排序后：${bubbleSort(dataStore)}`);
console.time('bubbleSort');
console.timeEnd('bubbleSort');
console.log('选择排序');
console.log(`排序前：${dataStore2}`);
console.log(`排序后：${selectionSort(dataStore2)}`);
console.time('selectionSort');
console.timeEnd('selectionSort');
console.log('插入排序');
console.log(`排序前：${dataStore3}`);
console.log(`排序后：${insertionSort(dataStore3)}`);
console.time('insertionSort');
console.timeEnd('insertionSort');
console.log('快速排序');
console.log(`排序前：${dataStore4}`);
console.log(`排序后：${quickSort(dataStore4)}`);
console.time('quickSort');
console.timeEnd('quickSort');