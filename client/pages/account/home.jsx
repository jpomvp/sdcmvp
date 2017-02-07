'use strict';
// const Actions = require('./actions');
const React = require('react');
// const ReactRouter = require('react-router');

class HomePage extends React.Component {

    /*constructor(props) {

        super(props);
    }*/

    onEditClick() {

        // Open edit instance page

    }

    getEnviroments() {
        const testData = [
            {
                instanceName: 'Tensorflow Playground Test',
                instanceStatus: 'Running',
                id: '34242342',
                URL: 'http://da01.sdc.jpo.dot.gov:8080/?token=7e9aa7a67ee99f8b8882cc10d697238b22305a48d28f7e26'
            },
            {instanceName: 'Test Instance #2', instanceStatus: 'Stopped', id: '53635665', URL: ''},
            {instanceName: 'Yet Another Test Instance', instanceStatus: 'Stopped', id: '76763424', URL: ''},
            {instanceName: 'Name Goes Here', instanceStatus: 'Stopped', id: '67782423', URL: ''},
            {instanceName: 'Testing 1234', instanceStatus: 'Stopped', id: '53635437', URL: ''}];

        return testData;
        // return Actions.getContainerList();
    }

    render() {

        // render the table of environments
/*        var data = [] = this.getEnviroments();
        var environments = [];
        for (var i = 0; i < data.length; i++) {
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
                        {/!*<Link to={data[i].URL}>*!/}
                        <a href={data[i].URL} target="_new">
                            {data[i].instanceName}
                        </a>
                        {/!*</Link>*!/}
                    </td>
                    <td>{data[i].instanceStatus}</td>
                    <td>{data[i].id}</td>
                </tr>
            );
        }*/

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
                                        {/*{environments}*/}
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
