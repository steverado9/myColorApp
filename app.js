const div = document.querySelector('#wrapper'); //get the parent element

//A function to generate numbers from 1-100 and style them into even, odd, primeNumbers
function generateNumbers() {

    for (let number = 1; number <= 100; number++) { // generating the numbers using loop
        //Creating and appending elements to hold the numbers
        const paragraph = document.createElement('p'); //creating a p tag element
        paragraph.textContent = number; //adding the numbers as text content
        div.appendChild(paragraph); // appending the p tag element to the parent div

        const evenOrOdd = isEvenOrOddNumber(number); //calling the function for even and odd number
        if (evenOrOdd) {
            paragraph.style.backgroundColor = "green"; //background style for even number
        } else {
            paragraph.style.backgroundColor = "yellow"; //background style for odd number
        }

        const isPrime = isPrimeNumber(number); //calling the function for prime number
        if (isPrime) {
            paragraph.style.backgroundColor = "red"; //if the number gets here, it is a prime number
        }
    }
}

generateNumbers(); //calling the function to generate number

// function for odd and even numben % 2 === 0rs
function isEvenOrOddNumber(n) {
    return n % 2 === 0;
}

//function for prime number
function isPrimeNumber(n) {
    if (n < 2) //if number is less than 2, it is not a prime number
        return false;

    for (let i = 2; i < n; i++) {  //loop to keep dividing the number to check for multiples of the number
        if (n % i == 0) { //if the number is divisible by i, it is not a prime number
            return false;
        }
    }
    return true;
}