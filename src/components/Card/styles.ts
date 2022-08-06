import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px 6px 36px;

  padding: 0 1.25rem 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  img {
    width: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin: 1rem 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
  }
`

export const Title = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Baloo 2', cursive;
`

export const Description = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-600']};
  margin-bottom: 2rem;
`

export const CardFooter = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.125rem;

    p {
      line-height: 0.75rem;
      font-size: 0.875rem;
    }

    strong {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme['gray-200']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: background-color 0.1s;

    &:hover {
      background: ${(props) => props.theme['purple-500']};
    }
  }
`
