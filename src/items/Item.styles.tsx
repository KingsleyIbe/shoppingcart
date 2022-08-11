import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: 'Roboto', sans-serif;
    padding: 1rem;
    height: 100%;
  }

`;