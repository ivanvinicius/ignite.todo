import { useState } from 'react'
import { UilPlus, UilClipboard } from '@iconscout/react-unicons'
import { useForm, FormProvider } from 'react-hook-form'
import * as y from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { ControlledInput } from '../../components/ControlledInput'
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

interface TaskData {
  id: string
  done: boolean
  description: string
  createdAt: Date
}

interface InputData {
  description: string
}

const schema = y.object().shape({
  description: y
    .string()
    .required('O campo é obrigatório.')
    .max(256, 'Máximo de 256 caracteres.')
})

export function Todo() {
  const [tasks, setTasks] = useState<TaskData[]>([])
  const isMobileMedia = useMatchMedia({ type: 'max', width: 768 })
  const formMethods = useForm<InputData>({
    resolver: yupResolver(schema),
    defaultValues: { description: '' }
  })

  const showButtonText = !isMobileMedia && <strong>Criar</strong>
  const hasNoTasks = tasks.length === 0
  const tasksSum = tasks.length

  function handleCreateNewTask({ description }: InputData) {
    const newTask = {
      id: uuidv4(),
      done: false,
      description,
      createdAt: new Date()
    } as TaskData

    setTasks((currentState) => [...currentState, newTask])

    formMethods.reset()
  }

  return (
    <>
      <Header />
      <Main>
        <BoxCenter>
          <FormProvider {...formMethods}>
            <Form onSubmit={formMethods.handleSubmit(handleCreateNewTask)}>
              <ControlledInput
                name="description"
                placeholder="Adicione uma nova tarefa"
              />
              <Button type="submit" title="Criar nova tarefa">
                {showButtonText}
                <UilPlus />
              </Button>
            </Form>
          </FormProvider>

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
