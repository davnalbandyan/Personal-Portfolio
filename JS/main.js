"use strict"

let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach((tab,index)=>{
   tab.addEventListener("click",()=>{
    tabLinks.forEach(item => item.classList.remove("active-link"));
    tabContents.forEach(content => content.classList.remove("active-tab"));

    tab.classList.add("active-link");
    tabContents[index].classList.add("active-tab")
   })
})




