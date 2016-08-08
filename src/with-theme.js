import mapProps from 'recompose/mapProps'

const withTheme = ({ themes, transform }) => (BaseComponent) =>
  mapProps(
    (props) => ({ ...props, ...transform(themes[props.theme] || themes.default) })
  )(BaseComponent)

export default withTheme
