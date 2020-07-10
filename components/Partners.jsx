import styled from "styled-components";
import Title from "./Title";
import Siema from "siema";

if (typeof document !== "undefined") {
  const mySiema = new Siema({ perPage: 4 });

  document
    .querySelector(".prev")
    .addEventListener("click", () => mySiema.prev());
  document
    .querySelector(".next")
    .addEventListener("click", () => mySiema.prev());
}

const Partners = () => {
  return (
    <Component>
      <Title
        shadow="SADARBĪBAS PARTNERI"
        text="SADARBĪBAS PARTNERI"
        title="Ar ko mēs sadarbojamies"
      />

      <div class="siema">
        <div>
          <img src="/first.jpg" alt="" />
        </div>
        <div>
          <img src="/second.jpg" alt="" />
        </div>
        <div>
          <img src="/third.jpg" alt="" />
        </div>
        <div>
          <img src="/fourth.jpg" alt="" />
        </div>
        <div>
          <img src="/fifth.jpg" alt="" />
        </div>
      </div>
      <button className="prev">This is PREV button</button>
      <button className="next">Thsis is NEXT button</button>
    </Component>
  );
};

export default Partners;

const Component = styled.section`
  background-color: #f7f7f7;
  padding: 30px;
`;
