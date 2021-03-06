'use strict';
const Confidence = require('confidence');
const Dotenv = require('dotenv');


Dotenv.config({ silent: true });

const criteria = {
    env: process.env.NODE_ENV
};

const config = {
    $meta: 'This file configures the plot device.',
    projectName: 'ITS JPO Secure Data Commons',
    port: {
        web: {
            $filter: 'env',
            test: 8000,
            production: process.env.PORT,
            $default: 8000
        }
    },
    baseUrl: {
        $filter: 'env',
        $meta: 'values should not end in "/"',
        production: 'https://jpo-sdc.dot.gov',
        $default: 'http://localhost:80'
    },
    authAttempts: {
        forIp: 50,
        forIpAndUser: 7
    },
    cookieSecret: {
        $filter: 'env',
        production: process.env.COOKIE_SECRET,
        $default: '!k3yb04rdK4tz~4qu4~k3yb04rdd0gz!'
    },
    hapiMongoModels: {
        mongodb: {
            uri: {
                $filter: 'env',
                production: process.env.MONGODB_URI,
                test: process.env.MONGODB_URI,
                $default: 'mongodb://localhost:27017/aqua'
            }
        },
        autoIndex: true
    },
    nodemailer: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'test@testing.com',
            pass: process.env.SMTP_PASSWORD
        }
    },
    system: {
        fromAddress: {
            name: 'Aqua',
            address: 'sdc-mvp@dot.gov'
        },
        toAddress: {
            name: 'Aqua',
            address: 'sdc-mvp@dot.gov'
        }
    },
    docker: {
      host: process.env.DOCKER_HOST,
        defaultContainerExposedPort: "8888/tcp",
        defaultContainerStartingPort: "8000"
    }
};


const store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
