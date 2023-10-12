import { useRef } from "react";
import Link from "next/link";
export default function ImplementationPage() {
  const wideTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/implementation.png";
  const narrowTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/titlescreensphone/implementationphone.png";
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
          <div style={{ position: "sticky", top: "200px" }} class="column">
            <h2 style={{ marginBottom: "20px" }}>Implementation</h2>
            <button
              class="contentsButton"
              onClick={() => handleClick("header1")}
            >
              Improving Plant Yields
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header2")}
            >
              Health Supplements
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header3")}
            >
              References
            </button>
          </div>

          {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
          {/* ====================CODE FOR TEXT STARTS=============================== */}
        </div>
        <div style={{ paddingTop: "60px" }} class="text">
          <h1 id="header1">Improving Plant Yields</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The improved stress response of this
            modification against drought has the potential to significantly
            enhance crop resilience in regions with limited access to water and
            low rainfall. This is highly relevant to Thailand, where droughts
            are a common occurrence and crops that are vulnerable to droughts
            such as rice and durians are major agricultural exports. Rice
            heavily relies on an abundance of water within their rice paddies
            and durians take years to grow and thus cost years of resources when
            damaged. The Thailand-RIS team surveyed farmers and farm owners in
            the agricultural province of Chanthaburi, Thailand. 35% of
            Chanthaburi farmers cited drought as the single most pressing issue
            against crop yields and overall health. 52% of farmers believed that
            stress-tolerant crops would produce &apos;&apos;several
            benefits&apos;&apos; for their farms. In open-response questions,
            the vast majority of farmers wrote that they would be willing to use
            genetically modified crops despite a preference for organic
            practices; with reluctant farmers stating a lack of time and the
            small scale of their farms as reasons for hesitance. The governor of
            Chanthaburi reflected this concern with droughts. As most
            Chanthaburi farmers grow durians, a crop that takes 5-7 years to
            reach full maturity, any negative effects of environmental stress
            can be a massively detrimental setback for farmers. This project
            demonstrated a 48-hour delay in the drought stress response in{" "}
            <i>N. benthamiana</i>, these additional hours can be theoretically
            applied to other plants. 48 hours could be the difference between
            flourishing crop yields or none at all, as it allows more time for
            farmers to collect water and resources to aid their plants during
            times of drought. With further research into this modification and
            its effects on both human consumers and other plants in agricultural
            settings, the modification of GCL with mitochondrial transit
            peptides has promising prospects in the realm of agriculture in
            Thailand and arid regions around the world.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/implementation/wlfigurecombine.png"
          />
          <h5>
            Durian farm visited during Human Practices trip with the team.
          </h5>

          <h1 id="header2">Health Supplements</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The results of this lab could be further
            advanced into the health industry in order to create supplement
            &gamma;-EC products without relying on the current preferred process
            of fermentation: a process that inhibits the production of
            intracellular products and poses difficulty in separation and
            purification. &gamma;-EC, aside from being a combatant of ROS in
            plants and a precursor of GCL, has researched benefits for
            protecting the brain from stroke damage by reducing the chances of
            cerebral infarction<sup>[1]</sup>. &gamma;-EC could thus potentially
            be produced as supplements and sold in the health industry.
            Fermentation and plant extraction are methods of extracting
            substances for use in products such as supplements. Plant extraction
            is a process generally not utilized in the health and beauty
            industries due to low yields compared to fermentation. As this
            project demonstrated higher levels of &gamma;-EC, health companies
            could potentially use genetically modified plants to extract
            &gamma;-EC in higher quantities. This could eliminate the need for
            fermentation of &gamma;-EC, which is a complicated and difficult
            process. Additionally, the appeal of
            &apos;&apos;organically&apos;&apos; sourced &gamma;-EC is largely
            appealing to health enthusiasts.
          </p>
          <h2 id="header3">References</h2>
          <ol class="references">
            <li>
              Zhang, R., Lei, J., Chen, L., et al. &gamma;-Glutamylcysteine
              exerts neuroprotection effects against cerebral
              ischemia/reperfusion injury through inhibiting lipid peroxidation
              and ferroptosis. Antioxidants. 2022;11(9):1653.
              doi:10.3390/antiox11091653
            </li>
          </ol>
          <div class="yBox100" />
        </div>
      </div>
    </div>
  );
}
