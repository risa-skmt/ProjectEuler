//999*999=998001
//999固定で、かける数を１ずつ減らしていく→答えが回文数になっているかチェックしてtrueならreturnする


function LargestPalindrome(){

let array = [];    
    for(let k=999; k>=100; k--){
        for(let i=999; i>=100; i--){
            let product = String(k*i);
            let reverse_product = product.split("").reverse().join("")

            if(Number(product) === Number(reverse_product)){
                array.push(Number(product));
            }else {
                continue;
            }
        }  
    }

console.log(Math.max(...array));

}

LargestPalindrome();

