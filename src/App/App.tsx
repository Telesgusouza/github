import InfoUser from "../components/InfoUser";
import RepositoryList from "../components/RepositoryList";
import Search from "../components/Search";
import Title from "../components/Title";
import ViewRepositories from "../components/ViewRepositories";

function App() {
  return (
    <>
        <Search />
        <InfoUser />
        <Title />
        <RepositoryList />
        <ViewRepositories />
      {/* </Provider> */}
    </>
  );
}

export default App;
