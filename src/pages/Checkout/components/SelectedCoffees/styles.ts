import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Baloo 2', cursive;
  }
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
    }
  }
`

export const Total = styled.div`
  font-weight: 700;
  color: ${(props) => props.theme['gray-800']};
  font-size: 1.25rem;
`
