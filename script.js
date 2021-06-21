function scrollView(){
    const header = document.querySelector("header");
    const img = document.getElementById("image");
    const nav = document.querySelector("nav");
    header.classList.toggle("sticky");
    if(header.classList.contains("sticky")){
        document.body.style.overflow = "scroll";
        img.style.transform = "rotate(90deg)";
        nav.style.display = "flex";
    } else {
        document.body.style.overflow = "hidden";
        img.style.transform = "rotate(270deg)";
        nav.style.display = "none";
    }
}

function dropdown(){
    const drop = document.getElementById("drop");
    if(drop.style.display == "block"){
        drop.style.display = "none";
    } else {
        drop.style.display = "block";
    }

}

const btn = document.getElementById("btn");
btn.addEventListener("click", scrollView)

const droplist = document.getElementById("dropdown");
droplist.addEventListener("click", dropdown)