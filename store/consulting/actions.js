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

/**
 *
 * Actions to manager response comex consulting
 *
 * @version        1.1.1 - 09 Aug 2019
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 16 May 2019
 *
 */
import services from '../../services/consulting';
import {
	START, SUCCESS, ERROR,
	PRODUCTS_START, PRODUCTS_SUCCESS, PRODUCTS_ERROR,
	CONSULT_DETAILS_START, CONSULT_DETAILS_SUCCESS, CONSULT_DETAILS_ERROR,
	PDF_START, PDF_SUCCESS,	PDF_ERROR, DOCUMENTS_START, DOCUMENTS_SUCCESS,
	DOCUMENTS_ERROR
} from './const';
import mappingRequest from './mappingRequest';
import mappingResponse from './mappingResponse';

/**
 * Method to obtain the comex consulting response
 *
 * @param {object} data - data request
 * @returns action response
 */
export const getConsulting = (data) => {
	const body = mappingRequest.getConsulting(data);
	return (dispatch) => {
		dispatch({ type: START, payload: {} });
		const getSuccessAction = (data) => {
			dispatch({ type: SUCCESS, payload: data });
		};
		const getFailedAction = (data) => {
			dispatch({ type: ERROR, payload: data });
		};
		return services.getConsulting(body, getSuccessAction, getFailedAction, mappingResponse.getConsulting);
	};
};

/**
 * Method to obtain the comex products response
 *
 * @param {object} data - data request
 * @returns action response
 */
export const getProducts = (body) => {
	return (dispatch) => {
		dispatch({ type: PRODUCTS_START, payload: {} });
		const getSuccessAction = (data) => {
			dispatch({ type: PRODUCTS_SUCCESS, payload: data });
		};
		const getFailedAction = (data) => {
			dispatch({ type: PRODUCTS_ERROR, payload: data });
		};
		return services.getProducts(body, getSuccessAction, getFailedAction);
	};
};

/**
 * Method to obtain the comex ConsultDetails response
 *
 * @param {object} data - data request
 * @returns action response
 */
export const getConsultDetails = (data) => {
	const body = mappingRequest.getConsultDetails(data);
	return (dispatch) => {
		dispatch({ type: CONSULT_DETAILS_START, payload: {} });
		const getSuccessAction = (data) => {
			dispatch({ type: CONSULT_DETAILS_SUCCESS, payload: data });
		};
		const getFailedAction = (data) => {
			dispatch({ type: CONSULT_DETAILS_ERROR, payload: data });
		};
		return services.getConsultDetails(body, getSuccessAction, getFailedAction, mappingResponse.getConsultDetails);
	};
};

/**
 * Method to obtain the pdf file selected
 *
 * @param {object} data - data request
 * @returns action response
 */
export const getConsultingPdf = (data) => {
	const body = mappingRequest.getConsultingPdf(data);
	return (dispatch) => {
		dispatch({ type: PDF_START, payload: {} });
		const getSuccessAction = (data) => {
			dispatch({ type: PDF_SUCCESS, payload: data });
		};
		const getFailedAction = (data) => {
			dispatch({ type: PDF_ERROR, payload: data });
		};
		return services.getConsultingPdf(body, getSuccessAction, getFailedAction);
	};
};

/**
 * Method to obtain the Seic/Swift file
 *
 * @param {object} data - data request
 * @returns action response
 */
export const getConsultDocuments = (data) => {
	const body = mappingRequest.getConsultDocuments(data);
	return (dispatch) => {
		dispatch({ type: DOCUMENTS_START, payload: {} });
		const getSuccessAction = (data) => {
			dispatch({ type: DOCUMENTS_SUCCESS, payload: data });
		};
		const getFailedAction = (data) => {
			dispatch({ type: DOCUMENTS_ERROR, payload: data });
		};
		return services.getConsultDocuments(body, getSuccessAction, getFailedAction, mappingResponse.getConsultDocuments);
	};
};
