
let form=document.getElementById("form")
form.addEventListener("submit" ,function(e){
    e.preventDefault()

    let obj={
        todo:form.addtodo.value,
        status:false
    }

    fetch("http://localhost:3000/todo",{
    method:"POST",
    headers:{
        "Content-type":"Application/json"
    },
    body:JSON.stringify(obj)

    }).then((res)=>{s
        res.json()
    }).catch((err)=>{
        console.log(err)
    })


})

let data;
async function fetchdata(data){
let res=await fetch("http://localhost:3000/todo")
data=await res.json()
console.log(data);
getdata(data)

}

function getdata(data){
let appendbox=document.getElementById("append")
appendbox.innerHTML=null

data.forEach((el,id)=>{

let box=document.createElement("div")

let todo=document.createElement("li")
todo.innerText=el.todo

let deleteid=document.createElement("button")
deleteid.addEventListener("click",function(){

fetch(`http://localhost:3000/todo/${id}`,{
    method:"DELETE",
    headers:{
        "Content-type":"Application/json"
    }
})
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

//    data.splice(i,1)
//     console.log(data)
//     getdata(data)
})
deleteid.innerText="delete"



 box.append(todo,deleteid)

 appendbox.append(box)

})

}


fetchdata(data)



