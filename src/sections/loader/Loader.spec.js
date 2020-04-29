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

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Loader } from './Loader';
import { mockStore } from '../../commons/mocks/util.testing';;

describe('Loader renders without crashing', () => {
	test('Loader test with redux', () => {

		const props = mockStore({
			store: {
				getState: () => ({})
			},
			summaryTicket: {
				summaryTicket: {
					t_ResumenBoletas01: [],
				},
			},
			loader: {
				load: true
			}
		});
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={{ ...props.store }}>
				<Router>
					<Loader {...props} />
				</Router>
			</Provider>, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
