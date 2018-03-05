import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #999;
	border: none;
	color: #000;
	padding: 15px 62px;
	text-align: center;
	font-family: 'Arial';
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	font-weight: bold;
	border-radius: 5px;
	box-shadow: 0px 0px 10px 1px #111;
	&:hover {
		color: #911;
		box-shadow: 0px 0px 10px 1px #911;
	}
`;

const NoGoButton = ({ handleSubmit }) => {
	return (
		<React.Fragment>
			<Button onClick={handleSubmit}>Submit</Button>
		</React.Fragment>
	);
};

export default NoGoButton;
