function vadd(a, b) {
  if (a.length !== b.length) {
    throw new Error('Vector length mismatch');
  }

  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i] + b[i]);
  }

  return result;
}

let x=[1,2],y=[3,4];
console.log(vadd(x,y));