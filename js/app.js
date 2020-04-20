const sideNav = document.querySelector('.nav-item');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay')
var count = 1;

function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    
    // Display result inside a div element
    if (w <= 600) {
        sideNav.style.display = "none"
    }else if (w > 600) {
        sideNav.style.display = "block"
    }
}
 
// Attaching the event listener function to window's resize event
// window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
// displayWindowSize();



hamburger.addEventListener('click',()=>{
    count++;
    if(count%2 === 0){
        hamburger.classList.add('is-active');
        sideNav.style.display = "block";
        overlay.style.display = "block";

    }else{
        hamburger.classList.remove('is-active');
        overlay.style.display = "none";
        sideNav.style.display = "none"
    

    }
})

