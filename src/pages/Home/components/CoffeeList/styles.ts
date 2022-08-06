import styled from 'styled-components'

export const CoffeListContainer = styled.div`
  max-width: 74rem;
  width: 100%;
  margin: 2rem auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.375rem;

    h2 {
      font-family: 'Baloo 2', cursive;
      font-size: 2rem;
      color: ${(props) => props.theme['gray-800']};
    }
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem 2rem;
  }
`
