'use strict';
let form =document.getElementById('recipeForm');
form.addEventListener('change',strictLine);
function strictLine(event){
  for (let i=1 ;i<=12;i++){
    let checkBox1 = document.getElementById('checkbox'+i);
    let lbl1 = document.getElementById('lbl'+i);
    if(checkBox1.checked){
      lbl1.style.textDecoration='line-through';
      console.log(lbl1);
    }
    else{lbl1.style.textDecoration='unset';
    }}

}
