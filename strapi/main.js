



let clickme=document.getElementById("clickme")
let infolist=document.getElementById("infolist")
let back=document.getElementById("back")
let Jsonoutside=document.getElementById("Jsonoutside")

clickme.addEventListener("click",()=>{
  infolist.innerHTML=""

fetch("http://localhost:1337/api/classes/")
.then(data=>data.json())
.then(newdata=>{

let fetchData=newdata.data

 fetchData.forEach(element => {
  let {name,lastname,className,age,gender,email}=element.attributes;
  infolist.innerHTML+=`First Name: ${name} <br>`
  infolist.innerHTML+=`Last Name: ${lastname} <br>`
  infolist.innerHTML+=`Ocupation: ${className} <br>`
  infolist.innerHTML+=`Age: ${age} <br>`
  infolist.innerHTML+=`Gender: ${gender} <br>`
  infolist.innerHTML+=`E-mail: ${email} <br><br><hr>`

 

  
})

  
})


})



document.getElementById("myjson").addEventListener("click",()=>{

infolist.innerHTML=""   
fetch("/strapi/impo.json")
.then(data=>data.json())
.then(owndata=>{
    owndata.forEach(element=>{
    // console.log(element) 
    let {FirstName,LastName,Age,Education,Profetion,email,img} =element.amin
    infolist.innerHTML+=`First Name: ${FirstName}<br>`
    infolist.innerHTML+=`Last Name: ${LastName}<br>`
    infolist.innerHTML+=`Age: ${Age}<br>`
    infolist.innerHTML+=`Education: ${Education}<br>`
    infolist.innerHTML+=`Profetion: ${Profetion}<br>`
    infolist.innerHTML+=`E-mail: ${email}<br>`
    infolist.innerHTML+=`Image: ${img}<br> <hr>`
    
    
    })
    
})
})




Jsonoutside.addEventListener("click",()=>{

async function helloAmin(){
    let data=  await fetch("https://jsonplaceholder.typicode.com/users")
    let newdata= await data.json()
    let gotdata= newdata
    console.log(gotdata)
    gotdata.forEach(element => {
    infolist.innerHTML+=`Name: ${element.name}<br>`
    infolist.innerHTML+=`User Name: ${element.username}<br>`
    infolist.innerHTML+=`Email: ${element.email}<br>`
    infolist.innerHTML+=`website: ${element.website}<br> <hr>`

        
    });
}

helloAmin()

})































back.addEventListener("click",()=>{
    infolist.innerHTML=""
    
})