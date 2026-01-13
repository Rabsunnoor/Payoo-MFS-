document
  .getElementById('btn-add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('add-amount').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (pinNumber === 'Rabsun') {
      console.log('Add-Money Successful..');

      const balance = document.getElementById('Current-balance').innerText;

      const balanceNum = parseFloat(balance);
      const addMoneyNum = parseFloat(addMoney);

      const newBalance = balanceNum + addMoneyNum;

      document.getElementById('Current-balance').innerText = newBalance;
    } else {
      alert('Wrong Pin Number or Amount,Please try again!');
    }
  });
