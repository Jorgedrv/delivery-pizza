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

/**
 * Loader Duck, represent a resource
 * Duck base in : https://github.com/erikras/managers-modular-redux
 *
 * @version        1.3.0 - 10 Jan 2019
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since          0.40.0 - 10 jan 2019
 *
 */

const RESOURCE = 'enterprise';
const TOKEN = 'token'
const BASE = mergeWithAppName(RESOURCE);
const BASE_TOKEN = mergeWithAppName(TOKEN);

/*************** Const *********************************************/
export const START = `${BASE}/START`;
export const SUCCESS = `${BASE}/SUCCESS`;
export const ERROR = `${BASE}/ERROR`;
export const CHANGE_TOKEN = `${BASE_TOKEN}/CHANGE_TOKEN`;
export const SET_ERROR_TOKEN = `${BASE_TOKEN}/SET_ERROR_TOKEN`;
export const BLANK = `${BASE_TOKEN}/BLANK`;
