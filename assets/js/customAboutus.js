//About us 
// $('.about-us-member-container').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   autoplay: true, 
//   autoplaySpeed: 4000,
//   prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//   nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
// });

// Expanding js logic
var aboutUsContainer = document.querySelector('.about-us-member-container');
var divAboutUs1A = document.getElementById('member-company-1');
var expanding1a = document.querySelector('.expanding-item-1-a');
var expanding1b = document.querySelector('.div-content-mo-rong-1');
var expanding1c = document.querySelector('.video-intro-ban-than-1');

divAboutUs1A.addEventListener('mouseover', function () {
   expanding1b.classList.add('active-about-us-content-open');
   expanding1c.classList.add('active-about-us-content-open');
   expanding1a.classList.add('active-about-us-content-closed') 
});

divAboutUs1A.addEventListener('mouseout', function () {
    expanding1b.classList.remove('active-about-us-content-open');
    expanding1c.classList.remove('active-about-us-content-open');
    expanding1a.classList.remove('active-about-us-content-closed') 
});
var divAboutUs2A = document.getElementById('member-company-2');
var expanding2a = document.querySelector('.expanding-item-2-a');
var expanding2b = document.querySelector('.div-content-mo-rong-2');
var expanding2c = document.querySelector('.video-intro-ban-than-2');

divAboutUs2A.addEventListener('mouseover', function () {
   expanding2b.classList.add('active-about-us-content-open');
   expanding2c.classList.add('active-about-us-content-open');
   expanding2a.classList.add('active-about-us-content-closed') 
});

divAboutUs2A.addEventListener('mouseout', function () {
    expanding2b.classList.remove('active-about-us-content-open');
    expanding2c.classList.remove('active-about-us-content-open');
    expanding2a.classList.remove('active-about-us-content-closed') 
});

