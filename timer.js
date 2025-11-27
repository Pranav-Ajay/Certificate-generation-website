const a="00"
let b=30
for(i=b;i>=1;i--){
  b--;
  if(i>10){
   setInterval(1000) ;
   console.log(a,":",b);
  }
  else if(i<12){
   console.log(a,":","0"+b); 
  }
}
const timerInterval = setInterval(countdown, 1000);
console.log(a,":","30");
console.log(timerInterval);
