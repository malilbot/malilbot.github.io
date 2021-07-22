import React from 'react';

class Discord extends React.Component {
    componentDidMount() {
        window.location.href =
            'https://discord.gg/zwUQGAG4cP';
    }
    render() {
        return (
            <div>
                If the redirect didnt work click this: https://discord.gg/zwUQGAG4cP
            </div>
        );
    }
}

export default Discord;
