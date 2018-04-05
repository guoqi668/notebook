##Redux
视图与状态是一一对应的。

- Store
    * 所有的状态，保存在一个对象里面。Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
    * createStore这个函数，用来生成 Store。

- State
    * Store对象包含所有数据,可以通过store.getState()拿到。
- Action
    * Action 就是 View 发出的通知，表示 State 应该要发生变化了.也是改变 State 的唯一办法。它会运送数据到 Store。
    * 那么如何触发action呢？(dispatch) 如何改变state呢？（reducer）
    * Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置. 
- store.dispatch()
    * 是View发出Action的唯一方法。接受一个 object 发送给 reducer 
- Reducer
    * reducer就是纯函数，接收state 和 action，然后返回一个新的 state.
- combineReducer(reducers)  
    * 一个项目有很多的reducers,我们要把他们整合到一起. 就用到这个函数
    * 把一个 object，（object是由多个不同 reducer 函数作为 value 的对象）合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。


- Recux-thunk
redux的中间件.中间件就是一个函数，对store.dispatch方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
* 为了让action创建函数除了返回action对象外，还可以返回函数.我们需要引用redux-thunk，函数传递两个参数(dispatch,getState).

##React-redux 

- Connect
    * connect函数作用是从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。也传递dispatch(action)函数到propsvar
    * connect接收两个参数，一个mapStateToProps,就是把redux的state，转为组件的Props，还有一个参数是mapDispatchToprops, 就是把发射actions的方法，转为Props属性函数。
- Provider
    * Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。

## React组件生命周期
