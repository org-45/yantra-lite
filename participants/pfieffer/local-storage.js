// Function to save a value to localStorage
function saveToLocalStorage() {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue) {
        localStorage.setItem('userInput', inputValue);
        document.getElementById('savedValue').textContent = `Saved Value: ${inputValue}`;
    } else {
        alert('Please enter a value to save.');
    }
}

// Check if a value is already saved in localStorage
const savedValue = localStorage.getItem('userInput');
if (savedValue) {
    document.getElementById('savedValue').textContent = `Saved Value: ${savedValue}`;
}