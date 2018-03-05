import React from 'react';
import GridItem from './GridItem.js';
import FormElement from './FormElement.js';

const GridItems = ({ items, handleValidity, handleChange }) => {
	const Inputs = items.map((item, i) => {
		return (
			<GridItem key={i}>
				<FormElement
					params={item}
					handleValidity={handleValidity}
					handleChange={handleChange}
				/>
			</GridItem>
		);
	});
	return <React.Fragment>{Inputs}</React.Fragment>;
};
export default GridItems;
