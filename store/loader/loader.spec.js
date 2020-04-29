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

import reducer from './reducers';
import { START, SUCCESS, ERROR } from './const';

/**
 * Reducer to manage parentEnterprise test
 *
 * @version        1.0.0 - 10 Jan 2019
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since          0.40.0 - 10 Jan 2019
 *
 */

/**
 * Allows to test the reducer of parentEnterprise
 */
describe('Loader reducer test', () => {
	test('Loader reducer test', () => {
		const state = {};

		const action = {
			type: START,
			payload: {},
		};
		reducer.loader(state, action);

		action.type = SUCCESS;
		reducer.loader(state, action);

		action.type = ERROR;
		reducer.loader(state, action);
	});
});