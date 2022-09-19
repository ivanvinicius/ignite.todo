import { useState } from 'react'
import { UilPlus, UilClipboard } from '@iconscout/react-unicons'
import { useForm, FormProvider } from 'react-hook-form'

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

interface TaskInputData {
  description: string
}

export function Todo() {
  const [tasks, setTasks] = useState<TaskData[]>([])
  const isMobileMedia = useMatchMedia({ type: 'max', width: 768 })
  const formMethods = useForm<TaskInputData>({
    defaultValues: { description: '' }
  })

  const showButtonText = !isMobileMedia && <strong>Criar</strong>
  const hasNoTasks = tasks.length === 0
  const tasksSum = tasks.length

  function handleCreateNewTask(data: TaskInputData) {
    console.log(data)
  }

  return (
    <>
      <Header />
      <Main>
        <BoxCenter>
          <FormProvider {...formMethods}>
            <Form onSubmit={formMethods.handleSubmit(handleCreateNewTask)}>
              <ControlledInput
                name="task"
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
