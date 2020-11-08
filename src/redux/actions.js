import {
  SELECT_COUNTRY,
  SELECT_PRODUCT,
  SELECT_START,
  SELECT_END,
} from './actionTypes';

//4 methods that are 4 redux actions that change the 4 graph filters
//in our application
export const selectCountry = (selectedCountry) => ({
  type: SELECT_COUNTRY,
  payload: { selectedCountry },
});

export const selectStartDate = (selectedStartDate) => ({
  type: SELECT_START,
  payload: { selectedStartDate },
});

export const selectEndDate = (selectedEndDate) => ({
  type: SELECT_END,
  payload: { selectedEndDate },
});

export const selectProduct = (selectedProduct) => ({
  type: SELECT_PRODUCT,
  payload: { selectedProduct },
});
