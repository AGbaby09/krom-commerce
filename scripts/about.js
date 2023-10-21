const menu = document.querySelector(".bx-menu");
const nav = document.querySelector("header nav ul");

if(window.innerWidth < 551){
    menu.addEventListener("click", ()=>{
        if (menu.classList.contains("bx-menu")){
            menu.classList.replace("bx-menu", "bx-x")
            nav.style.transform = "translateY(0%)"
        }else{
            menu.classList.replace("bx-x", "bx-menu")
            nav.style.transform = "translateY(-150%)"
        }
    })
}else{
    nav.style.display = "flex";
    nav.style.transform = "translateY(0%)"
}