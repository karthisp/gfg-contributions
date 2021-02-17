// Implementing 

function mergeSort(arr, array_size) {
    let temp = new Array(array_size);
    return _mergeSort(arr, temp, 0, array_size - 1)
}

function _mergeSort(arr, temp, left, right) {
    let mid, inv_count = 0;
    if (right > left) {
        mid = Math.floor((right + left) / 2);
        inv_count += _mergeSort(arr, temp, left, mid);
        inv_count += _mergeSort(arr, temp, mid + 1, right);

        inv_count += merge(arr, temp, left, mid + 1, right);
    }
    return inv_count;
}

function merge(arr, temp, left, mid, right) {
    let i, j, k;
    let inv_count = 0;

    i = left;
    j = mid;
    k = left;

    while ((i < mid) && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
            inv_count = inv_count + (mid - i);
        }
    }

    while (i <= mid - 1){
        temp[k++] = arr[i++];
    }

    while (j <= right){
        temp[k++] = arr[j++];
    }

    for (i = left; i <= right; i++){
        arr[i] = temp[i];
    }
    
    return inv_count;
}

let arr = [1, 20, 6, 4, 5];
console.log(mergeSort(arr, arr.length))