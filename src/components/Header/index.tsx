import { UilReact, UilSun, UilMoon } from '@iconscout/react-unicons'

import { useTheme } from '../../context/Theme'

import { Container, BoxCenter, Logo, ButtonTheme } from './styles'

export function Header() {
  const { darkThemeEnabled, toggleTheme } = useTheme()
  const themeIcon = darkThemeEnabled ? <UilSun /> : <UilMoon />

  function handleChangeTheme() {
    toggleTheme()
  }

  return (
    <Container>
      <BoxCenter>
        <Logo>
          <UilReact />
          <h1>
            reac<span>todo</span>
          </h1>
        </Logo>

        <ButtonTheme
          title="Altarar tema da aplicação."
          type="button"
          onClick={handleChangeTheme}
        >
          {themeIcon}
        </ButtonTheme>
      </BoxCenter>
    </Container>
  )
}
