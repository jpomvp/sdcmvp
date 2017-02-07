'use strict';
const Layout = require('../layouts/default.jsx');
const React = require('react');


class HomePage extends React.Component {
    render() {

        const neck = <link rel='stylesheet' href="/public/pages/home.min.css" />;

        return (
            <Layout
                title="Intelligent Transportation Systems Joint Program Office - Secure Data Commons"
                neck={neck}
                activeTab="home">
                <div className="row">
                    <div className="col-sm-6">
                        <a href="/about">
                            <img src="/public/media/left-block.svg"
                                 width={587}
                                 height={571}
                            />
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="/about">
                            <img src="/public/media/right-block1.svg"
                                width={571}
                                height={286}
                            />
                        </a>
                        <a href="/about">
                            <img src="/public/media/right-block2.svg"
                                width={571}
                                height={286}
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
                                <h3>About SDC</h3>
                                <p>
                                    The Secure Data Commons is a online portal where you can perform
                                    data analysis on transportation-related data sets.
                                    <br />
                                    &nbsp;
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
                                    What to get started? Complete our online access request form and
                                    when you are approved you can begin creating your very own data analysis
                                    environments!
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
                                    Questions? Comments? We would love to hear from you! We are always striving to
                                    make improvements to our system so don't hesitate to let us know what you think!
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
