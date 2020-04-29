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
import { START, SUCCESS, ERROR, CHANGE_TOKEN, BLANK } from './const';
import initialState from './initialState';

/**
 * Allows reducer enterprises
 *
 * @param {object} state: redux state
 * @param {object} action: action to execute
 */
const enterprise = (state = initialState, action = {}) => {
	switch (action.type) {
	case START:
		return { ...state, enterpriseError: null, isFetching: true, enterprise: initialState.enterprise };
	case SUCCESS:
		return { ...state, enterpriseError: null, isFetching: false, enterprise: action.payload };
	case ERROR:
		return { ...state, isFetching: false, enterpriseError: action.payload };
	default: return state;
	}
};

/**
 * Allows reducer token
 *
 * @param {object} state: redux state
 * @param {object} action: action to execute
 */
const token = (state = [], action) => {
	switch (action.type) {
	case CHANGE_TOKEN:
		return action.payload.token;
	case BLANK:
		return [];
	default: return state;
	}
};

export default {
	enterprise,
	token
}
