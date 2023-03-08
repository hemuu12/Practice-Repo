
let wallet=document.getElementById("Wallet").innerText=25000
console.log(wallet)




let listgrocery= []

let data;
async function getdata(){
let res=await fetch("https://dummyjson.com/products")
data=await res.json()
Appenddata(data.products)
}

getdata()

function Appenddata(data){

let grid =document.getElementById("grid")

    data.forEach((el)=>{
    
    let maindiv=document.createElement("div")

    let img=document.createElement("img")
    img.src=el.images[0]
    let title=document.createElement("p")
    title.innerText=el.title
    let price=document.createElement("p")
    price.innerText=el.price
        




    let addcart=document.createElement("button")
    addcart.innerText="Add To Cart"
    addcart.addEventListener("click",function(){
        add(el)
    })
    
   
    maindiv.append(img,title,price,addcart)

    grid.append(maindiv)

})




}



function add(el){
//  console.log(el)
 let newprice=wallet-el.price

 listgrocery.push(el)

localStorage.setItem("smartphones",JSON.stringify(listgrocery))
wallet=document.getElementById("Wallet").innerText=newprice


}
// console.log(listgrocery)



