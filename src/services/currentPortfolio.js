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

import http from './http/wrapper';
import { getApiUrlCurrentPortfolio, getApiUrlPortfolioXLS } from '../commons/utils';

const currentPortfolioEndpoint = getApiUrlCurrentPortfolio();
const portfolioXlsEndpoint = getApiUrlPortfolioXLS();

/**
 * Service for Comex Consulting
 *
 * @version        1.0.0 - 03 Jun 2019
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 03 Jun 2019
 *
 */

/**
 * Service method to obtain current portfolio response from http get
 *
 * @param {object} body - body request JSON
 * @param {object} successAction - success answer from response
 * @param {object} failedAction - failed answer from response
 * @param {object} mappingResponse - data formatted from backend
 * @returns {object} - data response
 */
export const getCurrentPortfolio = (body, successAction, failedAction) => {
	return http.get(
		'',
		successAction,
		failedAction,
		currentPortfolioEndpoint
	);
};

/**
 * Service method to obtain portfolio pdf response from http post
 *
 * @param {object} body - body request JSON
 * @param {object} successAction - success answer from response
 * @param {object} failedAction - failed answer from response
 * @param {object} mappingResponse - data formatted from backend
 * @returns {object} - data response
 */
export const getPortfolioXLS = (body,  successAction, failedAction, mappingResponse) => {
	const responseType = 'blob';
	const fileResponse = true;

	return http.post(
		mappingResponse,
		successAction,
		failedAction,
		body,
		portfolioXlsEndpoint,
		{},
		responseType,
		fileResponse
	);
};

export default {
	getPortfolioXLS,
	getCurrentPortfolio
};
