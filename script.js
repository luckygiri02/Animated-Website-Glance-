function navAnimation() {
    var nav = document.querySelector("nav");
    var tl = gsap.timeline({ paused: true });

    tl.to("#nav-bottom", {
        height: "21vh",
        duration: 0.3
    })
    .to(".nav-part2 h5", {
        opacity: 1,
        visibility: "visible",
        duration: 0.2
    })
    .from(".nav-part2 h5 span", {
        y: 25,
        opacity: 0,
        stagger: {
            amount: 0.6
        }
    });

    nav.addEventListener("mouseenter", function () {
        tl.play();
    });

    nav.addEventListener("mouseleave", function () {
        tl.reverse();
    });
}

navAnimation();

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
                gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 215 
            })
        })
    })
}
page2Animation()