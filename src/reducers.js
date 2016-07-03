
import { bindActionCreators, combineReducers } from 'redux'
import * as types from './types'

// const
const TABS = [ "dog", "cat"]

// reducer
const tabReducer = (state = TABS[0], action) => {
  switch(action.type){
    case types.CHANGE_TAB:
      return action.payload
    default:
      return state
  }
  return state
}

const memoReducer = (state = "", action) => {
  switch(action.type){
    case types.UPDATE_MEMO:
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

export default reducer