"use strict"

let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        tabLinks.forEach(tabItem=>tabItem.classList.remove("active-link"));
        tabContents.forEach(contentItem=>contentItem.classList.remove("active-tab"));

        tabContents[index].classList.add("active-tab");
        tab.classList.add("active-link")
    })
})