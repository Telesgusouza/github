import { useState } from "react";
// import { useSelector } from "react-redux";
import axios from "axios";

import * as Styled from "./style";
import bgImage from "../../assets/hero-image-github-profile.png";
import imgSearch from "../../assets/Search.svg";
import imgSpinner from "../../assets/spinner.svg";
// import { RootReducer } from "../../api/redux/store";

export default function Search() {
  const [input, setInput] = useState<string>("");

  const [listOptionRepo, setListOptionRepo] = useState<{
    avatar: string;

    title: string;
    description: string;
  } | null>(null);

  const [listToggle, setListToggle] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const { listRepo } = useSelector(
  //   (rootReducer: RootReducer) => rootReducer.useListRepo
  // );

  // console.log(listRepo);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (input.trim().length > 0) {
      setListToggle(true);
      setLoading(true);

      axios
        .get(`https://api.github.com/users/${input}`)
        .then((repo) => {
          setListOptionRepo({
            avatar: repo.data.avatar_url,

            title: repo.data.name,
            description: repo.data.bio,
          });
        })
        .catch((err) => {
          console.error("Error > " + err);
          setListToggle(false);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <Styled.Container bgImage={bgImage}>
      <Styled.ContainerContent>
        <Styled.Search onSubmit={handleSearch}>
          <button type="submit">
            <img src={imgSearch} alt="" />
          </button>
          <input
            type="text"
            placeholder="Nome do usuário"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </Styled.Search>

        {listToggle && (
          <Styled.MenuDropDown>
            <Styled.projectOptions>
              {/* {listOptionRepo &&} */}
              {listOptionRepo !== null && (
                <li>
                  <img src={listOptionRepo.avatar} alt="avatar user" />
                  <div>
                    <strong>{listOptionRepo.title}</strong>
                    <p> {listOptionRepo.description}</p>
                  </div>
                </li>
              )}
            </Styled.projectOptions>

            {loading && <Styled.ImgSpinner src={imgSpinner} alt="loading" />}
          </Styled.MenuDropDown>
        )}
      </Styled.ContainerContent>
    </Styled.Container>
  );
}
