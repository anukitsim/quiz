// let delay = n => new Promise(r => setTimeout(r, n));
//
// async function typeWriter(div, txt) {
//   for (let char of txt) {
//     div.innerHTML += char;
//     await delay(50);
//   }
// }
//
// typeWriter(document.querySelector('#type'), 'hello there');

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const images = ["Claw.png", "Cosmo.png", "Cross2.png", "V.png", "vU2.png", "SOH.png", "tear.png", "tear.png", " "];


form.addEventListener('submit', e=> {
  e.preventDefault();
  let score = 0;
  // user answrs
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value]


  result.classList.remove('none');


  // Decide what product to show
  if (userAnswers[0] === 'A' && userAnswers[1] === 'A' && userAnswers[2] === 'A' && userAnswers[3] === 'A' && userAnswers[4] === 'A') {
    showProductImage(images[0]);
  }
  else if (userAnswers[0] === 'B' && userAnswers[1] === 'B' && userAnswers[2] === 'B' && userAnswers[3] === 'B' && userAnswers[4] === 'B') {
    showProductImage(images[1]);
  }
  else if (userAnswers[0] === 'A' && userAnswers[1] === 'B' && userAnswers[2] === 'A' && userAnswers[3] === 'B' && userAnswers[4] === 'A') {
    showProductImage(images[3]);
  }
  else if (userAnswers[0] === 'A' && userAnswers[1] === 'B' && userAnswers[2] === 'B' && userAnswers[3] === 'B' && userAnswers[4] === 'B') {
    showProductImage(images[4]);
  }


});

function showProductImage(imagePath){
  document.getElementById("product-image").src = imagePath;

}
showProductImage(images[z]);
