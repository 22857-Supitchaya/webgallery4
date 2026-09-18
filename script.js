/* =========================================================
   🍭 SWEET CANDY GALLERY
   DELUXE JAVASCRIPT
========================================================= */


/* =========================================================
   INTRO LOADING
========================================================= */

const intro =
    document.getElementById("intro");

const enterButton =
    document.getElementById("enterButton");

const loadingProgress =
    document.getElementById("loadingProgress");

const loadingPercent =
    document.getElementById("loadingPercent");


let loading =
    0;


const loadingTimer =
    setInterval(() => {


        loading +=
            Math.floor(
                Math.random() * 5
            ) + 1;


        if (
            loading >= 100
        ) {

            loading =
                100;

            clearInterval(
                loadingTimer
            );

        }


        loadingProgress.style.width =
            loading + "%";


        loadingPercent.textContent =
            loading + "%";


    }, 80);



/* =========================================================
   ENTER CANDY WORLD
========================================================= */

enterButton.addEventListener(
    "click",
    (event) => {


        createCandyExplosion(
            window.innerWidth / 2,
            window.innerHeight / 2,
            70
        );


        createCandyBurst(
            window.innerWidth / 2,
            window.innerHeight / 2
        );


        intro.classList.add(
            "hide"
        );


        setTimeout(
            () => {

                intro.style.display =
                    "none";

            },
            1000
        );


    }
);



/* =========================================================
   CANDY EXPLOSION
========================================================= */

function createCandyExplosion(
    x,
    y,
    amount = 30
) {


    const sweets = [

        "🍭",
        "🍬",
        "🧁",
        "🍩",
        "🍰",
        "🍪",
        "🍓",
        "🍫",
        "🫐",
        "🍋",
        "✨",
        "💗",
        "⭐",
        "🌟"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "click-particle";


        particle.textContent =
            sweets[
                Math.floor(
                    Math.random()
                    *
                    sweets.length
                )
            ];


        particle.style.left =
            x + "px";


        particle.style.top =
            y + "px";


        particle.style.setProperty(
            "--x",
            (
                Math.random() * 600
                - 300
            ) + "px"
        );


        particle.style.setProperty(
            "--y",
            (
                Math.random() * 600
                - 300
            ) + "px"
        );


        particle.style.setProperty(
            "--scale",
            (
                .6
                +
                Math.random() * 1.2
            )
        );


        particle.style.setProperty(
            "--rotate",
            (
                Math.random() * 720
                - 360
            ) + "deg"
        );


        particle.style.fontSize =
            (
                15
                +
                Math.random() * 25
            ) + "px";


        particle.style.animationDuration =
            (
                .8
                +
                Math.random() * .7
            ) + "s";


        document.body.appendChild(
            particle
        );


        setTimeout(
            () => {

                particle.remove();

            },
            1600
        );

    }

}



/* =========================================================
   BIG CANDY BURST
========================================================= */

function createCandyBurst(
    x,
    y
) {


    const ring =
        document.createElement(
            "div"
        );


    ring.style.position =
        "fixed";


    ring.style.left =
        x + "px";


    ring.style.top =
        y + "px";


    ring.style.width =
        "30px";


    ring.style.height =
        "30px";


    ring.style.border =
        "5px solid white";


    ring.style.borderRadius =
        "50%";


    ring.style.pointerEvents =
        "none";


    ring.style.zIndex =
        "99998";


    ring.style.transform =
        "translate(-50%,-50%)";


    ring.style.transition =
        "1s ease";


    document.body.appendChild(
        ring
    );


    requestAnimationFrame(
        () => {

            ring.style.width =
                "700px";

            ring.style.height =
                "700px";

            ring.style.opacity =
                "0";

        }
    );


    setTimeout(
        () => {

            ring.remove();

        },
        1000
    );

}



/* =========================================================
   THEME PANEL
========================================================= */

const themePanel =
    document.getElementById(
        "themePanel"
    );


const themeOpen =
    document.getElementById(
        "themeOpen"
    );


const themeClose =
    document.getElementById(
        "themeClose"
    );


const themeOptions =
    document.querySelectorAll(
        ".theme-option"
    );


themeOpen.addEventListener(
    "click",
    () => {

        themePanel.classList.add(
            "active"
        );

    }
);


themeClose.addEventListener(
    "click",
    () => {

        themePanel.classList.remove(
            "active"
        );

    }
);


themePanel.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            themePanel
        ) {

            themePanel.classList.remove(
                "active"
            );

        }

    }
);



/* =========================================================
   THEME CHANGE
========================================================= */

themeOptions.forEach(
    option => {


        option.addEventListener(
            "click",
            () => {


                const theme =
                    option.dataset.theme;


                document.body.classList.remove(

                    "blueberry",
                    "chocolate",
                    "lemon",
                    "cotton",
                    "galaxy"

                );


                if (
                    theme !==
                    "strawberry"
                ) {

                    document.body.classList.add(
                        theme
                    );

                }


                themeOptions.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                option.classList.add(
                    "active"
                );


                localStorage.setItem(
                    "sweetTheme",
                    theme
                );


                createCandyExplosion(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    45
                );


                createCandyBurst(
                    window.innerWidth / 2,
                    window.innerHeight / 2
                );


                setTimeout(
                    () => {

                        themePanel.classList.remove(
                            "active"
                        );

                    },
                    400
                );


            }
        );


    }
);



/* =========================================================
   LOAD SAVED THEME
========================================================= */

const savedTheme =
    localStorage.getItem(
        "sweetTheme"
    );


if (
    savedTheme
) {


    document.body.classList.remove(

        "blueberry",
        "chocolate",
        "lemon",
        "cotton",
        "galaxy"

    );


    if (
        savedTheme !==
        "strawberry"
    ) {

        document.body.classList.add(
            savedTheme
        );

    }


    themeOptions.forEach(
        option => {

            option.classList.remove(
                "active"
            );


            if (
                option.dataset.theme
                ===
                savedTheme
            ) {

                option.classList.add(
                    "active"
                );

            }

        }
    );

}



/* =========================================================
   CLICK CANDY EXPLOSION
========================================================= */

document.addEventListener(
    "click",
    event => {


        if (
            event.target.closest(
                ".theme-option"
            )
        ) {

            return;

        }


        if (
            event.target.closest(
                ".theme-open"
            )
        ) {

            return;

        }


        if (
            event.target.closest(
                ".theme-close"
            )
        ) {

            return;

        }


        if (
            event.target.closest(
                ".modal-close"
            )
        ) {

            return;

        }


        createCandyExplosion(
            event.clientX,
            event.clientY,
            14
        );

    }
);



/* =========================================================
   HEART
========================================================= */

document
    .querySelectorAll(".heart")
    .forEach(
        heart => {


            heart.addEventListener(
                "click",
                event => {


                    event.stopPropagation();


                    heart.classList.toggle(
                        "liked"
                    );


                    heart.textContent =
                        heart.classList.contains(
                            "liked"
                        )
                        ? "♥"
                        : "♡";


                    createCandyExplosion(
                        event.clientX,
                        event.clientY,
                        25
                    );


                }
            );


        }
    );



/* =========================================================
   IMAGE MODAL
========================================================= */

const imageModal =
    document.getElementById(
        "imageModal"
    );


const largeImage =
    document.getElementById(
        "largeImage"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


document
    .querySelectorAll(".view-button")
    .forEach(
        button => {


            button.addEventListener(
                "click",
                event => {


                    event.stopPropagation();


                    const card =
                        button.closest(
                            ".card"
                        );


                    const image =
                        card.querySelector(
                            "img"
                        );


                    const title =
                        card.querySelector(
                            "h3"
                        );


                    largeImage.src =
                        image.src;


                    largeImage.alt =
                        image.alt;


                    modalTitle.textContent =
                        title.textContent;


                    imageModal.classList.add(
                        "active"
                    );


                    createCandyExplosion(
                        event.clientX,
                        event.clientY,
                        18
                    );


                }
            );


        }
    );



/* =========================================================
   CLOSE MODAL
========================================================= */
/* =========================================================
   CLOSE MODAL
========================================================= */

modalClose.addEventListener(
    "click",
    () => {

        imageModal.classList.remove(
            "active"
        );

    }
);


imageModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            imageModal
        ) {

            imageModal.classList.remove(
                "active"
            );

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            imageModal.classList.remove(
                "active"
            );

            themePanel.classList.remove(
                "active"
            );

        }

    }
);



/* =========================================================
   NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navLinks.forEach(
    link => {


        link.addEventListener(
            "click",
            event => {


                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId &&
                    targetId.startsWith("#")
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (
                        target
                    ) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior:
                                "smooth",
                            block:
                                "start"
                        });


                    }

                }


            }
        );


    }
);



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


function updateActiveNav() {


    const scrollPosition =
        window.scrollY
        +
        window.innerHeight * .35;


    let currentSection =
        "";


    sections.forEach(
        section => {


            const top =
                section.offsetTop;


            const height =
                section.offsetHeight;


            if (
                scrollPosition >= top &&
                scrollPosition <=
                    top + height
            ) {

                currentSection =
                    section.id;

            }


        }
    );


    navLinks.forEach(
        link => {


            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute(
                    "href"
                );


            if (
                href ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }


        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNav,
    {
        passive:
            true
    }
);


updateActiveNav();



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );


const navMenu =
    document.getElementById(
        "navMenu"
    );


if (
    menuToggle &&
    navMenu
) {


    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "open"
            );

            menuToggle.classList.toggle(
                "active"
            );

        }
    );


    navMenu
        .querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        navMenu.classList.remove(
                            "open"
                        );

                        menuToggle.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );

}



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal, .fade-up, .gallery-card, .about-card, .quote-box"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {


            entries.forEach(
                entry => {


                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }


                }
            );


        },
        {
            threshold:
                .12,
            rootMargin:
                "0px 0px -50px 0px"
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================================
   GALLERY CARD HOVER
========================================================= */

const galleryCards =
    document.querySelectorAll(
        ".gallery-card"
    );


galleryCards.forEach(
    card => {


        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "hovered"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "hovered"
                );

            }
        );


    }
);



/* =========================================================
   RANDOM CANDY STARS
========================================================= */

const starContainer =
    document.querySelector(
        ".candy-stars"
    );


function createRandomStars(
    amount = 35
) {


    if (
        !starContainer
    ) {

        return;

    }


    const starCharacters = [

        "✦",
        "✧",
        "⋆",
        "★",
        "☆",
        "✶",
        "✷"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const star =
            document.createElement(
                "span"
            );


        star.className =
            "random-star";


        star.textContent =
            starCharacters[
                Math.floor(
                    Math.random()
                    *
                    starCharacters.length
                )
            ];


        star.style.left =
            Math.random() * 100
            + "%";


        star.style.top =
            Math.random() * 100
            + "%";


        star.style.animationDelay =
            Math.random() * 5
            + "s";


        star.style.animationDuration =
            (
                3
                +
                Math.random() * 5
            )
            + "s";


        star.style.fontSize =
            (
                8
                +
                Math.random() * 15
            )
            + "px";


        starContainer.appendChild(
            star
        );

    }

}


createRandomStars();



/* =========================================================
   FLOATING CANDIES
========================================================= */

const floatingContainer =
    document.querySelector(
        ".floating-candies"
    );


function createFloatingCandies(
    amount = 18
) {


    if (
        !floatingContainer
    ) {

        return;

    }


    const candies = [

        "🍬",
        "🍭",
        "🍓",
        "🍒",
        "🧁",
        "🍩",
        "🍪",
        "🍫",
        "🍰",
        "💗",
        "⭐"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const candy =
            document.createElement(
                "span"
            );


        candy.className =
            "floating-candy";


        candy.textContent =
            candies[
                Math.floor(
                    Math.random()
                    *
                    candies.length
                )
            ];


        candy.style.left =
            Math.random() * 100
            + "%";


        candy.style.top =
            Math.random() * 100
            + "%";


        candy.style.animationDelay =
            Math.random() * 8
            + "s";


        candy.style.animationDuration =
            (
                6
                +
                Math.random() * 8
            )
            + "s";


        candy.style.fontSize =
            (
                15
                +
                Math.random() * 20
            )
            + "px";


        floatingContainer.appendChild(
            candy
        );

    }

}


createFloatingCandies();



/* =========================================================
   CANDY TRAIL
========================================================= */

const trailCandies = [

    "🍬",
    "🍭",
    "💗",
    "✨",
    "⭐",
    "🍓"

];


let lastTrailTime =
    0;


document.addEventListener(
    "mousemove",
    event => {


        const now =
            Date.now();


        if (
            now - lastTrailTime <
            90
        ) {

            return;

        }


        lastTrailTime =
            now;


        const trail =
            document.createElement(
                "span"
            );


        trail.className =
            "candy-trail";


        trail.textContent =
            trailCandies[
                Math.floor(
                    Math.random()
                    *
                    trailCandies.length
                )
            ];


        trail.style.left =
            event.clientX
            + "px";


        trail.style.top =
            event.clientY
            + "px";


        trail.style.setProperty(
            "--trail-x",
            (
                Math.random() * 40
                - 20
            ) + "px"
        );


        trail.style.setProperty(
            "--trail-y",
            (
                Math.random() * 40
                - 20
            ) + "px"
        );


        document.body.appendChild(
            trail
        );


        setTimeout(
            () => {

                trail.remove();

            },
            900
        );


    }
);



/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
    document.querySelector(
        ".custom-cursor"
    );


const cursorFollower =
    document.querySelector(
        ".cursor-follower"
    );


let mouseX =
    window.innerWidth / 2;


let mouseY =
    window.innerHeight / 2;


let followerX =
    mouseX;


let followerY =
    mouseY;


if (
    cursor
) {


    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            cursor.style.left =
                mouseX + "px";


            cursor.style.top =
                mouseY + "px";

        }
    );


}


function animateCursor() {


    followerX +=
        (
            mouseX -
            followerX
        )
        * .16;


    followerY +=
        (
            mouseY -
            followerY
        )
        * .16;


    if (
        cursorFollower
    ) {

        cursorFollower.style.left =
            followerX + "px";


        cursorFollower.style.top =
            followerY + "px";

    }


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();



/* =========================================================
   CURSOR HOVER EFFECT
========================================================= */

const cursorTargets =
    document.querySelectorAll(
        "a, button, .gallery-card, .theme-option, .heart, img"
    );


cursorTargets.forEach(
    target => {


        target.addEventListener(
            "mouseenter",
            () => {

                if (
                    cursor
                ) {

                    cursor.classList.add(
                        "hover"
                    );

                }


                if (
                    cursorFollower
                ) {

                    cursorFollower.classList.add(
                        "hover"
                    );

                }

            }
        );


        target.addEventListener(
            "mouseleave",
            () => {

                if (
                    cursor
                ) {

                    cursor.classList.remove(
                        "hover"
                    );

                }


                if (
                    cursorFollower
                ) {

                    cursorFollower.classList.remove(
                        "hover"
                    );

                }

            }
        );


    }
);



/* =========================================================
   SCROLL PROGRESS
========================================================= */

const scrollProgress =
    document.querySelector(
        ".scroll-progress"
    );


function updateScrollProgress() {


    if (
        !scrollProgress
    ) {

        return;

    }


    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement
            .scrollHeight
        -
        window.innerHeight;


    const percentage =
        documentHeight > 0
        ? (
            scrollTop /
            documentHeight
        ) * 100
        : 0;


    scrollProgress.style.width =
        percentage + "%";

}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    {
        passive:
            true
    }
);


updateScrollProgress();



/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );


if (
    backToTop
) {


    window.addEventListener(
        "scroll",
        () => {


            if (
                window.scrollY >
                500
            ) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }


        },
        {
            passive:
                true
        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top:
                    0,
                behavior:
                    "smooth"
            });

        }
    );

}



/* =========================================================
   MARQUEE DUPLICATION
========================================================= */

const marqueeTracks =
    document.querySelectorAll(
        ".marquee-track"
    );


marqueeTracks.forEach(
    track => {


        const original =
            track.innerHTML;


        if (
            !track.dataset.duplicated
        ) {

            track.innerHTML =
                original +
                original;


            track.dataset.duplicated =
                "true";

        }


    }
);



/* =========================================================
   PARALLAX EFFECT
========================================================= */

const parallaxElements =
    document.querySelectorAll(
        "[data-parallax]"
    );


window.addEventListener(
    "scroll",
    () => {


        const scrollY =
            window.scrollY;


        parallaxElements.forEach(
            element => {


                const speed =
                    parseFloat(
                        element.dataset.parallax
                    )
                    || .2;


                const offset =
                    scrollY *
                    speed;


                element.style.transform =
                    `translate3d(0, ${offset}px, 0)`;


            }
        );


    },
    {
        passive:
            true
    }
);



/* =========================================================
   TILT CARD
========================================================= */

const tiltCards =
    document.querySelectorAll(
        "[data-tilt]"
    );


tiltCards.forEach(
    card => {


        card.addEventListener(
            "mousemove",
            event => {


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (
                        y -
                        centerY
                    )
                    /
                    centerY
                    *
                    -5;


                const rotateY =
                    (
                        x -
                        centerX
                    )
                    /
                    centerX
                    *
                    5;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-6px)`;


            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );


    }
);



/* =========================================================
   BUTTON RIPPLE
========================================================= */

document
    .querySelectorAll(
        "button, .button, .cta-button"
    )
    .forEach(
        button => {


            button.addEventListener(
                "click",
                event => {


                    const rect =
                        button.getBoundingClientRect();


                    const ripple =
                        document.createElement(
                            "span"
                        );


                    ripple.className =
                        "ripple";


                    ripple.style.left =
                        (
                            event.clientX -
                            rect.left
                        )
                        + "px";


                    ripple.style.top =
                        (
                            event.clientY -
                            rect.top
                        )
                        + "px";


                    button.appendChild(
                        ripple
                    );


                    setTimeout(
                        () => {

                            ripple.remove();

                        },
                        700
                    );


                }
            );


        }
    );



/* =========================================================
   IMAGE LAZY LOADING
========================================================= */

const lazyImages =
    document.querySelectorAll(
        "img[data-src]"
    );


const imageObserver =
    new IntersectionObserver(
        entries => {


            entries.forEach(
                entry => {


                    if (
                        entry.isIntersecting
                    ) {


                        const image =
                            entry.target;


                        if (
                            image.dataset.src
                        ) {

                            image.src =
                                image.dataset.src;

                        }


                        if (
                            image.dataset.srcset
                        ) {

                            image.srcset =
                                image.dataset.srcset;

                        }


                        image.removeAttribute(
                            "data-src"
                        );


                        image.removeAttribute(
                            "data-srcset"
                        );


                        imageObserver.unobserve(
                            image
                        );


                    }


                }
            );


        },
        {
            rootMargin:
                "200px"
        }
    );


lazyImages.forEach(
    image => {

        imageObserver.observe(
            image
        );

    }
);



/* =========================================================
   IMAGE ERROR FALLBACK
========================================================= */

document
    .querySelectorAll("img")
    .forEach(
        image => {


            image.addEventListener(
                "error",
                () => {


                    if (
                        image.dataset.fallbackApplied
                    ) {

                        return;

                    }


                    image.dataset.fallbackApplied =
                        "true";


                    image.style.opacity =
                        ".5";


                    image.alt =
                        "Sweet Candy artwork";


                }
            );


        }
    );



/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
    document.querySelectorAll(
        "[data-count]"
    );


const counterObserver =
    new IntersectionObserver(
        entries => {


            entries.forEach(
                entry => {


                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    const counter =
                        entry.target;


                    const target =
                        parseInt(
                            counter.dataset.count,
                            10
                        );


                    if (
                        Number.isNaN(
                            target
                        )
                    ) {

                        return;

                    }


                    const duration =
                        parseInt(
                            counter.dataset.duration,
                            10
                        )
                        || 1500;


                    let start =
                        0;


                    const startTime =
                        performance.now();


                    function updateCounter(
                        currentTime
                    ) {


                        const progress =
                            Math.min(
                                (
                                    currentTime -
                                    startTime
                                )
                                /
                                duration,
                                1
                            );


                        const eased =
                            1 -
                            Math.pow(
                                1 -
                                progress,
                                3
                            );


                        start =
                            Math.floor(
                                target *
                                eased
                            );


                        counter.textContent =
                            start.toLocaleString();


                        if (
                            progress <
                            1
                        ) {

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target.toLocaleString();

                        }


                    }


                    requestAnimationFrame(
                        updateCounter
                    );


                    counterObserver.unobserve(
                        counter
                    );


                }
            );


        },
        {
            threshold:
                .5
        }
    );


counters.forEach(
    counter => {

        counterObserver.observe(
            counter
        );

    }
);



/* =========================================================
   TYPEWRITER
========================================================= */

const typewriterElements =
    document.querySelectorAll(
        "[data-typewriter]"
    );


typewriterElements.forEach(
    element => {


        const text =
            element.dataset.typewriter;


        const speed =
            parseInt(
                element.dataset.speed,
                10
            )
            || 80;


        element.textContent =
            "";


        let index =
            0;


        function typeCharacter() {


            if (
                index >=
                text.length
            ) {

                return;

            }


            element.textContent +=
                text.charAt(
                    index
                );


            index++;


            setTimeout(
                typeCharacter,
                speed
            );

        }


        typeCharacter();


    }
);



/* =========================================================
   RANDOM CANDY COLORS
========================================================= */

const candyColorElements =
    document.querySelectorAll(
        "[data-candy-color]"
    );


candyColorElements.forEach(
    element => {


        const colors = [

            "#ff4f9a",
            "#ff7eb3",
            "#ffc2d9",
            "#ffcf56",
            "#9be7ff",
            "#b8f7d4",
            "#c9b6ff"

        ];


        const color =
            colors[
                Math.floor(
                    Math.random()
                    *
                    colors.length
                )
            ];


        element.style.setProperty(
            "--candy-color",
            color
        );


    }
);



/* =========================================================
   SECTION TITLE SPARKLES
========================================================= */

document
    .querySelectorAll(
        ".section-title"
    )
    .forEach(
        title => {


            for (
                let i = 0;
                i < 5;
                i++
            ) {


                const sparkle =
                    document.createElement(
                        "span"
                    );


                sparkle.className =
                    "title-sparkle";


                sparkle.textContent =
                    i % 2 === 0
                    ? "✦"
                    : "✧";


                sparkle.style.left =
                    (
                        10 +
                        Math.random() * 80
                    )
                    + "%";


                sparkle.style.top =
                    (
                        Math.random() * 100
                    )
                    + "%";


                sparkle.style.animationDelay =
                    (
                        Math.random() * 2
                    )
                    + "s";


                title.appendChild(
                    sparkle
                );


            }


        }
    );



/* =========================================================
   DOUBLE CLICK HEART
========================================================= */

document
    .querySelectorAll(
        ".gallery-card img"
    )
    .forEach(
        image => {


            image.addEventListener(
                "dblclick",
                event => {


                    const card =
                        image.closest(
                            ".gallery-card"
                        );


                    if (
                        !card
                    ) {

                        return;

                    }


                    const heart =
                        card.querySelector(
                            ".heart"
                        );


                    if (
                        heart
                    ) {

                        heart.classList.add(
                            "liked"
                        );


                        heart.textContent =
                            "♥";

                    }


                    createHeartBurst(
                        event.clientX,
                        event.clientY
                    );


                }
            );


        }
    );



/* =========================================================
   HEART BURST
========================================================= */

function createHeartBurst(
    x,
    y
) {


    const hearts = [

        "♥",
        "♡",
        "💗",
        "💖",
        "💕"

    ];


    for (
        let i = 0;
        i < 16;
        i++
    ) {


        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "heart-particle";


        heart.textContent =
            hearts[
                Math.floor(
                    Math.random()
                    *
                    hearts.length
                )
            ];


        heart.style.left =
            x + "px";


        heart.style.top =
            y + "px";


        heart.style.setProperty(
            "--x",
            (
                Math.random() * 260
                - 130
            ) + "px"
        );


        heart.style.setProperty(
            "--y",
            (
                Math.random() * 260
                - 130
            ) + "px"
        );


        heart.style.setProperty(
            "--r",
            (
                Math.random() * 360
                - 180
            ) + "deg"
        );


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => {

                heart.remove();

            },
            1000
        );

    }

}



/* =========================================================
   RANDOM CANDY RAIN
========================================================= */

function candyRain(
    amount = 40
) {


    const candies = [

        "🍬",
        "🍭",
        "🍓",
        "🍒",
        "🧁",
        "🍩",
        "⭐",
        "✨"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const candy =
            document.createElement(
                "div"
            );


        candy.className =
            "candy-rain";


        candy.textContent =
            candies[
                Math.floor(
                    Math.random()
                    *
                    candies.length
                )
            ];


        candy.style.left =
            Math.random() * 100
            + "vw";


        candy.style.top =
            "-50px";


        candy.style.fontSize =
            (
                14 +
                Math.random() * 20
            )
            + "px";


        candy.style.animationDuration =
            (
                2 +
                Math.random() * 3
            )
            + "s";


        candy.style.animationDelay =
            (
                Math.random() * 1.5
            )
            + "s";


        document.body.appendChild(
            candy
        );


        setTimeout(
            () => {

                candy.remove();

            },
            5500
        );

    }

}



/* =========================================================
   KONAMI / SECRET CANDY EFFECT
========================================================= */

const secretSequence = [

    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight"

];


let secretIndex =
    0;


document.addEventListener(
    "keydown",
    event => {


        if (
            event.key ===
            secretSequence[
                secretIndex
            ]
        ) {

            secretIndex++;


            if (
                secretIndex ===
                secretSequence.length
            ) {


                secretIndex =
                    0;


                candyRain(
                    80
                );


                createCandyExplosion(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    100
                );


            }


        } else {

            secretIndex =
                0;

        }


    }
);



/* =========================================================
   WINDOW RESIZE
========================================================= */

let resizeTimer;


window.addEventListener(
    "resize",
    () => {


        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                () => {


                    updateScrollProgress();


                    updateActiveNav();


                },
                150
            );


    }
);



/* =========================================================
   VISIBILITY CHANGE
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {


        if (
            document.hidden
        ) {

            document.body.classList.add(
                "page-hidden"
            );

        } else {

            document.body.classList.remove(
                "page-hidden"
            );

        }


    }
);



/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {


        document.body.classList.add(
            "page-loaded"
        );


        setTimeout(
            () => {

                document.body.classList.add(
                    "ready"
                );

            },
            100
        );


    }
);



/* =========================================================
   PREVENT IMAGE DRAG
========================================================= */

document
    .querySelectorAll("img")
    .forEach(
        image => {

            image.addEventListener(
                "dragstart",
                event => {

                    event.preventDefault();

                }
            );

        }
    );



/* =========================================================
   PREVENT CONTEXT MENU ON GALLERY
========================================================= */

document
    .querySelectorAll(
        ".gallery-card img"
    )
    .forEach(
        image => {


            image.addEventListener(
                "contextmenu",
                event => {

                    event.preventDefault();

                }
            );


        }
    );



/* =========================================================
   SMOOTH ANCHOR OFFSET
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        anchor => {


            anchor.addEventListener(
                "click",
                event => {


                    const id =
                        anchor.getAttribute(
                            "href"
                        );


                    if (
                        !id ||
                        id === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            id
                        );


                    if (
                        !target
                    ) {

                        return;

                    }


                    event.preventDefault();


                    const navbar =
                        document.querySelector(
                            ".navbar"
                        );


                    const offset =
                        navbar
                        ? navbar.offsetHeight
                        : 0;


                    const position =
                        target.getBoundingClientRect()
                            .top
                        +
                        window.scrollY
                        -
                        offset
                        -
                        15;


                    window.scrollTo({
                        top:
                            position,
                        behavior:
                            "smooth"
                    });


                }
            );


        }
    );



/* =========================================================
   RANDOM FLOATING SPARKLES
========================================================= */

function createFloatingSparkles(
    amount = 25
) {


    const container =
        document.body;


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const sparkle =
            document.createElement(
                "span"
            );


        sparkle.className =
            "floating-sparkle";


        sparkle.textContent =
            Math.random() > .5
            ? "✦"
            : "✧";


        sparkle.style.left =
            Math.random() * 100
            + "vw";


        sparkle.style.top =
            Math.random() * 100
            + "vh";


        sparkle.style.animationDelay =
            Math.random() * 5
            + "s";


        sparkle.style.animationDuration =
            (
                4 +
                Math.random() * 6
            )
            + "s";


        sparkle.style.fontSize =
            (
                6 +
                Math.random() * 12
            )
            + "px";


        container.appendChild(
            sparkle
        );


    }

}


createFloatingSparkles();



/* =========================================================
   CARD IMAGE CLICK
========================================================= */

document
    .querySelectorAll(
        ".gallery-card"
    )
    .forEach(
        card => {


            card.addEventListener(
                "click",
                event => {


                    if (
                        event.target.closest(
                            "button, a, .heart"
                        )
                    ) {

                        return;

                    }


                    const image =
                        card.querySelector(
                            "img"
                        );


                    if (
                        !image ||
                        !imageModal ||
                        !largeImage
                    ) {

                        return;

                    }


                    const title =
                        card.querySelector(
                            "h3"
                        );


                    largeImage.src =
                        image.src;


                    largeImage.alt =
                        image.alt;


                    if (
                        modalTitle &&
                        title
                    ) {

                        modalTitle.textContent =
                            title.textContent;

                    }


                    imageModal.classList.add(
                        "active"
                    );


                }
            );


        }
    );



/* =========================================================
   THEME PANEL KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {


        if (
            event.key ===
            "t"
            &&
            !event.ctrlKey
            &&
            !event.metaKey
            &&
            !event.altKey
        ) {


            const activeElement =
                document.activeElement;


            const typing =
                activeElement &&
                (
                    activeElement.tagName ===
                    "INPUT"
                    ||
                    activeElement.tagName ===
                    "TEXTAREA"
                    ||
                    activeElement.isContentEditable
                );


            if (
                !typing &&
                themePanel
            ) {

                themePanel.classList.toggle(
                    "active"
                );

            }


        }


    }
);



/* =========================================================
   CANDY CLICK SOUND SUBSTITUTE
   Visual-only effect — NO AUDIO
========================================================= */

document
    .querySelectorAll(
        ".candy, .sweet, .gallery-card"
    )
    .forEach(
        element => {


            element.addEventListener(
                "click",
                event => {


                    element.classList.add(
                        "candy-pop"
                    );


                    setTimeout(
                        () => {

                            element.classList.remove(
                                "candy-pop"
                            );

                        },
                        450
                    );


                }
            );


        }
    );



/* =========================================================
   FOOTER YEAR
========================================================= */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );


yearElements.forEach(
    element => {

        element.textContent =
            new Date()
                .getFullYear();

    }
);



/* =========================================================
   ACCESSIBILITY
========================================================= */

document
    .querySelectorAll(
        "button:not([aria-label])"
    )
    .forEach(
        button => {


            if (
                button.textContent.trim()
            ) {

                return;

            }


            button.setAttribute(
                "aria-label",
                "Button"
            );


        }
    );



/* =========================================================
   REDUCED MOTION
========================================================= */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


function handleReducedMotion() {


    if (
        reducedMotion.matches
    ) {

        document.body.classList.add(
            "reduce-motion"
        );

    } else {

        document.body.classList.remove(
            "reduce-motion"
        );

    }

}


handleReducedMotion();


if (
    reducedMotion.addEventListener
) {

    reducedMotion.addEventListener(
        "change",
        handleReducedMotion
    );

} else if (
    reducedMotion.addListener
) {

    reducedMotion.addListener(
        handleReducedMotion
    );

}



/* =========================================================
   FINAL INITIALIZATION
========================================================= */

function initializeSweetCandyGallery() {


    updateScrollProgress();


    updateActiveNav();


    if (
        savedTheme
    ) {

        document.body.dataset.theme =
            savedTheme;

    }


    document.documentElement
        .style.setProperty(
            "--page-loaded",
            "1"
        );


}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeSweetCandyGallery
    );

} else {

    initializeSweetCandyGallery();

}



/* =========================================================
   END
   🍭 SWEET CANDY GALLERY
   🎵 MUSIC SYSTEM REMOVED
========================================================= */
