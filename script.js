//1. Setup the page so that .hamburgerMenu is hidden when screen is equal or less than 768px

//select hamburgerMenu for toggling of class hamburgerHidden
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
        //screen goes under 769px
        menuEl.classList.add('hamburgerHidden');
        belowBreakpoint = true;
    } else if (window.innerWidth > 768 && belowBreakpoint) {
        //screen goes over 768px
        menuEl.classList.remove('hamburgerHidden');
        belowBreakpoint = false;
    }
});

//2. run an event listener for the click event on the hamburgerButton in the nav
//when button is clicked, toggle hamburgerHidden on the menu

const buttonEl = document.querySelector('.hamburgerButton');

buttonEl.addEventListener('click', () => 
    menuEl.classList.toggle('hamburgerHidden')
);

