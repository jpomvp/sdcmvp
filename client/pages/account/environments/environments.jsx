'use strict';
const Actions = require('./actions');
const Alert = require('../../../components/alert.jsx');
const Button = require('../../../components/form/button.jsx');
const ControlGroup = require('../../../components/form/control-group.jsx');
const LinkState = require('../../../helpers/link-state');
const React = require('react');
const Spinner = require('../../../components/form/spinner.jsx');
const TextControl = require('../../../components/form/text-control.jsx');

class Environments extends React.Component {
    constructor(props) {

        super(props);

        this.createEnvironmentClick = this.createEnvironmentClick.bind(this);

        this.state = {
            showButtonMsg: false
        }

    }

    createEnvironmentClick(environmentName) {
        this.setState({ showButtonMsg : true});
        Actions.startEnvrionment(environmentName);
    }

    render() {

        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h3>Udacity Self-Driving Car Data (CH2_002)</h3>
                            <ul>
                                <li>HMB_1: 221 seconds, direct sunlight, many lighting changes. Good turns in beginning, discontinuous shoulder lines, ends in lane merge, divided highway</li>
                                <li>HMB_2: 791 seconds, two lane road, shadows are prevalent, traffic signal (green), very tight turns where center camera can't see much of the road, direct sunlight, fast elevation changes leading to steep gains/losses over summit. Turns into divided highway around 350s, quickly returns to 2 lanes</li>
                                <li>HMB_4: 99 seconds, divided highway segment of return trip over the summit</li>
                                <li>HMB_5: 212 seconds, guardrail and two lane road, shadows in beginning may make training difficult, mostly normalizes towards the end</li>
                                <li>HMB_6: 371 seconds, divided multi-lane highway with a fair amount of traffic</li>
                            </ul>
                        <div className="col-sm-6">
                            <button
                                className="btn-primary btn btn-default btn-block" onClick={this.createEnvironmentClick.bind(this, 'ch2_002')}>
                                Create Analysis Environment Using This Data Set
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Environments;

