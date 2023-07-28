import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const makeStore = () => {
  // Create store
   var store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  // Return store
  return store;
};

// export an assembled wrapper
export const storeWrapper = makeStore();
