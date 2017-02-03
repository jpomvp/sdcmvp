'use strict';
const React = require('react');
const ReactRouter = require('react-router');

const Link = ReactRouter.Link;
class HomePage extends React.Component {

    constructor(props) {

        super(props);

    }

    onEditClick() {

        // Open edit instance page

    }

    render() {

        return (

            <section className="section-home container">
                <div className="row">
                    <div className="col-sm-7">
                        <h2 className="page-header">MY SDC ACCOUNT</h2>
                        <div className="row">

                        </div>
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table table-striped table-results">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th className="stretch">Instance Name</th>
                                        <th>Status</th>
                                        <th>ID</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <button
                                                    className="btn btn-default btn-sm"
                                                    onClick={this.onEditClick.bind(this)}>
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <Link to="/instances">
                                                Test Instance
                                                </Link>
                                            </td>
                                            <td>Running</td>
                                            <td>12345</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button
                                                    className="btn btn-default btn-sm"
                                                    onClick={this.onEditClick.bind(this)}>
                                                    Edit
                                                </button>
                                            </td>
                                            <td>Test Instance 2</td>
                                            <td>Stopped</td>
                                            <td>536454</td>
                                        </tr>
                                        <tr></tr>
                                        <tr></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="row">
                            <div className="col-sm-6">

                            </div>
                            <div className="col-sm-6">
                                <br/>&nbsp;
                                <img src="/public/media/dashboard-display2.svg"
                                />
                                <br/>&nbsp;
                                <img src="/public/media/dashboard-display1.svg"
                                />
                                <br/>&nbsp;
                                <img src="/public/media/dashboard-display3.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = HomePage;
