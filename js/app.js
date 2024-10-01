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
})

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