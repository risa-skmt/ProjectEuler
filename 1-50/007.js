//JSでの変数・関数名ルール：はじめの文字に数字は使用不可

function Prime10001st(){
    //2・3・5・7の４番目までは計算しない
    let order = 4;
    for(let i=11; i<i+1; i++){
      //各位の和
       let devide = String(i).split("");
       let eachNumSum = 0;
       for(let k=0; k<=devide.length-1; k++){
            eachNumSum = eachNumSum + Number(devide[k]);
       }


       //２の倍数・偶数
       if(i%2 === 0){
           continue;
       } //各位の和が３の倍数
       else if(eachNumSum%3 === 0){
           continue;
       } //末尾の数値が０か５
       else if(devide[devide.length-1] === "0" || devide[devide.length-1] === "5"){
           continue;
       } //上記条件以外で、その数値が２以上の他の数字で割れないか
       else {
        let count = 0;
           for(let n=2; n<=i-1; n++){
               if(i%n === 0){
                   continue;
               }else {
                   count = count +1;
               }
              //割れなければ素数＝order番号１追加
              if(count === i-2){
                   order = order+1;
              }
           }
       }

       //order番号が10001番目の数値を出力
       if(order === 10001){
           return i;
       }else {
        continue;
       }
    }

}

Prime10001st();