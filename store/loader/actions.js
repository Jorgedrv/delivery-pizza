/*
 * %W% %E% Scotiabank Bank S.A
 *
 * Copyright (c) 2010-2018 Scotiabank Bank S.A, Inc. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Scotiabank
 * bank S.A, Inc. ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Scotiabank.
 *
 * SCOTIABANK MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY OF
 * THE SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE, OR NON-INFRINGEMENT. SCOTIABANK SHALL NOT BE LIABLE FOR
 * ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR
 * DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
 */

import store from '../store';
import { START, END, TIME_OUT } from './const';


export const getLoader = () => {
	const getStart = () => {
		store.dispatch({ type: START, payload: false, data: {} });
	};
	const getEnd = () => {
		store.dispatch({ type: END, payload: false, data: {} });
	};
	const getEndTimeOut = (description, data) => {
		getEnd();
		store.dispatch({ type: TIME_OUT, payload: description, dataService: data });
		return new Promise(response => {
			response(description);
		}).catch(error => {
			error(description);
		});
	};
	return { getStart, getEnd, getEndTimeOut };
};
