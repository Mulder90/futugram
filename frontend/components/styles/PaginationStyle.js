import styled from 'styled-components';

const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  font-weight: 600;

  p {
    margin: 0 1rem;
  }

  a {
    color: ${props => props.theme.green};
  }

  a[aria-disabled='true'] {
    color: ${props => props.theme.grey};
    pointer-events: none;
  }
`;

export default PaginationStyle;
