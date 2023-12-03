import * as Styled from "./style";
import imgSad from "../../assets/sadEmoji.png";

export default function NoToRepo() {
  return (
    <Styled.Container className="box">
      <img src={imgSad} alt="icon sad" />
      <strong> No to repositories </strong>
      <p>There are no repositories at the moment, do a search and find more.</p>
    </Styled.Container>
  );
}
