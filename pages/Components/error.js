//create a error component when user does not exist 



class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    //checks if component catched an error 
    componentDidCatch(error, errorInfo) {
      // Display fallback UI
      //if componenet has an error State changes to True
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      logErrorToMyService(error, errorInfo);
    }
  
    render() {
      //if the state has an error return a message to the user 
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Sorry, the person you entered does not exist.</h1>;
      }
      return this.props.children;
    }
  }