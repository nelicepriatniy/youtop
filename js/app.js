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