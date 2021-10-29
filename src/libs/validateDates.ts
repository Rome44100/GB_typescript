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
    minDate: string
  }
{
  // разделитель
  const delim = '-';
  
  let errors = '';
  
  // сегодняшняя дата - минимальная дата в диапазоне
  let now = new Date();
  const minDate = now.getFullYear() + delim + (now.getMonth() + 1) + delim + now.getDate();

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
  const maxDate = datePlus.getFullYear() + delim + (datePlus.getMonth() + 1) + delim + datePlus.getDate();

  now = new Date();
  // парсим аргументы
  const argFristDate = Date.parse(firstDate);
  const argSecondDate = Date.parse(secondDate);
  
  // находим значения для сравнения с аргументами
  const start = Date.parse(now.toString());
  const end = Date.parse(datePlus.toString());

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
  const dateInValue = dateIn.getFullYear() + delim + (dateIn.getMonth() + 1) + delim + dateIn.getDate();
  const dateOutValue = dateOut.getFullYear() + delim + (dateOut.getMonth() + 1) + delim + dateOut.getDate();

  return {
    dateInValue: dateInValue, 
    dateOutValue: dateOutValue,
    maxDate: maxDate,
    minDate: minDate
  };
}