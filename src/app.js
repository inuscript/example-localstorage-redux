import React from 'react'
import { connect, Provider } from 'react-redux'
import { bindActionCreators, createStore, combineReducers } from 'redux'
import { createAction } from 'redux-actions'


const CHANGE_TAB = "change_title"
const UPDATE_MEMO = "update_memo"

const changeTab = createAction(CHANGE_TAB, tab => tab )
const updateMemo = createAction(UPDATE_MEMO, memo => memo )

const actions = {
  changeTab, updateMemo
}

const titleReducer = (tab = "", action) => {
  switch(action.type){
    case CHANGE_TAB:
      return action.memo
    default:
      return state
  }
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
  memo: memoReducer
})

const store = createStore(reducer)
//

//
const Memo = ({title, onChange, value}) => {
  return <div>
    <div>{title}</div>
    <textarea onChange={(e) => onChange(e.target.value) } value={value} />
  </div>
}

const Container = ({memo, updateMemo}) => {
  return <Memo title="hoge" onChange={updateMemo} value={memo} />
}


const mapDispatchToProps = (dispatch) => {
  // dispatchとかcomponent以下に渡したくないのでここでbindしてしまう。
  return bindActionCreators(actions, dispatch)
}

const mapStateToProps = (state) => state

const Main = () => {
  let App = connect(mapStateToProps, mapDispatchToProps)(Container)
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Main