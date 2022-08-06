import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['gray-800']};
  }
  span {
    font-size: 0.875rem;
  }
`
