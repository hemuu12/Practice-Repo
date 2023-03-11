



let data=JSON.parse(localStorage.getItem("signup")) || []

let form=document.getElementById("form")
form.addEventListener("submit",function(event){
event.preventDefault()

let obj={
    email:form.email.value,
    password:form.password.value
}
// console.log(obj)
if(checkemail(obj.email, obj.password)===true){
data.push(obj)
localStorage.setItem("Login",JSON.stringify(data))
alert("login Sucessfull")
// window.location.href="login.html"
}else{
   alert("wrong Password") 
//    window.location.href="Login.html"
}





})


function checkemail(email,password){
    let filtered=data.filter((el)=>{
        return email==el.email && password==el.password
    })
    if(filtered.length>0){
        return true
    }else{
        return false
    }
}

// console.log(checkemail("hari.singh1235@gmail.com"))
