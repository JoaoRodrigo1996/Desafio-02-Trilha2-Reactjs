import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  background: ${(props) => props.theme['gray-100']};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  font-size: 0.875rem;

  ${({ variant }) => css`
    background: ${(props) => props.theme[`${variant}-300`]};
    color: ${(props) => props.theme[`${variant}-700`]};
    span {
      background: ${(props) => props.theme[`${variant}-700`]};
    }
  `}

  ${({ variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${(props) => props.theme[`${variant}-500`]};
      }
    `}
`
