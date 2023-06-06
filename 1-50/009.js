function PythagoreanTriplet(){
    for(let i=1; i<=332; i++){
        let a = i;
        for(let k=2; k<=498; k++){
            let b = k;
            if((1000-a-b)*(1000-a-b) === a*a + b*b){
                return (a)*(b)*(1000-a-b);
            }
        }
        
    }
}


PythagoreanTriplet();