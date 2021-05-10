import React from 'react';

class Invite extends React.Component {
	componentDidMount() {
		window.location.href =
			'https://discord.com/oauth2/authorize?client_id=749020331187896410&permissions=117824&scope=bot%20applications.commands';
	}
	render() {
		return (
			<div>
				If the redirect didnt work click this: https://discord.com/oauth2/authorize?client_id=749020331187896410&permissions=117824&scope=bot%20applications.commands
			</div>
		);
	}
}

export default Invite;
