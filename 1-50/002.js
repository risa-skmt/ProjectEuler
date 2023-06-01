let num1 = 1;
let num2 = 2;
let sum = 0;
let even_sum = 0;
while(num1 < 4000000 && num2 < 4000000){
   sum = sum + num1 + num2;
   if(num1%2 === 0){
    even_sum = even_sum + num1;
   }else if(num2%2 === 0){
    even_sum = even_sum + num2;
   }
   num1 = num1 + num2;
   num2 = num1 + num2;
}

console.log(even_sum);