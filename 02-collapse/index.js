const button = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');
const text = document.querySelector('.collapsible__action');
const actionHidden = document.querySelector('.collapsible__action--hidden');
const actionVisible = document.querySelector('.collapsible__action--visible');

const showContent = () => {
  content.animate([
    {
      transform: 'translateY(-25px)',
      opacity: 0
    },
    {
      transform: 'translateY(0)',
      opacity: 1
    }
  ], {
      duration: 300,
      fill: 'forwards'
  });
};

const hideContent = () => {
  content.animate([
    {
      transform: 'translateY(0)',
      opacity: 1
    },
    {
      transform: 'translateY(-25px)',
      opacity: 0
    }
  ], {
      duration: 200,
      fill: 'forwards'
  });
};

actionVisible.style.display = 'none';
content.style.opacity = 0;

button.addEventListener('click', () => {
  if (actionVisible.style.display === 'none') {
    actionVisible.style.display = 'inline';
    actionHidden.style.display = 'none';
    showContent();
  } else {
    actionVisible.style.display = 'none';
    actionHidden.style.display = 'inline';
    hideContent();
  }
});



