function fibonacciGenerator(n) {
    // The function will return an array of Fibonacci numbers with n elements.
    
    var sequence = [0, 1]; // Initialize the sequence with the first two numbers.

    if (n === 1) {
      return [0]; // If n is 1, return an array with only the first number of the sequence.
    } else {
    for (var i = 2; i < n; i++) {
        // Start the loop from 2 because the first two numbers are predefined.
        // The loop continues until it has added (n - 2) new elements to the sequence.
        sequence.push(sequence[i - 1] + sequence[i - 2]);
        // Push the sum of the last two numbers in the sequence to generate the new number.
    }
    }

    return sequence.slice(0, n); // Return the sequence array with n elements.
}