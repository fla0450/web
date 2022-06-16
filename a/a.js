
let money=0;
function buy(price,name){
    if(money<price){
        alert("돈이 부족합니다");
    }
    else{
        money-=price;
        setMoney(0);
        alert(name+"구매완료");

    }
}
function setMoney(won){
    money+=won;
    console.log(money);
    document.getElementById("main").innerHTML="현재 금액 :"+money+"원";
    isBuy();
}
function isBuy(){
    if(money>=1800){
        document.getElementById("buy1").style.color="blue";
    }else{
        document.getElementById("buy1").style.color="red";
    }
    if(money>=1500){
        document.getElementById("buy2").style.color="blue";
    }else{
        document.getElementById("buy2").style.color="red";
    }
    if(money>=800){
        document.getElementById("buy3").style.color="blue";
    }else{
        document.getElementById("buy3").style.color="red";
    }
}