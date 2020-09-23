import React from 'react'
import ReactDom from 'react-dom'
// import styles from './index.scss'

// 全局引入antd样式，但不是按需引入-----> 在webpack配置按需引入(有待完善)
import 'antd/dist/antd.less'

import App from './pages/index/index'

ReactDom.render( <App />, document.querySelector('#App'))