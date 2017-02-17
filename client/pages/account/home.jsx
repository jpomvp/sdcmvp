'use strict';
const Actions = require('./actions');
const React = require('react');
const ReactRouter = require('react-router');
const Store = require('./store');

class HomePage extends React.Component {

    constructor(props) {

        super(props);

        Actions.getContainerList();

        this.state = Store.getState();
    }

    componentDidMount() {

        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));
    }

    componentWillUnmount() {

        this.unsubscribeStore();
    }

    onStoreChange() {

        this.setState(Store.getState());
    }

    onDeleteClick(id) {

        Actions.deleteContainer(id);
        Actions.getContainerList();

    }

    render() {

        let data = [];
        if (typeof this.state.containers == 'undefined' || this.state.containers.length == 0)  {
            data.push({image: 'No Deployed Environments', URL: '#',_id: '0'});
        } else {
            data = this.state.containers;
        }

        let numEnvironments = 0;
        if (typeof data.length == 'undefined') {
            numEnvironments = 1;
        } else {
            numEnvironments = data.length;
        }
        let environments = [];
        for (let i = 0; i < numEnvironments; i++) {

            if(data[i]._id != 0) {
                environments.push(
                    <tr key={i}>
                        <td>
                            <button
                                className="btn btn-default btn-sm"
                                onClick={() => {if(confirm('Are you sure you want to delete this environment?')) { this.onDeleteClick(data[i].container)}}}>
                                Delete
                            </button>
                        </td>
                        <td>
                            <a href={data[i].URL} target="_new">
                                {data[i].image}
                            </a>
                        </td>
                        <td>{data[i].instanceStatus}</td>
                        <td>{data[i]._id}</td>
                    </tr>
                );
            } else {
                environments.push(
                    <tr key={i}>
                        <td></td>
                        <td>
                                {data[i].image}
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
