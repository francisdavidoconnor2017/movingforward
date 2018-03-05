import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #4caf50;
	border: none;
	color: #fff;
	padding: 15px 62px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	font-weight: bold;
	border-radius: 5px;
	box-shadow: 0px 0px 10px 1px #111;
	&:hover {
		color: #321944;
		cursor: grabbing;
		box-shadow: 0px 0px 10px 1px #ccc;
	}
`;

const GreenButton = () => {
	return (
		<React.Fragment>
			<Button>Submit</Button>
		</React.Fragment>
	);
};

export default GreenButton;
