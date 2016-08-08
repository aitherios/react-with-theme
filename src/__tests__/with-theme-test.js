jest.unmock('../with-theme')

import React from 'react'
import WithTheme from '../with-theme'
import { render } from 'enzyme'

describe('WithTheme()', () => {
  let subject
  let Header
  let Decorated
  let themes

  beforeEach(() => {
    Header = ({ style }) => (<h1 style={style}>Header</h1>) // eslint-disable-line

    themes = {
      default: {
        primaryColor: 'transparent',
        secondaryColor: 'transparent',
      },
      lutalica: {
        primaryColor: '#fff',
        secondaryColor: '#000',
      },
      klexos: {
        primaryColor: '#aaa',
        secondaryColor: '#bbb',
      },
    }
  })

  describe('when composing with nothing', () => {
    beforeEach(() => {
      Decorated = WithTheme()(Header)
    })

    it('renders', () => {
      subject = render(<Decorated />)
      expect(subject.html()).toBeTruthy()
    })
  })

  describe('when composing with a theme', () => {
    beforeEach(() => {
      Decorated = WithTheme({
        themes,
        transform: (theme) => ({ style: { color: theme.primaryColor } }),
      })(Header)
    })

    it('matches new style', () => {
      subject = render(<Decorated themeName={'lutalica'} />)
      expect(subject.html()).toContain('color:#fff')
      subject = render(<Decorated themeName={'klexos'} />)
      expect(subject.html()).toContain('color:#aaa')
    })
  })

  describe('when composing without an informed theme', () => {
    beforeEach(() => {
      Decorated = WithTheme({
        themes,
        transform: (theme) => ({ style: { color: theme.primaryColor } }),
      })(Header)
    })

    it('matches default theme without theme name', () => {
      subject = render(<Decorated />)
      expect(subject.html()).toContain('color:transparent')
    })

    it('matches default theme with wrong theme name', () => {
      subject = render(<Decorated themeName={'wrong'} />)
      expect(subject.html()).toContain('color:transparent')
    })
  })
})
