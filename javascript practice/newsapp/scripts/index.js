// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


let news=[]

function Submit(){
let search=document.getElementById("search").value

getdata(search)

}


let data
let getdata=async(search,id)=>{
let res=await fetch(`https://newsapi.org/v2/top-headlines?country=${search||id}&apiKey=7f094e3b68234a2581609b28cd8d3e0d`)
data=await res.json()
append(data.articles)


}







function append(data){

let maindiv=document.getElementById("append")
data.forEach((el)=>{

    let box=document.createElement("div")

    let img=document.createElement("img")
    img.src=el.url

    let author=document.createElement("h2")
    author.innerText=el.author

    let title=document.createElement("p")
    title.innerText=el.title

    box.append(img,author,title)
    box.addEventListener("click",function(){
        adddata(el)
    })

    maindiv.append(box)

})



}

Submit()




// Onclicking counteries news
                                                    
// let india=document.getElementById("in").value="in"
// console.log(india)

function direct(id){
if(id=="in"){
    getdata(id)
}else if(id=="us"){
   getdata(id)
}  else if(id=="nz"){
    getdata(id)
} else if(id=="ch"){
    getdata(id)
} else if(id=="uk"){
    getdata(id)
}   

}





function adddata(el){
news.push(el)

localStorage.setItem("news",JSON.stringify(news))


}