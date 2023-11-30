import { useState } from "react";
import * as Styled from "./style";

import imgTest from "../../assets/hero-image-github-profile.png";

export default function InfoUser() {
  const [loading] = useState<boolean>(false);
  const [option, setOption] = useState<[string, number | string]>(["all", 0]);

  function handleOption(title: string, description: string | number) {
    setOption([title, description]);
  }

  return (
    <Styled.Container className="box">
      {loading ? (
        <>
          <Styled.LoadingPhoto className="loading" />
        </>
      ) : (
        <>
          <img src={imgTest} alt="avatar" />
        </>
      )}

      {option[0] === "all" ? (
        <ul>
          <li onClick={() => handleOption("Followers", 27839)}>
            <p>Followers</p>
            <strong>27839</strong>
          </li>

          <li onClick={() => handleOption("Following", 0)}>
            <p>Following</p>
            <strong>0</strong>
          </li>

          <li onClick={() => handleOption("location", "San Francisco, CA")}>
            <p>location</p>
            <strong>San Francisco, CA</strong>
          </li>
        </ul>
      ) : (
        <ul>
          <li onClick={() => handleOption("all", 0)}>
            <p>{option[0]}</p>
            <strong>{option[1]}</strong>
          </li>
        </ul>
      )}
    </Styled.Container>
  );
}
