

let data=JSON.parse(localStorage.getItem("signup")) || []

let form=document.getElementById("form")
form.addEventListener("submit",function(event){
event.preventDefault()

let obj={
    username:form.username.value,
    email:form.email.value,
    password:form.password.value
}
// console.log(obj)
if(checkemail(obj.email)===true){
data.push(obj)
localStorage.setItem("signup",JSON.stringify(data))
alert("signup Sucessfull")
window.location.href="login.html"
}else{
   alert("user Data Already exist") 
   window.location.href="Login.html"
}

form.username.innerText=""
form.email.innerText=""
form.password.innerText=""



})


function checkemail(email){
    let filtered=data.filter((el)=>{
        return email==el.email
    })
    if(filtered.length>0){
        return false 
    }else{
        return true
    }
}

// console.log(checkemail("hari.singh1235@gmail.com"))
