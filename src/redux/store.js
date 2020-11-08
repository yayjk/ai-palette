//A simple store creater, which is created using
//createStore(built in redux method) and our app's root Reducer
import { createStore } from 'redux';
import rootReducer from './reducer';

export default createStore(rootReducer);
