function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      res.push(right.shift());
    } else {
      res.push(left.shift());
    }
  }
  if (left.length) res.push(...left);
  if (right.length) res.push(...right);
  return res;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let i = start;
    let j = end;
    let target = arr[start];
    while (i < j) {
      while (arr[j] >= target && i < j) {
        j--;
      }
      arr[i] = arr[j];
      while (arr[i] < target && i < j) {
        i++;
      }
      arr[j] = arr[i];
    }
    arr[i] = target;
    quickSort(arr, start, i - 1);
    quickSort(arr, i + 1, end);
  } else {
    return;
  }
}

function bubble(arr) {
  let len = arr.length - 1;
  let flag;
  for (let i = 0; i < len; i++) {
    flag = true;
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
}

var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37];

console.log(mergeSort(arr));
