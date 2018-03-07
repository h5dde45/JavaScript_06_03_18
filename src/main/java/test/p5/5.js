var a = document.getElementById("inp1").value;
a = parseInt(a);
var b = document.getElementById("inp2").value;
b = parseInt(b);

function add() {
    document.getElementById('out').innerHTML = a + b;
}
function subtract() {
    document.getElementById('out').innerHTML = a - b;
}