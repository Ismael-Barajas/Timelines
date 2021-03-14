class ErrorBoundary extends React.Component 
{
    /*
       props : stands for properties and is used to pass data from one
        component to another 
    */
    constructor(props) 
    {
        super(props);
        this.props = {errorMessage};
    }


    /*
       componentDidCatch() : called during "commit" phase
         >it is used for things like logging errors
       error : error that was thrown 
       info : object which contains a trace of where the error occurred
    */
    componentDidCatch(error, errorInfo) {
        /*
          setState() changes to the component state and tells React 
            that this component and its children needs to be 
            re-rendered with the update state
        */
        this.props({ errorMessage: true });
        logErrorToMyService(error, errorInfo);
        // console.log(error);
        // console.log(errorInfo);
    }


    render() 
    {
        if (errorMessage) {
            return errorMessage;
        }
    }
}