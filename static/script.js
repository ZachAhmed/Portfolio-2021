const element = document.querySelector('.animated');

element.addEventListener('sal:out', ({ detail }) => {
  console.log('exiting', detail.target);
});