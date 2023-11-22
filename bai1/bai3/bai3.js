// let a = 0;
// for(i = 1; i<=20; i++){
//     a = a + i
//     console.log(a)
// }
let a = 0;
let b = 1;
let c;

for (i = 1; i <=20; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}