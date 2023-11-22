function doanso(){
    let a = prompt("Số bạn muốn đoán nằm trong khoảng lớn nhất là số nào")
    let ramdom = Math.floor(Math.random()*a) 
    let doan = prompt('nhập số bạn đoán')
    for(i = 0; i < 3; i++){
        if(doan == ramdom){
            alert('bạn đã đoán đúng')
            i = 3
        }else if(doan < ramdom){
            alert('bạn đoán nhỏ hơn')
            doan = prompt('nhập lại số bạn đoán')
        }else{
            alert('bạn đoán cao hơn')
            doan = prompt('nhập lại số bạn đoán')
        }
    }
}