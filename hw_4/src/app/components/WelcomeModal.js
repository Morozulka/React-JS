import React, { Component } from 'react';

export default class WelcomeModal extends Component {
    constructor(props) {
		super(props);
		this.state = {
			display: false
		}
	}

	render() {
		return this.state.display ? (
            <div className="welcomeModal">
                <p>Hello!</p>
                <button onClick={() => {
                this.setState({ display: false })
                }}>Close</button>
            </div>)
            : null;
    }
    
    componentDidMount() {
        this.setState({ display: true });
    }

}