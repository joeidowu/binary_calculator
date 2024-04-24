// Function to append a value to the input field
function appendValue(value) {
    document.getElementById('binaryInput').value += value;
}

// Function to clear the input field
function clearInput() {
    document.getElementById('binaryInput').value = '';
}

// Function to perform arithmetic operation (+, -, *, /)
function performOperation(operator) {
    let input = document.getElementById('binaryInput').value;
    if (input === '') return; // If no input, do nothing

    // Validate that input contains only 0s and 1s (binary digits)
    if (!/^[01]+$/.test(input)) {
        alert('Invalid binary number!');
        clearInput();
        return;
    }

    // Store the operator and clear the input field
    sessionStorage.setItem('operator', operator);
    clearInput();
}

// Function to calculate the result based on the stored operator
function calculate() {
    let input = document.getElementById('binaryInput').value;
    let storedOperator = sessionStorage.getItem('operator');
    if (!storedOperator || input === '') return; // If no stored operator or no input, do nothing

    // Validate that input contains only 0s and 1s (binary digits)
    if (!/^[01]+$/.test(input)) {
        alert('Invalid binary number!');
        clearInput();
        return;
    }

    let result;
    let num1 = parseInt(input, 2); // Convert binary input to decimal
    let num2 = parseInt(sessionStorage.getItem('previousInput'), 2); // Convert previous binary input to decimal

    switch (storedOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num2 - num1;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num1 === 0) {
                alert('Division by zero error!');
                clearInput();
                return;
            }
            result = num2 / num1;
            break;
    }

    // Display the result in binary format
    document.getElementById('result').value = result.toString(2);
    sessionStorage.setItem('previousInput', result.toString(2));
}
