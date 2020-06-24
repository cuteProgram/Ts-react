import * as React from 'react'
import * as styles from './index.scss'
import Test from '@/components/Test/Test'
import SplitCode from '@/pages/SplitCode/SplitCode'

export default class App extends React.Component {
    render () {
        return (
            <div className={ styles.testContainer }>
                index container
                <Test />
                <SplitCode />
            </div>
        )
    }
}