import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
const formEl = document.querySelector('.form');
const startBtn = document.querySelector('button[type="submit"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  
  startBtn.disabled = true;

  let delayValue = Number(delayEl.value);
  let stepValue = Number(stepEl.value);
  let amountValue = Number(amountEl.value);
  let totalDelay = delayValue + stepValue * amountValue;
  if (delayValue <= 0 || stepValue <= 0 || amountValue <= 0) {
    Notify.warning('???');
    return;
  };
  
  for (let position = 1; position <= amountValue; position += 1) {
    createPromise(position, delayValue)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    );
    
    delayValue += stepValue;
  }
  formEl.reset()
  onOff(totalDelay);
}
// console.log(onFormSubmit());

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((Resolve, Rejected) => {
    setTimeout(() => {
      if (shouldResolve) {
        Resolve({ position, delay });
      } else {
        Rejected({ position, delay });
      }
    }, delay);
  });
}

function onOff(total) { 
  setTimeout(() => {
    startBtn.disabled = false;
  }, total);
}


