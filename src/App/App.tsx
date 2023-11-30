import { Provider } from "react-redux"

import InfoUser from "../components/InfoUser"
import RepositoryList from "../components/RepositoryList"
import Search from "../components/Search"
import Title from "../components/Title"
import ViewRepositories from "../components/ViewRepositories"

import store from "../api/redux/store"

function App() {

  return (
    <Provider store={store} >
     <Search />
     <InfoUser />
     <Title />
     <RepositoryList />
     <ViewRepositories />
    </Provider>
  )
}

export default App
