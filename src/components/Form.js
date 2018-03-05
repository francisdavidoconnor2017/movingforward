import React, { Component } from 'react';
import styled from 'styled-components';
import GridItem from './GridItem';
import GridItems from './GridItems';
import SubmitButton from './SubmitButton';
import RightSide from './RightSide';

const Grid = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-column-gap: 15px;
	padding: 30px;
`;

class Form extends Component {
	validEmail = email => {
		let regex = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
		return regex.test(email);
	};

	//Modify this to update the correct input object content
	handleChange = (event, input) => {
		let value = event.target.value;
		let length = value.length;
		let inputs = this.props.inputs.inputs;
		let inputid = input.id;
		let currentinput = inputs[inputid];
		currentinput.attempted = true;
		currentinput.content = value;
		currentinput.valid = length > 1;
		if (currentinput.type === 'email' && length > 0) {
			if (this.validEmail(value)) {
				currentinput.classname = 'Form-inputLineTicked';
				currentinput.currenterrormessage = '';
			} else {
				currentinput.classname = 'Form-inputLineInvalid';
				currentinput.currenterrormessage = currentinput.errormessage;
				currentinput.valid = false;
			}
		} else if (length > 0) {
			currentinput.classname = 'Form-inputLineTicked';
			currentinput.currenterrormessage = '';
			currentinput.valid = true;
		} else {
			currentinput.classname = 'Form-inputLineInvalid';
			currentinput.currenterrormessage = currentinput.errormessage;
			currentinput.valid = false;
		}

		let completed = true;
		for (let input of inputs) {
			if (inputs[input.id].valid === false) {
				completed = false;
			}
		}
		this.props.updateinputs({ inputs });
		this.props.updatecompleted({ completed });
	};

	handleSubmit = () => {
		let inputs = this.props.inputs.inputs;
		for (let input of inputs) {
			let currentinput = inputs[input.id];
			currentinput.attempted = true;
			if (currentinput.content.length === 0) {
				currentinput.classname = 'Form-inputLineInvalid';
				currentinput.currenterrormessage = currentinput.errormessage;
				currentinput.valid = false;
			}
			if (
				currentinput.type === 'email' &&
				!this.validEmail(currentinput.content)
			) {
				currentinput.classname = 'Form-inputLineInvalid';
				currentinput.currenterrormessage = currentinput.errormessage;
				currentinput.valid = false;
			}
		}
		this.props.updateinputs({ inputs });
	};

	render() {
		return (
			<React.Fragment>
				<Grid>
					<GridItems
						handleValidity={this.handleValidity}
						handleChange={this.handleChange}
						items={this.props.inputs.inputs}
					/>
					<GridItem />

					<RightSide>
						<SubmitButton
							handleSubmit={this.handleSubmit}
							show={this.props.completed.completed}
						/>
					</RightSide>
				</Grid>
			</React.Fragment>
		);
	}
}

export default Form;
