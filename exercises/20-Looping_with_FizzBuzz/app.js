function fizzBuzz() {
    // Your code here
    let counter = 1;
    while (counter <= 100) {
        if (counter % 5 === 0 && counter % 3 === 0) {
            console.log("FizzBuzz");
        } else if (counter % 5 === 0) {
            console.log("Buzz");
        } else if (counter % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(counter)
        }
        counter++;
    }
}

fizzBuzz();