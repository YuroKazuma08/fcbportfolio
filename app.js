const navSlide = () => {
   const burger = document.querySelector("#hamburger");
   const nav = document.querySelector(".navbar-links");
   const navLinks = document.querySelectorAll(".navbar-links li")

   document.onclick = e => {
      if (e.target.className !== "navbar-links nav-active" && e.target.id !== "hamburger" && e.target.className.match(/^bar(?=[123])/g) != "bar") {
         nav.classList.remove('nav-active');
         burger.classList.remove('change');
         navLinks.forEach(link => {
            if (link.style.animation) {
               link.style.animation = ``;
            }
         })
      }
   }

   burger.addEventListener('click', () => {

      // NAVBAR TOGGLE
      nav.classList.toggle('nav-active');

      // BURGER TOGGLE
      burger.classList.toggle('change');

      // NAVLINKS TOGGLE
      navLinks.forEach((link, index) => {
         if (link.style.animation) {
            link.style.animation = ``;
         } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
         }
      });

   })
}

navSlide();