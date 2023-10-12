import Script from "next/script";

function Attributions({ children }) {
  const wideTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/attributions.png";

  return (
    <div>
      <img
        class="wideTitleScreen"
        style={{ width: "100%", marginBottom: "-4px" }}
        src={wideTitleScreenUrl}
      />
      <div class="yBox60"></div>
      <iframe
        class="attForm"
        id="igem-attribution-form"
        src="https://attributions.igem.org?team=Thailand-RIS&year=2023"
        onLoad={() => {
          const frame = document.getElementById("igem-attribution-form");
          // Adjusting the iframe height onload event
          frame.onload = function () {
            frame.style.height =
              frame.contentWindow.document.body.scrollHeight + "px";
          };
        }}
      ></iframe>

      <Script></Script>
    </div>
  );
}
export default Attributions;
