//1. Setup the page so that .hamburgerMenu is hidden when screen is equal or less than 768px

//select hamburgerMenu for toggling of class hamburgerHidden;
// const menuLi = document.querySelectorAll('.hamburgerMenu li');
const menuEl = document.querySelector('.hamburgerMenu');

//set a variable to keep track of screenSize
let belowBreakpoint = false;

//set belowBreakpoint if page is loaded under the breakpoint, hide hamburgerMenu by adding a class of hamburgerHidden
if (window.innerWidth < 769) {
    belowBreakpoint = true;
    menuEl.classList.toggle('hamburgerHidden');
    // menuLi.forEach(function(item) {
    //     item.classList.toggle('hamburgerHidden');
    // });
}

// add an event listener for the resize event on the window, so that when the css media query breakpoint of 768px screen width is reached, classes are added to .hamburgerMenu to hide it or removed to unhide it
//only do this when it crosses the breakpoint

window.addEventListener('resize', event => {
    if (window.innerWidth < 769 && !belowBreakpoint) {
        menuEl.classList.toggle('hamburgerHidden');
        belowBreakpoint = true;
    } else if (window.innerWidth > 768 && belowBreakpoint) {
        menuEl.classList.toggle('hamburgerHidden');
        belowBreakpoint = false;
    }
});

//2. run an event listener for the click event on the i in the nav
//when i is clicked, toggle a class on the other li elements that reveals them/hides them(sr-only?)

const buttonEl = document.querySelector('.hamburgerButton');

