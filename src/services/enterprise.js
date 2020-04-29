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
// import requestResponse from './requestResponse';
import http from './http/wrapper';
import { getApiEnterpriseUrl, getApiTokenUrl } from '../commons/utils';

/**
 * Call the bank list.
 *
 * @version        1.1.0 - 30 Jan 2019
 * @author         Jimmy Ibanez - jimmy.ibanez@imagemaker.cl
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 04 Jan 2019
 *
 */

const KEY_SERVICE = 'serviceType';
const KEY_ENTERPRISE = 'key_enterprise';
const ENTERPRISES_PATH = getApiEnterpriseUrl();
const TOKEN_PATH = getApiTokenUrl();

/**
 * Service to get the enterprise
 */
export const getEnterprise = (body, successAction, failedAction) => {
	const endpoint = `${ENTERPRISES_PATH}?${KEY_SERVICE}=${body.key_service}`;
	return http.get(
		'',
		successAction,
		failedAction,
		endpoint
	);
};

/**
 * Service to get the enterprise
*/
export const changeToken = (body, successAction, failedAction) => {
	const endpoint = `${TOKEN_PATH}?${KEY_ENTERPRISE}=${body.rutEnterprise}`;
	return http.get(
		'',
		successAction,
		failedAction,
		endpoint
	);
};

export default {
	getEnterprise,
	changeToken
};
