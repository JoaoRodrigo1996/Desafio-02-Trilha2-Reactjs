import styled, { css } from 'styled-components'

export const PaymentMethodInputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${() => css`
      background: ${(props) => props.theme['purple-300']};
      border-color: ${(props) => props.theme['purple-500']};

      &:hover {
        background: ${(props) => props.theme['purple-300']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  user-select: none;
  padding: 0 1rem;
  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-700']};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  transition: background-color 0.1s;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
`
