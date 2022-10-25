// gsap slider
gsap.registerPlugin(ScrollTrigger);



const projects = gsap.timeline({
    scrollTrigger: {
        trigger: ".col-right",
        // pin: true,
        start: "top 0%",
        end: "+=3200",
        scrub: 2,
    }
});
projects.fromTo(".text-1", {
    opacity: 1,
    duration: 0.5,
}, {
    opacity: 0,
    duration: 0.5,
})

gsap.from(".banner h1 span", 1, {
    opacity: 0,
    y: 200,
    ease: Back.easeOut,
    stagger: 0.2,
    // repeat: -1,
    // repeatDelay: 1
});

$('#menu-toggle').click(function() {
    $(this).toggleClass('open');
    // $('menu').toggleClass('open');
})



function resizeNav() {
    // Set the nav height to fill the window
    $("#nav-fullscreen").css({ "height": window.innerHeight });

    // Set the circle radius to the length of the window diagonal,
    // this way we're only making the circle as big as it needs to be.
    var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
    var diameter = radius * 2;
    $("#nav-overlay").width(diameter);
    $("#nav-overlay").height(diameter);
    $("#nav-overlay").css({ "margin-top": -radius, "margin-right": -radius });
}

// Set up click and window resize callbacks, then init the nav.
$(document).ready(function() {

    $("#menu-toggle").click(function() {
        $("#nav-overlay, #nav-fullscreen").toggleClass("open");
        $("body").toggleClass("hidden");
    });

    $(window).resize(resizeNav);

    resizeNav();

    window.setTimeout(function() {
        // $("#menu-toggle").click();
    }, 1000)
});

$(function() {
    var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            // downscroll code
            $("header").css("top", "-150px");

        } else {
            // upscroll code
            $("header").css("top", "0px");
        }
        lastScrollTop = st;
    });
});