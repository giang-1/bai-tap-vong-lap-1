let a = 1;
let b = 0;
let c ;
let tong = 0
for(i = 1; i <= 20; i++){
    console.log(a);
    c = a + b;
    a = b;
    b = c;
    tong += c
}
document.write(tong)
