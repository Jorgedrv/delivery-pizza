import store from './store';

/**
 * Store test
 *
 * @version        1.0.0 - 27 Apr 2020
 * @author         Jorge Romero - Jorgeddrv@gmail.com
 * @since          1.0.0 - 27 Apr 2020
 *
 */
describe('store', () => {
	test('store', () => {
		store.getState();
	});

	test('store 2', () => {
		global.process.env.NODE_ENV = 'development';
		store.getState()
	});
});
