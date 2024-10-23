function isPrime (n) {
    if (n < 2) //any number less than 2 is not a prime number
        return `${n} is not a prime number`

    for (let i = 2; i < n; i++) { // for i = 2, i will continue to increase till it gets to (n - 1). that will break it out of the loop
        if (n % i == 0) { // if n is divisible by i and its remainder is 0 then it is not a prime number 
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
    
}

console.log(isPrime(35));
