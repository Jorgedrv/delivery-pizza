import axios from 'axios';
import wrapperSuccessResponse from './wrapperSuccessResponse';
import wrapperErrorResponse from './wrapperErrorResponse';
import SessionService from '../session';
import { httpSendMessage } from '../../commons/message/event-bus';

const defHeaders = () => {
	return {
		'JWT': SessionService.getSession().token,
		'Authorization': `Bearer ${SessionService.getSession().token}`
	};
};

const wrapper = (opts, mappingResponse, successAction, failedAction, fileResponse = false) => {
	const callback = (result, reject) => {
		axios(opts)
			.then(response => {
				if (mappingResponse) {
					successAction(mappingResponse(response.data.data))
				} else {
					fileResponse ? successAction(response.data) : successAction(response.data.data);
				}

				return fileResponse ? result(response) : result(wrapperSuccessResponse(response));
			})
			.catch(error => {
				error.response && httpSendMessage(error.response.status);
				failedAction(error.response);
				return reject(wrapperErrorResponse(error));
			});
	};
	return new Promise(callback);
};

const post = (mappingResponse, successAction, failedAction, body, url, headers = {}, responseType = 'json', fileResponse = false) => {
	return wrapper({
		method: 'POST',
		url: url,
		data: body,
		headers: { ...defHeaders(), ...headers },
		responseType
	},
	mappingResponse,
	successAction,
	failedAction,
	fileResponse);
};

const get = (mappingResponse, successAction, failedAction, url, headers = {}, responseType = 'json' ) => {
	return wrapper({
		method: 'get',
		url: url,
		headers: { ...defHeaders(), ...headers },
		data: headers,
		responseType
	},
	mappingResponse,
	successAction,
	failedAction);
};

const del = (url, headers = {}) => {
	return wrapper({
		method: 'delete',
		url: url,
		headers: { ...defHeaders(), ...headers }
	});
};


const put = (url, body, headers = {}) => {
	return wrapper({
		method: 'put',
		url: url,
		data: body,
		headers: { ...defHeaders(), ...headers },
	});
};

/**
 * Allow to call fetch from axios library
 *
 * @version        1.0.0 - 27 Apr 2020
 * @author         Jorgeddrv@gmail.com
 * @since          1.0.0 - 27 Aug 2020
 *
 */
export default {
	get,
	post,
	del,
	put
};
