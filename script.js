function convertToRoman(num) {
 
    const romanSymbols = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };

    let result = '';

    for (const symbol in romanSymbols) {
        while (num >= romanSymbols[symbol]) {
            result += symbol;
            num -= romanSymbols[symbol];
        }
    }

    return result;
}

// Example usage:
console.log(intToRoman(1994)); // Output: 'MCMXCIV'


  //your code here


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
