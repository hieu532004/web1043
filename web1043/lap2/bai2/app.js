
let a = prompt("mời bạn nhập a"); a = parseInt(a,10)
let b = prompt("mời bạn nhập b"); b = parseInt(b,10)
let c = prompt("mời bạn nhập c"); c = parseInt(c,10)
if(a+b>c && a+c>b && c+b>a){
    if(a==b && a==c){                                 
        console.log("Đây là tam giác đều")
    }else if(a==b || b==c || c==a){                    
        console.log("Đây là tam giác cân")              
    }else if(a*a + b*b== c*c || a*a + c*c == b*b || b*b + c*c == a*a ){
        console.log("Đây là tam giác vuông")
    }else console.log("Đây là tam giác thường")
}else console.log("3 cạnh không phải là tam giác")