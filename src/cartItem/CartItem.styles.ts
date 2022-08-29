import style from 'styled-components';

export const Wrapper = style.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  margin: 10px 0;
  max-width: 100%;

  div {
    flex: 1;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 150px;
    object-fit: cover;
    margin-left: 40px;
  }

`;

export const StyledButton = style.div`
`;
