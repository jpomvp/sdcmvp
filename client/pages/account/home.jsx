'use strict';
const Moment = require('moment');
const React = require('react');


class HomePage extends React.Component {
    constructor(props) {

        super(props);

        this.state = this.getThisMoment();
    }

    componentDidMount() {

        this.interval = setInterval(this.refreshTime.bind(this), 1000);
    }

    componentWillUnmount() {

        clearInterval(this.interval);
    }

    refreshTime() {

        this.setState(this.getThisMoment());
    }

    getThisMoment() {

        const thisMoment = Moment();

        return {
            second: thisMoment.format('ss'),
            minute: thisMoment.format('mm'),
            hour: thisMoment.format('HH'),
            day: thisMoment.format('DD'),
            month: thisMoment.format('MM'),
            year: thisMoment.format('YYYY')
        };
    }

    render() {

        return (
            <section className="section-home container">
                <div className="row">
                    <div className="col-sm-7">
                        <h2 className="page-header">MY SDC ACCOUNT</h2>
                        <div className="row">

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
