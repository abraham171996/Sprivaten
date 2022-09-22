const btn = document.querySelector(".shearch-button")
const icon = document.querySelector(".shearch")  
const ul = document.querySelector(".ul")
const input = document.querySelector(".input")
const burgerMenu = document.querySelector("#menu")
const close = document.querySelector(".fa-window-close")
const menubar = document.querySelector(".menu-bar")

icon.addEventListener("click",()=>{
    
    if(   ul.getAttribute("class")=="ul"){
        ul.setAttribute("class","remove")
        
        input.classList.add("active")
    }
    else{
        ul.setAttribute("class","ul")
        
        input.classList.remove("active")
    }
        
    
})
 
burgerMenu.addEventListener("click",()=>{
    if(burgerMenu.getAttribute("class")== "burger"){
        burgerMenu.setAttribute("class","exit")
        close.classList.toggle("fa")
        menubar.classList.add("menushow")
        
        

    }
    else{
        burgerMenu.setAttribute("class","burger")
    }
})
close.addEventListener("click",()=>{
    if(burgerMenu.getAttribute("class")== "exit"){
        burgerMenu.setAttribute("class","burger")
       close.classList.remove("fa")
       menubar.classList.remove("menushow")
    }

})


















const swiperWrapper = document.querySelector(".team-wrapper");

let counter = 0

fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>{
    for(let user of data){
        counter++
        swiperWrapper.innerHTML += `
        <div class="swiper-slide">
        <div class="team-page--cards--left">
            <figure>
                <img src="assets/image/Human(${counter}).png" alt="">
            </figure>
            <h5>
                ${user.name}
            </h5>
            <h6>
                ${user.company.name}
            </h6>
            <div class="team-page--cards--left--bottom">
                <img src="assets/image/icon/Facebook.png" alt="">
                <img src="assets/image/icon/Instagram.png" alt="">
                <img src="assets/image/icon/twitter.png" alt="">
            </div>
        </div>
      </div>
        
        `
    }
    
}).catch(error=>console.log(error))


