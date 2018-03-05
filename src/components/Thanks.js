import React, { Component } from 'react';
import Rodal from 'rodal';
import styled from 'styled-components';
import 'rodal/lib/rodal.css';
import '../rodalmodify.css';

const Thankyou = styled.div`
	color: #4caf50;
	font-size: 2.5em;
	font-weight: bold;
	vertical-align: middle;
	text-align: center;
`;

class Thanks extends Component {
	constructor(props) {
		super(props);
		this.state = { visible: true };
	}

	hide = () => {
		this.setState({ visible: true });
	};

	render() {
		return (
			<div>
				<Rodal
					width={300}
					height={90}
					animation="door"
					showCloseButton={false}
					showMask={false}
					visible={this.state.visible}
					onClose={this.hide}>
					<div className="modal-background-white">
						<Thankyou>Thank You</Thankyou>
					</div>
				</Rodal>
			</div>
		);
	}
}

export default Thanks;
