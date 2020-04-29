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

import { consulting, products, consultDocuments, consultingPdf } from './reducers';
import {
    START, SUCCESS, ERROR, 
		PRODUCTS_START, PRODUCTS_SUCCESS, PRODUCTS_ERROR,
		DOCUMENTS_START, DOCUMENTS_SUCCESS, DOCUMENTS_ERROR,
		PDF_START, PDF_SUCCESS, PDF_ERROR
} from './const';

/**
 * Comex Consulting reducer Test
 *
 * @version        1.1.0 - 05 Aug 2019
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 16 May 2019
 *
 */

describe('Comex Consulting manager test', () => {
	test('Comex Consulting reducers test', () => {

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

		action.type = PRODUCTS_START;
		products(state, action);

		action.type = PRODUCTS_SUCCESS;
		products(state, action);

		action.type = PRODUCTS_ERROR;
		products(state, action);

		action.type = DOCUMENTS_START;
		consultDocuments(state, action);

		action.type = DOCUMENTS_SUCCESS;
		consultDocuments(state, action);

		action.type = DOCUMENTS_ERROR;
		consultDocuments(state, action);

		action.type = PDF_START;
		consultingPdf(state, action);

		action.type = PDF_SUCCESS;
		consultingPdf(state, action);

		action.type = PDF_ERROR;
		consultingPdf(state, action);
	});
});
