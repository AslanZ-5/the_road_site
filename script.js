const navBtns = Array.from(document.querySelectorAll('.navigation-button'))
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"]
const navBarLinks = Array.from(document.querySelectorAll('.nav-link'))
const container = document.querySelector('.container')
let i = 0;
navBtns.forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change')
    }
})

navBarLinks.forEach((item) => {
    item.style.cssText = `background-color:${colors[i++]}`
})

document.querySelector('.open-navbar-icon').addEventListener('click', () =>{
    container.classList.add('change')
})

document.querySelector('.close-navbar-icon').addEventListener('click', () =>{
    container.classList.remove('change')
})