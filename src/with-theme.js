import mapProps from 'recompose/mapProps'

const withTheme = (themes) => (BaseComponent, transform) =>
  mapProps(
    (props) => ({ ...props, ...transform(themes[props.theme] || themes.default) })
  )(BaseComponent)

export default withTheme
