import React, { Component } from 'react';
import Rodal from 'rodal';
import styled from 'styled-components';
import 'rodal/lib/rodal.css';
import '../rodalgreen.css';

const Content = styled.div`
	color: #fff;
`;

class CallToAction extends Component {
	constructor(props) {
		super(props);
		this.state = { visible: true };
	}

	show() {
		this.setState({ visible: true });
	}

	hide() {
		this.setState({ visible: false });
	}

	render() {
		return (
			<div>
				<Rodal
					animation="fade"
					showCloseButton={false}
					visible={this.state.visible}
					onClose={this.hide.bind(this)}>
					<Content>Content</Content>
				</Rodal>
			</div>
		);
	}
}

export default CallToAction;
