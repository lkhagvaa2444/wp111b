function truthTable(n) {
  const combinations = 2 ** n;
  const table = [];

  for (let i = 0; i < combinations; i++) {
    const binary = i.toString(2).padStart(n, '0').split('');

    table.push(binary.map((digit) => parseInt(digit)));
  }

  return table;
}
