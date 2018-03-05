import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rodal from 'rodal';
import styled from 'styled-components';
import 'rodal/lib/rodal.css';
import '../rodalmodify.css';
import WhiteButton from './WhiteButton';
import RightSide from './RightSide';

const Content = styled.div`
	color: #fff;
`;

const TextContent = styled.p`
	line-height: 0.8em;
	font-size: 16px;
`;

const Header = styled.h1`
	width: 100%;
	text-align: center;
	margin: 0;
	padding: 0;
	font-weight: bold;
	font-size: 2.7em;
`;

class CallToAction extends Component {
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
					width={650}
					height={370}
					animation="door"
					showCloseButton={false}
					showMask={false}
					onClose={this.hide}
					visible={this.state.visible}>
					<div className="modal-background-green">
						<Content>
							<Header>Welcome</Header>
							<TextContent>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur.
							</TextContent>
							<TextContent>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
								sit amet, consectetur, adipisci velit, sed quia non numquam eius
								modi tempora incidunt ut labore et dolore magnam aliquam quaerat
								voluptatem.
							</TextContent>
						</Content>
						<RightSide>
							<Link to="/form">
								<WhiteButton />
							</Link>
						</RightSide>
					</div>
				</Rodal>
			</div>
		);
	}
}

export default CallToAction;
