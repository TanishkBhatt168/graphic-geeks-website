#include <stdio.h>

#define MAX 10

void getCofactor(int matrix[MAX][MAX], int temp[MAX][MAX], int p, int q, int n) {
    int i = 0, j = 0;
    
    for (int row = 0; row < n; row++) {
        for (int col = 0; col < n; col++) {
            if (row != p && col != q) {
                temp[i][j++] = matrix[row][col];
                if (j == n - 1) {
                    j = 0;
                    i++;
                }
            }
        }
    }
}

int determinant(int matrix[MAX][MAX], int n) {

    if (n == 1)
        return matrix[0][0];

    int temp[MAX][MAX]; 
int det;
    int sign = 1; 

    for (int f = 0; f < n; f++) {
        getCofactor(matrix, temp, 0, f, n);
        det += sign * matrix[0][f] * determinant(temp, n - 1);

        sign = -sign;
    }

    return det;
}

int main() {
    int n, matrix[MAX][MAX];

    printf("Enter size of square matrix (n): ");
    scanf("%d", &n);

    printf("Enter elements of matrix:\n");
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &matrix[i][j]);

    printf("Determinant of the matrix is: %d\n", determinant(matrix, n));
    return 0;
}
