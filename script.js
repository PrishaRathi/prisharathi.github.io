function menuFuction()
{
    var menuBtn = document.getElementById("navMenu");

    if(menuBtn.className === "nav-menu")
    {
        menuBtn.className+= " responsive";
    }
    else
    {
        menuBtn.className = "nav-menu";
    }
}

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle");

toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});

var typingEffect = new Typed(".typedText", 
{
    strings: ["Developer", "Designer", "Coder" ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

const scroll = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});




scroll.reveal(".text-btn", {delay : 200});

scroll.reveal(".featured-image", {delay : 320});

scroll.reveal(".project-btn", {interval : 320});

scroll.reveal(".top-header", {});

const scroll_left = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

scroll_left.reveal(".hello", {delay : 100});
scroll_left.reveal(".text-info", {delay : 200});
scroll_left.reveal(".about-info", {delay: 100});
scroll_left.reveal(".contact-info", {delay: 100});
scroll_left.reveal("#fitcam", {delay: 100});

const scroll_right = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
})

scroll_right.reveal(".featured-name", {delay : 100});

scroll_right.reveal(".social-icons", {delay : 200});
scroll_right.reveal(".skill", {delay: 100});
scroll_right.reveal("#mda", {delay: 100});
scroll_right.reveal(".form-control", {delay: 100});

const scroll_bottom = ScrollReveal({
    origin: "bottom",
    distance: "80px",
    duration: 2000,
    reset: true,
})


scroll_bottom.reveal(".patent-info", {interval : 320});


const sections = document.querySelectorAll(".section[id]");

function scrollActive()
{
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        }
        else
        {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);