document.addEventListener('DOMContentLoaded', function(){
  const generateId = () => `id${Math.round(Math.random() * 1e8).toString(16)}`
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

  const renderOperation = (operation) => {
    const className = operation.amount < 0 ? 'history__item-minus' : 'history__item-plus';
    const listItem = document.createElement('li');
    listItem.classList.add('history__item');
    listItem.classList.add(className);
    listItem.innerHTML = `${operation.description}
      <span class="history__money">${operation.amount} ₽</span>
      <button class="history_delete">x</button>
    `;
    historyList.append(listItem);
  };

  const updateBalance = () => {
    const resultIncome = dbOperation
    .filter((el) => el.amount > 0)
    .reduce((result, el) => result + el.amount, 0);

    const resultExpenses = dbOperation
    .filter((el) => el.amount < 0)
    .reduce((result, el) => result + el.amount, 0);

    totalMoneyIncome.textContent = resultIncome + ' ₽';
    totalMoneyExpenses.textContent = resultExpenses + ' ₽';
    totalBalance.textContent = (resultIncome + resultExpenses) + ' ₽';
  };

  const addOperation = (event) => {
    event.preventDefault();
    const operationNameValue = operationName.value;
    const operationAmountValue = operationAmount.value;

    operationName.style.borderColor = '';
    operationAmount.style.borderColor = '';
    if (operationNameValue && operationAmountValue) {
      const operation = {
        id: generateId(),
        description: operationName.value,
        amount: operationAmount.value
      };
      dbOperation.push(operation);
      init();
      console.log(dbOperation)

    } else {
      if (!operationNameValue) operationName.style.borderColor = 'red';
      if (!operationAmountValue) operationAmount.style.borderColor = 'red';
    }
    operationName.value = '';
    operationAmount.value = '';
  };

  const init = () => {
    historyList.textContent = '';
    dbOperation.forEach(renderOperation);
    updateBalance()
  };

  form.addEventListener('submit', addOperation);

  init();
});
