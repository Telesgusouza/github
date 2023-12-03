import { RootReducer } from "../../api/redux/store";
import * as Styled from "./style";

import { useSelector } from "react-redux";

export default function Title() {
  const { dataUser } = useSelector(
    (rootReducer: RootReducer) => rootReducer.useListRepo
  );


  return (
    <Styled.Container className="box">
      <h1>{dataUser.title}</h1>
      <p>{dataUser.description}</p>
    </Styled.Container>
  );
}
