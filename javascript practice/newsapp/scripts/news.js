// Ude Import export (MANDATORY)


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
    
    
function append(data,news){
    
    let maindiv=document.getElementById("append")
   news || data.forEach((el)=>{
    
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



  let news=JSON.parse(localStorage.getItem("news"))||[]
  
  
  console.log(news)



append(news)