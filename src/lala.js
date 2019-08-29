import React from 'react';

const lala = WrapperComponet => class extends WrapperComponet {
      constructor (props) {
        super(props)
        this.state = {
          num: 2
        }
      }
      lala = () => {
        console.log('装饰器');
        // this.props.onClick();
      }
  
      render () {
        const elementsTree = super.render();
          const { children, ...otherProps } = elementsTree.props;
          let newProps = {
            ...otherProps,
            onClick: this.lala,
        };
          return React.cloneElement(
            elementsTree,
            newProps,
            ...children,
          )
        // return <WrapperComponet  {...this.props} onClick={this.lala} />
      }
  }

export default lala;