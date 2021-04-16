$(window).on('load',function(){
    $("#loader").delay(2000).fadeOut('slow');
    console.log("inside loader");
});

var typed = new Typed("#typer", {
    strings: ['Passionate Engineer', 'Web Developer', 'Web Designer', 'UI/UX Designer',
        'Graphic Designer', 'Full Stack Dev'
    ],
    typeSpeed: 120,
    backSpeed: 40,
    backDelay: 500,
    startDelay: 500,
    smartBackspace: true,
    loop: true
});

$('.languages').tilt({
    glare: true,
    maxGlare: .6,
    // axis: 'x'
})
$('.designing-skills').tilt({
    glare: true,
    maxGlare: .6,
    // axis: 'x'
})
$('.soft-skills').tilt({
    glare: true,
    maxGlare: .6,
    // axis: 'x'
})

$('#review-slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    edgeFriction: 0.50,
    prevArrow: "<button type='button' class='slick-prev'><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></button>",
    accessibility: false,
    responsive: [{
        breakpoint: 500,
        // 600 or less than 600
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        }
    }]
})

/******************************************************************
            NAVBAR JS
******************************************************************/

const navBtn = document.getElementById('nav-btn');
const navPanel = document.getElementById('navigation-panel');
var first = document.getElementById('first');
var second = document.getElementById('second');
var last = document.getElementById('last');

navBtn.addEventListener("click", navbarclicked);

function navbarclicked() {
    console.log("clicked")
    if (navBtn.classList.contains('opened')) {
        console.log("we have closed it for you");
        second.style.visibility = "visible";
        navPanel.style.transition = "all .3s ease-in-out";
        navPanel.style.height = "0";
        navPanel.style.borderBottomLeftRadius = "50%";
        navPanel.style.borderBottomRightRadius = "50%";

        navBtn.classList.remove("opened");
        navBtn.classList.add("closed");

        first.style.transform = "unset"

        last.style.transform = "unset"

        first.style.transition = "all .3s ease-in-out";

        last.style.transition = "all .3s ease-in-out";
    } else if (navBtn.classList.contains('closed')) {
        console.log("we have opened it for you");
        second.style.visibility = "hidden";
        navPanel.style.transition = "all .3s ease-in-out";
        navPanel.style.height = "100vh";
        navPanel.style.position = "fixed";
        navPanel.style.top = "0";
        navPanel.style.bottom = "0";
        navPanel.style.left = "0";
        navPanel.style.right = "0";
        navPanel.style.zIndex = "99";

        navPanel.style.borderBottomLeftRadius = "0px";
        navPanel.style.borderBottomRightRadius = "0px";

        navBtn.classList.remove("closed");
        navBtn.classList.add("opened");

        first.style.transform = "rotate(45deg) translate(10px,10px)"

        last.style.transform = "rotate(-45deg) translate(7px,-8px)"

        first.style.transition = "all .3s ease-in-out";

        last.style.transition = "all .3s ease-in-out";
    }
}

function closeNav(){
    if (navBtn.classList.contains('opened')) {
        console.log("we have closed it for you");
        second.style.visibility = "visible";
        navPanel.style.transition = "all .3s ease-in-out";
        navPanel.style.height = "0";
        navPanel.style.borderBottomLeftRadius = "50%";
        navPanel.style.borderBottomRightRadius = "50%";

        navBtn.classList.remove("opened");
        navBtn.classList.add("closed");

        first.style.transform = "unset"

        last.style.transform = "unset"

        first.style.transition = "all .3s ease-in-out";

        last.style.transition = "all .3s ease-in-out";
    }
}