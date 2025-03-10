function calc_task1() {
    
    let a = parseFloat(prompt("Введите сторону  квадрата (вещественное число):"));

    if (isNaN(a) || a < 0) {

        alert("Введённое число некорректно!");
        return;

    } else {

        let p = 4 * a;

        alert(`Периметр квадрата: ${p.toFixed(3)}`);
    
    }
}

function calc_task2() {
    let L = parseInt(prompt("Введите расстояние L в сантиметрах (целое положительное число):"), 10);

    if (isNaN(L) || L <= 0) {
        alert("Введённое число некорректно!");
        return;
    } else {
        let result = Math.floor(L / 100); // Количество полных метров

        alert(`Количество полных метров: ${result}`);
    }
}