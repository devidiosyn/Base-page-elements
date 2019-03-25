document.addEventListener('DOMContentLoaded', function() {
  console.log('js in');
  const btn = document.getElementsByClassName('text-toggle-btn')[0];
  const dots = document.getElementsByClassName('dots')[0];
  const text = document.getElementsByClassName('more-text')[0];

  btn.addEventListener('click', function() {
    console.log('click');
    if(btn.getAttribute('data-btn') == 'more') {
      console.log('less');
      btn.textContent = 'Read less';
      btn.setAttribute('data-btn','less');
      dots.style.display = 'none';
      text.style.display = 'inline';
    }
    else {
      console.log('more');
      btn.textContent = 'Read more';
      btn.setAttribute('data-btn','more');
      dots.style.display = 'inline';
      text.style.display = 'none';
    }
  })
});