//активация хедера

document.addEventListener('DOMContentLoaded', ()=>{
  const header = document.querySelector('.header');
  const closeAllPopups = document.querySelector('.closeAllPopups')
  const popups = document.querySelectorAll('.popup')
  const headerMenuBtn = header.querySelector('.header_menu_button');
  if(header) {
    const headerBottomMenuBtn = header.querySelector('.have-child');
    const headerCityInput = header.querySelector('.header_left_select');
    if(headerMenuBtn) {
      headerMenuBtn.onclick = ()=>{
        console.log(123);
        if(headerMenuBtn.classList.contains('close')) {
          headerMenuBtn.classList.add('open')
          headerMenuBtn.classList.remove('close')
          header.classList.add('active')
          document.querySelector('html').classList.add('noScroll')
          closeAllPopups.classList.add('active')
        } else if(!headerMenuBtn.classList.contains('close')) {
          headerMenuBtn.classList.remove('open')
          headerMenuBtn.classList.add('close')
          header.classList.remove('active')
          document.querySelector('html').classList.remove('noScroll')
          closeAllPopups.classList.remove('active')

        }
      }
    }
    if(headerBottomMenuBtn) {
      const headerBottmMenu = header.querySelector('.header-bottom_bottom');
      headerBottomMenuBtn.onclick = ()=>{
        headerBottmMenu.classList.toggle('active')
        headerBottomMenuBtn.classList.toggle('active')
      }
    }
    if(headerCityInput) {
      const headerCityMenu = header.querySelector('.header_left_select_menu')
      headerCityInput.onclick = ()=>{
        headerCityInput.classList.toggle('active')
      }
      headerCityMenu.addEventListener('mouseleave', ()=>{
        headerCityInput.classList.remove('active')

      })
      header.addEventListener('mouseleave', ()=>{
        headerCityInput.classList.remove('active')

      })
    }
  }
  if(closeAllPopups) {
    closeAllPopups.onclick = ()=>{
      for(let i = 0; popups.length > i; i ++) {
        popups[i].classList.remove('active')
      }
      headerMenuBtn.classList.add('close')
      headerMenuBtn.classList.remove('open')
      closeAllPopups.classList.remove('active')
      document.querySelector('html').classList.remove('noScroll')
    }
  }

//работа табов в блоке с табами 

const tabBlock = document.querySelector('.tabs');

if(tabBlock) {
  const tabs = tabBlock.querySelectorAll('.tabs-l-item');
  const tabsRight = tabBlock.querySelector('.tabs-r');
  let tabList = `<p class="Text_20">Ошибка</p>`;
  if(tabs.length > 0) {
    for(let i = 0; tabs.length > i; i++) {
      tabs[i].onclick = ()=>{
        for(let o = 0; tabs.length > o; o++) {
          tabs[o].classList.remove('active')
        }
        tabs[i].classList.add('active')

        tabList = tabs[i].querySelector('.tabs-l-inv-list').cloneNode(true);
        tabsRight.innerHTML = ''
        tabsRight.append(tabList)
      }
    }
  }
}

//работа вопросов

const faqBlock = document.querySelector('.FaQ')

if(faqBlock) {
  const faqList = faqBlock.querySelectorAll('.faq-item');

  if(faqList.length > 0) {
    for(let i = 0; faqList.length > i; i++) {
      faqList[i].onclick = ()=>{
        faqList[i].classList.toggle('active')
      }
    }
  }
}

//работа кнопки "показать ещё" в блоке продвижения

const prodvBlock = document.querySelector('.prodv');

if(prodvBlock) {
  const prodvList = prodvBlock.querySelectorAll('.prodv-item');
  const prodvBtn = prodvBlock.querySelector('.prov-next-button')
  if(prodvList.length < 24) {
    prodvBtn.classList.add('noActive')
    for(let i = 0; prodvList.length > i; i++) {
      prodvList[i].classList.add('visual')
    }
  } else {
    let indexVisual = 24;
    for(let i = 0; indexVisual > i; i++) {
      prodvList[i].classList.add('visual')
      prodvBtn.onclick = ()=>{
        if((indexVisual + 6) < prodvList.length) {
          indexVisual = indexVisual + 6;
          for(let o = 0; indexVisual > o; o++ ) {
            prodvList[o].classList.add('visual')
          }
        } else {
          indexVisual = indexVisual + (prodvList.length - indexVisual);
          for(let o = 0; indexVisual > o; o++ ) {
            prodvList[o].classList.add('visual')
          }
          prodvBtn.classList.add('noActive')
        }
      }
    }
  }
}

//работа кнопки "показать ещё" в блоке видео

const videosBlock = document.querySelector('.videos');

if(prodvBlock) {
  const videosList = videosBlock.querySelectorAll('.video-item');
  const videosBtn = videosBlock.querySelector('.prov-next-button')
  if(videosList.length < 6) {
    videosBtn.classList.add('noActive')
    for(let i = 0; videosList.length > i; i++) {
      videosList[i].classList.add('active')
    }
  } else {
    let indexVisual = 6;
    for(let i = 0; indexVisual > i; i++) {
      videosList[i].classList.add('active')
      videosBtn.onclick = ()=>{
        if((indexVisual + 3) < videosList.length) {
          indexVisual = indexVisual + 3;
          for(let o = 0; indexVisual > o; o++ ) {
            videosList[o].classList.add('active')
          }
        } else {
          indexVisual = indexVisual + (videosList.length - indexVisual);
          for(let o = 0; indexVisual > o; o++ ) {
            videosList[o].classList.add('active')
          }
          videosBtn.classList.add('noActive')
        }
      }
    }
  }
}

//работа скрытого меню в футере

const footer = document.querySelector('.footer')

if(footer) {
  const footerBtn = footer.querySelector('.footer-menu-item.more')
  const footerHiddenMenu = footer.querySelector('.footer-hidden')
  footerBtn.onclick = ()=>{
    footerHiddenMenu.classList.toggle('active')
    footerBtn.classList.toggle('active')
  }

}

//вызов модалки с формой

const modalForm = document.querySelector('.form-popup')

if(modalForm) {
  const formModalBtns = document.querySelectorAll('.form-btn')
  const formModalClose = modalForm.querySelector('.form-poopup-close-svg')
  for(let i = 0; formModalBtns.length > i; i++) {
    formModalBtns[i].onclick =()=>{
      modalForm.classList.add('active')
      closeAllPopups.classList.add('active')
      document.querySelector('html').classList.add('noScroll')
    }
  }
  formModalClose.onclick = ()=>{
    modalForm.classList.remove('active')
    closeAllPopups.classList.remove('active')
    document.querySelector('html').classList.remove('noScroll')

  }
}

//слайдер кейсов слайдера 

const keysSlider = new Swiper('.ya-keys-swiper', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  navigation: {
    nextEl: '.ya-keys-next',
    prevEl: '.ya-keys-prev'
  }
});

//слайдер калькулятора квиза

const calkSlider = new Swiper('.calkulator-swiper', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  allowTouchMove: false,
  autoHeight: true,
  navigation: {
    nextEl: '.calk-left-next',
  },
  pagination: {
    el: '.calk-left-pag'
  }
});

//слайдер видеоотзывов

const videoRevSlider = new Swiper('.video-rev-slider', {
  speed: 400,
  spaceBetween: 40,
  slidesPerView: 3,
  navigation: {
    nextEl: '.video-arr-next',
    prevEl: '.video-arr-prev'
  },
  pagination: {
    el: '.video-rev-paggination'
  }
});
})