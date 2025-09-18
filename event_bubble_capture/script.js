let ele1=document.getElementById("parent")
let ele2=document.getElementById("child")
let ele3=document.getElementById("subchild")

// ele1.addEventListener("click",function(){
//     console.log("parent is c licked")
// })

// ele2.addEventListener("click",function(){
//     console.log("child is c licked")
// })

// ele3.addEventListener("click",function(){
//     console.log("subchild is c licked")
// })


ele1.addEventListener("click",function(){
    console.log("parent is c licked")
},false)

ele2.addEventListener("click",function(){
    console.log("child is c licked")
},true)

ele3.addEventListener("click",function(){
    console.log("subchild is c licked")
},false)



