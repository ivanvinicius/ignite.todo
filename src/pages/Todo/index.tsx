import { UilPlus, UilClipboard } from '@iconscout/react-unicons'
import { useState } from 'react'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Task } from '../../components/Task'
import { useMatchMedia } from '../../hooks/useMatchMedia'

import {
  Main,
  BoxCenter,
  Form,
  Details,
  TasksContainer,
  EmptyTasksMessageContainer
} from './styles'

const tasksArr = [
  {
    id: '9b1c17d8-c5f1-4854-892a-519f4b0ca175',
    done: true,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, minus.',
    createdAt: new Date('2022-08-24T13:02:05.033Z')
  },
  {
    id: '08aa99b2-fc12-40dc-aceb-919a12388ed6',
    done: false,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, minus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, minus.',
    createdAt: new Date('2022-08-26T19:05:06.033Z')
  }
]

export function Todo() {
  const [tasks] = useState(tasksArr)
  const isMobileMedia = useMatchMedia({ type: 'max', width: 768 })

  const showButtonText = !isMobileMedia && <strong>Criar</strong>
  const hasNoTasks = tasks.length === 0
  const tasksSum = tasks.length

  return (
    <>
      <Header />
      <Main>
        <BoxCenter>
          <Form>
            <Input placeholder="Adicione uma nova tarefa" />
            <Button title="Criar nova tarefa">
              {showButtonText}
              <UilPlus />
            </Button>
          </Form>

          <Details>
            <strong>
              Tarefas criadas <span>{tasksSum}</span>
            </strong>
            <strong>
              Concluídas{' '}
              {tasksSum !== 0 ? <span>1 de {tasksSum}</span> : <span>0</span>}
            </strong>
          </Details>

          <TasksContainer hasBorderTop={hasNoTasks}>
            {hasNoTasks ? (
              <EmptyTasksMessageContainer>
                <UilClipboard />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </EmptyTasksMessageContainer>
            ) : (
              tasks.map((taskItem) => (
                <Task key={taskItem.id} data={taskItem} />
              ))
            )}
          </TasksContainer>
        </BoxCenter>
      </Main>
    </>
  )
}
