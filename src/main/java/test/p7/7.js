function f1() {
    var n = document.getElementById('num1').value;
    var p = document.getElementById('out');
    n = parseInt(n);
    if (n == 100) {
        p.innerHTML = 'num = 100';
    } else if (n < 100) {
        p.innerHTML = 'num < 100';
    } else {
        p.innerHTML = 'num > 100';
    }

}
