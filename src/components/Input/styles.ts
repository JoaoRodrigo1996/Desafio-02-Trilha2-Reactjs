import styled, { css } from 'styled-components'

interface InputContainerProps {
  hasError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  height: 2.625rem;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['gray-400']};
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-700']};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #f75a68;
    `}
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: #f75a68;
  }
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;

  color: ${(props) => props.theme['gray-700']};
  font-size: 0.75rem;
  padding: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['gray-600']};
`
