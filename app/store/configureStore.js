// @flow

// Redux Store Configuration
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState : Object) {
  const middleware = applyMiddleware(thunk);
  const enhancer = compose(middleware);

  return createStore(rootReducer, initialState, enhancer);
}
