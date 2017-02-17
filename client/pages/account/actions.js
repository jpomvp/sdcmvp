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
            Constants.GETCONTAINERS,
            Constants.GETCONTAINERS_RESPONSE,
            (err, response) => {

            }
        );
    }

    static deleteContainer(containerID) {
        ApiActions.delete(
            '/api/removecontainer/' + containerID,
            undefined,
            Store,
            Constants.DELETECONTAINER,
            Constants.DELETECONTAINER_RESPONSE,
            (err, response) => {

                if (!err) {
                    window.location.href = '/account';
                }
            }
        );
    }

};

module.exports = Actions;
