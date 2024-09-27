//активация хедера

document.addEventListener('DOMContentLoaded', ()=>{
  const header = document.querySelector('.header');
  if(header) {
    const headerMenuBtn = header.querySelector('.header_menu_button');
    const headerBottomMenuBtn = header.querySelector('.have-child');
    const headerCityInput = header.querySelector('.header_left_select');
    if(headerMenuBtn) {
      headerMenuBtn.onclick = ()=>{
        console.log(123);
        if(headerMenuBtn.classList.contains('close')) {
          headerMenuBtn.classList.add('open')
          headerMenuBtn.classList.remove('close')
          header.classList.add('active')
        } else if(!headerMenuBtn.classList.contains('close')) {
          headerMenuBtn.classList.remove('open')
          headerMenuBtn.classList.add('close')
          header.classList.remove('active')

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
})