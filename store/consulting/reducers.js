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

import {
	START, SUCCESS, ERROR,
	PRODUCTS_START, PRODUCTS_SUCCESS, PRODUCTS_ERROR,
	DOCUMENTS_START, DOCUMENTS_SUCCESS, DOCUMENTS_ERROR,
	PDF_START, PDF_SUCCESS, PDF_ERROR
} from './const';
import { consultingInit, productsInit, consultDocumentsInit, consultPdfInit } from './initialState';

/**
 * Comex Consulting reducer
 *
 * @version        1.1.0 - 05 Aug 2019
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 16 May 2019
 *
 */

/**
 * Allows to reduce the consulting
 *
 * @param {object} state: redux state
 * @param {object} action: action to execute
 */
export const consulting = (state = consultingInit, action = {}) => {
	switch (action.type) {
	case START:
		return { ...state, consulting: consultingInit.consulting };
	case SUCCESS:
		return { ...state, consulting: action.payload };
	case ERROR:
		return { ...state, consulting: action.payload };
	default: return state;
	}
};

/**
 * Allows to reduce the products
 *
 * @param {object} state: redux state
 * @param {object} action: action to execute
 */
export const products = (state = consultingInit, action = {}) => {
	switch (action.type) {
	case PRODUCTS_START:
		return { ...state, products: productsInit.products };
	case PRODUCTS_SUCCESS:
		return { ...state, products: action.payload };
	case PRODUCTS_ERROR:
		return { ...state, products: action.payload };
	default: return state;
	}
};

/**
 * Allows to reduce the consultDocuments
 *
 * @param {object} state: redux state
 * @param {object} action: action to execute
 */
export const consultDocuments = (state = consultDocumentsInit, action = {}) => {
	switch (action.type) {
	case DOCUMENTS_START:
		return { ...state, consultDocuments: consultDocumentsInit.consultDocuments };
	case DOCUMENTS_SUCCESS:
		return { ...state, consultDocuments: action.payload };
	case DOCUMENTS_ERROR:
		return { ...state, consultDocuments: action.payload };
	default: return state;
	}
};

/**
 * Allows to reduce the consulting Pdf
 *
 * @param {object} state: redux state
 * @param {object} action: action to execute
 */
export const consultingPdf = (state = consultPdfInit, action = {}) => {
	switch (action.type) {
	case PDF_START:
		return { ...state, consultPdf: consultPdfInit.consultPdf };
	case PDF_SUCCESS:
		return { ...state, consultPdf: action.payload };
	case PDF_ERROR:
		return { ...state, consultPdf: action.payload };
	default: return state;
	}
};
