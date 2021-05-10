import React from 'react';

class Discord extends React.Component {
    componentDidMount() {
        window.location.href =
            'https://discord.gg/KkMKCchJb8';
    }
    render() {
        return (
            <div>
                If the redirect didnt work click this: https://discord.gg/KkMKCchJb8
            </div>
        );
    }
}

export default Discord;
