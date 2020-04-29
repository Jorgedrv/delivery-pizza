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
 * Actions to manager response current portfolio
 *
 * @version        1.0.0 - 05 Jun 2019
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 05 Jun 2019
 *
 */
import services from '../../services/currentPortfolio';
import {
	START, SUCCESS, ERROR,
	PORTFOLIO_XLS_START, PORTFOLIO_XLS_SUCCESS, PORTFOLIO_XLS_ERROR
} from './const';
import mappingRequest from './mappingRequest';
import mappingResponse from './mappingResponse';

/**
 * Method to obtain the current portfolio response
 *
 * @param {object} data - data request
 * @returns action response
 */
export const getCurrentPortfolio = (data) => {

	return (dispatch) => {
		dispatch({ type: START, payload: {} });
		const getSuccessAction = (data) => {
			dispatch({ type: SUCCESS, payload: data });
		};
		const getFailedAction = (data) => {
			dispatch({ type: ERROR, payload: data });
		};
		return services.getCurrentPortfolio('', getSuccessAction, getFailedAction, mappingResponse.getCurrentPortfolio);
	};
};

/**
 * Method to obtain the current portfolio pdf response
 *
 * @param {object} data - data request
 * @returns action response
 */
export const getPortfolioXLS = (data) => {
	const body = mappingRequest.getPortfolioXLS(data);
	return (dispatch) => {
		dispatch({ type: PORTFOLIO_XLS_START, payload: {} });
		const getSuccessAction = (data) => {
			dispatch({ type: PORTFOLIO_XLS_SUCCESS, payload: data });
		};
		const getFailedAction = (data) => {
			dispatch({ type: PORTFOLIO_XLS_ERROR, payload: data });
		};
		return services.getPortfolioXLS(body, getSuccessAction, getFailedAction);
	};
};
