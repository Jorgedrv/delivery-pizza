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

import { mergeWithAppName } from '../../commons/utils';
import transactions from '../../commons/transactions.const';

/**
 * Loader Duck, represent a resource
 * Duck base in : https://github.com/erikras/managers-modular-redux
 *
 * @version        1.1.0 - 02 Aug 2019
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 16 May 2019
 *
 */
const RESOURCE = transactions.consulting;
const BASE = mergeWithAppName(RESOURCE);
const PRODUCTS_RESOURCE = transactions.products;
const PRODUCTS_BASE = mergeWithAppName(PRODUCTS_RESOURCE);
const CONSULT_DETAILS_RESOURCE = transactions.consultDetails;
const CONSULT_DETAILS_BASE = mergeWithAppName(CONSULT_DETAILS_RESOURCE);
const PDF_CONSULT_RESOURCE = transactions.consultingPdf;
const PDF_CONSULT_BASE = mergeWithAppName(PDF_CONSULT_RESOURCE);
const DOCUMENTS_RESOURCE = transactions.consultDocuments;
const DOCUMENTS_BASE = mergeWithAppName(DOCUMENTS_RESOURCE);

/*************** Const *********************************************/
export const START = `${BASE}/START`;
export const SUCCESS = `${BASE}/SUCCESS`;
export const ERROR = `${BASE}/ERROR`;

export const PRODUCTS_START = `${PRODUCTS_BASE}/START`;
export const PRODUCTS_SUCCESS = `${PRODUCTS_BASE}/SUCCESS`;
export const PRODUCTS_ERROR = `${PRODUCTS_BASE}/ERROR`;

export const CONSULT_DETAILS_START = `${CONSULT_DETAILS_BASE}/START`;
export const CONSULT_DETAILS_SUCCESS = `${CONSULT_DETAILS_BASE}/SUCCESS`;
export const CONSULT_DETAILS_ERROR = `${CONSULT_DETAILS_BASE}/ERROR`;

export const PDF_START = `${PDF_CONSULT_BASE}/START`;
export const PDF_SUCCESS = `${PDF_CONSULT_BASE}/SUCCESS`;
export const PDF_ERROR = `${PDF_CONSULT_BASE}/ERROR`;

export const DOCUMENTS_START = `${DOCUMENTS_BASE}/START`;
export const DOCUMENTS_SUCCESS = `${DOCUMENTS_BASE}/SUCCESS`;
export const DOCUMENTS_ERROR = `${DOCUMENTS_BASE}/ERROR`;
