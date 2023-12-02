import styled from "styled-components";

export const Container = styled.header<{ bgImage: string }>`
  min-height: 100%;
  height: 240px;
  padding-top: 40px;
  padding: 40px 20px 0 20px;

  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const Search = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  position: relative;

  display: flex;
  align-items: center;

  position: relative;

  input {
    width: 100%;
    height: 100%;
    padding: 18px 20px 18px 50px;

    border: 2px solid transparent;
    border-radius: 10px;
    outline: 0;

    background-color: var(--lightGray);
    color: white;

    transition: border 0.12s ease;

    &:focus {
      border-color: var(--darkBlue);
    }
  }

  button {
    cursor: pointer;
    position: absolute;
    left: 13px;

    background-color: transparent;
    border: none;
  }
`;

export const ImgSpinner = styled.img`
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  margin: 0 auto;
  width: 25px;
  animation: loading 2s linear infinite;
`;

export const MenuDropDown = styled.menu`
  width: 100%;
  padding: 8px;
  border-radius: 10px;

  position: absolute;
  top: calc(100% + 12px);
  z-index: 99;

  display: flex;
  flex-direction: column;

  background-color: var(--gray);
`;

export const projectOptions = styled.ul`
  li {
    display: flex;
    color: white;

    margin-top: 18px;

    cursor: pointer;

    &:nth-child(1) {
      margin-top: 0;
    }
  }

  img {
    width: 80px;
    height: 80px;
    margin-right: 12px;

    border-radius: 10px;
    object-fit: cover;
  }

  div {
    width: 100%;

    max-width: calc(100% - 80px - 12px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  strong {
    width: 100%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 400;
    font-size: 1.25rem;
    margin-bottom: 7px;
  }

  p {
    max-height: 47px;

    font-weight: 400;
    font-size: 0.75rem;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
