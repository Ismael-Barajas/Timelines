//create a error component when user does not exist
import React from 'react';
import Image from 'next/image'


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { errorMessage } = this.props;
        //if errorMessage received from parent then render
        return (
            <div>
                <style>{'body { background-color: #F0F0E2; }'}</style>
                <h1><center>{ !!errorMessage && errorMessage }</center></h1>
                <center><Image src="/githubLogo.png" alt="github logo" class="center" width="500" height="250"/></center>
                <h2><center><font size="200">ERROR:</font></center></h2>
                <p><center><font size = "5"><style>{'body { font-family : Playfair Display; }'}</style>USER DOES NOT EXIST</font></center></p>
            </div>
        );
    }
}

export default ErrorBoundary;
