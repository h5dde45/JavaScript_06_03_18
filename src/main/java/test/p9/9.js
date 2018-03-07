// function f1() {
//     var p = document.getElementById('out');
//     var count = 0;
//     while (count < 111) {
//         p.innerHTML += count++ + ' ';
//     }
// }
var array = [2, 3.4, true, 'asd'];
array[4] = 87;
// for (i = 0; i < array.length; i++) {
//     document.getElementById('out1')
//         .innerHTML += array[i] + '<br>';
// }
function push1() {
    var v = document.getElementById('inp1').value;
    array.push(v);
    masOut();
}
function pop1() {
    array.pop();
    masOut();
}
function masOut() {
    var p = document.getElementById('out');
    var str = '';
    for (i = 0; i < array.length; i++) {
        str += i + ' = ' + array[i] + '<br>';
    }
    p.innerHTML = str;
}
masOut();
