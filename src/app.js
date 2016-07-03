import React from 'react'
import { connect, Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { bindActionCreators } from 'redux'
import { createAction } from 'redux-actions'
import withProps from 'recompose/withProps'
import { MemoContainer } from './Memo'
import reducer from './reducers'
import * as types from './types'

const changeTab = createAction(types.CHANGE_TAB, tab => tab )
const updateMemo = createAction(types.UPDATE_MEMO, memo => {text: memo} )

const actions = {
  changeTab, updateMemo
}


// store
const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
const store = createStore(reducer, {}, enhancer)
// Memo comps


// Tab comps
const TabItem = ({name, onClick}) => <button onClick={onClick }>{name} </button>

const TabContainer = ({tabs, currentTab, changeTab }) => {
  const items = tabs.map( (tab, i) => {
    const props = {
      name: tab, 
      key: i,
      onClick: _ => changeTab(tab) 
    }
    return <TabItem {...props} />
  })
  return <div>{items}</div>
}

// main

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

const mapStateToProps = (state) => {
  console.log(state)
  return state
}
const App = () => {
  let MemoApp = connect(mapStateToProps, mapDispatchToProps)(MemoContainer)
  let TabApp = connect(mapStateToProps, mapDispatchToProps)(TabContainer)
  return <div>
    <TabApp />
    <MemoApp />
  </div>
}
const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Main