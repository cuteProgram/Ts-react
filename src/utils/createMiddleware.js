// 记录日志
function patchStoreToAddLogging (store) {
    const next = store.dispatch
    return function dispatchAndLog (action) {
        console.log('action', action)
        let result = next(action)
        console.log('next state', store.getState())
        return result
    }
}

// 奔溃报告
function patchStoreToAddCrashReporting (store) {
    const next = store.dispatch
    store.dispatch = function dispatchAndReportingErrors(action) {
        try{
            return next(action)
        } catch(error) {
            console.log('捕获一个异常', error)
            throw error
        }
    }
}

// 实现使用多个中间件
function applyMiddlewareByMonkeypatching (store, middlewares) {
    middlewares = middlewares.slice()
    middlewares.reverse()

    middlewares.forEach(middlewares => {
        store.dispatch = middlewares(store)
    })
}