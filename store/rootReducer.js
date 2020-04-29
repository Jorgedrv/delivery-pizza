import { combineReducers } from 'redux';
import { consulting } from './consulting/reducers';
import { RESET } from './config/const';
import loader from './loader/reducers';

/**
 * Create combiner of Reducer
 *
 * @version		1.0.0 - 27 Apr 2020
 * @author      Jorge Romero - Jorgeddrv@gmail.com
 * @since		1.0.0 - 27 Apr 2020
 *
 */
export const reducers = () => ({
  ...loader,
  consulting
});

const appReducer = combineReducers (reducers());

export default (state, action = {}) => {
	if ( action.type === RESET) {
		state = undefined;
	}
	return appReducer(state, action);
};
