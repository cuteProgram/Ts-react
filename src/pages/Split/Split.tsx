import React, { Suspense } from 'react'
const SplitCodeComp = React.lazy(() => import('@/components/splitCode/splitCode'))
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
class Split extends React.Component {
    state = {}

    render() {
        return (
            <div>
                看console
                <div>圣诞节福克斯江东父老开始的圣诞节福利上岛咖啡</div>
                <div>圣诞节福克斯江东父老开始的圣诞节福利上岛咖啡</div>
                <div>圣诞节福克斯江东父老开始的圣诞节福利上岛咖啡</div>
                <div>圣诞节福克斯江东父老开始的圣诞节福利上岛咖啡</div>
                <div>圣诞节福克斯江东父老开始的圣诞节福利上岛咖啡</div>
                <Suspense fallback={ <div>loading....</div> }>
                    <SplitCodeComp />
                </Suspense>
            </div>
        )
    }
}

export default Split