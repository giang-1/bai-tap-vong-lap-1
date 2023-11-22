let a = 1;
let b = 0;
let c ;
for(i = 1; i <= 20; i++){
    console.log(a);
    c = a + b;
    a = b;
    b = c;
    while(a % 5 ==0){
        alert('số đầu tiên chia hết cho 5 là ' + a)
    }
}