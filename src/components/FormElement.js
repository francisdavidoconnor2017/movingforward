import React, { Component } from 'react';
import styled from 'styled-components';
import '../Form.css';

const Lable = styled.div`
	font-size: 60%;
	color: #666;
	font-weight: normal;
	width: auto;
	margin: 0 0 2px 0;
	padding-left: 5px;
`;

const Error = styled.div`
	font-size: 60%;
	color: #911;
	font-weight: normal;
	width: 250px;
	margin: 0;
	padding-left: 5px;
`;

class FormElement extends Component {
	render() {
		return (
			<React.Fragment>
				<Lable>{this.props.params.lable}</Lable>
				<input
					className={this.props.params.classname}
					onChange={event => this.props.handleChange(event, this.props.params)}
					type={this.props.params.type}
					placeholder={this.props.params.placeholder}
					value={this.props.params.content}
				/>
				<Error>{this.props.params.currenterrormessage}</Error>
			</React.Fragment>
		);
	}
}

export default FormElement;
