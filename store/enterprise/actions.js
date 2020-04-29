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

/**
 *
 * actions to manager response credit
 *
 * @version        1.1.0 - 02 Jan 2019
 * @author         Claudio Rojas - claudio.rojas_ex@scotiabank.cl (Imagemaker)
 * @author         Jimmy Ibanez - jimmy.ibanez@imagemaker.cl (Imagemaker)
 * @since          0.13.6 - 11 Jun 2018
 *
 */
import enterprise from '../../services/enterprise';
import { START, SUCCESS, ERROR, CHANGE_TOKEN,
	SET_ERROR_TOKEN } from './const';

/**
 * Actions to get parent enterprise
 *
 */
export const getEnterprise = (body) => {
	return (dispatch) => {
		dispatch({ type: START, payload: {} });
		const getSuccessAction = (data) => {
			dispatch({ type: SUCCESS, payload: data });
		};
		const getFailedAction = (data) => {
			dispatch({ type: ERROR, payload: data });
		};
		return enterprise.getEnterprise(body, getSuccessAction, getFailedAction);
	};
};

export const changeToken = (typeService, rutEnterprise) => {
	const body = { typeService, rutEnterprise };
	return (dispatch) => {

		const getSuccessAction = (data) => {
			dispatch({ type: CHANGE_TOKEN, payload: data });
		};
		const getFailedAction = (data) => {
			dispatch({ type: SET_ERROR_TOKEN, payload: data });
		};
		return enterprise.changeToken(body, getSuccessAction, getFailedAction)
	};
};
