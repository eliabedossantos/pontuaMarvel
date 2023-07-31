import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const makeStore = () => {
   var store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return store;
};
export const storeWrapper = makeStore();
