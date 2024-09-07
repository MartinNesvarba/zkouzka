$(document).ready(function() {
    $('.lightbox').lightbox();
  });

  const select = document.querySelector('select');
  select.addEventListener('change', () => {
    const selectedValue = select.value;
    if (selectedValue === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  });