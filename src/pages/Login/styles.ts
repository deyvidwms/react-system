import styled from 'styled-components';

type Props = {
  backgroundImage: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #0abf5575, rgb(0 0 0 / 50%) ), url(${(props: Props) => ( props.backgroundImage )});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardLogin = styled.div`
  width: 500px;
  padding: 30px 60px 40px;
  border-radius: 6px;
  background-color: #FFF;

  box-shadow: 0 0 10px 5px rgb(0 0 0 / 50%);
`;

export const CardLoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  hr {
    border: none;
    background-color: #000;
    width: 100px;
    height: 3px;
  }
`;

export const LoginButton = styled.div`
  display: flex;

  button {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 900;
    color: #FFF;
    text-transform: uppercase;

    width: 100%;
    padding: 12px;
    
    background-color: #0abf55;
    border: none;
    border-radius: 3px;

    transition: all ease 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const OtherLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    p {
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
  
      padding: 10px;
      background-color: #FFF;
      z-index: 1;
    }

    hr {
      background-color: #000;
      border: none;
      width: 200px;
      height: 2px;
      transform: translateY(-20px);
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: #fff;

    margin-bottom: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 0 10px rgb(127 127 127 / 50%);

    transition: all ease 0.3s;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      opacity: 0.95;
    }

    svg {
      margin-right: 5px;
      fill: #fff;
    }

    &:first-child {
      background-color: #df4936;
    }

    &:nth-child(2) {
      background-color: #3b5998;
    }

    &:last-child {
      background-color: #00acee;
    }
  
  }

`;