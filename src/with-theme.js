import React from 'react'

const defaults = {
  themeNameProperty: 'themeName',
  themeName: 'default',
  themes: {},
  transform: (theme) => ({ theme }),
}

const withTheme = ({
  themes = defaults.themes,
  transform = defaults.transform,
} = {}) => (BaseComponent) =>
  ({ themeName = defaults.themeName, ...props }) => ( // eslint-disable-line
    <BaseComponent {...{ ...props, ...transform(themes[themeName] || themes.default) }} />
  )

export default withTheme
