import React from 'react'

const defaults = {
  themes: {},
  transform: (theme) => ({ theme }),
}

const withTheme = ({
  themes = defaults.theme,
  transform = defaults.transform,
}) => (BaseComponent) =>
  ({ theme, ...props }) => ( // eslint-disable-line
    <BaseComponent {...{ ...props, ...transform(themes[theme] || themes.default) }} />
  )

export default withTheme
