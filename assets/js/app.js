// ==== Menu Toggle ==== //
function toggleMenu(){
    const menutoggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');
    menutoggle.classList.toggle('active');
    nav.classList.toggle('active');
}


// ===== Change Color of navitation bar when triggered ==== //
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

// ===== JS SWIPER ==== //
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    observer: true,
    observeParents: true,
            
    breakpoints: {
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
    }
});

mySwiper.init();