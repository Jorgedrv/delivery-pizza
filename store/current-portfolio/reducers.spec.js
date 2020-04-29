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

import { currentPortfolio, portfolioXLS } from './reducers';
import {
    START, SUCCESS, ERROR, 
    PORTFOLIO_XLS_START, PORTFOLIO_XLS_SUCCESS, PORTFOLIO_XLS_ERROR
} from './const';

/**
 * Comex Consulting reducer Test
 *
 * @version        1.0.0 - 05 Jun 2019
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 05 Jun 2019
 *
 */

describe('Current portfolio manager test', () => {
	test('Current portfolio reducers test', () => {

		const state = {};
		const action = {
			type: START,
			payload: {},
        };
        
		currentPortfolio(state, action);

		action.type = SUCCESS;
		currentPortfolio(state, action);

		action.type = ERROR;
		currentPortfolio(state, action);

		action.type = PORTFOLIO_XLS_START;
		portfolioXLS(state, action);

		action.type = PORTFOLIO_XLS_SUCCESS;
		portfolioXLS(state, action);

		action.type = PORTFOLIO_XLS_ERROR;
		portfolioXLS(state, action);

	});
});
