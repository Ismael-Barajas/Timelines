//create a error component when user does not exist



class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.props = {errorMessage};
    }
    //checks if component catched an error 
    componentDidCatch(error, errorInfo) {
      // Display fallback UI
      // You can also log the error to an error reporting service
      logErrorToMyService(error, errorInfo);
    }
  
    render() {
      //if the state has an error return a message to the user 
      if (errorMessage) {
        // You can render any custom fallback UI
        return <h1>User not found.</h1>;
      }
    }
  }
