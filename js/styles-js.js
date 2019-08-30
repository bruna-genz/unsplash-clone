let label = document.getElementById('label');
let input = document.getElementById('search');

input.addEventListener('focus', () => {

   input.style.borderBottom = 'solid 1px #6a6a6a';
   input.style.borderTop = 'solid 1px #6a6a6a';
   input.style.borderRight = 'solid 1px #6a6a6a';
   label.style.borderTop = 'solid 1px #6a6a6a';
   label.style.borderBottom = 'solid 1px #6a6a6a';
   label.style.borderLeft = 'solid 1px #6a6a6a';

   label.setAttribute('style', 'solid 1px #6a6a6a');
});

