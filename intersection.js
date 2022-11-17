const elementObserver = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
        if(element.isIntersecting) {
            element.target.classList.add('show-card');
        }
        else {
            element.target.classList.remove('show-card');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-card');

hiddenElements.forEach( (hiddenElement) => elementObserver.observe(hiddenElement));