const navBtns = Array.from(document.querySelectorAll('.navigation-button'))
navBtns.forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change')
    }
})