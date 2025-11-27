const a="00"
let b=30
function countdown(){
 for(i=b;i>=1;i--){
  b--;
  if(i>10){
   console.log(a,":",b);
  }
  else if(i<12){
   console.log(a,":","0"+b); 
  }
 }
}
const timerInterval = setInterval(countdown, 1000);
console.log(timerInterval);
