//create a error component when user does not exist



class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.props = {errorMessage};
    }
    //checks if component catched an error 
    componentDidCatch(error, errorInfo) {
      // Display fallback UI
      //if componenet has an error State changes to True
      this.props({errorMessage});
      // You can also log the error to an error reporting service
      logErrorToMyService(error, errorInfo);
    }
  
    render() {
      //if the state has an error return a message to the user 
      if (errorMessage) {
        // You can render any custom fallback UI
        return errorMessage;
      }
    }
  }
