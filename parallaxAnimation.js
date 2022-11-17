// Parallax animation on Scroll 
document.addEventListener("DOMContentLoaded", () => {
    let observer = new IntersectionObserver(activateParallax, {});
    document.querySelectorAll(".product-section").forEach(p => {
        observer.observe(p);
        //console.log("watching", p.textContent);
    });
});

async function activateParallax(elements, ob) {
    console.log("Hit observer point");
    elements.forEach(async element => {
        if (element.isIntersecting) {
            console.log("intersecting");
            console.log(element.target);
            animateParallax(element);
            ob.unobserve(element.target);
        }
    });
}

function animateSectionParallax(sectionElement) {
    sectionElement.addEventListener("scroll", parallax);
}


function animateParallax(element) {
    console.log('Element: '+element);
    console.log('Offset: '+element.offsetTop);
    const yTransform = this.pageYOffset;
    console.log(yTransform);
    const elementToAnimate = element.target.querySelector(".product-section-scaling-container");
    console.log(elementToAnimate);
    console.log('elementToAnimate Offset: '+elementToAnimate.offsetTop);
    
    console.log('before: '+getComputedStyle(elementToAnimate).getPropertyValue('transform'));
    elementToAnimate.style.setProperty('transform', 'matrix(1, 0, 0, 1, 0, -'+yTransform+')');
}

// const animationObserver = new IntersectionObserver((animationSections) => {
//     animationSections.forEach((animationSection) => {
//         if(animationSection.isIntersecting) {
//             parallaxImageOnScroll(animationSection);
//         }
//     });
// });

// window.addEventListener("mousemove", parallax);
//window.addEventListener("scroll", parallax);
const parallaxElements = document.querySelectorAll(".product-section-scaling-container");
console.log(parallaxElements);


// parallaxElements.forEach((parallaxElement) =>
//     animationObserver.observe(parallaxElement)
// );


function parallaxImageOnScroll(animateSection) {
    console.log(animateSection);
    console.log(animateSection.target);
    const yTransform = this.pageYOffset;
    console.log(yTransform);
    
    const elementToAnimate = animateSection.target.querySelector(".product-section-scaling-container");
    console.log(elementToAnimate);

    console.log('before: '+getComputedStyle(elementToAnimate).getPropertyValue('transform'));
    elementToAnimate.style.setProperty('transform', 'matrix(1, 0, 0, 1, 0, -'+yTransform+')');
}

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
          parallaxEl.style.transform = `translateY(${yPos}px)`;
        }
        */
      }
}

changeOnWindowScroll() {
    const step = 100 / (this.images.length - 1);
    const mapToIndex = Math.floor(this.percentScrolled / step);
    requestAnimationFrame(() => this.canvas.renderIndex(mapToIndex));
  }
  
  percentScrolled() {
    const {starts, ends} = this.opts;
    const el = this.scrollWith;
    const doc = document.documentElement;
    const clientOffsety = doc.scrollTop || window.pageYOffset;
    const elementHeight = el.clientHeight || el.offsetHeight;
    const clientHeight = doc.clientHeight;
    let target = el;
    let offsetY = 0;
    do {
        offsetY += target.offsetTop;
        target = target.offsetParent;
    } while (target && target !== window);
    
    let u = (clientOffsety - offsetY);
    let d = (elementHeight + clientHeight)
    
    if (starts === 'out') u += clientHeight;
    if (ends === 'in') d -= clientHeight;
    if (starts == 'in') d -= clientHeight;
    // start: out, ends: out
    // const value = ((clientOffsety + clientHeight) - offsetY) / (clientHeight + elementHeight) * 100;
    
    //start: in, ends: out
    // const value = (clientOffsety - offsetY) / (elementHeight) * 100;
    
    //start: out, ends: in
    // const value = ((clientOffsety + clientHeight) - offsetY) / (elementHeight) * 100;
    
    // Start: in, ends: in
    // (clientOffsety - offsetY) / (elementHeight - clientHeight)
    
    const value = u / d * 100;
    return value > 100 ? 100 : value < 0 ? 0 : value;
  }