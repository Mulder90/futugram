import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.01);
  border: 2px solid white;
  padding: 20px;
  font-weight: 600;
  width: 400px;
  margin: 0 auto;

  label {
    display: block;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    text-align: left;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.6rem;
    font-size: 1.2rem;
    border: 1px solid ${props => props.theme.black};
    border-radius: 4px;
    text-align: center;
    margin-top: 1rem;

    &:focus {
      outline: 0;
      border-color: ${props => props.theme.green};
    }
  }

  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.green};
    color: white;
    border: 1px solid white;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.8rem 1.2rem;
    margin-top: 2rem;
    border-radius: 4px;
    cursor: pointer;
  }

  button:disabled {
    background: ${props => props.theme.grey};
    cursor: default;
  }

  fieldset {
    border: 0;
    padding: 0;
    text-align: center;

    &[disabled] {
      opacity: 0.5;
    }

    &::before {
      height: 5px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #2ecc71 0%,
        #53f698 50%,
        #2ecc71 100%
      );
    }

    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
