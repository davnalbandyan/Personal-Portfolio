"use strict"

let closeMenu = document.querySelector('.close');

let openMenu = document.querySelector(".menu-open");

let sideMenu = document.querySelector("#sidemenu");

openMenu.addEventListener("click",()=>{
    sideMenu.style.right = "0"
})

closeMenu.addEventListener("click",()=>{
    sideMenu.style.right = "-200px"
})