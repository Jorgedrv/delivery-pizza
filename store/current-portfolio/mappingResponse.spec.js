/*
 * %W% %E% Scotiabank Bank S.A
 *
 * Copyright (c) 2010-2018 Scotiabank Bank S.A, Inc. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Scotiabank
 * bank S.A, Inc. ('Confidential Information'). You shall not
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

import mappingResponse from './mappingResponse';
import { equal } from 'assert';

/**
 * Mapping Response of comex consulting test
 * 
 * @version        1.0.0 - 05 Jun 2019
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 05 Jun 2019
 *
 */

const consulting = {
	'rutcli': '0703601006'
};

describe('Credit manager test', () => {

    const actual = "0703601006";

	test('getCurrentPortfolio reducers test', () => {
		const expected = mappingResponse.getCurrentPortfolio(consulting);
		equal(actual, expected.rutcli);
	});
	
});
