// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", function () {
//     const contentHolderHeight = document.querySelector(".content-holder").offsetHeight;
//     const imgHolderHeight = window.innerHeight;
//     const additionalScrollHeight = window.innerHeight;

//     const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;
//     document.body.style.height = `${totalBodyHeight}px`;
// });


// ScrollTrigger.create({
//     trigger: ".website-content",
//     start: "-0.1% top",
//     end: "bottom bottom",
//     onEnter: () => {
//         gsap.set(".website-content", {position: 'absolute', top: '195%'});
//     },
//     onLeaveBack: () => {
//         gsap.set(".website-content", {position: 'fixed', top: '0' })
//     }
// })


// gsap.to(".header .letters:first-child", {
//     x: () => -innerWidth * 3,
//     scale: 10,
//     ease: "power2.inOu",
//     scrollTrigger: {
//         start: "top top",
//         end: `+=200%`,
//         scrub: 1
//     }
// });


const scrolltoTop = document.getElementById('scrolltoTop');
const targetSection = document.getElementById('targetSection');

// Function to check scroll position
window.addEventListener('scroll', () => {
    const targetPosition = targetSection.offsetTop;

    if (window.scrollY >= targetPosition) {
        scrolltoTop.classList.add('show'); // Add the class to show the button
    } else {
        scrolltoTop.classList.remove('show'); // Remove the class to hide the button
    }
});

// Function to scroll to top
scrolltoTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});