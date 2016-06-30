import React from 'react'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducer } from 'redux'
import { createAction } from 'redux-actions'

const CHANGE_TAB = "change_title"
const UPDATE_MEMO = "update_memo"
const changeTab = createAction(CHANGE_TAB, tab => tab )
const updateMemo = createAction(UPDATE_MEMO, memo => memo )

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
      return action.memo
    default:
      return state
  }
}
const reducer = combineReducer({
  memo: memoReducer
})
const store = createStore()
//

//
const Memo = ({title, onChange, value}) => {
  return <div>
    <div>{title}</div>
    <textarea onChange={onChange} value={value} />
  </div>
}

const Main = () => {
  return (
    <Provider store={store}>
      <div>start</div>
    </Provider>
  )
}

export default connect({})(Main)