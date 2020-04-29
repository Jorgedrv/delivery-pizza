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
 * Mapping Response of comex consulting
 *
 * @version        1.1.0 - 05 Aug 2019
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 16 May 2019
 *
 */

/**
 * Comex Consulting response
 *
 * @param {oject} data : response data
 */
const getConsulting = data => ({
	...data
});

/**
 * Comex ConsultDetails response
 *
 * @param {oject} data : response data
 */
const getConsultDetails = data => ({
	...data
});

/**
 * Comex Consulting PDF response
 *
 * @param {oject} data : response data
 */
const getConsultingPdf = data => ({
	...data,
});

/**
 * Comex Consulting SEIC/SWIFT response
 *
 * @param {oject} data : response data
 */
const getConsultDocuments = data => ({
	...data,
});

export default {
	getConsulting,
	getConsultDetails,
	getConsultingPdf,
	getConsultDocuments
};
