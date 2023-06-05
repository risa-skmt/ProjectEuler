function SumSquareDifference(){
   let sumOfSquare = 0; 
    for(let i=1; i<=100; i++){
        sumOfSquare = sumOfSquare + i*i;
    }

    let sum = 0;
    for(let k=1; k<=100; k++){
        sum = sum +k;
    }
    let squareOfSum = sum*sum;

    return (squareOfSum - sumOfSquare);
}

SumSquareDifference();