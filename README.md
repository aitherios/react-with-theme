# react-with-theme

React component theme high order component helper

## Usage

First create an object to represent your theme properties:

```js
const themes = {
  lutalica: {
    primaryColor: 'white',
    secondaryColor: 'black'
  },
  klexos: {
    primaryColor: 'blue',
    secondaryColor: 'green'
  },
  default: {
    primaryColor: 'transparent',
    secondaryColor: 'transparent'
  }
}
```

Let's build an example react component:

```js
const Header = ({ style }) => (<h1 style={style}>Header</h1>)
```

And decorate:

```js
import WithTheme from 'react-with-theme'

const themeStyle = (theme) => ({ style: { color: theme.primaryColor} })

const Decorated = WithTheme(themes)(Header, themeStyle)
```

Now when you use `<Decorated theme={'lutalica'} />`
it will render `<h1 style="color:'white'">Header</h1>`

You can declare a default theme as fallback in case you don't inform a theme or misspell.
