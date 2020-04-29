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
import { consulting } from './reducers';
import { START, SUCCESS, ERROR } from './const';

/**
 *
 * Schema to manager request of auth manager test
 *
 * @version        1.0.0 - 16 May 2019
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 16 May 2019
 *
 */

/**
 * Mapping request of auth manager test
 */
describe('Consulting test', () => {
	test('Consulting reducers test', () => {
        
		const state = {};
		const action = {
			type: START,
			payload: {},
		};
		consulting(state, action);

		action.type = SUCCESS;
		consulting(state, action);

		action.type = ERROR;
		consulting(state, action);

		mappingRequest.getConsulting({
            customer_id: "995748606",
            currency_code: "CLP",
            start_date: "15/03/2019",
            end_date: "15/03/2019",
            product_code: "OPR",
            event_code: "APE"
		});

	});

	test('getConsultDetails reducers test', () => {
        
		const state = {};
		const action = {
			type: START,
			payload: {},
		};
		consulting(state, action);

		action.type = SUCCESS;
		consulting(state, action);

		action.type = ERROR;
		consulting(state, action);

		mappingRequest.getConsultDetails({
						event_date: "15/03/2019",
						product_code: "PAE",
						event_code: "OTO",
						operation_number: "12312442" 
		});

	});
});

