import { forwardRef, InputHTMLAttributes } from 'react'
import { InputContainer, InputStyled, InputWrapper, RightText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function input(
  { error, className, rightText, ...props },
  ref,
) {
  return (
    <InputWrapper className={className}>
      <InputContainer hasError={!!error}>
        <InputStyled {...props} ref={ref} />
        {rightText && <RightText>{rightText}</RightText>}
      </InputContainer>
      {error && <p>{error}</p>}
    </InputWrapper>
  )
})
