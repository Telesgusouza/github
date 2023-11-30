import { useState } from "react";
// import { useSelector } from "react-redux";
// import actionsType from "../../api/redux/actionsType";

import * as Styled from "./style";
import bgImage from "../../assets/hero-image-github-profile.png";
import imgSearch from "../../assets/Search.svg";
import imgSpinner from "../../assets/spinner.svg";
// import { IRootReducer } from "../../api/interface";

export default function Search() {
  const [input, setInput] = useState<string>("");

  const [listToggle] = useState<boolean>(false);
  const [loading] = useState<boolean>(false);

  // const { listRepo } = useSelector(
  //   (rootReducer: IRootReducer) => rootReducer.useListRepo
  // );

  // console.log(listRepo)

  return (
    <Styled.Container bgImage={bgImage}>
      <Styled.ContainerContent>
        <Styled.Serch>
          <img src={imgSearch} alt="" />
          <input
            type="text"
            placeholder="Nome do usuário"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Styled.Serch>

        {listToggle && (
          <Styled.MenuDropDown>
            <Styled.projectOptions>
              <li>
                <img src={bgImage} alt="avatar user" />
                <div>
                  <strong>
                    GitHub Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Optio odio dignissimos minus rerum perferendis
                    consequuntur harum beatae tempore odit velit nemo, rem, quae
                    reprehenderit quidem quasi itaque. Esse, id dolores!{" "}
                  </strong>
                  <p>
                    How people build software Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Officia quas doloremque non
                    modi, corrupti, porro voluptate possimus ea repellat omnis
                    totam recusandae. Magni, dignissimos fugiat modi odio iure
                    impedit voluptas.
                  </p>
                </div>
              </li>

              <li>
                <img src={bgImage} alt="avatar user" />
                <div>
                  <strong>
                    GitHub Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Optio odio dignissimos minus rerum perferendis
                    consequuntur harum beatae tempore odit velit nemo, rem, quae
                    reprehenderit quidem quasi itaque. Esse, id dolores!{" "}
                  </strong>
                  <p>
                    How people build software Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Officia quas doloremque non
                    modi, corrupti, porro voluptate possimus ea repellat omnis
                    totam recusandae. Magni, dignissimos fugiat modi odio iure
                    impedit voluptas.
                  </p>
                </div>
              </li>

              <li>
                <img src={bgImage} alt="avatar user" />
                <div>
                  <strong>
                    GitHub Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Optio odio dignissimos minus rerum perferendis
                    consequuntur harum beatae tempore odit velit nemo, rem, quae
                    reprehenderit quidem quasi itaque. Esse, id dolores!{" "}
                  </strong>
                  <p>
                    How people build software Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Officia quas doloremque non
                    modi, corrupti, porro voluptate possimus ea repellat omnis
                    totam recusandae. Magni, dignissimos fugiat modi odio iure
                    impedit voluptas.
                  </p>
                </div>
              </li>
            </Styled.projectOptions>

            {loading && <Styled.ImgSpinner src={imgSpinner} alt="loading" />}
          </Styled.MenuDropDown>
        )}
      </Styled.ContainerContent>
    </Styled.Container>
  );
}
