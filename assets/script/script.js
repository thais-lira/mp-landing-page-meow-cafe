window.onload = function(){
  const btnMobile = document.querySelector('.icon-mobile');
  
  btnMobile.addEventListener('click', function(){
    const navbarMobile = document.querySelector('.navbar-mobile');
    navbarMobile.classList.toggle('open');
  });
}