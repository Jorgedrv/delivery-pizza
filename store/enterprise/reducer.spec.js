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

import reducer from './reducer';
import { START, SUCCESS, ERROR, CHANGE_TOKEN, BLANK } from './const';

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
describe('Enterprise reducer test', () => {
	test('Enterprise reducer test', () => {
		const state = {};

		const action = {
			type: START,
			payload: {},
		};
		reducer.enterprise(state, action);

		action.type = SUCCESS;
		reducer.enterprise(state, action);

		action.type = ERROR;
		reducer.enterprise(state, action);
	});

	test('Token reducer test', () => {
		const state = {};

		const action = {
			type: CHANGE_TOKEN,
			payload: {},
		};
		reducer.token(state, action);

		action.type = BLANK;
		reducer.enterprise(state, action);
	});
});
