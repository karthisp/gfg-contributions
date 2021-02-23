// Javascript program to print an n * n matrix in diagonal order

function printMatrixDiagonal1(arr, len) {

    // Initialize indices to traverse through the array
    let i = 0, j = 0;
  
    // Initial direction will be from bottom to top
    let isUp = true;
    let result = [];
  
    // Traverse through the matrix till all the elements get printed
    for (let k = 0; k < length * length;) {
  
      // If isUp = true traverse from bottom to top
        if (isUp) {
            for (;i >= 0 && j < length; i--, j++) {
                document.write(arr[i][j]+' ');
                k++;
            }
  
      // Set the direction of i and j accordingly  
            if (i < 0 && j < length) i = 0;
            if (j === length) i = i + 2, j--;
        }
  
        // If isUp = false then traverse top to bottom
        else {
            for (;j >= 0 && i < length; i++, j--) {
              document.write(arr[i][j]+' ');
                k++;
            }
  
        // Set the direction of i and j accordingly    
            if (j < 0 && i < length) j = 0;
            if (i === length) j = j + 2, i--;
        }
        
        // Inverse the value of isUp to change the direction
        isUp = !isUp
    }
  
  }
  
  // function call
  let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let arrLength = arr1.length;
  printMatrixDiagonal1(arr1, arrLength);

 /************************************************************************************/ 
 
//   method 2
// Javascript program to print an n * n matrix in diagonal order

function printDiagonal1(arr){
    // n - size of the array
    // mode - to switch from top/bottom treversal
    // lower - to ensure we move to the next row when columns go out of bounds
    let n = 4, mode = 0, it = 0, lower = 0;
  
    // A 4 * 4 matrix has 7 diagonals. Hence (2 * n -1) iterations    
    for(let t=0; t< (2 * n - 1); t++){
      let t1 = t;
      if(t1 >= n){
        mode++;
        t1 = n - 1;
        it--;
        lower++;        
      } else {
        lower = 0;
        it++;
      }
      for(let i = t1; i>= lower; i--){
        if((t1 + mode) % 2 === 0){
          console.log(arr[i][t1 + lower - i])
        } else{
          console.log(arr[t1 + lower - i][i])
        }
      }
    }  
  }
  
  // initialize matrix
  let arr2 = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
  printDiagonal2(arr2)