let a = prompt("Mời bạn a");a = parseInt(a);
let b = prompt("Mời bạn b");b = parseInt(b);
let c = prompt("Mời bạn c");c = parseInt(c);
console.log(a+'  '+ b+'  '+ c)

if (a==0){                              

    console.log("Giải pt bậc nhất")
    if(b==0){                           

        if(c==0){                     
            console.log("Phương trình có vô số nghiệm")
        }else( console.log("phương trình vô nghiệm"))       
    }else(console.log("Phương trình có nghiệm x= ",(-b/c))) 
}else{                                                      
    console.log("Giải PT bậc 2")
    let delta = b*b - 4 *a*c                               
    console.log("Deltal = ",delta)
    document.write(delta)

    if(delta < 0){                                         
        console.log("Phương trình vô nghiệm")
    }else if(delta == 0){                                  
        console.log("Phương trình có nghiệm kép : x = ",(-b/(2*a)) )
    }else(                                                  
        console.log("Phương trình có 2 nghiệm phân biệt : "),
        console.log("x1 = ",(-b + Math.sqrt(delta))/(2*a)),
        console.log("x2 = ",(-b - Math.sqrt(delta))/(2*a))
    )
    
}
