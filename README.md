# react-with-theme
[![npm version](https://img.shields.io/npm/v/react-with-theme.svg?style=flat-square)](https://www.npmjs.com/package/react-with-theme)
[![dependency status](https://img.shields.io/david/team-magneto/react-with-theme.svg?style=flat-square)](https://david-dm.org/team-magneto/react-with-theme)
[![build status](https://img.shields.io/travis/team-magneto/react-with-theme.svg?style=flat-square)](https://travis-ci.org/team-magneto/react-with-theme)

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

## Contributing

First of all, **thank you** for wanting to help!

1. [Fork it](https://help.github.com/articles/fork-a-repo).
2. Create a feature branch - `git checkout -b more_magic`
3. Add tests and make your changes
4. Check if tests are ok - `npm test`
5. Commit changes - `git commit -am "Added more magic"`
6. Push to Github - `git push origin more_magic`
7. Send a [pull request](https://help.github.com/articles/using-pull-requests)! :heart: :sparkling_heart: :heart:
