//1ーーーーーーーーーーーーーーーーー
let sum = 0;
for(let i=1; i<1000; i++){
    if(i%3 === 0){
        sum = sum + i;
    }else if(i%5 === 0){
        sum = sum + i;
    }
} 
console.log(sum);