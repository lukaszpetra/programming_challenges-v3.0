
function FizzBuzz(){

    for(let i=1; i<101; i++){

        if((i % 5)===0 && (i % 3)==0){
            console.log(i + " FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log(i + " Fizz");
        }
        else if (i % 5 ===0){
            console.log(i +" Buzz");
        }
        else console.log(i);
    }

}

FizzBuzz();