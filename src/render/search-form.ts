import { renderBlock } from '../libs/lib.js'
// import { format } from 'date-fns' // doesn't work
import { validateDates } from '../libs/validateDates.js'

export function renderSearchFormBlock (firstDate: string, secondDate: string) {
  
  const startDate = firstDate;
  const endDate = secondDate;

  const datesObj = validateDates(startDate, endDate);

  const dateInValue = datesObj.dateInValue;
  const dateOutValue = datesObj.dateOutValue;
  const minDate = datesObj.minDate;
  const maxDate = datesObj.maxDate;

  renderBlock(
    'search-form-block',
    `<form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="radio" name="supplier" value="main" checked />Main</label>
            <label><input type="radio" name="supplier" value="sdk" />SDK FlatRent</label>
          </div>-->
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
            <input id="max-price" type="text" value="100000000" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="button-find">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>`
  )
}
