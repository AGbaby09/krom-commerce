const products = [
    {
        prodImg:"./assets/images/bag0.jpg",
        prodName:"Tokyo Ghoul",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag1.jpg",
        prodName:"Adidas Red",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag2.jpg",
        prodName:"Adidas B/W",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag3.jpg",
        prodName:"Colorful Polka",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/classic-brown.JPG",
        prodName:"Classic Brown",
        prodCost: 190,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag0.jpg",
        prodName:"Tokyo Ghoul",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag1.jpg",
        prodName:"Adidas Red",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag2.jpg",
        prodName:"Adidas B/W",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag3.jpg",
        prodName:"Colorful Polka",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/classic-brown.JPG",
        prodName:"Classic Brown",
        prodCost: 190,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag0.jpg",
        prodName:"Tokyo Ghoul",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag1.jpg",
        prodName:"Adidas Red",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag2.jpg",
        prodName:"Adidas B/W",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag3.jpg",
        prodName:"Colorful Polka",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/classic-brown.JPG",
        prodName:"Classic Brown",
        prodCost: 190,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag0.jpg",
        prodName:"Tokyo Ghoul",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag1.jpg",
        prodName:"Adidas Red",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag2.jpg",
        prodName:"Adidas B/W",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/bag3.jpg",
        prodName:"Colorful Polka",
        prodCost: 60,
        store: "thrift",
    },
    {
        prodImg:"./assets/images/classic-brown.JPG",
        prodName:"Classic Brown",
        prodCost: 190,
        store: "thrift",
    },
    
]

window.addEventListener("DOMContentLoaded", ()=>{
    let items_list = document.getElementById("items-list");
    

    
    function displayItems(products){
        let displayMenu = products.map((product)=>{
            
            return `<div class="card rel hidden">
                        <div id="item-img" class="center">
                            <img src=${product.prodImg} alt="">
                        </div>
                        <div id="tag" class="abs font2">
                            <button class="like-heart abs center" title="like">
                                <i class='bx bx-heart' ></i>
                            </button>
                            <h3 id="tag-name">${product.prodName}</h3>
                            <p id="tag-price">GH₵ ${product.prodCost}.00</p>
                        </div>
                        <button id="toCart" class="abs center">Add to cart <i class='bx bxs-cart-add'></i></button>
                    </div>`;
        })
        displayMenu = displayMenu.join("");
        items_list.innerHTML = displayMenu;
    }
                
    displayItems(products);
    let wishCount = 0;
    const wishBanner = document.getElementById("wishBanner")
    let like_hearts = document.querySelectorAll(".like-heart");
    
    like_hearts.forEach( like_heart => {
        like_heart.addEventListener("click", ()=>{
            if(like_heart.getElementsByTagName("i")[0].classList.contains("bx-heart")){
                like_heart.querySelector("i").classList.replace("bx-heart", "bxs-heart")
                wishCount++;
            }else{
                like_heart.querySelector("i").classList.replace("bxs-heart","bx-heart");
                wishCount--;
            }
            wishBanner.textContent = wishCount;
        })
    })
    
    const add_Cart = document.getElementById("addedToCart")
    let cart_list = document.querySelector("#cart-list");
    let cards = document.querySelectorAll(".card")
    const cartBanner = document.getElementById("cartBanner")

    cards.forEach(card=>{
        card.querySelector("#item-img").addEventListener("click", (e)=>{
            modalArticle.classList.replace("invisible", "visible")
            modalImg.setAttribute("src", e.target.getAttribute("src"))
            modalName.innerText = card.querySelector("#tag").querySelector("#tag-name").textContent;
            modalCost.innerText = card.querySelector("#tag").querySelector("#tag-price").textContent;
        })

        card.querySelector("#toCart").addEventListener("click", ()=>{
            console.log(card.querySelector("#tag").querySelector("#tag-name").textContent)
            console.log(card.querySelector("#item-img").querySelector("img").getAttribute("src"))
            console.log(card.querySelector("#tag").querySelector("#tag-price").textContent)
            
            cart_list.appendChild(some_name(card.querySelector("#item-img").querySelector("img").getAttribute("src")))
            cartBanner.textContent = `${cart_list.querySelectorAll("div").length}`
            addCart();
        })

    })
    function some_name(src){
        let div = document.createElement("div")
        let img = document.createElement("img")
        let button = document.createElement("button")
        let i = `<i  class='bx bx-x' ></i>`

        div.classList = ["tab between rel"]
        img.setAttribute("src", src)
        button.id = "pop-cart-item"
        button.classList = ["center abs"]

        button.innerHTML = i
        div.appendChild(img)
        div.appendChild(button)
        
        return div;
    }

    function addCart(){
        add_Cart.classList.remove("invisible")
        setTimeout(()=>{add_Cart.classList.add("invisible")}, 600)
    }
})
