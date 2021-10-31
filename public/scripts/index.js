import { renderSearchFormBlock } from './render/search-form.js';
import { renderSearchStubBlock } from './render/search-results.js';
import { renderUserBlock } from './render/user.js';
// import { renderToast } from './lib.js'
import { findHotels } from './libs/find-hotels.js';
import { fetchPlaces } from './libs/fetchPlaces.js';
import { renderSearchResultsBlock } from './render/search-results.js';
window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock('Nick Cage', '/img/avatar.png', 30);
    renderSearchFormBlock('2021-11-05', '2021-11-20');
    renderSearchStubBlock();
    findHotels();
    const listPlaces = fetchPlaces('http://localhost:3000/places');
    renderSearchResultsBlock(listPlaces);
    // const buttonFind = document.getElementById('button-find');
    // buttonFind.addEventListener('click', ev => {
    //   ev.preventDefault();
    //   // renderSearchResultsBlock(fetchPlaces(''));
    //   // setTimeout(() => {
    //   //   renderSearchResultsBlock(listPlaces);
    //   // }, 500);
    // });
    // renderToast(
    //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    //   {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
    // )
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUE7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ2xELHlDQUF5QztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXRFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDL0MsZUFBZSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRCxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEQscUJBQXFCLEVBQUUsQ0FBQztJQUV4QixVQUFVLEVBQUUsQ0FBQztJQUViLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQy9ELHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXJDLDZEQUE2RDtJQUM3RCwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLGtEQUFrRDtJQUNsRCwwQkFBMEI7SUFDMUIsK0NBQStDO0lBQy9DLGdCQUFnQjtJQUNoQixNQUFNO0lBRU4sZUFBZTtJQUNmLDBGQUEwRjtJQUMxRix5RUFBeUU7SUFDekUsSUFBSTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyU2VhcmNoRm9ybUJsb2NrIH0gZnJvbSAnLi9yZW5kZXIvc2VhcmNoLWZvcm0uanMnXG5pbXBvcnQgeyByZW5kZXJTZWFyY2hTdHViQmxvY2sgfSBmcm9tICcuL3JlbmRlci9zZWFyY2gtcmVzdWx0cy5qcydcbmltcG9ydCB7IHJlbmRlclVzZXJCbG9jayB9IGZyb20gJy4vcmVuZGVyL3VzZXIuanMnXG4vLyBpbXBvcnQgeyByZW5kZXJUb2FzdCB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgZmluZEhvdGVscyB9IGZyb20gJy4vbGlicy9maW5kLWhvdGVscy5qcyc7XG5pbXBvcnQgeyBmZXRjaFBsYWNlcyB9IGZyb20gJy4vbGlicy9mZXRjaFBsYWNlcy5qcyc7XG5pbXBvcnQgeyByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2sgfSBmcm9tICcuL3JlbmRlci9zZWFyY2gtcmVzdWx0cy5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICByZW5kZXJVc2VyQmxvY2soJ05pY2sgQ2FnZScsICcvaW1nL2F2YXRhci5wbmcnLCAzMCk7XG4gIHJlbmRlclNlYXJjaEZvcm1CbG9jaygnMjAyMS0xMS0wNScsICcyMDIxLTExLTIwJyk7XG4gIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpO1xuICBcbiAgZmluZEhvdGVscygpO1xuXG4gIGNvbnN0IGxpc3RQbGFjZXMgPSBmZXRjaFBsYWNlcygnaHR0cDovL2xvY2FsaG9zdDozMDAwL3BsYWNlcycpO1xuICByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2sobGlzdFBsYWNlcyk7XG5cbiAgLy8gY29uc3QgYnV0dG9uRmluZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tZmluZCcpO1xuICAvLyBidXR0b25GaW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAvLyAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgLy8gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKGZldGNoUGxhY2VzKCcnKSk7XG4gIC8vICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgLy8gICByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2sobGlzdFBsYWNlcyk7XG4gIC8vICAgLy8gfSwgNTAwKTtcbiAgLy8gfSk7XG5cbiAgLy8gcmVuZGVyVG9hc3QoXG4gIC8vICAge3RleHQ6ICfQrdGC0L4g0L/RgNC40LzQtdGAINGD0LLQtdC00L7QvNC70LXQvdC40Y8uINCY0YHQv9C+0LvRjNC30YPQudGC0LUg0LXQs9C+INC/0YDQuCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCcsIHR5cGU6ICdzdWNjZXNzJ30sXG4gIC8vICAge25hbWU6ICfQn9C+0L3Rj9C7JywgaGFuZGxlcjogKCkgPT4ge2NvbnNvbGUubG9nKCfQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC30LDQutGA0YvRgtC+Jyl9fVxuICAvLyApXG59KTtcbiJdfQ==