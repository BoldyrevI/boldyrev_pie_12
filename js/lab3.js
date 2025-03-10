function check_task1() {

    let a = parseFloat(document.getElementById('inputA').value);
    let result_text = document.getElementById('result_task1');

   
    if (isNaN(a) || !Number.isInteger(a)) {
        result_text.textContent = "Ошибка: введите корректное целое число.";
        result_text.style.color = 'red';
        return;
    }

   
    let isTrue = (a > 0) && (a >= 10) && (a <= 99);
    let result = isTrue ? "TRUE" : "FALSE";

 
    result_text.textContent = `Результат: ${result}`;
    result_text.style.color = 'black';
}

function calc_task2() {
    
    let a = parseFloat(document.getElementById('inputX').value);
    
   
    if (isNaN(a) || !Number.isInteger(a)) {
        document.getElementById('result').textContent = "Ошибка: введите корректное целое число";
        return;
    }

  
    if (a > 0 && a % 2 === 0) {
        a += 1; 
    }

   
    document.getElementById('result').textContent = "Результат: " + a;
}

function calc_task3() {

    let x = parseFloat(document.getElementById("inputFunc").value);

    let a = 2.1;
    let b = 6.7; 
    let result;

    if (x < -2) {
       
        result = Math.pow(x, 3) + 2 * a;

    } else if (x >= -2 && x <= 5) {
       
        if (Math.abs(Math.cos(b * x)) < 1e-10) { 
            result = "Ошибка: логарифм от нуля не определен";
        } else {
            result = Math.log(Math.abs(Math.cos(b * x)));
        }

    } else if (x > 5) {
       
        result = Math.pow(x, 2) * Math.exp(x);

    } else {
        result = "Неверный ввод";
    }

    
    if (typeof result === 'number') {
        document.getElementById("result_task3").textContent = `Значение y: ${result.toFixed(5)}`;
    } else {
        document.getElementById("result_task3").textContent = result;
    }
}

function calc_task4() {
    
    let a = 2.1; 
    let b = 6.7; 

    let xValues = [-2, 4, 6, 8]; 
    let result = ''; 

    for (let i = 0; i < xValues.length; i++) {
        let x = xValues[i];
        let y;

        
        switch (true) {
            case (x < -2):
                y = Math.pow(x, 3) + 2 * a; 
                break;

            case (x >= -2 && x <= 5):
                if (Math.abs(Math.cos(b * x)) < 1e-10) { 
                    y = "Ошибка: логарифм от нуля";
                } else {
                    y = Math.log(Math.abs(Math.cos(b * x))); 
                }
                break;

            case (x > 5):
                y = Math.pow(x, 2) * Math.exp(x); 
                break;

            default:
                y = "Неверный ввод";
                break;
        }

        
        result += `Для x = ${x}, y = ${y instanceof Number ? y.toFixed(5) : y}<br>`;
    }

    
    document.getElementById("result_task4").innerHTML = result;
}