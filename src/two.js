import React from 'react';

const AuthPage = WrappedComponent => class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              permission: -1,
            };
        }
        componentWillMount() {
            // 权限获取接口,在此模拟promise
            new Promise(resolve => resolve(1)).then((res) => {
                // success
                this.setState({
                    permission: res,
                });
            });
        }
        render() {
           
            if (this.state.permission) {// 非0显示特殊页面
                return <div>特殊页面</div>;
            }
            
            return <WrappedComponent {...this.props} />;
        }
    }


export default AuthPage;