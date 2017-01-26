'use strict';
const Layout = require('../layouts/default.jsx');
const React = require('react');


class HomePage extends React.Component {
    render() {

        const neck = <link rel='stylesheet' href="/public/pages/home.min.css" />;

        return (
            <Layout
                title="Intelligent Transportation Systems - Joint Program Office"
                neck={neck}
                activeTab="home">
                <div className="row">
                    <div className="col-sm-6">
                        <a href="/about">
                            <img
                                src="/public/media/left-block.png"
                            />
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="/about">
                            <img
                                src="/public/media/right-block1.svg"
                                width={571}
                                height={286}
                            />
                        </a>
                        <a href="/about">
                            <img
                                src="/public/media/right-block2.svg"
                                width={571}
                                height={285}
                            />
                        </a>
                    </div>
                </div>
                <div className="jumbotron">
                    <div>
                        <div>
                            <a className="btn btn-primary btn-lg" href="/signup">
                                Create an account
                            </a>
                            &nbsp; or &nbsp;
                            <a className="btn btn-warning btn-lg" href="/login/forgot">
                                Reset your password
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>About the SDC</h3>
                                <p>
                                    Learn more about what makes the ITS JPO Secure Data Commons work and how you can put the same technology to use for your own data analysis.
                                </p>
                                <a href="/about" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Sign up</h3>
                                <p>
                                    Want access to totally awesome data? Sign up for your very own SDC data analysis account today!
                                    <br />
                                    &nbsp;
                                </p>
                                <a href="/signup" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Contact us</h3>
                                <p>
                                    Got questions? Suggestions? Great! We would love to hear from you.
                                    <br />
                                    &nbsp;
                                </p>
                                <a href="/contact" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}


module.exports = HomePage;
