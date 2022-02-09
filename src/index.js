import './less/index.less'

// Your code goes here!

// Event 1
document.querySelectorAll("img").forEach(img => {
    img.addEventListener('mouseover', evt => {
        evt.target.style.filter = 'blur(5px)';
    })
});

// Event 2
document.addEventListener ('keydown', evt => {
    console.log(`${evt.code} pressed!`);
});

// Event 3
document.addEventListener('wheel', evt => {
    const direction = (evt.wheelDeltaY > 0) ? 'up' : 'down';
    console.log(`Scrolling ${direction}`);
});

// Event 4
document.addEventListener('copy', evt => {
    const selection = document.getSelection();
    console.log(`A copy event was triggered for: ${selection}`);
});

// Event 5
document.querySelectorAll("div.btn").forEach(img => {
    img.addEventListener('pointerenter', evt => {
        console.log("A pointer is over a button!!   ");
    })
});

// Event 6
window.addEventListener('resize', evt => {
    console.log("The window has been resized!!");
    console.log(`Screen width: ${evt.target.screen.width}px, screen height: ${evt.target.screen.height}`);
});

// Event 7
document.addEventListener('scroll', evt => {
    console.log(`Last known scroll position: ${window.scrollY}`);
});

// Event 8
document.querySelectorAll("p").forEach(text => {
    text.addEventListener('dblclick', evt => {
        evt.target.style.fontSize = 'x-large';
    })
});

// Event 9
document.querySelectorAll("p").forEach(text => {
    text.addEventListener('contextmenu', evt => {
        console.log("The context menu has been opened.");
    })
});

// Event 10
document.querySelectorAll("p").forEach(text => {
    text.addEventListener('mouseover', evt => {
        evt.target.style.color = 'red';
    })
});

// Prevent Default 
document.querySelectorAll("nav a.nav-link").forEach(text => {
    text.addEventListener('click', evt => {
        evt.preventDefault();
        // evt.target.setAttribute('href', 'https://google.com');
        location.href = 'https://resources.bloomtech.com/school-team/casey-harding';
    })
});