import axios from 'axios';

/**
 * Axios Instance
 *
 * @version        1.0.0 - 27 Apr 2020
 * @author         Jorge Romero - Jorgeddrv@gmail.com
 * @since          1.0.0 - 27 Apr 2020
 *
 */

/**
 * Instance for Axios library
 */
const instance = axios.create({
	baseURL: 'http://localhost:8000/'
});

export default instance;
