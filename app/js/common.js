document.addEventListener('DOMContentLoaded', function(){
  const totalBalance = document.querySelector('.total__balance');
  const totalMoneyIncome = document.querySelector('.total__money-income');
  const totalMoneyExpenses = document.querySelector('.total__money-expenses');
  const historyList = document.querySelector('.history__list');
  const form = document.getElementById('form');
  const operationName = document.querySelector('.operation__name');
  const operationAmount = document.querySelector('.operation__amount');

  let dbOperation = [
    {
      id: '1',
      description: 'Получил зарплату',
      amount: 30000,
    },
    {
      id: '2',
      description: 'Продукты купил',
      amount: -5000,
    },
    {
      id: '3',
      description: 'Спорт зал',
      amount: -2000,
    },
    {
      id: '4',
      description: 'Билет на свободу',
      amount: -10000,
    },
    {
      id: '5',
      description: 'На ништяки',
      amount: -5000,
    },
    {
      id: '6',
      description: 'Сбор дани',
      amount: 20000,
    },
  ];

  const renderOperation = () => {
    const listItem = document.createElement('li');
    listItem.classList.add('history__item');
    listItem.innerHTML = `Отдал долг
      <span class="history__money">+30000 ₽</span>
      <button class="history_delete">x</button>
    `;
    historyList.append(listItem);
  };
});
