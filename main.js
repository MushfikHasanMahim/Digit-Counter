let i = 0
let btn = document.querySelector(".btn")
w = document.querySelector('.display')

btn.addEventListener("click", ()=>{
    w.innerHTML = i;
    i += 1
})