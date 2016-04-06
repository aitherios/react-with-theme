import React from 'react'
import { mapProps, wrapDisplayName } from 'recompose'
import createHelper from 'recompose/createHelper'

const withTheme = (themes) => (BaseComponent, transform) => mapProps(
  (props) => Object.assign({}, props, transform(themes[props.theme])),
  BaseComponent
)

export default createHelper(withTheme, 'withTheme')
