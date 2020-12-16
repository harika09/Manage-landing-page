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

    //AutoPlay
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    
    //Min-width
    breakpoints: {
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        604:{
            slidesPerView: 2,
            spaceBetween: 20,
        }  
    }
});

mySwiper.init();



// ===== Validate Email Subscription ==== //

function validate(){
    const emailValidate = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailValidate == ''){
        errorMessage();
    }
    else if(emailValidate.match(pattern)){
        successMessage();
    }
    else{
        invalidEmail();
    }

}

function errorMessage(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email cannnot be empty',
      })
}

function invalidEmail(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is Invalid!',
      })
}

function successMessage(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Subscription Confirm!',
        text: 'Thank you for subscribing!',
        showConfirmButton: true,
      })
      document.getElementById("email").value = " ";
}



