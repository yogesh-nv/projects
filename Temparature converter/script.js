// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const convertButton = document.getElementById('convertButton');
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', function() {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsiusValue)) {
        const convertedFahrenheit = celsiusToFahrenheit(celsiusValue);
        fahrenheitInput.value = convertedFahrenheit.toFixed(2);
        resultDiv.innerText = `${celsiusValue}°C is equal to ${convertedFahrenheit.toFixed(2)}°F`;
    } else if (!isNaN(fahrenheitValue)) {
        const convertedCelsius = fahrenheitToCelsius(fahrenheitValue);
        celsiusInput.value = convertedCelsius.toFixed(2);
        resultDiv.innerText = `${fahrenheitValue}°F is equal to ${convertedCelsius.toFixed(2)}°C`;
    } else {
        resultDiv.innerText = "Please enter a valid temperature.";
    }
});
