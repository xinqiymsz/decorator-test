import React from 'react';

function CommonPage(config) {
  const {
    fetchData,
    labelName,
    value
  } = config;
  return class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
  render() {
    
    return <div onClick={fetchData}>
        {`${labelName}: ${value}`}
    </div>
    }
  };
}
export default CommonPage;