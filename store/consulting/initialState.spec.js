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

import { consultingInit, productsInit, consultDocumentsInit, consultPdfInit } from './initialState';

/**
 * Initial state of comex consulting test
 *
 * @version        1.1.0 - 05 Aug 2019
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 16 May 2019
 *
 */

/**
 * Allows to test the initial state
 */
describe('Comex Consulting', () => {
	test('Consulting test initialState', () => {
		consultingInit.consulting === {};
		consultingInit.consultingError === null;
	});

	test('Products test initialState', () => {
		productsInit.products.length === 0;
		productsInit.productsError === null;
	});

	test('ConsultDocuments test initialState', () => {
		consultDocumentsInit.consultDocuments === {};
		consultDocumentsInit.consultDocuments === null;
	});

	test('ConsultDocuments test initialState', () => {
		consultPdfInit.consultPdf === {};
		consultPdfInit.consultPdf === null;
	});
});
