'use strict';
const Layout = require('../layouts/default.jsx');
const React = require('react');


class SignupPage extends React.Component {
    render() {

        const feet = <script src="/public/pages/signup.min.js"></script>;

        return (
            <Layout
                title="Sign up"
                feet={feet}
                activeTab="signup">

                <div className="row">
                    <div className="col-sm-6" id="app-mount"></div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">MEET SDC</h1>
                        <p className="lead">
                            Data analytics at its best using the tools you love.
                        </p>
                        <img src="/public/media/signup-screenshot.svg"
                        />
                    </div>
                </div>
            </Layout>
        );
    }
}


module.exports = SignupPage;
