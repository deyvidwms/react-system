import styled from 'styled-components';

type inputError = {
  error: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    margin-bottom: 5px;

    span {
      color: #FF0000;
    }
  }

  input {
    padding: 15px 10px;
    border: 1px solid ${(props: inputError) => ( props.error ? '#F00' : '#CCC')};
    border-radius: 3px;
    font-size: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    margin-top: 5px;
    color: #FF0000;
  }
`;