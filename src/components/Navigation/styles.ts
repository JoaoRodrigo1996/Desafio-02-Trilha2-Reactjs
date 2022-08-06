import styled from 'styled-components'

export const NavContent = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    li {
      list-style: none;
      padding: 0.3rem 0.75rem;
      background: transparent;

      border: 1px solid ${(props) => props.theme['yellow-500']};
      border-radius: 100px;

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: ${(props) => props.theme['yellow-700']};
        font-size: 0.625rem;
        font-weight: bold;
      }
    }
  }
`
