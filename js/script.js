document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function () {
        let header = document.getElementById('header');
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            header.classList.add("scrolled"); // Добавляем класс при прокрутке
        } else {
            header.classList.remove("scrolled"); // Убираем класс, когда вверху
        }
    }

    document.querySelector('.header__burger').addEventListener('click', function () {
        document.querySelector('.header__menu').classList.add('header__menu-active')
      })
      document.querySelector('.header__burger-x').addEventListener('click', function () {
        document.querySelector('.header__menu').classList.remove('header__menu-active')
      })
      document.addEventListener('click', e => { 
        const target = e.target 
        if (!target.closest('.header__burger') && !target.closest('.header__burger-x')) { 
          document.querySelector('.header__menu').classList.remove('header__menu-active')
        }
      })
})