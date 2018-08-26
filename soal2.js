function numberCruncher(arr){
  var arrTambah = [];
  var arrGanjil = 0;
  for(var i = 0; i < arr.length; i++){
    if(i === 0){
      arrTambah.push(arr[i] + arr[i+1]);
    }
    if(i === arr.length-1){
      arrTambah.push(arr[i-1] + arr[i]);
    } else {
      arrTambah.push(arr[i-1] + arr[i] + arr[i+1]);
    }
  }
  for(var j = 0; j < arrTambah.length; j++){
    if(arrTambah[j] % 2 === 1){
      arrGanjil = arrGanjil + arrTambah[j];
    }
  }
  return arrGanjil;
}
console.log(numberCruncher([2,5,1,3]));
console.log(numberCruncher([2,3,1,4,1,5,0,3]));
console.log(numberCruncher([3,6,8,9,1,2,3]));
