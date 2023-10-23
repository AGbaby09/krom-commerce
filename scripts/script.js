// SCROLL
let items_list = document.getElementById("items-list");
// END OF SCROLL

// LOGIN
let closeLogin = document.getElementById("close-login")
let loginArticle = document.getElementById("login-article")
let loginButton = document.getElementById("login-button")
// END OF LOGIN

// SIGNUP
let closeSignup = document.getElementById("close-signup")
let signupArticle = document.getElementById("signup-article")
let signupButton = document.getElementById("signup-button")
let signupLink = document.getElementById("signup-link")
// END OF SIGNUP

// CART
let closeCart = document.getElementById("close-cart")
let cartArticle = document.getElementById("cart-article")
async function closeCartButton(){
    cartArticle.classList.replace("visible", "invisible")
}
async function openCartButton(){
    cartArticle.classList.replace("invisible", "visible")
}
// END OF CART

// WISH
let closeWish = document.getElementById("close-wish")
let wishArticle = document.getElementById("wish-article")
async function closeWishButton(){
    wishArticle.classList.replace("visible", "invisible")
}
async function openWishButton(){
    wishArticle.classList.replace("invisible", "visible")
}
// END OF WISH

// MODAL
let closeModal = document.getElementById("close-modal")
let modalArticle = document.getElementById("modal-article")
let modalName = document.getElementById("modal-name")
let modalCost = document.getElementById("modal-cost")
let modalImg = document.getElementById("modal-img").querySelector("img")
async function closeModals(){
    modalArticle.classList.replace("visible", "invisible")
}
// END OF MODAL

// CAROUSEL
let carousels = document.querySelectorAll(".slide-me");
const carouselText = document.getElementById('carouselText')
// END OF CAROUSEL

// LOGIN/SIGNUP PROCESS
async function login(){
    loginButton.addEventListener("click", ()=>{
        loginArticle.classList.remove("invisible")
    })
    signupLink.addEventListener("click", ()=>{
        signupArticle.classList.remove("invisible")
    })
}
async function logit(){
    signupArticle.classList.add("invisible")
    loginArticle.classList.remove("invisible")
}
async function closeLoginButton(){
    loginArticle.classList.add("invisible")
}
async function signup(){
    loginArticle.classList.add("invisible")
    signupArticle.classList.remove("invisible")
}
async function closeSignupButton(){
    signupArticle.classList.add("invisible")
}
//END LOGIN/SIGNUP PROCESS


// CAROUSELLING
async function carouselMe(){
    carousels.forEach(  carousel => {
        for(let i = 0 ; i < carousel.querySelectorAll("img").length; i++){
            carousel.querySelectorAll("img")[i].style.left = `${i}00%`
        }
        
        let carouselCount = 0;
        let texts = ["thrift", "burners", "artworks", "carz"]
        setInterval(()=>{
            carouselCount--;
            if(carouselCount == -(carousel.querySelectorAll("img").length)){
                carouselCount = 0;
            }
            carouselText.textContent = texts[-(carouselCount)]
            carousel.style.transform = `translateX(${carouselCount}00%)`;
        }, 5000)
    })
}
// END OF CAROUSELLING

// SIDE MENU
const side_menu = document.getElementById("side-menu")
const side_Menu = document.getElementById("side-Menu")
// END OF SIDE MENU


window.addEventListener("DOMContentLoaded", ()=>{
    login();
    carouselMe();
    
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > (items_list.offsetTop - 50)){
            side_menu.classList.remove("invisible")
            side_Menu.classList.remove("invisible")
        }else{
            side_menu.classList.add("invisible")
            side_Menu.classList.add("invisible")
        } 
    })

    const menu = document.querySelector("#nav-menu");
    const nav = document.querySelector("#contacts");

    if(window.innerWidth < 551){
        menu.addEventListener("click", ()=>{
            if (menu.querySelector("i").classList.contains("bx-menu")){
                menu.querySelector("i").classList.replace("bx-menu", "bx-x")
                nav.style.transform = "translateX(0%)"
            }else{
                menu.querySelector("i").classList.replace("bx-x", "bx-menu")
                nav.style.transform = "translateX(-110%)"
            }
        })
    }
})








