var p = document.getElementsByTagName('p');
console.log(p);
var one = document.getElementsByClassName('one');

for (i = 0; i < p.length; i++) {
    p[i].onclick = f1;
}
for (i = 0; i < one.length; i++) {
    one[i].onclick = f2;
}

function f1() {
    console.log(this.innerHTML);
    this.style.background='red';
}
function f2() {
    this.style.fontWeight='bold';
}
