import { RiPantoneLine, RiSunLine, RiMoonLine } from 'react-icons/ri'

import { useTheme } from '../../context/Theme'

import { Container, Box, Logo, ButtonTheme } from './styles'

export function Header() {
  const { darkThemeEnabled, toggleTheme } = useTheme()
  const themeIcon = darkThemeEnabled ? <RiSunLine /> : <RiMoonLine />

  function handleChangeTheme() {
    toggleTheme()
  }

  return (
    <Container>
      <Box>
        <Logo>
          <RiPantoneLine />
          <h1>
            to<span>do</span>
          </h1>
        </Logo>

        <ButtonTheme
          title="Alterar tema escuro/claro"
          type="button"
          onClick={handleChangeTheme}
        >
          {themeIcon}
        </ButtonTheme>
      </Box>
    </Container>
  )
}
