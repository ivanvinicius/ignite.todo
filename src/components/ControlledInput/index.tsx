import { InputHTMLAttributes } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '../Input'

import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function ControlledInput({ name }: Props) {
  const { control } = useFormContext()

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} />}
      />
    </Container>
  )
}
