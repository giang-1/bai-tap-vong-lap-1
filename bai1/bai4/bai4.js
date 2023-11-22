let a = 1;
let b = 0;
let c;
for(i = 1; i <= 20; i++){
    console.log(a);
    c = a + b;
    a = b;
    b = c;
    if(c % 5 == 0 && c <= 5){
        document.write('số đầu tiên chia hết cho 5 là :' + c)
    }
}
// do {
//     c = a + b;
//     a = b;
//     b = c;
// } while (c % 5 != 0);
// document.write('số đầu tiên chia hết cho 5 là :' + c)