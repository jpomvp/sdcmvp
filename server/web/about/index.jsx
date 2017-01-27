'use strict';
const Layout = require('../layouts/default.jsx');
const React = require('react');


class AboutPage extends React.Component {
    render() {

        return (
            <Layout
                title="About the Secure Data Commons"
                activeTab="about">

                <div className="row">
                    <div className="col-sm-12">
                        <a href="/signup">
                            <img src="/public/media/about-header.svg"

                            />
                        </a>
                    </div>
                </div>
                <div className="row">
                    &nbsp;
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img src="/public/media/about-security.svg"
                        />
                    </div>
                    <div className="col-sm-3">
                        <img src="/public/media/about-ai.svg"
                        />
                    </div>
                    <div className="col-sm-3">
                        <img src="/public/media/about-docker.svg"
                        />
                    </div>
                    <div className="col-sm-3">
                        <img src="/public/media/about-jupyter.svg"
                        />
                    </div>
                </div>
            </Layout>
        );
    }
}


module.exports = AboutPage;
