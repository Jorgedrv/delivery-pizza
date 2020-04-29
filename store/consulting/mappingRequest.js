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
 * MappingRequest to manage request of comex consulting
 *
 * @version        1.1.0 - 05 Aug 2019
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @author         Jimmy Ibanez - Jimmy.Ibanez_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 16 May 2019
 *
 */

/**
 * Comex Consulting request
 *
 * @returns request of the summary mandate
 */

const getConsulting = (body) => ({
	customer_id: body.customer_id,
	currency_code: body.currency_code,
	start_date: body.start_date,
	end_date: body.end_date,
	product_code: body.product_code,
	event_code: body.event_code
});

/**
 * Comex Consult details request
 *
 * @returns request of the summary mandate
 */

const getConsultDetails = (body) => ({
	event_date: body.event_date,
	product_code: body.product_code,
	event_code: body.event_code,
	operation_number: body.operation_number
});

/**
 * getConsultingPdf
 *
 * @returns request of the pdf file
 */
const getConsultingPdf = (body) => ({
	event_date: body.event_date,
	product_code: body.product_code,
	event_code: body.event_code,
	operation_number: body.operation_number
});

/**
 * getConsultDocuments
 *
 * @returns request of the seic/swift file
 */
const getConsultDocuments = (body) => ({
	product_code: body.product_code,
	event_code: body.event_code,
	operation_number: body.operation_number,
	operation_type: body.operation_type,
	pdf_type: body.pdf_type
});

export default { getConsulting, getConsultDetails, getConsultingPdf, getConsultDocuments};
