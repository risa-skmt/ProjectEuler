function LargestPrimeFactor(num){
    //console.log(num);
    let large = 0;
    let i = 2;
      while(num !== 1){
           if(num%i === 0){
               large = i;
               num = num/i;
           }else {
            i = i+1;
           }
      } return large;
    } 


console.log(LargestPrimeFactor(600851475143));


