import * as React from 'react'
import * as styles from './index.scss'
import Test from '@/components/Test/Test'

export default class Index extends React.Component {
    render () {
        return (
            <div className={ styles.testContainer }>
                index container
                <Test />
            </div>
        )
    }
}