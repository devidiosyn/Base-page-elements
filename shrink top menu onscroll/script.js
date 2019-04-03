document.addEventListener('DOMContentLoaded', function() {
  console.log('js');
  let header = document.querySelector('.header');
  let logo = document.querySelector('.header__logo');
  let container = document.querySelector('.container');

  container.onscroll = () => {
    if (container.scrollTop > 80) {
      header.style.padding = "30px 10px";
      logo.style.fontSize = "25px";
      console.log('>80');
    } else {
      header.style.padding = "80px 10px";
      logo.style.fontSize = "35px";
      console.log('<80');
    }
  }
});