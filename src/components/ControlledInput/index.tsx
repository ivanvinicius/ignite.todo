import { InputHTMLAttributes } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '../Input'

import { Container, HelperTextContainer, HelperText } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function ControlledInput({ name, ...rest }: Props) {
  const {
    control,
    formState: { errors }
  } = useFormContext()
  const inputHasError = !!errors[name]

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            hasError={inputHasError}
            {...rest}
          />
        )}
      />
      <HelperTextContainer>
        {inputHasError && (
          <HelperText>{String(errors[name]?.message)}</HelperText>
        )}
      </HelperTextContainer>
    </Container>
  )
}
