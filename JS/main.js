"use strict"

let tabLinks = document.querySelectorAll(".tab-links");

let tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach(tab =>{
    tab.addEventListener("click",function(){
        tabLinks.forEach(link=>{
            link.classList.remove("active-link")
        })

        tabContents.forEach(itemTab=>{
            itemTab.classList.remove("active-tab")
        })
    })


})

