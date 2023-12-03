import styled from "styled-components";

export const ViewRepositories = styled.footer`
padding: 46px 20px 80px 20px;
  text-align: center;

  strong {
    font-size: 1rem;
    font-weight: 400;
    color: #cdd5e0;

    position: relative;
    transition: all 0.2s ease;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -5px;
      height: 2px;
      width: 0%;

      background-color: #CDD5E0;

      transition: all 0.2s ease;
    }

    &:hover::after {
      left: -8px;
      width: calc(100% + 16px);
    }
  }
`