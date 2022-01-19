"use strick";
function Send() {
  const x = document.forms["frm1"];
  let horizontal = parseInt(x.elements[0].value)
  let column = parseInt(x.elements[1].value)
  let multiplication = parseInt(x.elements[2].value)
    //console.log(horizontal, column , multiplication) 
  // Tạo các số cần tìm với mảng mới
    let number=[]
  for (i=1 ; i<=multiplication ; i++){
    number.push(i)
  }
  // Ngẫu nhiên in số 
   for(j=0;j<multiplication;j++){
    let randomnumber = Math.ceil(Math.random()*number.length)
    a = number.splice(randomnumber - 1, 1)
        console.log(a)
  }
  //Thiết lập vị trí  
  let text = "";
  for (let c = 0; c < column ; c++) {
  text += "<br>";
  for (let h = 0; h < horizontal ; h++) {
    text += a + " "
  }
}
document.getElementById("playground").innerHTML = text;
// function findnumber(){

// }

// function score(){

// }
}