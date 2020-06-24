import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as styles from './index.scss'
import Index from './pages/index/index'

function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      return element;

    }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => console.log('component', component))

ReactDom.render(
    <div className={ styles.testContainer }>
        hello world 465132
        <div className={ styles.test2 }>
            hello qa!!!
        </div>
        <Index />
    </div>,
document.querySelector('#App'))