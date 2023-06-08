const bar = document.querySelector(".fa-bars");
const sidebar1 = document.querySelector(".sidebar1");
const content = document.querySelector(".content")
const shopping_cart = document.querySelector(".fa-cart-shopping");
const cross = document.querySelector(".fa-x");
const sidebar2 = document.querySelector(".sidebar2");
const item_foods = document.querySelector("#item-foods"),
     item_beauty_products = document.querySelector("#item-beauty_products"),
     item_health_products = document.querySelector("#item-health_products");
     
 const foods = document.querySelector("#foods"),
     beauty_products = document.querySelector("#beauty_products"),
     health_products = document.querySelector("#health_products");

 const btn = document.querySelector("button");

     item_foods.addEventListener("click",()=>{
        foods.style.display = "block";
        beauty_products.style.display = "none";
        health_products.style.display = "none";
     });

     item_beauty_products.addEventListener("click",()=>{
        beauty_products.style.display = "block";
        foods.style.display = "none";
        health_products.style.display = "none";
     });
     item_health_products.addEventListener("click",()=>{
        health_products.style.display = "block";
        foods.style.display = "none";
        beauty_products.style.display = "none";

     });



const display_sidebar1 = ()=>{
    sidebar1.style.display  = "block";

}
bar.addEventListener("click", display_sidebar1);

const display_sidebar2 = () =>{
    sidebar2.style.display = "block"
    content.style.width = "900px";
}

shopping_cart.addEventListener("click", display_sidebar2);

content.addEventListener("click", ()=>{
    sidebar1.style.display = "none";
    //sidebar2.style.display = " none";
    content.style.display = "1500px"
});

cross.addEventListener("click", ()=>{
 sidebar2.style.display = "none";
 content.style.width = "1300px";
});

btn.addEventListener("click", ()=>{
    sidebar2.style.display = "block";
});