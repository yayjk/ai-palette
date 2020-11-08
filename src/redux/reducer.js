import {
  SELECT_COUNTRY,
  SELECT_START,
  SELECT_END,
  SELECT_PRODUCT,
} from './actionTypes';
import { combineReducers } from 'redux';

//Initial State of graph filters
const inititalState = {
  country: 'singapore',
  startDate: '2016-jan',
  endDate: '2020-july',
  product: 'suit',
};

//A filter reducer which takes current state and action to
//provide new state (Basically changes filters)
const filterReducer = (state = inititalState, action) => {
  switch (action.type) {
    case SELECT_COUNTRY: {
      const { selectedCountry } = action.payload;
      return {
        ...state,
        country: selectedCountry,
      };
    }
    case SELECT_START: {
      const { selectedStartDate } = action.payload;
      return {
        ...state,
        startDate: selectedStartDate,
      };
    }
    case SELECT_END: {
      const { selectedEndDate } = action.payload;
      return {
        ...state,
        endDate: selectedEndDate,
      };
    }
    case SELECT_PRODUCT: {
      const { selectedProduct } = action.payload;
      return {
        ...state,
        product: selectedProduct,
      };
    }
    default: {
      return state;
    }
  }
};

//Built in method provided by redux to combine multiple reducers
//Not Necessary for this use case
export default combineReducers({ filterReducer });
