let navActions = document.querySelectorAll("header nav #bottom #icons button")

// LOGIN
let closeLogin = document.getElementById("close-login")
let loginArticle = document.getElementById("login-article")
let loginButton = document.getElementById("login-button")
// END OF LOGIN

// SIGNUP
let closeSignup = document.getElementById("close-signup")
let signupArticle = document.getElementById("signup-article")
let signupButton = document.getElementById("signup-button")
// END OF SIGNUP

// CAROUSEL
let carousels = document.querySelectorAll(".slide-me");
const carouselText = document.getElementById('carouselText')
// END OF CAROUSEL

// LOGIN/SIGNUP PROCESS
function login(){
    loginButton.addEventListener("click", ()=>{
        loginArticle.classList.remove("invisible")
    })
}
function logit(){
    signupArticle.classList.add("invisible")
    loginArticle.classList.remove("invisible")
}
function closeLoginButton(){
    loginArticle.classList.add("invisible")
}
function signup(){
    loginArticle.classList.add("invisible")
    signupArticle.classList.remove("invisible")
}
function closeSignupButton(){
    signupArticle.classList.add("invisible")
}
login();
//END LOGIN/SIGNUP PROCESS


// CAROUSELLING
function carouselMe(){
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
carouselMe();
// END OF CAROUSELLING








