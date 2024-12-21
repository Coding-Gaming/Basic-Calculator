const defaultResult = 0;
let currentResult = defaultResult;


// Validate and parse the user input into a number with fallback to defaultResult of 0
const numCheck = () => !isNaN(parseInt(userInput.value)) ? parseInt(userInput.value) : defaultResult;

/**
 * Adds the current input value to the current result and outputs the result.
 */
function add() {
    // Validate and parse the user input into a number
    const userInputValue = numCheck();
    // Create a description of the calculation performed
    const calculationDescription = `${currentResult} + ${userInputValue}`;
    // Update the current result by adding the user input value
    currentResult += userInputValue;
    // Output the updated result and the calculation description
    outputResult(currentResult, calculationDescription);
}

function subtract() {
    const userInputValue = numCheck();    
    const calculationDescription = `${currentResult} - ${userInputValue}`;
    currentResult -= userInputValue;
    outputResult(currentResult, calculationDescription);
}

function multiply() {
    const userInputValue = numCheck();    
    const calculationDescription = `${currentResult} * ${userInputValue}`;
    currentResult *= userInputValue;
    outputResult(currentResult, calculationDescription);
}

function divide() {
    const userInputValue = numCheck();    
    const calculationDescription = `${currentResult} / ${userInputValue}`;
    currentResult /= userInputValue;
    outputResult(currentResult, calculationDescription);
}


// Add event listeners to the buttons 
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


// Add event listener to the color picker
const colorPicker = document.getElementById('color-picker');
const colorValueSpan = document.getElementById('color-value');
const root = document.documentElement;
// Update the color when the color picker value changes
colorPicker.addEventListener('input', (e) => {
  const newColor = e.target.value;
  root.style.setProperty('--primary-color', newColor);
  colorValueSpan.textContent = newColor;
});
