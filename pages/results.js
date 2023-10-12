import { useRef } from "react";
import Link from "next/link";
export default function Resulsts() {
  const wideTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/results.png";
  const narrowTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/titlescreensphone/resultsphone.png";
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
            <h2 style={{ marginBottom: "20px" }}>Results &amp; Evaluation</h2>
            <button
              class="contentsButton"
              onClick={() => handleClick("header1")}
            >
              Data Collection and Analysis
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header2")}
            >
              Conclusion
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header3")}
            >
              Evaluation
            </button>
          </div>

          {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
          {/* ====================CODE FOR TEXT STARTS=============================== */}
        </div>
        <div style={{ paddingTop: "60px" }} class="text">
          <h1 id="header1">Data Collection &amp; Analysis</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;To understand the role of <i>mDzGCL</i> on
            &gamma;-EC production, the transient overexpression of this gene on{" "}
            <i>N. benthamiana</i> leaves was done. &gamma;-EC content
            significantly increased by 1.6 times compared to the control group
            (Fig. 1). This result indicates that <i>mDzGCL</i> plays a role in
            &gamma;-EC synthesis. Even though <i>DzGCL</i> was modified to be
            localized and overexpressed in the mitochondria, its function is
            still the same, which is to regulate the amount of &gamma;-EC in the
            cell. The pathway of <i>mDzGCL</i> is only shortened in this project
            but still adheres to the same function.
          </p>
          <img
            class="figureTooBig"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresults1.png"
          />
          <h5>
            <b>Figure 1.</b> &gamma;-EC contents of <i>N. benthamiana</i> leaves
            that have been agro-infiltrated with <i>mDzGCL</i> in comparison to
            the control group (<i>GFP</i>). An asterisk above the bar indicates
            a significant difference between samples (Student&apos;s t-test, *:
            *p &lt; 0.05).
          </h5>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Raw data can be accessed here:{" "}
            <Link
              style={{ color: `blue` }}
              href="https://docs.google.com/spreadsheets/d/10UWD99fy47-lZu7ncog8mrPBZf4zWcpMTGlh7U0pQS0/edit#gid=1186347869"
            >
              <u>iGEM Raw Data</u>
            </Link>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;To confirm the function of <i>mDzGCL</i> on
            stress response, the transiently overexpressed of <i>mDzGCL</i> and
            control <i>N. benthamiana</i> were treated under normal, drought,
            heat, and saline conditions. Then, phenotype changes of wilting,
            color, leaf morphology, spots or general deformities, and relative
            growth rate were observed.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresults2new.png"
          />
          <h5>
            <b>Figure 2.</b> <i>N. benthamiana</i> leaves before and after
            agroinfiltration with <i>mDzGCL</i> under normal conditions. The
            leaves with tags represent the infiltrated leaves. All the{" "}
            <i>N. benthamiana</i> pictures can be accessed through the google
            sheets above.
          </h5>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Figure 2 demonstrated that the
            overexpression of <i>mDzGCL</i> did not affect the growth of any
            plants, as both <i>mDzGCL</i> and <i>GFP</i> groups can be seen
            growing at similar rates under consistent conditions.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresults3new.png"
          />
          <h5>
            <b>Figure 3.</b> The phenotype <i>N. benthamiana</i> leaves are
            agro-infiltrated with <i>mDzGCL</i> compared to the control (
            <i>GFP</i>) under drought stress conditions. The leaves with tags
            represent the infiltrated leaves. pictures can be accessed through
            the google sheets above.
          </h5>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;As shown in Figure 3, both{" "}
            <i>N. benthamiana</i> in the control and mDzGCL transiently
            overexpressed line were exposed to drought stress for the same
            amount of time. The <i>mDzGCL</i> transiently overexpressed line
            visually seems to be in better condition in terms of stress
            reduction when compared to the control. The wilting of leaves starts
            at around day 4 after treatment of the control whereas the{" "}
            <i>mDzGCL</i> transiently overexpressing leaves do not show signs of
            wilting until around day 6 after treatment. These results indicate
            that <i>mDzGCL</i> is able to help plants resist drought stress
            conditions for around 48 additional hours.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresults4new.png"
          />
          <h5>
            <b>Figure 4.</b> The phenotype <i>N. benthamiana</i> leaves are
            agro-infiltrated with <i>mDzGCL</i> compared to the control (
            <i>GFP</i>) under heat stress conditions. The leaves with tags
            represent the infiltrated leaves. The green highlight indicates the
            day stress is applied. pictures can be accessed through the google
            sheets above.
          </h5>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresults5new.png"
          />
          <h5>
            <b>Figure 5.</b> The phenotype <i>N. benthamiana</i> leaves are
            agro-infiltrated with <i>mDzGCL</i> compared to the control (
            <i>GFP</i>) under salt stress conditions. The leaves with tags
            represent the infiltrated leaves. The green highlight indicates the
            day stress is applied. Pictures can be accessed through the google
            sheets above.
          </h5>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;On the other hand, there was no observable
            difference in phenotypes between the controls and transiently
            overexpressed plants under heat and salt stress conditions (Fig. 4
            and 5). However, by comparing just physical characteristics, it is
            not enough to prove the function of <i>mDzGCL</i> on stress
            response. Further investigation would be needed to reliably confirm
            the effect of <i>mDzGCL</i> on heat and salinity.
          </p>
          <h1 id="header2">Conclusion</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The results on the agroinfiltrated{" "}
            <i>N. benthamiana</i> leaves reflect the effectiveness of modifying
            GCL to be localized to the mitochondria resulting in an improved
            stress response. The data shows that the overexpression of{" "}
            <i>mDzGCL</i> did not affect plant growth but can support the
            reduction of ROS (Fig.2 and 3). The enabling of a faster stress
            response for <i>N. benthamiana</i> with transiently overexpressed{" "}
            <i>mDzGCL</i> was effective in delaying the negative effects of
            drought. This is especially impactful within the context of Thai
            agriculture, where low crop yields frequently follow intensive
            droughts. This affects both farm owners and the farmers themselves.
            As Thai farm owners and farmers rely on their crop stability for
            money, unpredictable weather can have a significant negative impact
            on their means of living.
          </p>
          <br></br>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;In early September, the Thailand-RIS Human
            Practices Team surveyed Thai farmers and farm owners who cultivate
            durians in Chanthaburi, a major agricultural province in Thailand.
            The majority of those surveyed were most concerned about drought out
            of all the conditions tested within the project. In Figure 3, data
            shows that the modified GCL pathway transit is able to delay plant
            wilt by 48 hours after 4 days. An additional 2 days before plant
            wilt occurs is hugely beneficial for Thai farmers. It allows them
            more leeway to react by acquiring a sufficient water supply and
            implementing necessary measures to protect their crops from wilting
            further. This extra time can make a substantial difference in
            preserving their livelihoods and ensuring a more stable agricultural
            yield. Due to the nature of this project and the reliance of
            Thailand&apos;s economy and community on agriculture, Thailand-RIS
            believes that the results are noteworthy and can create positive
            impacts for farmers and consumers alike.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresultscombine1.png"
          />
          <h5>
            Human practices team interviewing farmers and Chanthaburi governor.
          </h5>

          <h1 id="header3">Evaluation</h1>

          <h2 id="header4">Strengths</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The stress tests featured 4 total trials for
            each type of stress (2 trials for GFP (control) and 2 trials for{" "}
            <i>mDzGCL</i>), with each construct including 6 infiltrated leaves
            for observation. This allowed for the results to have greater
            reliability.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Including a control by way of{" "}
            <i>N. benthamiana</i> infiltrated with GFP allowed the results to be
            validated and interpreted with a higher degree of accuracy. It also
            aided in avoiding the influence of uncontrollable factors such as
            accidental contamination, human error, or false positives.
          </p>
          <br></br>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Throughout the lab duration, the hypothesis
            of <i>mDzGCL</i> improving ROS response was shown to be valid on 2
            different plant species including <i>N. benthamiana</i> and{" "}
            <i>Solanum lycopersicum</i> (more details below). This allowed for
            better understanding of the modification and its potential
            drawbacks. Having an accurate understanding of the limitations of
            this project allows for a clearer prediction of the possible
            implementations of GCL localized to the mitochondria.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresultscombine2.png"
          />
          <h5>
            Agroinfiltration of <i>Solanum lycopersicum</i>.
          </h5>
          <h2 id="header5">Limitations</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;When first propagating the{" "}
            <i>N. benthamiana</i> plants for stress treatments, two-week-old
            sprouts were transferred to new pots. These younger{" "}
            <i>N. benthamiana</i> sprouts are weaker and more sensitive, and a
            large portion of the plant roots were damaged due to packing in the
            soil with too much pressure. Our lab advisor was able to identify
            the <i>N. benthamiana</i> with abnormal leaves, a sign of poor
            health and unsuitability, and then removed them from the sample.
            This small mistake cost roughly half of the original plant stock due
            to broken roots. Thankfully, a sufficient number of plants were
            retained for the stress treatments. However, it limited the number
            of stress responses that could be tested, and there was not enough
            time to regrow more <i>N. benthamiana</i> for additional stress
            treatments.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The observation of <i>N. benthamiana</i>{" "}
            phenotypes was not sufficient to conclude the effects of{" "}
            <i>mDzGCL</i> under high salinity and heat stress. If there was more
            time available, metabolite and gene expression analysis could have
            been done for better confirmation of the phenotypic results. More
            experiments are needed to understand the exact mechanisms which
            caused the result of this project.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;While waiting for the <i>N. benthamiana</i>{" "}
            plants to mature, the Thailand-RIS team additionally experimented on
            a minor subproject with the same <i>A. tumefaciens</i> in{" "}
            <i>S. lycopersicum</i>, a dwarf cultivar of tomatoes. This
            functionally performed as training for wet lab team members before
            testing on <i>N. benthamiana</i>. This was done in hopes of
            observing the effects of <i>mDzGCL</i> on the nutrient levels and
            ripening of <i>S. lycopersicum</i> fruits. During the
            agroinfiltration process for <i>S. lycopersicum</i>, uncertainties
            arose as to when exactly to inject the tomatoes as visually
            observing the ripeness of <i>S. lycopersicum</i> was difficult.
            Regrettably, the effect of different stages of tomato ripeness on
            the fruit&apos;s pH levels and, subsequently, the expression of
            proteins within it was overlooked. pH levels can impact enzyme
            activity, cellular environment, protein structure and amino acid
            charges, all of which can change the expression of proteins. This
            resulted in inconclusive metabolite analysis results.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresultscombine3.png"
          />
          <h5>
            Phenotype data collection and preparation for metabolite analysis in{" "}
            <i>Solanum lycopersicum</i>.
          </h5>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;As the modification of{" "}
            <i>S. lycopersicum</i> with <i>mDzGCL</i> was a subproject and
            results were unclear, hence it was not pursued further. The ripeness
            of the <i>S. lycopersicum</i> fruit requires another level of
            complexity that is difficult to analyze with the currently available
            resources and time of the team. Additionally, fruits may not be a
            good model to study environmental stresses: fruits have shorter life
            spans, go through separate physiological processes in comparison to
            the plant itself, and have nutrient reserves which affect stress
            responses. As the main focus of this project was studying a period
            of time sufficient enough to create implications for long term
            effects on plant stress responses, <i>S. lycopersicum</i> would not
            constitute compelling evidence for this project.
          </p>
          <img
            class="figureTooBig"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresults12.jpg"
          />
          <h5>
            <i>N. benthamiana</i> and <i>Solanum lycopersicum</i> kept in their
            respective trays saved for agroinfiltration.
          </h5>

          <div class="yBox100" />
        </div>
      </div>
    </div>
  );
}
