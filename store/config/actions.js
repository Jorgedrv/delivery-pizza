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

import { RESET } from './const';

/**
 * Storage management for accounts operations
 *
 * @version        1.0.0 - 18 Apr 2019
 * @author         Stephano Apiolaza - stephano.apiolaza_ex@scotiabank.cl (Imagemaker)
 * @since          1.3.0 - 18 Apr 2019
 *
 */

/**
 * Calls read user service and stores the list of charge accounts in redux state
 * @param keyEnterprise The unique identifier for the enterprise
 */
const doResetStore = () => {
	return (dispatch) => {
		dispatch({ type: RESET });
	};
};

export {
	doResetStore
};
