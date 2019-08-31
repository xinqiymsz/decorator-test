import React from 'react';

const Button = WrappedComponent => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false
          
        };
    }
    componentWillMount() {
    }

    isPromise = (obj) => {
      return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
    }

    handleClick = () => {
      this.setState({ loading: true });
      
      this.props.onClick().then((res) => {
        this.setState({ loading: false });
      });

    }

    render() {  
      return <WrappedComponent {...this.props} loading={this.state.loading} onClick={this.handleClick}/>;
    }
}


export default Button;