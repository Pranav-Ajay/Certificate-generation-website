const a="00"
let b=30
function countdown(){
  b--;
  if(b<0){
    clearInterval(timerInterval);
    return;
   }
  if(b>=10){
   console.log(a,":",b);
  }
  else if(b<10){
   console.log(a,":","0"+b); 
  }
 }
const timerInterval = setInterval(countdown, 1000);
console.log(timerInterval);
