function count(arr) {
  var counts = {};
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    if (counts[word]) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }
  return counts;
}

var list = ['a', 'dog', 'chase', 'a', 'cat']
var cmap = count(list) // { a: 2, dog: 1, chase: 1, cat: 1 }

console.log(cmap)