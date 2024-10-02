

document.addEventListener('DOMContentLoaded', () => {

  //активация хедера

  const header = document.querySelector('.header');
  const closeAllPopups = document.querySelector('.closeAllPopups')
  const popups = document.querySelectorAll('.popup')
  const headerMenuBtn = header.querySelector('.header_menu_button');
  if (header) {
    const headerBottomMenuBtn = header.querySelector('.have-child');
    const headerCityInput = header.querySelector('.header_left_select');
    if (headerMenuBtn) {
      headerMenuBtn.onclick = () => {
        console.log(123);
        if (headerMenuBtn.classList.contains('close')) {
          headerMenuBtn.classList.add('open')
          headerMenuBtn.classList.remove('close')
          header.classList.add('active')
          document.querySelector('html').classList.add('noScroll')
          closeAllPopups.classList.add('active')
        } else if (!headerMenuBtn.classList.contains('close')) {
          headerMenuBtn.classList.remove('open')
          headerMenuBtn.classList.add('close')
          header.classList.remove('active')
          document.querySelector('html').classList.remove('noScroll')
          closeAllPopups.classList.remove('active')

        }
      }
    }
    if (headerBottomMenuBtn) {
      let headerBottmMenu = header.querySelector('.header-bottom_bottom.desk');
      if (window.innerWidth > 1160) {
        headerBottmMenu = header.querySelector('.header-bottom_bottom.desk');
      } else {
        headerBottmMenu = header.querySelector('.header-bottom_bottom.mob');

      }
      headerBottomMenuBtn.onclick = () => {
        headerBottmMenu.classList.toggle('active')
        headerBottomMenuBtn.classList.toggle('active')
      }
    }
    if (headerCityInput) {
      const headerCityMenu = header.querySelector('.header_left_select_menu')
      headerCityInput.onclick = () => {
        headerCityInput.classList.toggle('active')
      }
      headerCityMenu.addEventListener('mouseleave', () => {
        headerCityInput.classList.remove('active')

      })
      header.addEventListener('mouseleave', () => {
        headerCityInput.classList.remove('active')

      })
    }
  }
  if (closeAllPopups) {
    closeAllPopups.onclick = () => {
      for (let i = 0; popups.length > i; i++) {
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

  if (tabBlock) {
    const tabs = tabBlock.querySelectorAll('.tabs-l-item');
    const tabsRight = tabBlock.querySelector('.tabs-r');
    let tabList = `<p class="Text_20">Ошибка</p>`;
    if (tabs.length > 0) {
      for (let i = 0; tabs.length > i; i++) {
        tabs[i].onclick = () => {
          for (let o = 0; tabs.length > o; o++) {
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

  if (faqBlock) {
    const faqList = faqBlock.querySelectorAll('.faq-item');

    if (faqList.length > 0) {
      for (let i = 0; faqList.length > i; i++) {
        faqList[i].onclick = () => {
          faqList[i].classList.toggle('active')
        }
      }
    }
  }

  //работа кнопки "показать ещё" в блоке продвижения

  const prodvBlock = document.querySelector('.prodv');

  if (prodvBlock) {
    const prodvList = prodvBlock.querySelectorAll('.prodv-item');
    const prodvBtn = prodvBlock.querySelector('.prov-next-button');
    let indexToMove = 6,
        startIndex = 24;
    if(window.innerWidth < 1160 && window.innerWidth > 640) {
      indexToMove = 4;
      startIndex = 16;
    } else if(window.innerWidth < 640) {
      indexToMove = 4;
      startIndex = 8;
    }
    if (prodvList.length < startIndex) {
      prodvBtn.classList.add('noActive')
      for (let i = 0; prodvList.length > i; i++) {
        prodvList[i].classList.add('visual')
      }
    } else {
      let indexVisual = startIndex;
      for (let i = 0; indexVisual > i; i++) {
        prodvList[i].classList.add('visual')
        prodvBtn.onclick = () => {
          if ((indexVisual + indexToMove) < prodvList.length) {
            indexVisual = indexVisual + indexToMove;
            for (let o = 0; indexVisual > o; o++) {
              prodvList[o].classList.add('visual')
            }
          } else {
            indexVisual = indexVisual + (prodvList.length - indexVisual);
            for (let o = 0; indexVisual > o; o++) {
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

  if (prodvBlock) {
    const videosList = videosBlock.querySelectorAll('.video-item');
    const videosBtn = videosBlock.querySelector('.prov-next-button')
    let indexToMove = 3,
        startIndex = 6;
    if(window.innerWidth < 1160) {
      indexToMove = 2;
      startIndex = 4;
    } else {
      indexToMove = 3;
      startIndex = 6;
    }
    if (videosList.length < startIndex) {
      videosBtn.classList.add('noActive')
      for (let i = 0; videosList.length > i; i++) {
        videosList[i].classList.add('active')
      }
    } else {
      let indexVisual = startIndex;
      for (let i = 0; indexVisual > i; i++) {
        videosList[i].classList.add('active')
        videosBtn.onclick = () => {
          if ((indexVisual + indexToMove) < videosList.length) {
            indexVisual = indexVisual + indexToMove;
            for (let o = 0; indexVisual > o; o++) {
              videosList[o].classList.add('active')
            }
          } else {
            indexVisual = indexVisual + (videosList.length - indexVisual);
            for (let o = 0; indexVisual > o; o++) {
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

  if (footer) {
    const footerBtn = footer.querySelector('.footer-menu-item.more')
    let footerHiddenMenu = footer.querySelector('.footer-hidden.desk')
    if(window.innerWidth < 640) {
      footerHiddenMenu = footer.querySelector('.footer-hidden.mob-s')
    }
    footerBtn.onclick = () => {
      footerHiddenMenu.classList.toggle('active')
      footerBtn.classList.toggle('active')
    }

  }

  //вызов модалки с формой

  const modalForm = document.querySelector('.form-popup')

  if (modalForm) {
    const formModalBtns = document.querySelectorAll('.form-btn')
    const formModalClose = modalForm.querySelector('.form-poopup-close-svg')
    for (let i = 0; formModalBtns.length > i; i++) {
      formModalBtns[i].onclick = () => {
        modalForm.classList.add('active')
        closeAllPopups.classList.add('active')
        document.querySelector('html').classList.add('noScroll')
      }
    }
    formModalClose.onclick = () => {
      modalForm.classList.remove('active')
      closeAllPopups.classList.remove('active')
      document.querySelector('html').classList.remove('noScroll')

    }
  }

  //мобилка 

  if(window.innerWidth < 640) {

    // раскрытие текста в about me

    const readMoreBtn = document.querySelector('.about-me .read-next')
    readMoreBtn.onclick = ()=>{
      document.querySelector('.about-me_info_heading.mobile').classList.toggle('more')
      readMoreBtn.classList.toggle('open')
      if(!readMoreBtn.classList.contains('open')) {
        readMoreBtn.querySelector('.read-next-text').innerHTML = 'Читать дальше'
      } else {
        readMoreBtn.querySelector('.read-next-text').innerHTML = 'Свернуть'
      }
    }

    const yaKekyses = document.querySelectorAll('.ya-keys-item');

    if(yaKekyses.length > 0) {
      for(let i = 0; yaKekyses.length > i; i++) {
        let yaTabs = yaKekyses[i].querySelectorAll('.ya-keyses-tabs-tab');
        yaKekyses[i].querySelector('.keys-item-left__positons').classList.add('active')
        yaKekyses[i].querySelector('.keys-item-left__zaprosi').classList.remove('active')
        yaKekyses[i].querySelector('.keys-item__left__top-ya.mob').classList.remove('active')
        for(let o = 0; yaTabs.length > o; o++) {
          yaTabs[o].onclick = ()=>{
            for(let j = 0; yaTabs.length > j; j++) {
              yaTabs[j].classList.remove('active')

            }
            let yaTabAttr = yaTabs[o].getAttribute('data-tab')
            yaTabs[o].classList.add('active')
            if(yaTabAttr == 'result ' ) {
              yaKekyses[i].querySelector('.keys-item-left__positons').classList.add('active')
              yaKekyses[i].querySelector('.keys-item-left__zaprosi').classList.remove('active')
              yaKekyses[i].querySelector('.keys-item__left__top-ya.mob').classList.remove('active')
            } else {
              yaKekyses[i].querySelector('.keys-item-left__positons').classList.remove('active')
              yaKekyses[i].querySelector('.keys-item-left__zaprosi').classList.add('active')
              yaKekyses[i].querySelector('.keys-item__left__top-ya.mob').classList.add('active')

            }
          }
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
      nextEl: '.ya-keys-next.desk',
      prevEl: '.ya-keys-prev.desk'
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 100,
        navigation: {
          nextEl: '.ya-keys-next.mob',
          prevEl: '.ya-keys-prev.mob'
        },
      },
      // when window width is >= 480px
      640: {
        slidesPerView: 1,
        spaceBetween: 100,
        navigation: {
          nextEl: '.ya-keys-next.mob',
          prevEl: '.ya-keys-prev.mob'
        },
      },
      // when window width is >= 640px
      1160: {
        slidesPerView: 1,
        spaceBetween: 100
      }
    },
  });

  if(window.innerWidth < 1160) {
    const nowYaKeys = document.querySelector('.schet-now-ya-keys')
    const allYaKeys = document.querySelector('.schet-all-ya-keys')
    const allYaKeyses = document.querySelectorAll('.ya-keys-swiper .swiper-slide')
    allYaKeys.innerHTML = allYaKeyses.length
    keysSlider.on('slideChangeTransitionStart', ()=>{
      nowYaKeys.innerHTML = keysSlider.activeIndex + 1
    })
    keysSlider.init();
  }

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
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      640: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1160: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
})