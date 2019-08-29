import React from 'react';

const common = (config) => WrapperComponet => class extends WrapperComponet {
      constructor (props) {
        super(props)
        this.state = {
          ...this.state,
          list: [],
          num: 1
        }
      }
      onClick = () => {
        this.setState({ num: 100 });
      }
  
      render () {
        // return <WrapperComponet onClick={this.onClick} { ...newProps}/>
          const elementsTree = super.render();
          const { children, ...otherProps } = elementsTree.props;

          return React.cloneElement(
            elementsTree,
            otherProps,
            ...children,
            <div onClick={this.onClick}>
              {`${config.label}: ${config.value}`}
             </div>
          )
      }
  }


// function CommonSelectPage (config) {
//     const {
//       title // 展示不同的title
//     } = config;
//   return class extends React.Component {
//       constructor (props) {
//         super(props)
//         this.state = {
//           list: []
//         }
//       }
  
//     config = {
//       navigationBarTitleText: '',
//     }
  
//     get checkedNum() {
//       const { list } = this.state;
//       return list.reduce((acc, cur) => acc = cur.status ? acc + 1 : acc, 0)
//     }
  
//     componentWillReceiveProps (nextProps) {
//       console.log(this.props, nextProps);
//     }
  
//     render () {
//       return (
//         <div>
//           {title}
//         </div>
//       )
//     }
//   }
//   }
  
//   const common = new CommonSelectPage({title: 'lalala'});
  export default common;