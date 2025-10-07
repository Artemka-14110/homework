(function(){

  //  burger
  document.addEventListener('click', burgerInit)

  function burgerInit(e){


    // const target = e.target


    const burgerIcon = e.target.closest('.burger__icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    // if (burgerIcon){
    //     e.preventDefault()
    // } 
    
    if (!document.body.classList.contains('body--opened-menu')){
        document.body.classList.add('body--opened-menu')
    } else{
         document.body.classList.remove('body--opened-menu')
    }


  
    

  }
  //  modal
  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.about__img-button')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')){
      document.body.classList.remove('body--opened-modal')
    }
  }
  // program show

  const tabControls = document.querySelector('.tab-controls')
  
  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {
  const tabControl = e.target.closest('.tab-controls-link')

   if (!tabControl) return
   e.preventDefault()
   if (tabControl.classList.contains('tab-controls-link--active')) return

   const tabContentID = tabControl.getAttribute('href')
    

  document.querySelector('.tab-content--show').classList.remove('tab-content--show')
  document.querySelector(tabContentID).classList.add('tab-content--show')

  document.querySelector('.tab-controls-link--active').classList.remove('tab-controls-link--active')
  tabControl.classList.add('tab-controls-link--active')


  }

  // аккордион 
  // const accordionList = document.querySelectorAll('.accordion-list')

  // accordionList.forEach(el => {

    // эта строчка для открытия первой строчки аккордиона

    // document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight =  document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';



    // el.addEventListener('click', (e) => {


        // const accordionList = e.currentTarget
        // const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened') 
        // const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__control')

        // const accordionControl = e.target.closest('.accordion-list__control');
      // if(!accordionControl) return
      // const accordionItem = accordionControl.parentElement;
      // const accordionContent = accordionControl.nextElementSibling;

      // if (accordionOpenedItem && accordionItem != accordionOpenedItem){

        // accordionOpenedItem.classList.remove('accordion-list__item--opened');
        // accordionOpenedContent.style.maxHeight = null;
      // }

      

      // accordionItem.classList.toggle('accordion-list__item--opened');

      // if (accordionItem.classList.contains('accordion-list__item--opened')) {
        // accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      // } else {
        // accordionContent.style.maxHeight = null;
      // }
     
    // })
  // })
  const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionList = e.currentTarget;
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;

        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }

        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});
 
//  slider gallary
const swiper = new Swiper('.gallary__slider', {

  spaceBetween: 15,
  slidesPerView: 2,
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.gallary__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallary__next',
    prevEl: '.gallary__prev',
  },

  breakpoints:{






    601:{
      slidesPerView:3,
    },

    801:{
     spaceBetween: 32,
    } ,

    1101:{
      slidesPerView:4,
    }
  }

  // And if we need scrollbar

});

})()

