/* global window */
'use strict';
const ApiActions = require('../../actions/api');
const Constants = require('./constants');
const Store = require('./store');


class Actions {
    static getContainerList() {
        ApiActions.get(
            '/api/getcontainers',
            undefined,
            Store,
            Constants.REGISTER,
            Constants.REGISTER_RESPONSE,
            (err, response) => {

                if (!err) {
                    // window.location.href = '/account';
                    // console.log(response);
                }
            }
        );
    }
};


module.exports = Actions;
