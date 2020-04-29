import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

/**
 * Create Redux Store
 *
 * @version		1.0.0 - 27 Apr 2020
 * @author		Jorge Romero - Jorgeddrv@gmail.com
 * @since		  1.0.0 - 27 Apr 2020
 *
 */
const { logger } = require('redux-logger');
const middlewares = [thunkMiddleware];

process.env.NODE_ENV === 'development' && middlewares.push(logger);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);

export default store;
