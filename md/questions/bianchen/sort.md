### 排序

https://www.runoob.com/w3cnote/ten-sorting-algorithm.html

(1) 冒泡排序

```js

function bubbleSort(arr) {
    let len  = arr.length;
    for(let i =0; i < len -1; i++) {
        let j = i + 1;
        for(j; j< len; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
 }
```

(2) 选择排序

```js
function selectionSort(arr) {
   let len = arr.length;
   let maxIndex, temp;
   for(let i = 0; i < len - 1; i++) {
       maxIndex = i;
       for(let j = i + 1;j < len; j ++) {
           if(arr[j] > arr[maxIndex]) {
               maxIndex = j;
           }
       }
       temp = arr[i];
       arr[i] = arr[maxIndex];
       arr[maxIndex] = temp;
   }

   return arr;
}
```

(3) 插入排序

```js
function insertionSort(arr) {
    let len = arr.length;
    for(let i = 1; i < len; i++) {
        for(let j = 0; j < i; j ++) {
            if(arr[j] > arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
}

function insertionSort(arr) {
    let len = arr.length;
    let prevIndex, current;
    for(let i = 1; i < len; i ++) {
        prevIndex = i -1;
        current = arr[i];
        while(prevIndex >=0 && arr[prevIndex] > current) {
            arr[prevIndex + 1] = current;
            prevIndex --
        }
        arr[prevIndex + 1] = current;
    }
    return arr;
}
```

(4) 快速排序

```js
function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left)/2)],
    i = left,
    j = right;
    while(i<=j>) {
        while(arr[i] < pivot>) {
            i ++;
        }
        while(arr[j] > pivot) {
            j --
        }
        if(i <=j>) {
            swap(arr, i, j);
            i ++;
            j --;
        }
    }
    return i;
}
```