import { useState } from "react";
import * as Styled from "./style";

import imgNoUser from "../../assets/noUser.webp";
import { useSelector } from "react-redux";
import { RootReducer } from "../../api/redux/store";

export default function InfoUser() {
  const [loading] = useState<boolean>(false);
  const [option, setOption] = useState<[string, number | string]>(["all", 0]);

  const { dataUser } = useSelector(
    (rootReducer: RootReducer) => rootReducer.useListRepo
  );


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

        {dataUser.avatar ? (
            <img src={`${dataUser.avatar}`} alt="avatar" />
          ) : (
            <>
              <img src={imgNoUser} alt="avatar" />
            </>
          )}
          
        </>
      )}

      {option[0] === "all" ? (
        <ul>
          <li onClick={() => handleOption("Followers", dataUser.followers)}>
            <p>Followers</p>
            <strong>{dataUser.followers}</strong>
          </li>

          <li onClick={() => handleOption("Following", dataUser.followers)}>
            <p>Following</p>
            <strong>{dataUser.followers}</strong>
          </li>

          <li onClick={() => handleOption("location", dataUser.location)}>
            <p>location</p>
            <strong>{dataUser.location}</strong>
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
