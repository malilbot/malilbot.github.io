import React, { Redirect } from 'react';

class Invite extends React.Component {
	componentDidMount() {
		window.location.href = '/docs/intro';
	}
	render() {
		return <div>If the redirect didnt work click this: /docs/intro</div>;
	}
}

export default Invite;
