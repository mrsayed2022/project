// start nav


let ol=document.getElementById("ol")
let li=document.getElementById("li-c")


li.addEventListener("click",()=>{
    ol.classList.toggle("ol-active")


})

window.onload=function () {
    if (window.width<=600) {
        console.log(screen)
    }
}

let lio=document.getElementById("li-c2")
let oll=document.getElementById("oll")

lio.addEventListener("click",()=>{
    oll.classList.toggle("ol-active")


})
let ico=document.querySelector(".ico-1")
let mn=document.querySelector(".mn")

ico.addEventListener("click",()=>{
mn.classList.toggle("mnac")

})

// end nav

// start search

let search=document.querySelector(".searchapp")
let imge=document.querySelectorAll(".imge")
search.addEventListener("keyup",()=>{
let sea=search.value.trim()

imge.forEach(img => {
    // console.log(img.textContent.startsWith(sea))
    let mn=img.classList.contains(sea)
if (img.classList.contains(sea)) {
    
    img.style.display="block"
}

else{
    img.style.display="none"
}
if (search.value=="") {
    img.style.display="block"
    
}


    // if (img.textContent.startsWith(sea)) {
    //     img.style.display="none"
    // }else{
    //     img.style.display="block"

    // }

    //  if (sea=="") {
    //     console.log("kklkl")
    //     img.style.display="block"
        
    // }
 });

 })


// // end search


let imges=document.querySelectorAll(".imge img")
let buy=document.querySelectorAll(".icc")
let lo=document.querySelector(".lii")
let pp=document.querySelectorAll(".pp")
let size=document.querySelector(".size")

let span=document.getElementsByTagName("span")
let kl=[]

for (let m = 0; m < buy.length; m++) {
   


    

    buy[m].addEventListener("click",(e)=>{
        
        let im=imges[m].src
        console.log(span[m])
     let kj=e.target.innerHTML
     pps=pp[m].textContent
     spans=span[m].textContent


        
     
los=`
<div class="imge  ايفون موبايل" data-size="اضف للعربه">
<img class="loo" src="${im}" alt="">
<div class="icc">
${kj}

<div class="size">
<p class="pp">${pps}</p>
<span>${spans}</span>
<i class="fa fa-remove ssrd" onclick="funer(${m})" ></i>

</div>
<div class="start">
<i class="fas fa-star" style="color:rgba(101, 101, 44, 0.566) ;"></i>
<i class="fas fa-star" style="color:rgba(101, 101, 44, 0.566) ;"></i>
<i class="fas fa-star" style="color:rgba(101, 101, 44, 0.566) ;"></i>
<i class="fas fa-star" style="color:rgba(101, 101, 44, 0.566) ;"></i>
<i class="fas fa-star"></i>

</div>       </div>



`

lo.innerHTML+=los



function funer() {
    
 console.log("lolololo")
} 





})

}
    function removeis(ev) {
  
    }
removeis()
let icc=document.querySelector(".ico-2")
let lii=document.querySelector(".lii")
icc.addEventListener("click",()=>{
    lii.classList.toggle("liiac")
})


let delet=document.querySelector(".ssrd")
console.log(delet)



// delet[m].addEventListener("click",()=>{

// })














