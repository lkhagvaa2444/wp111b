function vdot(a, b) {
  if (a.length !== b.length) {
    throw new Error('Vector length mismatch');
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}

let x=[1,2],y=[3,4];
console.log(vdot(x,y));