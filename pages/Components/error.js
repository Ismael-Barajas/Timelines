//create a error component when user does not exist
import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
    }
    //checks if component catched an error 
    componentDidCatch(error, errorInfo) {
        // Display fallback UI
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo);
    }

    render() {
        const { errorMessage } = this.props;
        //if errorMessage received from parent then render
        return (
            <div>
                <h1>{ !!errorMessage && errorMessage }</h1>
            </div>
        );
    }
}

  export default ErrorBoundary;