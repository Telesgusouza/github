import { useSelector } from "react-redux";

import * as Styled from "./style";

import InfoUser from "../components/InfoUser";
import RepositoryList from "../components/RepositoryList";
import Search from "../components/Search";
import Title from "../components/Title";

import { RootReducer } from "../api/redux/store";
import NoToRepo from "../components/NoToRepo";
import { useEffect, useState } from "react";
import { IRepo } from "../api/interface";

function App() {
  const [listRepo, setListRepo] = useState<IRepo[]>([]);
  const [allRepo, setAllRepo] = useState<boolean>(false);
  const { listData } = useSelector(
    (rootReducer: RootReducer) => rootReducer.useListRepo
  );

  useEffect(() => {
    if (!allRepo) {
      setListRepo(listData.slice(0, 3));
    } else {
      setListRepo(listData);
    }
  }, [listData, allRepo]);

  // console.log(listData);

  return (
    <>
      <Search />

      {listRepo.length > 0 ? (
        <>
          <InfoUser />
          <Title />
          <RepositoryList listRepo={listRepo} />

          <Styled.ViewRepositories>
            {allRepo ? (
              <>
                <strong onClick={() => setAllRepo(false)}>
                  see fewer repositories
                </strong>
              </>
            ) : (
              <>
                <strong onClick={() => setAllRepo(true)}>
                  View all repositories
                </strong>
              </>
            )}
          </Styled.ViewRepositories>
        </>
      ) : (
        <>
          <NoToRepo />
        </>
      )}
    </>
  );
}

export default App;
