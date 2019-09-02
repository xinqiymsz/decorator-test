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

    handleClick = () => {
      // 只有return一个promise才会加载loading状态，否则正常执行，因为判断是否有then必须还要执行一遍onclick，所以暂时只能加try catch
      try {
        this.setState({ loading: true });
        this.props.onClick().then((res) => {
          this.setState({ loading: false });
        });
      }
       catch(e) {
        this.setState({ loading: false });
      }
    }

    render() {  
      return <WrappedComponent {...this.props} loading={this.state.loading} onClick={this.handleClick}/>;
    }
}


export default Button;