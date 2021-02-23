// Javascript code to spiral traverse a matrix

// Method 2
function spiralPrint(rowLen, colLen, arr) {
    let i, k = 0, l = 0;
    /*
        k - starting row index
        m - ending row index
        l - starting column index
        n - ending column index
        i - iterator  
    */

    while (k < m && l < n) {
        // print the first row from the remaining rows
        for (i = l; i < n; ++i) {
            document.write(arr[k][i] + ' ');
        }
        k++;

        // print the last column from the remaining columns
        for (i = k; i < m; ++i) {
            document.write(arr[i][n - 1] + ' ');
        }
        n--;

        // print the last row from the remaining rows
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                document.write(arr[m - 1][i] + ' ');
            }
            m--;
        }

        // print the first column from the remaining columns
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                document.write(arr[i][l] + ' ');
            }
            l++;
        }
    }
}

/**********************************************************************************/
/* Mathod 3 recursive approach*/


// Function for printing matrix in spiral
// form i, j: Start index of matrix, row
// and column respectively m, n: End index
// of matrix row and column respectively
function printMatrix(arr, i, j, m, n) {

    // If i or j lies outside the matrix
    if (i >= m || j >= n) return;

    // Print First Row
    for (let p = i; p < n; p++) {
        document.write(arr[i][p] + ' ')
    }

    // Print Last Column
    for (let p = i + 1; p < m; p++) {
        document.write(arr[p][n - 1] + ' ')
    }

    // Print Last Row, if Last and
    // First Row are not same
    if ((m - 1) != i) {
        for (let p = n - 2; p >= j; p--) {
            document.write(arr[m - 1][p] + ' ');
        }
    }

    // Print First Column, if Last and
    // First Column are not same    
    if ((n - 1) != j) {
        for (let p = m - 2; p > i; p--) {
            document.write(arr[p][j] + ' ');
        }
    }
    printMatrix(arr, i + 1, j + 1, m - 1, n - 1)
}

/**********************************************************************************/
/* Mathod 4 DFS recursive approach*/




// function call
let arr = [ [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18]
          ];

