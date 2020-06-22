import * as React from 'react'
import { Button } from 'antd'
// import 'antd/lib/button/style/index.less'

@log
class Test extends React.Component {
    render () {
        return (
            <div>
                Test
                <Button type='primary'>submit</Button>
            </div>
        )
    }
}

/**
 * 装饰器写法
 * 疑问？ 有什么左右呢
 */
function log(target: any) {
    console.log(target)
}

export default Test