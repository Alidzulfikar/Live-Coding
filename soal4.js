function getReport(studentGrades){
  let ArrRes = [
    { classCode: 'A', failed: [], passed: []},
    { classCode: 'B', failed: [], passed: []},
    { classCode: 'C', failed: [], passed: []}
  ];

  for(let i = 0; i < ArrRes.length; i++){
    for(let j = 0; j < studentGrades.length; j++){
      if(ArrRes[i].classCode === studentGrades[j].classCode && studentGrades[j].score >= 70){
        ArrRes[i].passed.push(studentGrades[j].name)
      } else if(ArrRes[i].classCode === studentGrades[j].classCode && studentGrades[j].score < 70){
        ArrRes[i].failed.push(studentGrades[j].name)
      }
    }
  }
  return ArrRes;
}

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));
