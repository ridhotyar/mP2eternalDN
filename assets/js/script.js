'use strict'

const elemToggleFunc = function (elem) {
    elem.classList.toggle("hide")
}

const UI = document.querySelectorAll("[UI]")
// const sectionFeatures = document.querySelector("[data-features]")
// const sectionAbout = document.querySelector("[data-about")
// const sectionDownload = document.querySelector("[data-download")
// const sectionContact = document.querySelector("data-contact")

const home = document.querySelector("[home]")
const features = document.querySelector("[features]")
const account = document.querySelector("[account]")
const download = document.querySelector("[unduh]")
const contact = document.querySelector("[contact]")

home.addEventListener("click", function(){
    for (let i = 0; i < UI.length; i++){
        if (i != 0) {
            if (UI[i].classList.contains("hide")) {

            } else {
                elemToggleFunc(UI[i])
            }
        } else if ( UI[i].classList.contains("hide") ) {
            elemToggleFunc(UI[i])
        }

    }
})

features.addEventListener("click", function(){
    for (let i = 0; i < UI.length; i++){
        if (i != 1) {
            if (UI[i].classList.contains("hide")) {

            } else {
                elemToggleFunc(UI[i])
            }
        } else if ( UI[i].classList.contains("hide") ) {
            elemToggleFunc(UI[i])
        }

    }
})

account.addEventListener("click", function(){
    for (let i = 0; i < UI.length; i++){
        if (i != 2) {
            if (UI[i].classList.contains("hide")) {

            } else {
                elemToggleFunc(UI[i])
            }
        } else if ( UI[i].classList.contains("hide") ) {
            elemToggleFunc(UI[i])
        }

    }
})

download.addEventListener("click", function(){
    for (let i = 0; i < UI.length; i++){
        if (i != 3) {
            if (UI[i].classList.contains("hide")) {

            } else {
                elemToggleFunc(UI[i])
            }
        } else if ( UI[i].classList.contains("hide") ) {
            elemToggleFunc(UI[i])
        }

    }
})

contact.addEventListener("click", function(){
    for (let i = 0; i < UI.length; i++){
        if (i != 4) {
            if (UI[i].classList.contains("hide")) {

            } else {
                elemToggleFunc(UI[i])
            }
        } else if ( UI[i].classList.contains("hide") ) {
            elemToggleFunc(UI[i])
        }

    }
})