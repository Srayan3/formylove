const CORRECT_DAY = 27;    // set your day
const CORRECT_DAY2 = 26;    // set your day
const CORRECT_MONTH = 6;   // set your month

const form = document.getElementById('verifyForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const day = Number(document.getElementById('day').value);
  const month = Number(document.getElementById('month').value);

  if ((day === CORRECT_DAY || day === CORRECT_DAY2) && month === CORRECT_MONTH) {
    // Sweet celebration alert
    Swal.fire({
      title: 'Correct!',
      text: 'You got it right! Redirecting...',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      willClose: () => {
        window.location.href = 'letter.html?date=27062025';
      }
    });
  } else {
    // Shake animation
    form.classList.add('shake');

    // Sweet alert fail
    Swal.fire({
      title: 'Wrong!',
      text: 'Try again.',
      icon: 'error',
      timer: 2000,
      showConfirmButton: false
    });

    // Remove shake class after animation ends
    setTimeout(() => form.classList.remove('shake'), 500);
  }
});
