function mmul(a, b) {
  if (a[0].length !== b.length) {
    throw new Error('Matrix size mismatch');
  }

  const result = [];
  for (let i = 0; i < a.length; i++) {
    const row = [];
    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < a[0].length; k++) {
        sum += a[i][k] * b[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

var x=[[1,2,3],[4,5,6],[7,8,9]];
var y=[[9,8,7],[6,5,4],[3,2,1]];
console.log(mmul(x,y));