'use babel'
import React from 'react'
import ReactDom from 'react-dom'
import ready from 'doc-ready'
import App from './app'

ready( () => {
  ReactDom.render(<App />, document.body.appendChild(document.createElement('div')))
})