jest.unmock('../with-theme')

import React from 'react'
import WithTheme from '../with-theme'
import { render } from 'enzyme'

describe('WithTheme()', () => {
  const Header = ({ style }) => (<h1 style={style}>Header</h1>)
  const themes = {
    default: {
      primaryColor: 'transparent',
      secondaryColor: 'transparent'
    },
    lutalica: {
      primaryColor: '#fff',
      secondaryColor: '#000'
    },
    klexos: {
      primaryColor: '#aaa',
      secondaryColor: '#bbb'
    }
  }

  describe('when composing with a theme', () => {
    let lutalica
    let klexos

    const Decorated = WithTheme(themes)(Header, (theme) => ({ style: { color: theme.primaryColor} }) )

    beforeEach(() => {
      lutalica = render(<Decorated theme={'lutalica'} />)
      klexos = render(<Decorated theme={'klexos'} />)
    })

    it('matches new style', () => {
      expect(lutalica.html()).toContain('color:#fff')
      expect(klexos.html()).toContain('color:#aaa')
    })
  })

  describe('when composing without an informed theme', () => {
    let noTheme
    let wrongTheme

    const Decorated = WithTheme(themes)(Header, (theme) => ({ style: { color: theme.primaryColor} }) )

    beforeEach(() => {
      noTheme = render(<Decorated />)
      wrongTheme = render(<Decorated theme={'wrong'} />)
    })

    it('matches new style', () => {
      expect(noTheme.html()).toContain('color:transparent')
      expect(wrongTheme.html()).toContain('color:transparent')
    })
  })
})
