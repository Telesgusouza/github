import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: flex-end;

  position: relative;
  top: -47px;

  img {
    width: 128px;
    height: 128px;

    margin-right: 10px;

    background-color: #efefef;

    border: 8px solid var(--lightGray);
    border-radius: 15px;
    object-fit: cover;
  }

  ul {
    width: 100%;
    max-width: calc(100% - 128px);

    display: flex;

    padding: 12px;

    white-space: nowrap;
  }

  li {
    width: fit-content;

    height: fit-content;
    padding: 10px 0px;
    margin-left: 20px;

    display: flex;

    border-radius: 10px;

    background-color: var(--darkGray);

    overflow: hidden;
    white-space: nowrap;

    cursor: pointer;
    position: relative;
  }

  p {
    padding: 7px 22px;
    color: var(--veryiLightGray);
  }

  strong {
    width: 100%;
    padding: 7px 22px;
    border-left: 1px solid var(--veryiLightGray);

    font-size: 1rem;
    font-weight: 400;
    color: white;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 780px) {
    align-items: flex-start;
    top: 0;

    img {
      position: relative;
      top: -47px;
    }

    ul {
      flex-direction: column;
    }

    li {
      max-width: 100%;

      overflow: visible;
      margin-left: 0;
      padding-left: 0;
      margin-top: 15px;

      &:nth-child(1) {
        margin-top: 0px;
      }
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;

    ul {
      margin-top: -50px;
      max-width: 100%;
      padding: 6px;
    }
  }
`;

export const LoadingPhoto = styled.div`
  height: 128px;
  width: 128px;

  border: 8px solid var(--lightGray);
  border-radius: 10px;
`;
