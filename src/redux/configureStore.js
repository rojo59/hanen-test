import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { map } from 'lodash';
import ExecutionEnvironment from 'exenv';
import { fromJS, isImmutable } from 'immutable';

import reducer from './combineReducers';

export function configureStore(initialState = {}) {
  let middleware = [thunk];

  if (ExecutionEnvironment.canUseDOM) middleware.push(logger);

  const finalCreateStore = compose(
    applyMiddleware(...middleware),
    ExecutionEnvironment.canUseDOM && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )(createStore);

  let newState = {};

  map(initialState, (value, key) => {
    const newValue = isImmutable(value) ? value : fromJS(value);
    newState[key] = newValue;
  });
  const store = finalCreateStore(reducer, newState);

  return store;
}
