const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})


// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})


// Parallax animation on Scroll 
// window.addEventListener("mousemove", parallax);
window.addEventListener("scroll", parallax);
const parallaxElements = document.querySelectorAll(".product-section-scaling-container");
console.log(parallaxElements);

function parallax(event) {
    /*
    document.querySelectorAll(".product-section-scaling-container").forEach((parallaxElement) => {
        const position = parallaxElement.getAttribute("value");
        
        //const x = (window.innerWidth - event.pageX * position) / 90;
        //const y = (window.innerHeight - event.pageY * position) / 90;

        //parallaxElement.style.transform = `translateX(${x}px) translateY(${y}px)`;
        
       console.log("position = "+position);
       console.log("parallax style: "+parallaxElement.style.transform);

    });
    */

    for (const parallaxEl of parallaxElements) {
        console.log('offset: ' +this.pageYOffset);
        console.log(parallaxEl.style);
        console.log('before: '+getComputedStyle(parallaxEl).getPropertyValue('transform'));
        const yTransform = this.pageYOffset;
        console.log('y Offset :'+yTransform);


        // const x = (window.innerWidth - event.pageX * 5) / 90;
        // const y = (window.innerHeight - event.pageY * 5) / 90;
        // console.log('x :'+x);
        // console.log('y :'+y);


        parallaxEl.style.setProperty('transform', 'matrix(1, 0, 0, 1, 0, -'+yTransform+')');
        console.log('after: '+getComputedStyle(parallaxEl).getPropertyValue('transform'));
        /*
        const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
        const transformY = this.pageYOffset * parallaxEl.dataset.speed;
        if (parallaxEl.classList.contains("banner-title")) {
          parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
        } else if (parallaxEl.classList.contains("banner-subtitle")) {
          parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
        } else {
          parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
        }
        */
      }
}