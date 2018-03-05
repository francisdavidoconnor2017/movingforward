import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GreenButton from './GreenButton';
import NoGoButton from './NoGoButton';

const SubmitItem = styled.div`
	width: auto;
	padding: 30px 0 0 0;
	height: 45px;
	margin: 0;
	text-align: right;
`;

const SubmitButton = ({ show, handleSubmit }) => {
	if (show) {
		return (
			<React.Fragment>
				<SubmitItem>
					<Link to="/thanks">
						<GreenButton />
					</Link>
				</SubmitItem>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<SubmitItem>
					<NoGoButton handleSubmit={handleSubmit} />
				</SubmitItem>
			</React.Fragment>
		);
	}
};
export default SubmitButton;
