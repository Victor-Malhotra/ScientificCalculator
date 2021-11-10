function dis(val) {
    const display = document.getElementById('result');
    display.value += val;
}

function solve() {
    const display = document.getElementById('result');
    let x = display.value;
    let y = eval(x);
    display.value = x + "                                                                   " + y
}
