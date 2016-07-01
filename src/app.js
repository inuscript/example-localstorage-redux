import React from 'react'
import { connect, Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { bindActionCreators, combineReducers } from 'redux'
import { createAction } from 'redux-actions'
import withProps from 'recompose/withProps'

// const
const TABS = [ "dog", "cat"]
// action
const CHANGE_TAB = "change_title"
const UPDATE_MEMO = "update_memo"

const changeTab = createAction(CHANGE_TAB, tab => tab )
const updateMemo = createAction(UPDATE_MEMO, memo => memo )

const actions = {
  changeTab, updateMemo
}

// reducer
const tabReducer = (state = TABS[0], action) => {
  switch(action.type){
    case CHANGE_TAB:
      return action.payload
    default:
      return state
  }
  return state
}

const memoReducer = (state = "", action) => {
  switch(action.type){
    case UPDATE_MEMO:
      return action.payload
    default:
      return state
  }
}

const reducer = combineReducers({
  tabs: (state = TABS, action) => state,
  currentTab: tabReducer,
  memo: memoReducer
})

// store
const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
const store = createStore(reducer, {}, enhancer)
// Memo comps
const Memo = ({title, onChange, value}) => {
  return <div>
    <div>{title}</div>
    <textarea onChange={(e) => onChange(e.target.value) } value={value} />
  </div>
}

const MemoContainer = ({memo, updateMemo}) => {
  return <Memo title="hoge" onChange={updateMemo} value={memo} />
}

// Tab comps
const TabItem = ({name, onClick}) => <div onClick={onClick }>{name}</div>

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