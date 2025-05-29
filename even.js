//Calculate the average of the odd numbers in an array
function averageOddNumbers(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    const sum = oddNumbers.reduce((a, b) => a + b, 0);
    return sum / oddNumbers.length;

}

// Test the function
console.log(averageOddNumbers([1, 2, 3, 4, 5 , 6])); // Output: 4