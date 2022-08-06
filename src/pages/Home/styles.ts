import styled from 'styled-components'
import backgroundImg from '../../assets/background.svg'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const HomeContent = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 5.75rem 0;

  > div {
    max-width: 74rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    section {
      h2 {
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        line-height: 1.3;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.25rem;
        line-height: 1.3;
        margin-bottom: 4.125rem;
        color: ${(props) => props.theme['gray-800']};
      }
    }
  }
`

export const ItemsContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  justify-items: flex-start;

  gap: 0.5rem;
`
