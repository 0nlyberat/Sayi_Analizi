let numbers = [];

function addNumber() {
    const input = document.getElementById('numberInput');
    const number = parseFloat(input.value);

    if (!isNaN(number)) {
        numbers.push(number);
        updateResults();
    }

    input.value = '';
    input.focus();
}

function updateResults() {
    const count = numbers.length;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = count > 0 ? sum / count : 0;

    document.getElementById('count').innerText = `Girilen Sayı Adedi: ${count}`;
    document.getElementById('sum').innerText = `Girilen Sayıların Toplamı: ${sum.toFixed(2)}`;
    document.getElementById('average').innerText = `Girilen Sayıların Ortalaması: ${average.toFixed(2)}`;
}

function clearNumbers() {
    numbers = [];
    updateResults();
}

document.getElementById('numberInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addNumber();
    }
});
