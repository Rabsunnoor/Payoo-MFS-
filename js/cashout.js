document
  .getElementById('btn-Cash-Out')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const balance = document.getElementById('cashOut-amount').value;
    const balanceNumber = parseFloat(balance);
    const pinNumber = document.getElementById('Cashout-pin-number').value;

    if (pinNumber === 'Rabsun') {
      console.log('Cash Out successfully');
      const amount = document.getElementById('Current-balance').innerText;
      const amountNumber = parseFloat(amount);

      const newAmount = amountNumber - balanceNumber;
      document.getElementById('Current-balance').innerText = newAmount;
    } else {
      alert('Wrong Pin Number or Amount,Please try again!');
    }
  });
