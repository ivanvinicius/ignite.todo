import { UilTimes } from '@iconscout/react-unicons'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
  Container,
  Wrapper,
  Input,
  Label,
  DeleteButton,
  TimeWrapper
} from './styles'

interface Data {
  id: string
  done: boolean
  description: string
  createdAt: Date
}

interface Props {
  data: Data
}

export function Task({ data }: Props) {
  const longCreatedAt = format(data.createdAt, "dd 'de' LLLL 'às' HH:mm", {
    locale: ptBR
  })
  const distanceFromNow = formatDistanceToNow(data.createdAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <Container>
      <Wrapper>
        <Input
          id={data.id}
          type="checkbox"
          checked={data.done}
          title="Marcar e desmarcar tarefa"
        />
        <Label
          htmlFor={data.id}
          isDone={data.done}
          title="Marcar e desmarcar tarefa"
        >
          {data.description}
        </Label>
        <DeleteButton title="Deletar tarefa">
          <UilTimes />
        </DeleteButton>
      </Wrapper>

      <TimeWrapper>
        <time dateTime={String(data.createdAt)} title={longCreatedAt}>
          Criada {distanceFromNow}
        </time>
      </TimeWrapper>
    </Container>
  )
}
