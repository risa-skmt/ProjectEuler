function smallestMultiple(){
    for(let i=20; i<i+1; i=i+20){
        let all = 0;

        for(let k=1; k<=19; k++){
            if(i%k === 0){
                all = all+1;
            }
        }
     
        if(all === 19){
            console.log(i);
            break;
        }
    }
}

smallestMultiple();