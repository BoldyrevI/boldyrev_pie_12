function calc_task1() {
    
    const n = parseInt(document.getElementById('n').value);
    const numbersInput = document.getElementById('numbers').value;
    const numbers = numbersInput.split(';').map(num => parseFloat(num.trim()));
    let product = 1;

    if (numbers.length !== n) {
        document.getElementById('result_task1').textContent = "Ошибка: количество чисел не совпадает с N!";
        return;
    }

    for (let i = 0; i < n; i++) {
        const num = numbers[i];

        if (isNaN(num)) {
            document.getElementById('result_task1').textContent = "Ошибка: введите корректные числа!";
            return;
        }

        if (num % 1 === 0 && num % 2 === 0) {
            product *= num;
        }
    }


    document.getElementById('result_task1').textContent = `Произведение четных чисел: ${product}`;
}

function calc_task2() {
    
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const step = parseInt(document.getElementById('step').value);
    let result = "";

 
    if (
        isNaN(min) || 
        isNaN(max) || 
        isNaN(step) || 
        step <= 0 || 
        min > max
    ) {
        document.getElementById('result_task2').innerHTML = "Ошибка: введите корректные числа (минимум < максимум, шаг > 0)";
        return;
    }

    result += `<h4>Ряд чисел:</h4>`;
    for (let i = min; i <= max; i += step) {
        result += `${i} `;
    }

    result = result.trim();

    document.getElementById('result_task2').innerHTML = result;
}