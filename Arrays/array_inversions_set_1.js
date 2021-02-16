let arr = [1, 20, 6, 4, 5];
let count = 0;


function mergeSort(arr){
  if(arr.length === 1) return arr;
  let midPt = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, midPt));
  let right = mergeSort(arr.slice(midPt));
  return merge(left, right, midPt)
}

function merge(left, right, mid){
  let i=0, j=0;
  let arr = [];
  while(i<left.length && j<right.length){
    if(left[i] < right[j]){
      arr.push(left[i]);
      i++;
    } else {
      count+= mid - i
      arr.push(right[j]);
      j++
    }
  }

  while(i < left.length){
    arr.push(left[i++])
  }

  while(j < right.length){
    arr.push(right[j++])
  }

  
    return arr;
}

mergeSort(arr);

// console.log(count)