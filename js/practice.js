const container = document.querySelector('.btn-container');

let selectedCountry = null;

container.addEventListener('click', onClickBtn)

function onClickBtn(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.button-active');
  
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('button-active');
  }

  const nextActiveBtn = event.target;
  nextActiveBtn.classList.add('button-active');
  selectedCountry = nextActiveBtn.textContent;

  console.log(selectedCountry);
}

