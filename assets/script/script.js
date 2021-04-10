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
    responsive: [
        {
            breakpoint: 500,
            // 600 or less than 600
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]
})