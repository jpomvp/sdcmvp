'use strict';
const Actions = require('./actions');
const React = require('react');
const ReactRouter = require('react-router');

class HomePage extends React.Component {

    onEditClick() {

        /* TODO: Open edit instance dialog */

    }

    getEnviroments() {
        let listOfContainers = Actions.getContainerList();
        if (typeof listOfContainers == 'undefined') {
            let noEnvMsg = [];
            noEnvMsg.push({instanceName: 'No Deployed Environments', URL: '#',id: '0'});
            return noEnvMsg;
        } else {
            return listOfContainers;
        }
    }

    render() {

        // render the table of environments
        let data = [] = this.getEnviroments();
        let numEnvironments = 0;
        if (typeof data.length == 'undefined') {
            numEnvironments = 1;
        } else {
            numEnvironments = data.length;
        }
        let environments = [];
        for (let i = 0; i < numEnvironments; i++) {

            if(data[i].id != 0) {
                environments.push(
                    <tr key={i}>
                        <td>
                            <button
                                className="btn btn-default btn-sm"
                                onClick={this.onEditClick.bind(this)}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <a href={data[i].URL} target="_new">
                                {data[i].instanceName}
                            </a>
                        </td>
                        <td>{data[i].instanceStatus}</td>
                        <td>{data[i].id}</td>
                    </tr>
                );
            } else {
                environments.push(
                    <tr key={i}>
                        <td></td>
                        <td>
                                {data[i].instanceName}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            }
        }

        return (

            <section className="section-home container">
                <div className="row">
                    <div className="col-sm-8">
                        <h2 className="page-header">Account Dashboard</h2>
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
                                        {environments}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-sm-12">
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
