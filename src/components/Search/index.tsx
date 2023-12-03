import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import * as Styled from "./style";

import bgImage from "../../assets/hero-image-github-profile.png";
import imgSearch from "../../assets/Search.svg";
import imgClosed from "../../assets/closed.svg";
import imgSpinner from "../../assets/spinner.svg";

import { toast } from "react-toastify";
import { IRepo, IRepoApi } from "../../api/interface";
import { dataUser, listData } from "../../api/redux/useListRepo/reducer";

export default function Search() {
  const [input, setInput] = useState<string>("");

  const [listOptionRepo, setListOptionRepo] = useState<{
    avatar: string;
    followers: number;
    following: number;
    location: string;

    title: string;
    description: string;
  } | null>(null);

  const [listToggle, setListToggle] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (input.trim().length > 0) {
      setListToggle(true);
      setLoading(true);

      axios
        .get(`https://api.github.com/users/${input}`)
        .then((repo) => {
          const data = {
            avatar: repo.data.avatar_url,

            followers: repo.data.followers,
            following: repo.data.following,
            location: repo.data.location,

            title: repo.data.name,
            description: repo.data.bio,
          };

          setListOptionRepo(data);

          dispatch(dataUser(data));
        })
        .catch((err) => {
          console.error("Error > " + err);
          setListToggle(false);
          setLoading(false);

          toast.error("não foi possivel encontrar usuário");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toast.error("Preencha o campo hummmm");
    }
  }

  async function handleSelectUser() {
    if (input.trim().length > 0) {
      axios
        .get(`https://api.github.com/users/${input}/repos`)
        .then((resp) => {
          const listRepo: IRepo[] = [];

          resp.data.forEach((repo: IRepoApi) => {

            const date = new Date(repo.updated_at);

            const ano = date.getFullYear();
            const mes = String(date.getMonth() + 1).padStart(2, "0");
            const dia = String(date.getDate()).padStart(2, "0");

            const dateFormatada = `${ano}/${mes}/${dia}`;

            const data = {
              id: repo.id,
              title: repo.name,
              description: repo.description,
              license: repo.license,
              issues: repo.open_issues,
              likes: repo.stargazers_count > 0 ? repo.stargazers_count : 0,
              update: dateFormatada,
            };

            listRepo.push(data);
          });
          dispatch(listData(listRepo));
          setListToggle(false);
        })
        .catch((err) => {
          console.error("Error > " + err);
          toast.error("Erro ao trazer supositórios de usuario");
        });
    } else {
      toast.error("Preencha o campo");
    }
  }

  function handleClose() {
    setInput("");
    setListToggle(false);
  }

  return (
    <Styled.Container bgImage={bgImage}>
      <Styled.ContainerContent>
        <Styled.Search onSubmit={handleSearch}>
          {listToggle && (
            <button type="button" onClick={handleClose}>
              <img src={imgClosed} alt="" />
            </button>
          )}

          {!listToggle && (
            <button type="submit">
              <img src={imgSearch} alt="" />
            </button>
          )}

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
              {listOptionRepo !== null && (
                <li onClick={handleSelectUser}>
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
