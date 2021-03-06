'use strict';
const ApiActions = require('../../../actions/api');
const Constants = require('./constants');
const Store = require('./store');

class Actions {

    static startEnvrionment(data) {

        ApiActions.put(
            '/api/startcontainer/' + data,
            undefined,
            Store,
            Constants.ENVIRONMENT,
            Constants.ENVIRONMENT_RESPONSE,
            (err, response) => {

                if (!err) {
                    window.location.href = '/account';
                }
            }
        );
    }

}

module.exports = Actions;