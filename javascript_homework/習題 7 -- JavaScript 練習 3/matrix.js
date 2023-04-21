class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  add(otherMatrix) {
    const result = [];

    for (let i = 0; i < this.matrix.length; i++) {
      result[i] = [];
      for (let j = 0; j < this.matrix[i].length; j++) {
        result[i][j] = this.matrix[i][j] + otherMatrix.matrix[i][j];
      }
    }

    return new Matrix(result);
  }

  multiply(otherMatrix) {
    const result = [];

    for (let i = 0; i < this.matrix.length; i++) {
      result[i] = [];
      for (let j = 0; j < otherMatrix.matrix[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < this.matrix[0].length; k++) {
          sum += this.matrix[i][k] * otherMatrix.matrix[k][j];
        }
        result[i][j] = sum;
      }
    }

    return new Matrix(result);
  }
}

const matrix1 = new Matrix([[1, 2], [3, 4]]);
const matrix2 = new Matrix([[5, 6], [7, 8]]);
console.log(matrix1.add(matrix2));
console.log(matrix1.multiply(matrix2));
