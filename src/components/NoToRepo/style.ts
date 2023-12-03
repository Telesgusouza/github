import styled from "styled-components";

export const Container = styled.main`
  padding: 40px 20px;
  height: calc(100vh - 240px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 30px;
  }

  strong {
    margin-bottom: 5px;
    color: white;
    font-weight: 400;
    font-size: 1.5rem;
  }

  p {
    color: white;
    font-weight: 400;
    font-size: 1rem;
  }
`;
