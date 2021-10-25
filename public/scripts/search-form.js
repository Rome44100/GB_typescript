import { renderBlock, renderToast } from './lib.js';
// import { format } from 'date-fns' // doesn't work
/**
 * Recieve two dates.
 * @param {string} firstDate like '2020-10-20'
 * @param {string} secondDate like '2020-10-21'
 */
export function renderSearchFormBlock(firstDate, secondDate) {
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
    }
    else {
        errors += 'Пожалуйста, введите дату в формате "гггг-мм-дд"!<br>';
    }
    if (errors !== '') {
        renderToast({ text: errors, type: 'error' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
    }
    // преобразуем объекты даты в строковые значения
    const dateInValue = dateIn.getFullYear() + delim + (dateIn.getMonth() + 1) + delim + dateIn.getDate();
    const dateOutValue = dateOut.getFullYear() + delim + (dateOut.getMonth() + 1) + delim + dateOut.getDate();
    renderBlock('search-form-block', `<form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dateInValue}" min="${minDate}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateOutValue}" min="${minDate}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDbkQsb0RBQW9EO0FBRXBEOzs7O0dBSUc7QUFFSCxNQUFNLFVBQVUscUJBQXFCLENBQUUsU0FBaUIsRUFBRSxVQUFrQjtJQUMxRSxjQUFjO0lBQ2QsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBRWxCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVoQixrREFBa0Q7SUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNyQixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFekYsaUNBQWlDO0lBQ2pDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdDLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTdCLGdDQUFnQztJQUNoQyxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNqQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QyxJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUvQixnQ0FBZ0M7SUFDaEMsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxJ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O1lBVzlGLENBQ1QsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jaywgcmVuZGVyVG9hc3QgfSBmcm9tICcuL2xpYi5qcydcbi8vIGltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJyAvLyBkb2Vzbid0IHdvcmtcblxuLyoqXG4gKiBSZWNpZXZlIHR3byBkYXRlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmaXJzdERhdGUgbGlrZSAnMjAyMC0xMC0yMCdcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWNvbmREYXRlIGxpa2UgJzIwMjAtMTAtMjEnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayAoZmlyc3REYXRlOiBzdHJpbmcsIHNlY29uZERhdGU6IHN0cmluZykge1xuICAvLyDRgNCw0LfQtNC10LvQuNGC0LXQu9GMXG4gIGNvbnN0IGRlbGltID0gJy0nO1xuICBcbiAgbGV0IGVycm9ycyA9ICcnO1xuICBcbiAgLy8g0YHQtdCz0L7QtNC90Y/RiNC90Y/RjyDQtNCw0YLQsCAtINC80LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQsNGC0LAg0LIg0LTQuNCw0L/QsNC30L7QvdC1XG4gIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBtaW5EYXRlID0gbm93LmdldEZ1bGxZZWFyKCkgKyBkZWxpbSArIChub3cuZ2V0TW9udGgoKSArIDEpICsgZGVsaW0gKyBub3cuZ2V0RGF0ZSgpO1xuXG4gIC8vINC00LDRgtCwINC30LDQtdC30LTQsCA9INGB0LXQs9C+0LTQvdGPICsgMSDQtNC10L3RjFxuICBjb25zdCBkYXlJbiA9IG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyAxKTtcbiAgbGV0IGRhdGVJbiA9IG5ldyBEYXRlKGRheUluKTtcblxuICAvLyDQtNCw0YLQsCDQstGL0LXQt9C00LAgPSDRgdC10LPQvtC00L3RjyArIDMg0LTQvdGPXG4gIG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRheU91dCA9IG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyAzKTtcbiAgbGV0IGRhdGVPdXQgPSBuZXcgRGF0ZShkYXlPdXQpO1xuICBcbiAgLy8g0LzQsNC60YHQuNC80LDQu9GM0L3QsNGPINC00LDRgtCwINCyINC00LjQsNC/0LDQt9C+0L3QtVxuICBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBmdXR1cmUgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAyKTtcbiAgY29uc3QgZGF0ZVBsdXMgPSBuZXcgRGF0ZShmdXR1cmUuc2V0RGF0ZSgwKSk7XG4gIGNvbnN0IG1heERhdGUgPSBkYXRlUGx1cy5nZXRGdWxsWWVhcigpICsgZGVsaW0gKyAoZGF0ZVBsdXMuZ2V0TW9udGgoKSArIDEpICsgZGVsaW0gKyBkYXRlUGx1cy5nZXREYXRlKCk7XG5cbiAgbm93ID0gbmV3IERhdGUoKTtcbiAgLy8g0L/QsNGA0YHQuNC8INCw0YDQs9GD0LzQtdC90YLRi1xuICBjb25zdCBhcmdGcmlzdERhdGUgPSBEYXRlLnBhcnNlKGZpcnN0RGF0ZSk7XG4gIGNvbnN0IGFyZ1NlY29uZERhdGUgPSBEYXRlLnBhcnNlKHNlY29uZERhdGUpO1xuICBcbiAgLy8g0L3QsNGF0L7QtNC40Lwg0LfQvdCw0YfQtdC90LjRjyDQtNC70Y8g0YHRgNCw0LLQvdC10L3QuNGPINGBINCw0YDQs9GD0LzQtdC90YLQsNC80LhcbiAgY29uc3Qgc3RhcnQgPSBEYXRlLnBhcnNlKG5vdy50b1N0cmluZygpKTtcbiAgY29uc3QgZW5kID0gRGF0ZS5wYXJzZShkYXRlUGx1cy50b1N0cmluZygpKTtcblxuICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0LDRgNCz0YPQvNC10L3RgtGLXG4gIGlmICghTnVtYmVyLmlzTmFOKGFyZ0ZyaXN0RGF0ZSkpIHtcbiAgICAvLyDQvtGI0LjQsdC60LhcbiAgICBpZiAoYXJnRnJpc3REYXRlIDwgc3RhcnQpIHtcbiAgICAgIGVycm9ycyArPSAn0J/QtdGA0LLQsNGPINC00LDRgtCwINC80LXQvdGM0YjQtSDQtNC+0L/Rg9GB0YLQuNC80L7Qs9C+INC30L3QsNGH0LXQvdC40Y8hPGJyPic7XG4gICAgfVxuICAgIGlmIChhcmdGcmlzdERhdGUgPiBlbmQpIHtcbiAgICAgIGVycm9ycyArPSAn0J/QtdGA0LLQsNGPINC00LDRgtCwINCx0L7Qu9GM0YjQtSDQtNC+0L/Rg9GB0YLQuNC80L7Qs9C+INC30L3QsNGH0LXQvdC40Y88YnI+JztcbiAgICB9XG4gICAgaWYgKGFyZ0ZyaXN0RGF0ZSA+PSBhcmdTZWNvbmREYXRlKSB7XG4gICAgICBlcnJvcnMgKz0gJ9Cf0LXRgNCy0LDRjyDQtNCw0YLQsCDQsdC+0LvRjNGI0LUg0LjQu9C4INGA0LDQstC90LAg0LLRgtC+0YDQvtC5ITxicj4nO1xuICAgIH1cbiAgICBpZiAoYXJnU2Vjb25kRGF0ZSA+IGVuZCkge1xuICAgICAgZXJyb3JzICs9ICfQktGC0L7RgNCw0Y8g0LTQsNGC0LAg0LHQvtC70YzRiNC1INC00L7Qv9GD0YHRgtC40LzQvtCz0L4g0LfQvdCw0YfQtdC90LjRjyE8YnI+JztcbiAgICB9XG4gICAgLy8g0LXRgdC70Lgg0L7RiNC40LHQvtC6INC90LXRgiwg0YLQviDQt9Cw0L/QuNGB0YvQstCw0LXQvCDQvdC+0LLRi9C1INC30L3QsNGH0LXQvdC40Y8g0LjQtyDQsNGA0LPRg9C80LXQvdGC0L7QsiDQsiDQvtCx0YrQtdC60YLRiyDQtNCw0YLRi1xuICAgIGlmIChhcmdGcmlzdERhdGUgPCBhcmdTZWNvbmREYXRlICYmXG4gICAgICAgIGFyZ0ZyaXN0RGF0ZSA+PSBzdGFydCAmJlxuICAgICAgICBhcmdGcmlzdERhdGUgPCBlbmQgJiZcbiAgICAgICAgYXJnU2Vjb25kRGF0ZSA8IGVuZCkge1xuICAgICAgZGF0ZUluID0gbmV3IERhdGUoYXJnRnJpc3REYXRlKTtcbiAgICAgIGRhdGVPdXQgPSBuZXcgRGF0ZShhcmdTZWNvbmREYXRlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3JzICs9ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LTQsNGC0YMg0LIg0YTQvtGA0LzQsNGC0LUgXCLQs9Cz0LPQsy3QvNC8LdC00LRcIiE8YnI+JztcbiAgfVxuXG4gIGlmIChlcnJvcnMgIT09ICcnKSB7XG4gICAgcmVuZGVyVG9hc3QoXG4gICAgICB7IHRleHQ6IGVycm9ycywgdHlwZTogJ2Vycm9yJyB9LFxuICAgICAgeyBuYW1lOiAn0J/QvtC90Y/QuycsIGhhbmRsZXI6ICgpID0+IHsgY29uc29sZS5sb2coJ9Cj0LLQtdC00L7QvNC70LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKSB9IH1cbiAgICApO1xuICB9XG5cbiAgLy8g0L/RgNC10L7QsdGA0LDQt9GD0LXQvCDQvtCx0YrQtdC60YLRiyDQtNCw0YLRiyDQsiDRgdGC0YDQvtC60L7QstGL0LUg0LfQvdCw0YfQtdC90LjRj1xuICBjb25zdCBkYXRlSW5WYWx1ZSA9IGRhdGVJbi5nZXRGdWxsWWVhcigpICsgZGVsaW0gKyAoZGF0ZUluLmdldE1vbnRoKCkgKyAxKSArIGRlbGltICsgZGF0ZUluLmdldERhdGUoKTtcbiAgY29uc3QgZGF0ZU91dFZhbHVlID0gZGF0ZU91dC5nZXRGdWxsWWVhcigpICsgZGVsaW0gKyAoZGF0ZU91dC5nZXRNb250aCgpICsgMSkgKyBkZWxpbSArIGRhdGVPdXQuZ2V0RGF0ZSgpO1xuICBcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2RhdGVJblZhbHVlfVwiIG1pbj1cIiR7bWluRGF0ZX1cIiBtYXg9XCIke21heERhdGV9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtkYXRlT3V0VmFsdWV9XCIgbWluPVwiJHttaW5EYXRlfVwiIG1heD1cIiR7bWF4RGF0ZX1cIiBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5gXG4gIClcbn1cbiJdfQ==