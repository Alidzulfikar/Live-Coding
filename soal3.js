function digitsGrouper(numbers){
  let hasil = [];
  for(let x = 0; x < 4; x++){
    hasil.push([]);
    for(var y = 0; y < numbers.length; y++){
      if(numbers[y].toString().length === x+1){
      hasil[x].push(numbers[y]);
    }
  }
}
    return hasil;
}
console.log(digitsGrouper([1,12,13,0,88,123,456]));
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654]));
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555]));
console.log(digitsGrouper([]));
console.log(digitsGrouper([0, 00, 000, 0000]));
