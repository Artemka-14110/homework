$(function(){
   $('.slider__box').slick({
    prevArrow: '<img class="slider-arrow slider-arrow-left" src="/images/Arrowleft.svg" alt="">',
    nextArrow: '<img class="slider-arrow slider-arrow-right" src="/images/Arrowright.svg" alt="">'

    
   });

   $('.menu__btn').on('click', function(){
     $('.menu__list').toggleClass('active');
   });
//    $('.phone360img').on('click', function(){
//     $('.phone').toggleClass('active');
//    });
});