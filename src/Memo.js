import React from 'react'

const Memo = ({title, onChange, value}) => {
  return <div>
    <div>{title}</div>
    <textarea onChange={(e) => onChange(e.target.value) } value={value} />
  </div>
}

export const MemoContainer = ({currentTab, memo, updateMemo}) => {
  return <Memo title={currentTab} onChange={updateMemo} value={memo.text} />
}