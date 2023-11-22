
let a = 0;
let b = 1;
let countFibo = 20;

for (i = 0; i <= countFibo; i++) {
    let c;
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}