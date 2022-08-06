import styled from 'styled-components'

export const ItemsContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    span {
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

const TYPECOLORS = {
  yellow_dark: 'yellow-700',
  yellow_light: 'yellow-500',
  gray: 'gray-700',
  purple_light: 'purple-500',
} as const

interface TypeColors {
  typesColors: keyof typeof TYPECOLORS
}

export const IconContainer = styled.div<TypeColors>`
  background-color: ${(props) => props.theme[TYPECOLORS[props.typesColors]]};

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`
