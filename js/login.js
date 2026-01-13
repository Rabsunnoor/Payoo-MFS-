document
  .getElementById('btn-login')
  .addEventListener('click', function (event) {
    event.preventDefault();

    // get phone and password
    const PhoneNumber = document.getElementById('get-Phone').value;
    const PinNumber = document.getElementById('get-Pin').value;

    if (PhoneNumber === '01844897578' && PinNumber === 'Rabsun') {
      window.location.href = '/Homepage.html';
    } else {
      alert('Wrong phone or password');
    }
  });
