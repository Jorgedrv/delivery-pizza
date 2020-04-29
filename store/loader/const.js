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
 * @version        1.0.0 - 14 May 2018
 * @author         Claudio Rojas - claudio.rojas_ex@scotiabank.cl (Imagemaker)
 * @since          0.1.0 - 14 May 2018
 *
 */

/*************** Base **********************************************/
const RESOURCE = transactions.loader;
const BASE = mergeWithAppName(RESOURCE);

/*************** Const *********************************************/
export const START = `${BASE}/START`;
export const END = `${BASE}/END`;
export const TIME_OUT = `${BASE}/TIME_OUT`;
