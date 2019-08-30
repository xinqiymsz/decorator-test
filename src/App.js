import React from 'react';
import ReactDOM from 'react-dom';

// 情景一  页面的复用
// import one from './one';

// const defaultProps = {
//    fetchData: () => {console.log('fetch some data');},
//    labelName: 'title',
//    value: '123'
// };

// const App = one(defaultProps);
// export default App;

// 情景二 页面鉴权

// import AuthPage from './two';


// class App extends React.Component {
//   componentWillMount() {
//       // 获取业务数据
//   }
//   render() {
//     return <div>业务页面</div>;
      
//   }
// }

// export default AuthPage(App);

 // 情景三
import Performance from './three';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
}
  componentWillMount() {
      // 获取业务数据
  }
  render() {
    return <div>业务页面</div>;
      
  }
}

export default Performance(App);
