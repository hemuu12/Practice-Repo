
let smartphones=JSON.parse(localStorage.getItem("smartphones"))||[]


function total(smartphones){
    let bag=0
    for(let i=0;i<smartphones.length;i++){
        bag=bag+smartphones[i].price
    }
    console.log(bag)
    let cart_total=document.getElementById("cart_total")
    cart_total.innerText=bag

}
total(smartphones)


const getdata=(smartphones)=>{
     let maindiv=document.getElementById("append")
    smartphones.forEach((el,i)=>{
        let box=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.images[0]

        let title=document.createElement("h3")
        title.innerText=el.title

        let price=document.createElement("p")
        price.innerText=el.price

        let button=document.createElement("button")
        button.innerText="remove"

        button.addEventListener("click",function(){
            remove(el,i)
            total(smartphones)
                
        })

        box.append(img,title,price,button)
        maindiv.append(box)

    })

 }


 getdata(smartphones)
function remove(el,i){
    smartphones.splice(i,1)
    localStorage.setItem("smartphones",JSON.stringify(smartphones))
    getdata(smartphones)
   
}

