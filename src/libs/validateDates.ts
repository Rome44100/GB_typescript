import { renderToast } from '../libs/lib.js';

/**
 * Recieve two dates.
 * @param {string} firstDate like '2020-10-20'
 * @param {string} secondDate like '2020-10-21'
 */

export function validateDates (firstDate: string, secondDate: string): {
    dateInValue: string, 
    dateOutValue: string,
    maxDate: string,
    minDate: string,
    diffDays?: number
  }
{
  // разделитель
  const delim = '-';
  
  let errors = '';

  let diffDays = 1;
  
  // сегодняшняя дата - минимальная дата в диапазоне
  let now = new Date();
  const minDate = now.getFullYear() + delim + 
    ('0' + (now.getMonth() + 1)).slice(-2) + delim + 
    ('0' + now.getDate()).slice(-2);
  // console.log(minDate);

  // дата заезда = сегодня + 1 день
  const dayIn = now.setDate(now.getDate() + 1);
  let dateIn = new Date(dayIn);

  // дата выезда = сегодня + 3 дня
  now = new Date();
  const dayOut = now.setDate(now.getDate() + 3);
  let dateOut = new Date(dayOut);
  
  // максимальная дата в диапазоне
  now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth() + 2);
  const datePlus = new Date(future.setDate(0));
  const maxDate = datePlus.getFullYear() + delim + 
    ('0' + (datePlus.getMonth() + 1)).slice(-2) + delim + 
    ('0' + datePlus.getDate()).slice(-2);

  // парсим аргументы
  const argFristDate = Date.parse(firstDate);
  const argSecondDate = Date.parse(secondDate);
  
  // находим значения для сравнения с аргументами
  now = new Date();
  const start = Date.parse(now.toString());
  const end = Date.parse(datePlus.toString());

  diffDays = (Math.floor((argSecondDate - argFristDate) / (1000 * 60 * 60 * 24))) % 30;
  // millisecond / 1 second * 60 seconds * 60 minutes * 24 hours

  // проверяем аргументы
  if (!Number.isNaN(argFristDate)) {
    // ошибки
    if (argFristDate < start) {
      errors += 'Первая дата меньше допустимого значения!<br>';
    }
    if (argFristDate > end) {
      errors += 'Первая дата больше допустимого значения<br>';
    }
    if (argFristDate >= argSecondDate) {
      errors += 'Первая дата больше или равна второй!<br>';
    }
    if (argSecondDate > end) {
      errors += 'Вторая дата больше допустимого значения!<br>';
    }
    // если ошибок нет, то записываем новые значения из аргументов в объекты даты
    if (argFristDate < argSecondDate &&
        argFristDate >= start &&
        argFristDate < end &&
        argSecondDate < end) {      
      dateIn = new Date(argFristDate);
      dateOut = new Date(argSecondDate);
    }
  } else {
    errors += 'Пожалуйста, введите дату в формате "гггг-мм-дд"!<br>';
  }

  if (errors !== '') {
    renderToast(
      { text: errors, type: 'error' },
      { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    );
  }

  // преобразуем объекты даты в строковые значения
  const dateInValue = dateIn.getFullYear() + delim + 
    ('0' + (dateIn.getMonth() + 1)).slice(-2) + delim + 
    ('0' + dateIn.getDate()).slice(-2);
  
  const dateOutValue = dateOut.getFullYear() + delim + 
    ('0' + (dateOut.getMonth() + 1)).slice(-2) + delim + 
    ('0' + dateOut.getDate()).slice(-2);

  return {
    dateInValue: dateInValue, 
    dateOutValue: dateOutValue,
    maxDate: maxDate,
    minDate: minDate,
    diffDays: diffDays
  };
}