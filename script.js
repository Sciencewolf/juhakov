/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function func(){
    document.documentElement.scrollTop = 0;
}

function redirect(){
    setTimeout(function(){console.log("Redirect"); window.location.href = "https://www.google.com";}, 4000);
}