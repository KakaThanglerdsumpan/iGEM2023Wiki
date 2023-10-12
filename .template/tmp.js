import { useRef } from "react";

export default function App() {
  const wideTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/labtitletext.png";
  const narrowTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/labtitletext.png";
  const handleClick = (elID) => {
    const element = document.getElementById(elID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <img
        class="wideTitleScreen"
        style={{ width: "100%", marginBottom: "-4px" }}
        src={wideTitleScreenUrl}
      />
      {/* <img class="narrowTitleScreen" style={{width: "100%", marginBottom: "-4px"}} src={narrowTitleScreenUrl}/> */}
      <div class="row">
        <div class="contentsBar">
          <div style={{ position: "sticky", top: "100px" }} class="column">
            <h1 style={{ marginBottom: "20px" }}>Contents</h1>
            <button
              class="contentsButton"
              onClick={() => handleClick("header1")}
            >
              Header1
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header2")}
            >
              Header2
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header3")}
            >
              Header3
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header4")}
            >
              Header4
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header5")}
            >
              Header5
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header6")}
            >
              Header6
            </button>
          </div>
        </div>
        <div style={{ paddingTop: "60px" }} class="text">
          <h1 id="header1">header1</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;In total, two plasmids were used in the
            project: one is the <i>mDzGCL</i> in pCAMBIA1301 to infiltrate
            plants with the <i>mDzGCL</i> gene designed by the team and the
            other is the <i>GFP</i> in pCAMBIA1301 as a positive control
          </p>
          <h1 id="header2">header2</h1>
          <h1 id="header3">header3</h1>
          <h1 id="header4">header4</h1>
          <h1 id="header5">header5</h1>
          <h1 id="header6">header6</h1>
        </div>
      </div>
    </div>
  );
}
