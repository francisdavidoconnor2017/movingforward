import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #fff;
	border: none;
	color: #4caf50;
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

const WhiteButton = () => {
	return (
		<React.Fragment>
			<Button>Next</Button>
		</React.Fragment>
	);
};

export default WhiteButton;
