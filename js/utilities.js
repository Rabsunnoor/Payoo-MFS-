function showSectionById(Id) {
  document.getElementById('add-money from').classList.add('hidden');
  document.getElementById('cash-out-from').classList.add('hidden');
  document.getElementById('transaction-history').classList.add('hidden');

  // .............
  document.getElementById(Id).classList.remove('hidden');
}
