import styled from "styled-components";

export const Container = styled.section`
  margin-top: 34px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  color: #cdd5e0;

  article {

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px;
    border-radius: 10px;
    background-image: linear-gradient(
      to right,
      var(--darkGray),
      var(--darkPurple)
    );
  }

  h2 {
    width: 100%;
    margin-bottom: 12px;

    font-size: 1.25rem;
    font-weight: 400;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const Loading = styled.div`
  height: 170px;
  border-radius: 10px;
`;

export const InfoRepository = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: center;

  cursor: default;

  div {
    margin-left: 12px;

    display: flex;
    align-items: center;

    &:nth-child(1) {
      margin-left: 0;
    }
  }

  img {
    margin-right: 4px;
  }

  strong {
    font-size: 0.9rem;
    font-weight: 400;
    color: #cdd5e0;
  }

  p {
    margin: auto 0;
    margin-left: 24px;

    font-size: 0.75rem;
  }

  @media (max-width: 470px) {
    display: grid;
    grid-template-columns: 1fr;

    grid-gap: 10px;

    div, p {
      margin: 0;
    }

    p {
      margin-top: 8px;
    }
  }
`;
