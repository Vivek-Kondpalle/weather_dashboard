import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { valueReducer } from './reducers/valueReducer';
import { chartReducer } from './reducers/chartReducer';

const reducer = combineReducers({
  valueReducer: valueReducer,
  chartReducer: chartReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
