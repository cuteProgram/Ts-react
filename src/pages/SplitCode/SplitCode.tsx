import React from 'react'
// 引入loadsh插件
function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
        const element = document.createElement('div');
        
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
        return element;
    }).catch(error => 'An error occurred while loading the component')
}
getComponent().then(component => console.log(component))

// 测试代码切分
class SplitCode extends React.Component {
    state = {}

    render() {
        return (
            <div>
                看console
            </div>
        )
    }
}

export default SplitCode