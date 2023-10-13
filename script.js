function convertirCelciusAFarenheit(celsius) {
    return (celsius * 1.8) + 32;
}

function convertirCelciusAKelvin(celsius) {
    return celsius + 273.15;
}

function convertirTemperatura() {
    let grados = document.getElementById('inputCelsius').value;

    while(isNaN(grados)){
        grados = prompt('Error. Ingresa un valor numérico para la temperatura en grados Celsius:');
    }

    const celsius = parseFloat(grados);
    const fahrenheit = convertirCelciusAFarenheit(celsius);
    const kelvin = convertirCelciusAKelvin(celsius);

    const resultado = document.getElementById('resultado');
    resultado.innerText = `Grados fahrenheit: ${fahrenheit}`;

    const resultado2 = document.getElementById('resultado2');
    resultado2.innerText = `Grados kelvin: ${kelvin}`;
    
}

convertirTemperatura()