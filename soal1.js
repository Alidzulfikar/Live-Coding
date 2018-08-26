function drawThreeColsBox(height){
  let arrayAngka = [1, 2, 3];
  for(let i = 0; i < height; i++){
    if(i === 0){
      var arrayAngkaTampil = String(arrayAngka[0]) + ' ' + String(arrayAngka[1]) + ' ' + String(arrayAngka[2]);
    } else {
      for(let i = 0; i < 3; i++){
        arrayAngka[i] += 3;
        var arrayAngkaTampil = String(arrayAngka[0]) + ' ' + String(arrayAngka[1]) + ' ' + String(arrayAngka[2]);
      }
    }
    console.log(arrayAngkaTampil);
  }
}

drawThreeColsBox(3);
drawThreeColsBox(5);
drawThreeColsBox(1);
