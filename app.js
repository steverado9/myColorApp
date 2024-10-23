//A function to generate numbers from 1-100 and style them into even, odd, primeNumbers
function generateNumbers() {
    const div = document.querySelector('#wrapper'); //get the parent element

    for (let number = 1; number <= 100; number++) { // generating the numbers using loop
       //Creating and appending elements to hold the numbers
        const paragraph = document.createElement('p'); //creating a p tag element
        paragraph.textContent = number; //adding the numbers as text content
        div.appendChild(paragraph); // appending the p tag element to the parent div
        // function for odd and even numbers
       function evenOddNumbers () {
            if (number % 2 === 0) {
                paragraph.style.backgroundColor = "green"; //background style for even number
            } else {
                paragraph.style.backgroundColor = "yellow"; //background style for odd number
            }
       }
       evenOddNumbers(); //calling the function for even and odd number
       
       //function for prime number
       function primeNumber () {
            if (number < 2) //if number is less than 2, it is not a prime number
                return number; 
            for (let i = 2; i < number; i++) {  //loop to keep dividing the number to check for multiples of the number
                if (number % i == 0) { //if the number is divisible by i, it is not a prime number
                    return number;
                }
            }
            paragraph.style.backgroundColor = "red"; //if the number gets here, it is a prime number
       } 
       primeNumber(); //calling the function for prime number
    }
}
generateNumbers(); //calling the function to generate number