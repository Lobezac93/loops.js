// PART 1 : FIZZ BUZZ

let x = 1;
while (x <100) {
    if(x % 3 === 0 && x % 5 === 0){
        console.log('Fizz Buzz')
    } else if (x % 5 === 0){
        console.log('Buzz')
    } else if (x % 3 == 0 ){
        console.log('Fizz')
    } else {
        console.log(x)
    }
    x++;
}


// PART 2 : PRIME TIME 

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;  // 0 and 1 are not prime numbers
    if (num <= 3) return true;   // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false; // Check divisibility by 2 and 3

    // Check for factors up to the square root of num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Function to find the next prime number greater than or equal to n
function findNextPrime(n) {
    let num = n;
    while (true) {
        if (isPrime(num)) {
            console.log(num);
            break; // Exit the loop when the next prime is found
        }
        num++; // Increment the number and continue the search
    }
}

findNextPrime();  // the function gives the next prime number if a number is inputed.




// PART 3 : FEELING LOOPY 


function processCSV(csvfile) {
    // Split the string into rows based on the newline character
    let rows = csvfile.split('\\n');
    
    // Loop through each row
    for (let row of rows) {
        // Split the row into cells based on the comma
        let cells = row.split(',');
        
        // Log each cell in the row
        console.log(cells[0], cells[1], cells[2], cells[3]);
    }
}

let csvString1 = "ID,Name,Occupation,Age\\n42,Bruce,Knight,41\\n57,Bob,Fry Cook,19\\n63,Blaine,Quiz Master,58\\n98,Bill,Doctor’s Assistant,26";
let csvString2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\\n1,0.00,0.050,0.050\\n2,0.49,0.066,0.066\\n3,0.98,0.087,0.080\\n4,1.47,0.116,0.108\\n5,1.96,0.142,0.138\\n6,2.45,0.166,0.158\\n7,2.94,0.193,0.174\\n8,3.43,0.204,0.192\\n9,3.92,0.226,0.205\\n10,4.41,0.238,0.232";

// Test the function with the provided CSVfile
processCSV(csvString1);
processCSV(csvString2);


