'use strict';
const Actions = require('./actions');
const React = require('react');
// const Store = require('./store');
const Environments = require('./environments.jsx');


class EnvironmentsPage extends React.Component {
    constructor(props) {

        super(props);

        // Actions.getDetails();
        // Actions.getUser();

        // this.state = Store.getState();
    }

    componentDidMount() {

        // this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));
    }

    componentWillUnmount() {

        // this.unsubscribeStore();
    }

    onStoreChange() {

        // this.setState(Store.getState());
    }

    render() {

        return (
            <section className="container">
                <h1 className="page-header">Data Analysis Environments</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <Environments/>
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = EnvironmentsPage;
