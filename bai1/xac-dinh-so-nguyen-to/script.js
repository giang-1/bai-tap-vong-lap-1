let a = parseInt(prompt("nhập a: "));
let b = true;

for(i = 2; i < a; i++){
    if(a < 2 || a % i == 0){
        b = false
    }
}
if (b == true){
    document.write( a + 'là số nguyên tố')
}else{
    document.write(a + 'không phải số nguyên tố')
}
// if (a < 2){
//     b = false
// }else{
//     for (i = 2; i < a; i++){
//         if (a % i == 0){
//             b = false
//         }
//     }
// }
// if(b == true){
//     document.write(a + 'là số nguyên tố')
// }else{
//     document.write(a + 'không phải số nguyên tố')
// }