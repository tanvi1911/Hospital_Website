const navItems = document.querySelector('#nav__items');
const openNavBtn  = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
})

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

if(window.innerWidth < 1024) {
    document.querySelectorAll('#nav__items li a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeNav();
        })
    })
}

// change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// TESTIMONIAL SECTION
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    //RESPONSIVE BREAKPOINTS
    breakpoints: {
        // when window width is >= 600px
        600: {
            slidesPerView: 2
        },

        //window width is >= 600px
        1024: {
            slidesPerView: 3
        }
    }

  });