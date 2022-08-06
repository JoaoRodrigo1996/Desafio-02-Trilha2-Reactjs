import styled, { css } from 'styled-components'

interface QuantityInputContainerProps {
  size?: 'medium' | 'small'
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${(props) => props.theme['gray-400']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 6px;

  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme['gray-900']};

    &:focus {
      outline: none;
    }
  }

  ${(props) =>
    props.size === 'medium' &&
    css`
      padding: 0.5rem;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme['purple-500']};
  transition: 0.1s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-700']};
  }
`
