import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { allBootcamps, filterBootcamp } from './reducers'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  allBootcamps: allBootcamps,
  filterBootcamp: filterBootcamp,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk})
});

export default store;