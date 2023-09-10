function convertTo() {
    const celsiusInput = document.getElementById('celsius');
    const resultParagraph = document.getElementById('result');
    
    if (celsiusInput.value === '') {
        resultParagraph.innerHTML = 'Please enter a value.';
        return;
    }
    
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    
    resultParagraph.innerHTML = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}
