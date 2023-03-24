function madd(a, b) {
  if (a.length !== b.length || a[0].length !== b[0].length) {
    throw new Error('Matrix size mismatch');
  }

  const result = [];
  for (let i = 0; i < a.length; i++) {
    const row = [];
    for (let j = 0; j < a[0].length; j++) {
      row.push(a[i][j] + b[i][j]);
    }
    result.push(row);
  }

  return result;
}

var x=[[1,2,3],[4,5,6],[7,8,9]];
var y=[[9,8,7],[6,5,4],[3,2,1]];
console.log(madd(x,y));