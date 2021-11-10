import { SearchFormData } from '../interfaces/searchFormData.js';

export function searchHandler(data: Partial<SearchFormData> = {}):SearchFormData
{
  data.city = (document.getElementById('city') as HTMLInputElement).value;
  data.dateIn = (document.getElementById('check-in-date') as HTMLInputElement).value;
  data.dateOut = (document.getElementById('check-out-date') as HTMLInputElement).value;
  data.maxPrice = (document.getElementById('max-price') as HTMLInputElement).value;
  return data;
}