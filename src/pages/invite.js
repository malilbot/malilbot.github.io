import React from 'react';

class Contact extends React.Component {
    componentDidMount() { window.location.href = "https://discord.com/oauth2/authorize?client_id=749020331187896410&permissions=117824&scope=bot%20applications.commands"; }
    render() {
        return (

            <div className="container">
                If the redirect didnt work click [this](https://discord.com/oauth2/authorize?client_id=749020331187896410&permissions=117824&scope=bot%20applications.commands)
            </div>

        )
    }
}

export default Contact;