import * as React from 'react'
import * as styles from './index.scss'
import { Button } from 'antd'
import Test from '@/pages/Test/Test'
import SplitCode from '@/pages/Split/Split'

export default class App extends React.Component {
    state= {
        isShowTest: false,
        isShowSplit: false
    }

    onShouTest = () => {
        const { isShowTest } = this.state
        this.setState({
            isShowTest: !isShowTest
        })
    }

    onShowSplit = () => {
        const { isShowSplit } = this.state
        this.setState({
            isShowSplit: !isShowSplit
        })
    }

    render () {
        return (
            <div className={ styles.testContainer }>
                index container
                <Button type='primary' onClick={ this.onShouTest }>
                    show Test
                </Button>
                <Button type='ghost' onClick={ this.onShowSplit }>
                    show Split
                </Button>
                {
                    this.state.isShowTest ? <Test /> : 'wu'
                }
                {
                    this.state.isShowSplit ? <SplitCode /> : 'wu'
                }
            </div>
        )
    }
}