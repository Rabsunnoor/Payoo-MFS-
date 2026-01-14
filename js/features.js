document
  .getElementById('btn-cash-out-show')
  .addEventListener('click', function () {
    document.getElementById('cash-out-from').classList.remove('hidden');
    document.getElementById('add-money from').classList.add('hidden');
  });

document
  .getElementById('btn-add-money-show')
  .addEventListener('click', function () {
    document.getElementById('add-money from').classList.remove('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
  });

document
  .getElementById('btn-transaction')
  .addEventListener('click', function () {
    showSectionById('transaction-history');
  });
