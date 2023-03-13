
let fullName = prompt("Mời bạn nhập họ và tên")
let gender = prompt("Mời bạn nhập giới tính (\"Nam\", \"Nu\")") 
 
let lastName = fullName.slice(0,fullName.indexOf(" "))    
                                                          
console.log("Họ:",lastName)
 
let middelName = fullName.slice(fullName.indexOf(" ")+1,fullName.lastIndexOf(" "))    
console.log("Tên đệm:",middelName)
 
let firstName = fullName.slice(fullName.lastIndexOf(" ")+1)   
console.log("Tên:",firstName)



 
if(gender == "Nam"){
    console.log(fullName = lastName + " Văn " + firstName) 
}else console.log(fullName = lastName + " Vẽ " + firstName)

