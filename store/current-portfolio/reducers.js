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

import {
	START, SUCCESS, ERROR,
	PORTFOLIO_XLS_START, PORTFOLIO_XLS_SUCCESS, PORTFOLIO_XLS_ERROR
} from './const';
import { currentPortfolioInit, portfolioXLSInit } from './initialState';

/**
 * Comex Consulting reducer
 *
 * @version        1.0.0 - 03 Jun 2019
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 03 Jun 2019
 *
 */

/**
 * Allows to reduce the current portfolio
 *
 * @param {object} state: redux state
 * @param {object} action: action to execute
 */
export const currentPortfolio = (state = currentPortfolioInit, action = {}) => {
	switch (action.type) {
	case START:
		return { ...state, currentPortfolio: currentPortfolioInit.currentPortfolio };
	case SUCCESS:
		return { ...state, currentPortfolio: action.payload };
	case ERROR:
		return { ...state, currentPortfolio: action.payload };
	default: return state;
	}
};

/**
 * Allows to reduce the portfolio PDF
 *
 * @param {object} state: redux state
 * @param {object} action: action to execute
 */
export const portfolioXLS = (state = portfolioXLSInit, action = {}) => {
	switch (action.type) {
	case PORTFOLIO_XLS_START:
		return { ...state, portfolioXLS: portfolioXLSInit.portfolioXLS };
	case PORTFOLIO_XLS_SUCCESS:
		return { ...state, portfolioXLS: action.payload };
	case PORTFOLIO_XLS_ERROR:
		return { ...state, portfolioXLS: action.payload };
	default: return state;
	}
};
