function repeat(f, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(f());
    }
    return result;
  }

const randomNumbers = repeat(Math.random, 10);
console.log(randomNumbers);