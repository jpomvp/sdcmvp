'use strict';
const Constants = require('./constants');
const ObjectAssign = require('object-assign');
const ParseValidation = require('../../helpers/parse-validation');
const Redux = require('redux');


const initialState = {
    loading: false,
    success: false,
    error: undefined,
    hasError: {},
    help: {}
};
const reducer = function (state = initialState, action) {

    if (action.type === Constants.GETCONTAINERS) {
        return ObjectAssign({}, state, {
            loading: true
        });
    }

    if (action.type === Constants.GETCONTAINERS_RESPONSE) {
        const validation = ParseValidation(action.response);

        return ObjectAssign({}, state, {
            loading: false,
            success: !action.err,
            error: validation.error,
            hasError: validation.hasError,
            help: validation.help,
            containers: action.response
        });
    }

    if (action.type === Constants.DELETECONTAINER) {
        return ObjectAssign({}, state, {
            loading: true
        });
    }

    if (action.type === Constants.DELETECONTAINER_RESPONSE) {
        const validation = ParseValidation(action.response);

        return ObjectAssign({}, state, {
            loading: false,
            success: !action.err,
            error: validation.error,
            hasError: validation.hasError,
            help: validation.help,
        });
    }

    return state;
};

module.exports = Redux.createStore(reducer);