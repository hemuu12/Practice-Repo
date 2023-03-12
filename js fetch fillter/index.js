
let data
async function fetchdata(){
let res=await fetch(`http://localhost:3000/Mens`)
data=await res.json()
// console.log(data)
getdata(data)
}

fetchdata()



function getdata(data){

let getdata=document.getElementById("append")
getdata.innerHTML=null

data.slice(0,4).forEach((el,i)=>{

let box=document.createElement("div")
box.style="border:1px solid black"

let image=document.createElement("img")
image.src=el.imageUrl[0]
image.style="width:200px"
let name=document.createElement("h3")
name.innerText=el.Title

let category=document.createElement("p")
category.innerText=el.Category_name

let brand=document.createElement("p")
brand.innerText=el.Brand


box.append(image,name,category,brand)

getdata.append(box)

})



}



function handleOnChange(event){
    const { value } = event.target;
    if (value == "ALL") {
       getdata(data);

    
    } 
    let filterData = data.filter((el) => el.Brand == value);
    getdata(filterData);
    console.log(filterData)
}   


function handleOnChangePage(event) {
    const { value } = event.target;
  
    if (value == "1") {
      let pageData = data.slice(0, 4);
      getdata(pageData);
    } else if (value == "2") {
      let pageData = data.slice(5, 8);
      getdata(pageData);
    } else if (value == "3") {
      let pageData = data.slice(9, 13);
      getdata(pageData);
    }
  }