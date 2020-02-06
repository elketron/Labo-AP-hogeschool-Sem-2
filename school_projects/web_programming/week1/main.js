// looping a triangle
function triangle() {
    let String = "";

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < i; j++) {
            String+="#";    
        }
        console.log(String + '\n');
        String = ""; 
    }
}
//FizzBuzz

//-- 1) print numbers 1 -100
//-- 2) x/3 & !x/5 clg = "Fizz"
//-- 3) x/5 & !x/3 clg = "Buzz"
//-- 4) x/3 & x/5  clg = "FizzBuzz"
function FizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
            console.log("Fizz");
        }
        else if (i % 3 != 0 && i % 5 == 0) {
            console.log("Buzz");
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            console.log("Fizzbuzz");
        }
        else {console.log(i);}

    }
}
// grid
function grid() {        
    let String = "";
    let Size = 8;
    for (let i = 0; i < Size; i++) {
        for (let j = 0; j < Size; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    String += "#";
                }
                else {String += " ";}
            }
            else {
                if (j % 2 == 0) {
                    String += " ";
                }
                else {String += "#";}
            } 
            
        }
        console.log(String + "\n");
        String = "";
    }
}