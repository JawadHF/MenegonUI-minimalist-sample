/* Sub-Menu hide and show using chevron on mobile devices */

//const chevronShowSubmenuButton = document.getElementById("submenu-chevron");
const chevronListItem = document.getElementById("chevron-list-item");
const submenuDetails = document.querySelector(".product-submenu-details-dropdown");

//const submenuOverlay = document.querySelector(".submenu-overlay");
let submenuOpen = false


chevronListItem.addEventListener("click", () => {
    toggleSubmenu();
})

function toggleSubmenu() {
    if(submenuOpen == false) {
        submenuOpen = true;
        //submenuOverlay.classList.add("show");
        chevronListItem.classList.add("inverted");
        submenuDetails.classList.add("show");
    }
    else {
        submenuOpen = false;
        //submenuOverlay.classList.remove("show");
        chevronListItem.classList.remove("inverted");
        submenuDetails.classList.remove("show");
    }
}
