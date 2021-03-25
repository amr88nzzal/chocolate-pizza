'use strict';
let form =document.getElementById('recipeForm');
form.addEventListener('change',strictLine);
function strictLine(event){
  let checkBox1 = document.getElementById('checkbox1');
  let lbl1 = document.getElementById('lbl1');
  if(checkBox1.checked){
    lbl1.style.textDecoration='line-through';
    console.log(lbl1);
  }
  else{lbl1.style.textDecoration='unset';
  }

}
