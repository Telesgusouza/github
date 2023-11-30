import { useState } from "react";
import * as Styled from "./style";

import imgChield from "../../assets/Chield_alt.svg";
import imgNesting from "../../assets/Nesting.svg";
import imgStar from "../../assets/Star.svg";

export default function RepositoryList() {
  const [loading] = useState<boolean>(false);

  return (
    <Styled.Container className="box">
      {loading ? (
        <>
          <Styled.Loading className="loading" />
          <Styled.Loading className="loading" />
          <Styled.Loading className="loading" />
          <Styled.Loading className="loading" />
        </>
      ) : (
        <>
          <article>
            <h2>.github</h2>
            <p>Community health files for the @GitHub organization. </p>

            <Styled.InfoRepository>
              <div>
                <img src={imgChield} alt="logo" />
                <strong>MIT</strong>
              </div>

              <div>
                <img src={imgNesting} alt="log" />
                <strong>2,369</strong>
              </div>

              <div>
                <img src={imgStar} alt="logo" />
                <strong>50</strong>
              </div>

              <p>Updated 4 days ago</p>
            </Styled.InfoRepository>
          </article>

          <article>
            <h2>.github</h2>
            <p>
              Community health files for the @GitHub organization. Lorem ipsum
              dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quos, veniam?
            </p>

            <Styled.InfoRepository>
              <div>
                <img src={imgChield} alt="logo" />
                <strong>MIT</strong>
              </div>

              <div>
                <img src={imgNesting} alt="log" />
                <strong>2,369</strong>
              </div>

              <div>
                <img src={imgStar} alt="logo" />
                <strong>50</strong>
              </div>

              <p>Updated 4 days ago</p>
            </Styled.InfoRepository>
          </article>

          <article>
            <h2>.github</h2>
            <p>Community health files for the @GitHub organization. </p>

            <Styled.InfoRepository>
              <div>
                <img src={imgChield} alt="logo" />
                <strong>MIT</strong>
              </div>

              <div>
                <img src={imgNesting} alt="log" />
                <strong>2,369</strong>
              </div>

              <div>
                <img src={imgStar} alt="logo" />
                <strong>50</strong>
              </div>

              <p>Updated 4 days ago</p>
            </Styled.InfoRepository>
          </article>

          <article>
            <h2>.github</h2>
            <p>Community health files for the @GitHub organization. </p>

            <Styled.InfoRepository>
              <div>
                <img src={imgChield} alt="logo" />
                <strong>MIT</strong>
              </div>

              <div>
                <img src={imgNesting} alt="log" />
                <strong>2,369</strong>
              </div>

              <div>
                <img src={imgStar} alt="logo" />
                <strong>50</strong>
              </div>

              <p>Updated 4 days ago</p>
            </Styled.InfoRepository>
          </article>
        </>
      )}
    </Styled.Container>
  );
}
