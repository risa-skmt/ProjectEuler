//under1000000  = 37550402023
//over1000000 = 105363426899
console.log(37550402023 + 105363426899);


function SummationOfPrime_under1000000(num){
    //10以下の素数合計は17
    let count = 17;

    for(let i=11; i<=num; i++){

         //２の倍数・偶数
       if(i%2 === 0){
           continue;
       } 

       //各位の和
       let devide = String(i).split("");
       let eachNumSum = 0;
         for(let k=0; k<=devide.length-1; k++){
            eachNumSum = eachNumSum + Number(devide[k]);
         }
       //各位の和が３の倍数
       if(eachNumSum%3 === 0){
           continue;
       } //末尾の数値が０か５
       else if(devide[devide.length-1] === "0" || devide[devide.length-1] === "5"){
           continue;
       } //上記条件以外で、その数値が２以上の他の数字で割れないか
       else {
          let canDevide = 0;
            for(let n=2; n<=i-1; n++){
                if(i%n === 0){
                     continue;
                }else {
                    canDevide = canDevide + 1;
                }
            }
             //割れなければ素数合計に追加
           if(canDevide === i-2){
            count = count +i;
           }
        }
    }  return count;
}

SummationOfPrime_under1000000(1000000);

function SummationOfPrime_over1000000(num){
    //10以下の素数合計は17
    let count = 0;

    for(let i=1000001; i<=num; i++){

         //２の倍数・偶数
       if(i%2 === 0){
           continue;
       } 

       //各位の和
       let devide = String(i).split("");
       let eachNumSum = 0;
         for(let k=0; k<=devide.length-1; k++){
            eachNumSum = eachNumSum + Number(devide[k]);
         }
       //各位の和が３の倍数
       if(eachNumSum%3 === 0){
           continue;
       } //末尾の数値が０か５
       else if(devide[devide.length-1] === "0" || devide[devide.length-1] === "5"){
           continue;
       } //上記条件以外で、その数値が２以上の他の数字で割れないか
       else {
          let canDevide = 0;
            for(let n=2; n<=i-1; n++){
                if(i%n === 0){
                     continue;
                }else {
                    canDevide = canDevide + 1;
                }
            }
             //割れなければ素数合計に追加
           if(canDevide === i-2){
            count = count +i;
           }
        }
    }  return count;

}

SummationOfPrime_over1000000(2000000);