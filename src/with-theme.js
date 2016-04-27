import React from 'react'
import { mapProps, wrapDisplayName } from 'recompose'

const withTheme = (themes) => (BaseComponent, transform) =>
  mapProps(
    (props) => Object.assign({}, props, transform(themes[props.theme] || themes['default']))
  )(BaseComponent)

export default withTheme
