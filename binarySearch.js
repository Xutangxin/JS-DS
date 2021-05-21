//二分查找
//思想：将数列分为两部分，把目标值同数列中间值进行对比，如果该值小于中间值，则往中间值左边部分查找，否则往中间值右边部分查找
function binarySearch(data, target) {
    let low = 1;
    let high = data.length;
    while (low <= high) {
        let mid = (low + high) / 2
        if (target === data[mid]) return `该元素下标是：${mid}`;
        else if (target > data[mid]) low = mid + 1;
        else if (target < data[mid]) high = mid - 1;
        else return 'Not Found！';
    }

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(binarySearch(arr, 16));
console.log(binarySearch(arr, 5));
