import * as React from 'react'
import { Button } from 'antd'
interface InitProps {
    children?: any
}

class Test extends React.Component<InitProps> {

    componentDidMount () {
        console.log(this.props)
    }
    render () {
        return (
            <div>
                Test
                <Button type='primary'>submit</Button>
                <p>
                    这是一个神奇的code split
                    这是一个神奇的code split
                    这是一个神奇的code split
                    这是一个神奇的code split
                    这是一个神奇的code split
                    这是一个神奇的code split
                </p>
                { this.props&&this.props.children }
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