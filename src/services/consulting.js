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

import http from './http/wrapper';
import { getApiUrlComex, getApiUrlProducts, getApiUrlConsultDetails,
	getApiUrlOprLiq, getApiUrlOprRec, getApiUrlConsultingPDF, getApiUrlDocuments } from '../commons/utils';

const productsEndpoint = getApiUrlProducts();
const consultDetailsEndpoint = getApiUrlConsultDetails;

/**
 * Service for Comex Consulting
 *
 * @version        1.1.1 - 24 Jan 2020
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 16 May 2019
 *
 */

/**
 * Service method to obtain comex consulting response from http post
 *
 * @param {object} body - body request JSON
 * @param {object} successAction - success answer from response
 * @param {object} failedAction - failed answer from response
 * @param {object} mappingResponse - data formatted from backend
 * @returns {object} - data response
 */
const getConsulting = (body,  successAction, failedAction, mappingResponse) => {
	const { product_code, event_code } = body;
	let comexEndpoint = getApiUrlComex();
	if (product_code === 'OPR' && event_code === 'LIQ') comexEndpoint = getApiUrlOprLiq();
	if (product_code === 'OPR' && event_code === 'REC') comexEndpoint = getApiUrlOprRec();
	if (product_code === 'OPR' && event_code === 'PEN') body["event_code"] = "REC";

	return http.post(
		mappingResponse,
		successAction,
		failedAction,
		body,
		comexEndpoint
	);
};

/**
 * Service method to obtain comex products response from http get
 *
 * @param {object} body - body request JSON
 * @param {object} successAction - success answer from response
 * @param {object} failedAction - failed answer from response
 * @param {object} mappingResponse - data formatted from backend
 * @returns {object} - data response
 */
export const getProducts = (body, successAction, failedAction) => {
	return http.get(
		'',
		successAction,
		failedAction,
		productsEndpoint
	);
};

/**
 * Service method to obtain comex consult details response from http post
 *
 * @param {object} body - body request JSON
 * @param {object} successAction - success answer from response
 * @param {object} failedAction - failed answer from response
 * @param {object} mappingResponse - data formatted from backend
 * @returns {object} - data response
 */
const getConsultDetails = (body,  successAction, failedAction, mappingResponse) => {
	const { product_code, event_code } = body;
	const endpoint = consultDetailsEndpoint[product_code][event_code];

	return http.post(
		mappingResponse,
		successAction,
		failedAction,
		body,
		endpoint
	);
};

/**
 * Service method to obtain comex consult details response from http post
 *
 * @param {object} body - body request JSON
 * @param {object} successAction - success answer from response
 * @param {object} failedAction - failed answer from response
 * @param {object} mappingResponse - data formatted from backend
 * @returns {object} - data response
 */
const getConsultingPdf = (body,  successAction, failedAction, mappingResponse) => {
	const { product_code } = body;
	const endpoint = getApiUrlConsultingPDF[product_code];
	const responseType = 'blob';
	const fileResponse = true;

	return http.post(
		mappingResponse,
		successAction,
		failedAction,
		body,
		endpoint,
		{},
		responseType,
		fileResponse
	);
};

/**
 * Service method to obtain seic/swift file response from http post
 *
 * @param {object} body - body request JSON
 * @param {object} successAction - success answer from response
 * @param {object} failedAction - failed answer from response
 * @param {object} mappingResponse - data formatted from backend
 * @returns {object} - data response
 */
const getConsultDocuments = (body,  successAction, failedAction, mappingResponse) => {
	const endpoint = getApiUrlDocuments();

	return http.post(
		mappingResponse,
		successAction,
		failedAction,
		body,
		endpoint
	);
};

export default {
	getConsulting,
	getProducts,
	getConsultDetails,
	getConsultingPdf,
	getConsultDocuments
};
