import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import '../rodalmodify.css';
import FormContainer from '../containers/FormContainer';

class FormModal extends Component {
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
					width={1000}
					height={500}
					animation="door"
					showCloseButton={false}
					showMask={true}
					onClose={this.hide}
					visible={this.state.visible}>
					<div className="modal-background-white">
						<FormContainer />
					</div>
				</Rodal>
			</div>
		);
	}
}

export default FormModal;
