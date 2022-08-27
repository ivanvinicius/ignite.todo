import { UilPlus } from '@iconscout/react-unicons'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { useMatchMedia } from '../../hooks/useMatchMedia'

import { Main, BoxCenter, Form } from './styles'

export function Todo() {
  const isMobileMedia = useMatchMedia({ type: 'max', width: 768 })
  const showButtonText = !isMobileMedia && <strong>Criar</strong>

  return (
    <>
      <Header />
      <Main>
        <BoxCenter>
          <Form>
            <Input placeholder="Adicione uma nova tarefa" />
            <Button title="Criar nova tarefa.">
              {showButtonText}
              <UilPlus />
            </Button>
          </Form>
        </BoxCenter>
      </Main>
    </>
  )
}
