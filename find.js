"use strick";
  function Send() {
    const x = document.forms["frm1"];
    let horizontal = parseInt(x.elements[0].value)
    let column = parseInt(x.elements[1].value)
    let multiplication = parseInt(x.elements[2].value)
    //console.log(horizontal, column , multiplication) 
    let number=[]
for (i=1 ; i<=multiplication ; i++)
{
  number.push(i)
}
//console.log(number)
}

// function creatnumber(){
//     //tạo mảng 
//     for(k=0;k<=total;k++){

//     }
//     //thiết lập vị trí 
//     for(i=0;i<=Horizontal; i++){
//         for(j=0;j<=Column; j++){
//             Math.random()*total 
//         }
//     }
// }

// function findnumber(){

// }

// function score(){

// }
