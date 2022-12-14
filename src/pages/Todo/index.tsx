import { useEffect, useState } from 'react'
import { UilPlus, UilClipboard } from '@iconscout/react-unicons'
import { useForm, FormProvider } from 'react-hook-form'
import * as y from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-hot-toast'

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

const collectionName = '@todo:tasks'

const schema = y.object().shape({
  description: y
    .string()
    .required('O campo é obrigatório.')
    .max(256, 'Máximo de 256 caracteres.')
})

export function Todo() {
  const [tasks, setTasks] = useState<TaskData[]>(() => {
    const retrivedTasks = localStorage.getItem(collectionName)

    if (retrivedTasks !== null) {
      const parsedTasks = JSON.parse(retrivedTasks)

      const normalizedTasks = parsedTasks.map((task: TaskData) => ({
        ...task,
        createdAt: new Date(task.createdAt)
      }))

      return normalizedTasks
    }

    return []
  })

  const isMobileMedia = useMatchMedia({ type: 'max', width: 768 })
  const formMethods = useForm<InputData>({
    resolver: yupResolver(schema),
    defaultValues: { description: '' }
  })

  const showButtonText = !isMobileMedia && <strong>Criar</strong>
  const hasNoTasks = tasks.length === 0
  const tasksSum = tasks.length
  const sumTasksAlreadyDone = tasks.reduce((acc, task) => {
    if (task.done) acc++
    return acc
  }, 0)

  function handleCreateNewTask({ description }: InputData) {
    const newTask = {
      id: uuidv4(),
      done: false,
      description,
      createdAt: new Date()
    } as TaskData

    try {
      setTasks((currentState) => [...currentState, newTask])
      formMethods.reset()
      toast.success('Tarefa criada')
    } catch {
      toast.error('Erro ao criar tarefa')
    }
  }

  function deleteTask(taskId: string) {
    try {
      const distinctTasks = tasks.filter((task) => task.id !== taskId)
      setTasks(distinctTasks)
      toast.success('Tarefa removida')
    } catch {
      toast.error('Erro ao remover tarefa')
    }
  }

  function toggleTaskAsDone(taskId: string) {
    const updatedTasks = tasks.map((currentTask) => {
      if (currentTask.id === taskId) {
        return {
          ...currentTask,
          done: !currentTask.done
        }
      }
      return currentTask
    })

    setTasks(updatedTasks)
  }

  useEffect(() => {
    localStorage.setItem(collectionName, JSON.stringify(tasks))
  }, [tasks])

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
              {tasksSum !== 0 ? (
                <span>{`${sumTasksAlreadyDone} de ${tasksSum}`}</span>
              ) : (
                <span>0</span>
              )}
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
                <Task
                  key={taskItem.id}
                  data={taskItem}
                  onDeleteTask={deleteTask}
                  onToggleTaskAsDone={toggleTaskAsDone}
                />
              ))
            )}
          </TasksContainer>
        </BoxCenter>
      </Main>
    </>
  )
}
