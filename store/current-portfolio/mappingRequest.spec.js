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

import mappingRequest from './mappingRequest';
import { portfolioXLS } from './reducers';
import { PORTFOLIO_XLS_START, PORTFOLIO_XLS_SUCCESS, PORTFOLIO_XLS_ERROR } from './const';

/**
 *
 * Schema to manager request of portfolio pdf test
 *
 * @version        1.0.0 - 05 Jun 2019
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 05 Jun 2019
 *
 */

/**
 * Mapping request of auth manager test
 */
describe('Consulting test', () => {
	test('Consulting reducers test', () => {
        
		const state = {};
		const action = {
			type: PORTFOLIO_XLS_START,
			payload: {},
		};
		portfolioXLS(state, action);

		action.type = PORTFOLIO_XLS_SUCCESS;
		portfolioXLS(state, action);

		action.type = PORTFOLIO_XLS_ERROR;
		portfolioXLS(state, action);

		mappingRequest.getPortfolioXLS({
						name: "995748606",
            value: "12312"
		});

	});
});

