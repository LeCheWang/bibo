const slide_img = document.getElementsByClassName("slide_img")

let i = 0;

setInterval(()=>{
    let currentActive = document.querySelector(".active");
    currentActive.classList.remove("active");
    i++;
    if (i === 3){
        i = 0;
    }
    slide_img[i].classList.add("active");
}, 3000)