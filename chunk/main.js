
function chunk(array, size) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
      var lastItem = output[output.length - 1];
      if (!lastItem || lastItem.length === size) {
        output.push([array[i]]);
      } else {
        lastItem.push(array[i]);
      }
    }
    return output;
}
  
  var data = [1, 2, 3, 4, 5, 6, 7, 8]
  
  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
