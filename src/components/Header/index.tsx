import { RiSunLine, RiMoonLine } from 'react-icons/ri'

import { useTheme } from '../../context/Theme'

import { Container } from './styles'

export function Header() {
  const { darkThemeEnabled, toggleTheme } = useTheme()

  function handleChangeTheme() {
    toggleTheme()
  }

  return (
    <Container>
      <h1>ToDo</h1>
      <button type="button" onClick={handleChangeTheme}>
        {darkThemeEnabled ? <RiSunLine size={32} /> : <RiMoonLine size={32} />}
      </button>
    </Container>
  )
}
