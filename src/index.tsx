import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as styles from './index.scss'
import Index from './pages/index/index'

ReactDom.render(
    <div className={ styles.testContainer }>
        hello world 465132
        <div className={ styles.test2 }>
            hello qa!!!
        </div>
        <Index />
    </div>,
    document.querySelector('#App'))