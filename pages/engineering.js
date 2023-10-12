import { useRef } from "react";
import Link from "next/link";

function Engineering() {
  const wideTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/engineering.png";
  const narrowTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/titlescreensphone/engineeringphone.png";
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
      <div class="row">
        <div class="contentsBar">
          <div style={{ position: "sticky", top: "200px" }} class="column">
            <h2 style={{ marginBottom: "20px" }}>Engineering Success</h2>
            <button
              class="contentsButton"
              onClick={() => handleClick("DESIGN")}
            >
              1. DESIGN
            </button>
            <button class="contentsButton" onClick={() => handleClick("LAB")}>
              2. WET LAB
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("RESULTS")}
            >
              3. RESULTS
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("references")}
            >
              References
            </button>
          </div>

          {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
          {/* ====================CODE FOR TEXT STARTS=============================== */}
        </div>
        <div style={{ paddingTop: "60px" }} class="text">
          {/* ============================DO NOT EDIT ABOVE============================================== */}
          <h1 id="DESIGN">1. DESIGN</h1>
          <h2 id="des1">Synthesizing the Mitochondrial GCL</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The synthesis of the mitochondrial{" "}
            <i>Durio zibethinus</i> Glutamate-Cysteine Ligase (mDzGCL) protein
            used in this project was done through replacing the chloroplast
            transit peptide found in <i>D. zibethinus</i> Glutamate-Cysteine
            Ligase (DzGCL) with a mitochondrial transit peptide found in{" "}
            <i>Arabidopsis thaliana</i> succinate dehydrogenase (SDH).
          </p>
          <br />
          <h3>Plant and Gene Selection</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;DzGCL was selected as the ideal candidate
            GCL protein for relocalization due to its remarkable attributes
            observed in <i>D. zibethinus </i>. This unique plant species
            displays significantly elevated levels of glutathione (GSH)
            <sup>[1]</sup> in its ripe fruit pulp much higher than that in other
            plants.<sup>[2]</sup> This distinct characteristic suggests the
            DzGCL as a candidate enzyme with possibly high activity. GCL serves
            as the rate limiting enzyme in the production of GSH, the primary
            antioxidant.
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<i>A. thaliana</i> SDH, on the other hand,
            served as our model for obtaining the mitochondrial transit peptide.{" "}
            <i>A. thaliana</i> was chosen as our model plant due to its
            well-established status in plant biology research, with its genetic
            characteristics widely studied and understood.<sup>[3]</sup>{" "}
            Furthermore, given that SDH is a fundamental component within the
            mitochondrial electron transport chain, the team hypothesized that
            it must contain a mitochondrial transit peptide facilitating its
            localization to the mitochondria. Through literature review, this
            hypothesis was found to be valid as Figueroa <i>et al</i>
            <sup>[4]</sup>, successfully identified the transit peptide in{" "}
            <i>A. thaliana</i> SDH and validated its role in localizing SDH to
            the mitochondria.
          </p>
          <br />
          <h3>Gene Modification</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The first step was to identify the amino
            acid sequence of DzGCL from the NCBI database (accession number:
            XP_022738907.1). After obtaining the amino acid sequence, the
            natural chloroplast transit peptide of DzGCL must be predicted in
            order to be deleted and replaced accordingly. The chloroplast
            transit peptide within DzGCL was predicted through the TargetP-2.0
            software<sup>[5]</sup>(Fig. 1), utilizing its deep learning
            algorithm trained on a diverse dataset of biological sequences,
            including known chloroplast transit peptides, to recognize
            indicative features of sorting signals.<sup>[6]</sup>
          </p>
          <br />
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig1.png"
          />
          <h5>
            <b>Figure 1.</b> Prediction of chloroplast transit peptide in DzGCL
            by TargetP-2.0, where all of the amino acids from the left peak and
            onwards to the left boxed in gray were predicted to be part of the
            chloroplast transit peptide.
          </h5>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;After deleting the chloroplast transit
            peptide from DzGCL, the next step was to identify the amino acid
            sequence for <i>A. thaliana</i> SDH from NCBI database (accession
            number: CAC19855.1), in which the mitochondrial transit peptide has
            already been identified as amino acids positions 1 to 29 by Figueroa{" "}
            <i>et al</i>.<sup>[4]</sup> The identified mitochondrial transit
            peptide was subsequently copied and inserted into the DzGCL in the
            stead of the deleted chloroplast transit peptide, yielding mDzGCL as
            shown in Figure 2. The amino acid sequences were finally translated
            back to nucleotides to obtain <i>mDzGCL</i> gene utilized in the
            plasmid.
          </p>

          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig2.png"
          />
          <h5>
            <b>Figure 2.</b> Diagram of the replacement of the transit peptide
            in the GCL amino acid sequence
          </h5>

          <h2 id="des2">
            Evaluation of the Modified Protein through <i>In Silico</i> Analysis{" "}
          </h2>
          <h3>Localization</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;After acquiring mDzGCL, <i>In silico</i>{" "}
            subcellular localization prediction of the modified GCL was
            performed through deep learning using TargetP-2.0 to confirm the
            success of the modification in producing a mitochondrial GCL. As
            shown in the table in Figure 3, it was predicted that mDzGCL will
            localize in the mitochondria with a 92.25% probability that its
            transit peptide is mitochondrial, confirming the success of the
            modification in relocalizing the DzGCL to the mitochondria.
          </p>
          <br />
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig3.png"
          />
          <h5>
            <b>Figure 3.</b> Subcellular localization prediction of the modified
            mDzGCL by TargetP-2.0
          </h5>
          <br />

          <h3>Function</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;After confirming the localization of the
            mDzGCL to be mitochondria, the next step was to confirm that the
            enzymatic function of the modified GCL (mDzGCL) was not disturbed by
            the modification of the transit peptide and was still the same as
            that of the unmodified GCL (DzGCL).
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Having the FASTA sequences of the
            chloroplastic DzGCL and the mitochondrial mDzGCL, the first thing
            done was to acquire predictions of their maps through the HMMER
            program,<sup>[7]</sup> HMMScan, which utilizes the hidden Markov
            model and statistical analyses to find matches in the sequence with
            known functional domain sequences in a database. In this case, the
            Pfam protein database<sup>[8]</sup> was used. The maps outputted by
            HMMScan of DzGCL and mDzGCL are displayed in Figure 4 and Figure 5,
            respectively. Both figures show that HMMScan was able to identify
            the signature glutamate-cysteine ligase family 2 functional domain
            of a GCL represented by the brown section in the maps. Furthermore,
            the length of the functional domains calculated by finding the
            difference in the end and the start amino acid positions were found
            to be the same. Thus, the modifications in the mDzGCL were shown to
            have not disturbed the functional domain of GCL.
          </p>
          <br />
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig4.jpg"
          />
          <h5>
            <b>Figure 4.</b> Map of DzGCL (unmodified) predicted through HMMScan
            (HMMer) showing the signature glutamate-cysteine ligase family 2
            functional domain of a GCL.
          </h5>
          <br />
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig5.jpg"
          />
          <h5>
            <b>Figure 5.</b> Map of mDzGCL (modified) predicted through HMMScan
            (HMMer), which also shows the signature glutamate-cysteine ligase
            family 2 functional domain of a GCL.
          </h5>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;To further verify the integrity of the
            enzymatic function of GCL in mDzGCL, 3D structures of DzGCL and
            mDzGCL were predicted using AlphaFold2, a software that combines
            empirical knowledge on protein structure with a deep-learning
            algorithm, leveraging evolutionary data through multiple-sequence
            alignment. This approach often yields protein models of comparable
            accuracy to experimentally determined structures.<sup>[9,10]</sup>{" "}
            The predictions obtained from AlphaFold2 were then visualized in
            PyMOL v2.5.5 (by Schrödinger) for analysis. Shown in Figure 6, the
            3D structures of DzGCL and mDzGCL, respectively, are observably
            similar except for the tail, in which the difference is due to
            modifications in the N-terminal when replacing the chloroplast
            transit peptide in mDzGCL with mitochondrial one. The similarity
            between the two 3D structures is better displayed in Figure 7, where
            the DzGCL (green) and mDzGCL (red) are overlaid, and a complete
            overlap is observable. Therefore, since the structure of the
            modified GCL (mDzGCL) closely resembles that of the unmodified GCL
            (DzGCL), the enzymatic function should also remain approximately the
            same.
          </p>
          <br />
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig6.png"
          />
          <h5>
            <b>Figure 6.</b> The 3D structures of DzGCL (unmodified) mDzGCL (the
            modified DzGCL) predicted through AlphaFold2. The functional domain
            of DzGCL and mDzGCL are highlighted in green and red, respectively.
          </h5>
          <br />
          <img
            class="figureTooBig"
            src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig8.jpg"
          />
          <h5>
            <b>Figure 7.</b> 3D structures of DzGCL (unmodified) and mDzGCL
            predicted through AlphaFold2, overlaid, showing complete overlap.
          </h5>
          <br />

          <h2 id="des3">Vector Construction</h2>
          <br />
          <img
            class="figureTooBig"
            src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig9.jpg"
          />
          <h5>
            <b>Figure 8.</b> <i>mDzGCL</i> in pCAMBIA1301 Plasmid Construct
          </h5>
          <br />
          <img
            class="figureTooBig"
            src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig10.jpg"
          />
          <h5>
            <b>Figure 9.</b> <i>GFP</i> in pCAMBIA1301 Plasmid Construct
          </h5>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;In total, two plasmids were used in the
            project: one is the <i>mDzGCL</i> in pCAMBIA1301 to infiltrate
            plants with the <i>mDzGCL</i> gene designed by the team and the
            other is the <i>GFP</i> in pCAMBIA1301 as a positive control
            <br />
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The pCAMBIA1301 <i>mDzGCL</i> construct
            (Fig. 8) contains the the <i>DzGCL</i> gene acquired from{" "}
            <i>D. zibethinus</i> and the gene for the mitochondrial transit
            peptide from <i>A. thaliana</i>.. This transit peptide allows for
            localization of DzGCL into the mitochondria instead of the
            chloroplast. Additionally the plasmid was constructed using the
            pCAMBIA1301 (AF234297.1) template, which includes antibiotic
            resistance genes. Specifically, it features a kanamycin resistance
            gene to select bacteria, as only transformed bacteria will survive
            in environments with this antibiotic. Additionally, a hygromycin
            marker enables the selection of transformed plants. The 35s gene
            promoter in this construct enhances the expression level of the{" "}
            <i>mDzGCL</i> within the infiltrated plants, aligning with the
            project&apos;s aim to make the GSH pathway more efficient.
            <br />
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The <i>GFP</i> construct (Fig. 9) contains
            Green Fluorescent Protein which makes the infiltrated plant grow
            when exposed to blue to UV range light. This construct does not
            interfere with the GSH Pathway so it can serve as a positive control
            for comparing <i>mDzGCL</i>-infiltrated plants under different
            environmental conditions. Similarly to <i>mDzGCL</i>, it also
            incorporates the 35s promoter. Other plasmid components also mirror
            those of the <i>mDzGCL</i> plasmid, ensuring a precise comparison of
            the impact of the mitochondrial transit peptide and GCL on plant
            stress response.
            <br />
            <br />
          </p>
          <br />
          <h5>
            &nbsp;&nbsp;&nbsp;&nbsp;All the components mentioned above were
            acquired from the NCBI database (https://www.ncbi.nlm.nih.gov/) and
            put into one sequence. This sequence was then sent to the Biomatik
            Company (USA) for gene synthesis and its insertion into the vector.
          </h5>

          {/* ====================================================END OF DESIGN======================================= */}
          {/* MAERA */}

          <h1 id="LAB">2. WET LAB EXPERIMENTS</h1>
          <h2 id="lab1">Approach</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; Agroinfiltration approach was chosen in
            order to localize GCL into mitochondria in plants.{" "}
            <i>Agrobacterium tumefaciens</i> is a phytopathogenic bacterium that
            infects plant cells, leading to crown gall disease by transferring
            part of its genetic material into the plant genome. This type of
            bacterium is now modified to be harmless for use as a key tool in
            biotechnology in order to transfer genes of interest into plant
            cells for a variety of biological uses. For localizing mitochondria,{" "}
            <i>A. tumefaciens</i> was transformed by the construction of
            mitochondrial transit peptide and <i>Durio zibethinus GCL</i> gene
            and subsequently agroinfiltrated into <i>Nicotiana benthamiana</i>{" "}
            leaves. As <i>N. benthamiana</i> is one of the plants with the most
            mapped genomes, so it would be easier to interpret results.
            Moreover, many studies have shown that <i>N. benthamiana</i> is a
            good host system for studying the functional characterization of
            many genes, making it an efficient system for infiltration.
          </p>
          <br></br>
          <h2 id="lab2">Procedure</h2>

          <h3>1. Plant and Material Preparation</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The seeds of <i>N. benthamiana</i> were
            scattered in pots containing peat moss and were grown under
            controlled conditions. The plants were cultivated in an environment
            maintained at 25&deg;C, with a light-dark cycle of 16 hours of
            illumination followed by 8 hours of darkness (provided by artificial
            lights at an intensity of 4,500 lux). Two-week-old plants were
            successfully grown and then planted individually into new pots and
            were grown under similar conditions.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/engineering/figurecombine1.png"
          />
          <h5>
            <i>N. benthamiana</i> plants growing under controlled conditions at
            25&deg;C, with a light-dark cycle of 16 hours of illumination
            followed by 8 hours of darkness (provided by artificial lights at an
            intensity of 4,500 lux)
          </h5>
          <br></br>
          <h3>2. Bacteria Transformation</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The construct and control (<i>GFP</i> in
            pCAMBIA1301) vector were transformed into <i>A. tumefaciens</i>{" "}
            strain GV3101 and cloning was confirmed with Colony PCR. <i>GFP</i>{" "}
            was chosen as it has no effect towards the GSH pathway.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;After obtaining the colonies of{" "}
            <i>A. tumefaciens</i>, certain colonies were selected (Fig. 10a).
            These colonies were swirled into a mixture of PCR solutions (buffer,
            MgCl<sub>2</sub>, dNTP, Taq DNA Polymerase (Thermo Scientific, UK),
            Nuclease Free H<sub>2</sub>O, primers) and put into a thermal
            cycler.
          </p>
          <br></br>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;To verify the presence of the <i>mDzGCL</i>{" "}
            in plasmid, specific primers were designed to anneal to both ends of
            the target DNA sequence. Figure 10b depicts a successful gel
            electrophoresis result as the primers are specific to the band
            lengths of the <i>mDzGCL</i> with mitochondria in the pCAMBIA1301
            plasmid.
          </p>
          <br></br>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/engineering/engineeringcombine3.png"
          />
          <h5>
            <b>Figure 10.</b> <b>(A)</b> Bacteria colony growth on an agar
            medium with antibiotic, only transformed <i>A. tumefaciens</i>{" "}
            should be resistant to. and <b>(B)</b> Gel electrophoresis of the
            colony PCR for <i>mDzGCL</i>-pCAMBIA1301 plasmid.
          </h5>
          <br></br>
          <h3>3. Plant Transformation</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<i>A. tumefaciens</i> containing the
            construct or control was cultured at 30&deg;C for 48 hours, then
            pelleted and resuspended in an OD<sub>600</sub> = 0.5 in MM buffer
            (10 mM MES pH 5.6, 10 mM MgCl<sub>2</sub>). For agroinfiltration,
            the <i>A. tumefaciens</i> solution containing either gene or a
            control vector was mixed with the <i>A. tumefaciens</i> solution
            harboring the gene encoding the silencing inhibitor protein p19 at a
            ratio of 1:1. Thereafter, 100 mg/l acetosyringone was added, and the
            mixed culture solution was incubated at room temperature for 3 hours
            under dark conditions. The solution was then used to infiltrate the
            surface of three individual leaves per <i>N. benthamiana</i> plant
            using a needleless 1-mL syringe. For each construct, 6-week-old
            plants were used.<sup>11</sup> At least 4 leaves, considered as 4
            replicates, were infiltrated for each construct.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/engineering/figurecombine2.png"
          />
          <h5>
            Incubation of culture solution and infiltration of{" "}
            <i>N. benthamiana</i>
          </h5>
          <br></br>
          <h3>4. Conditions/Treatments</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The transiently overexpressed <i>mDzGCL</i>{" "}
            and control in <i>N. benthamiana</i> were treated under normal,
            drought, heat, and salt stress conditions.
          </p>
          <br></br>
          <ol type="a">
            <li>
              In normal conditions, the plants were grown under 25&deg;C
              receiving 16 hours of light and 8 hours of darkness while being
              watered daily.
            </li>
            <br></br>
            <li>
              Drought conditions were primarily simulated by not watering the{" "}
              <i>N. benthamiana</i> plants, starting from the first day. This
              was done immediately due to the previously wet soil taking a set
              amount of time to fully dry. The plants were still grown in the
              same temperatures and light/dark conditions as the normal
              conditions.
            </li>
            <br></br>
            <li>
              For the heat stress conditions, plants were grown under 25&deg;C
              receiving 16 hours of light and 8 hours of darkness while being
              watered every day. After 5 days, the <i>N. benthamiana</i> were
              placed in conditions under 30&deg;C with 12/12 hours of
              light/dark. <i>mDzGCL</i> will not be expressed until after 4
              days, so variables are not introduced until after that amount of
              time.
            </li>
            <br></br>
            <li>
              Salt stress conditions consisted of the <i>N. benthamiana</i>{" "}
              plants growing under 25&deg;C with 16/8 hours of light/dark and
              daily watering. After 5 days, 30mL of 150 mM of NaCl was added to
              the soil, and an additional 10mL every 2 days for a total of 11
              days.
            </li>
          </ol>
          <h3>5. &gamma;-EC Content Analysis</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The construct and control were
            agroinfiltrated on <i>N. benthamiana</i> leaves. After 5 days, the
            infiltrated leaves were collected, immediately frozen in liquid
            nitrogen, ground into a fine powder, and freeze dried, which was
            then used for the metabolite analysis.
          </p>
          <p>
            The &gamma;-EC and GSH were extracted and analyzed by HPLC.
            <sup>12</sup>
          </p>
          <img
            class="figureTooBig"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/engineering/wlengineering6.jpg"
          />

          {/* ====================================================END OF WETLAB======================================= */}
          {/* JACKY */}

          <h1 id="RESULTS">3. RESULTS</h1>
          <h2 id="results1">Data Collection &amp; Analysis</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;To understand the role of <i>mDzGCL</i> on
            &gamma;-EC production, the transient overexpression of this gene on{" "}
            <i>N. benthamiana</i> leaves was done. &gamma;-EC content
            significantly increased by 1.6 times compared to the control group
            (Fig. 11). This result indicates that <i>mDzGCL</i> plays a role in
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
            <b>Figure 11. &gamma;-EC contents</b> of <i>N. benthamiana</i>{" "}
            leaves that have been agro-infiltrated with <i>mDzGCL</i> in
            comparison to the control group (<i>GFP</i>). An asterisk above the
            bar indicates a significant difference between samples
            (Student&apos;s t-test, *: p &lt; 0.05).
          </h5>
          <br />
          <p>
            Raw data can be accessed{" "}
            <Link
              style={{ color: `#145C69` }}
              href={`https://docs.google.com/spreadsheets/d/10UWD99fy47-lZu7ncog8mrPBZf4zWcpMTGlh7U0pQS0/edit#gid=1186347869`}
            >
              <u>here</u>
            </Link>
            .
          </p>
          <b />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Figure 12 demonstrated that the
            overexpression of <i>mDzGCL</i> did not affect the growth of any
            plants, as both <i>mDzGCL</i> and <i>GFP</i> groups can be seen
            growing at similar rates under consistent conditions.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresults2new.png"
          />
          <h5>
            <b>Figure 12.</b> <i>N. benthamiana</i> leaves before and after
            agroinfiltration with <i>mDzGCL</i> under normal conditions. The
            leaves with tags represent the infiltrated leaves. All the{" "}
            <i>N. benthamiana</i> pictures can be accessed through the google
            sheets above.
          </h5>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Figure 12 demonstrated that the
            overexpression of <i>mDzGCL</i> did not affect the growth of any
            plants, as both <i>mDzGCL</i> and <i>GFP</i> groups can be seen
            growing at similar rates under consistent conditions.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresults3new.png"
          />
          <h5>
            <b>Figure 13.</b> The phenotype <i>N. benthamiana</i> leaves are
            agro-infiltrated with <i>mDzGCL</i> compared to the control (
            <i>GFP</i>) under drought stress conditions. The leaves with tags
            represent the infiltrated leaves. pictures can be accessed through
            the google sheets above.
          </h5>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;As shown in Figure 13, both{" "}
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
            <b>Figure 14.</b> The phenotype <i>N. benthamiana</i> leaves are
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
            <b>Figure 15.</b> The phenotype <i>N. benthamiana</i> leaves are
            agro-infiltrated with <i>mDzGCL</i> compared to the control (
            <i>GFP</i>) under salt stress conditions. The leaves with tags
            represent the infiltrated leaves. The green highlight indicates the
            day stress is applied. Pictures can be accessed through the google
            sheets above.
          </h5>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;On the other hand, there was no observable
            difference in phenotypes between the controls and transiently
            overexpressed plants under heat and salt stress conditions (Fig. 14
            and 15). However, by comparing just physical characteristics, it is
            not enough to prove the function of <i>mDzGCL</i> on stress
            response. Further investigation would be needed to reliably confirm
            the effect of <i>mDzGCL</i> on heat and salinity.
          </p>
          <h2 id="results2">Conclusion</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The results on the agroinfiltrated{" "}
            <i>N. benthamiana</i> leaves reflect the effectiveness of modifying
            GCL to be localized to the mitochondria resulting in an improved
            stress response. The data shows that the overexpression of{" "}
            <i>mDzGCL</i> did not affect plant growth but can support the
            reduction of ROS (Fig.12 and 13). The enabling of a faster stress
            response for <i>N. benthamiana</i> with transiently overexpressed{" "}
            <i>mDzGCL</i> was effective in delaying the negative effects of
            drought. This is especially impactful within the context of Thai
            agriculture, where low crop yields frequently follow intensive
            droughts. This affects both farm owners and the farmers themselves.
            As Thai farm owners and farmers rely on their crop stability for
            money, unpredictable weather can have a significant negative impact
            on their means of living.
          </p>
          <br />
          <p>
            Thus, Team Thailand-RIS has successfully modified DzGCL to shorten
            the GSH pathway by turning the protein locality to mitochondrial in
            hopes of improving plant tolerance to external stressors. The team
            has listed the gene (<i>mDzGCL</i>) in the part registry as{" "}
            <Link
              href={`https://parts.igem.org/Part:BBa_K4629001`}
              style={{ color: `#145C69` }}
            >
              <u>part BBa_K4629001</u>
            </Link>
            .
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/day02.png"
          />
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/day34.png"
          />
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/day56.png"
          />
          <h5>
            <b>Figure 16.</b> Phenotype changes in <i>N. benthamiana</i> leaves
            under drought stress from days 0-6 after infiltration. The{" "}
            <i>mDZGCL</i> transiently overexpressing line wilts considerably
            slower than <i>GFP</i> transiently overexpressing line.
          </h5>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;In early September, the Thailand-RIS Human
            Practices Team surveyed Thai farmers and farm owners who cultivate
            durians in Chanthaburi, a major agricultural province in Thailand.
            The majority of those surveyed were most concerned about drought out
            of all the conditions tested within the project. In Figure 13 and
            16, data shows that the modified GCL pathway transit is able to
            delay plant wilt by 48 hours after 4 days. An additional 2 days
            before plant wilt occurs is hugely beneficial for Thai farmers. It
            allows them more leeway to react by acquiring a sufficient water
            supply and implementing necessary measures to protect their crops
            from wilting further. This extra time can make a substantial
            difference in preserving their livelihoods and ensuring a more
            stable agricultural yield. Due to the nature of this project and the
            reliance of Thailand&apos;s economy and community on agriculture,
            Thailand-RIS believes that the results are noteworthy and can create
            positive impacts for farmers and consumers alike.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/results/wlresultscombine1.png"
          />
          <h5>
            Human practices team interviewing farmers and Chanthaburi governor.
          </h5>
          <h2 id="results3">Evaluation</h2>
          <h3>Strengths</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The stress tests featured 4 total trials for
            each type of stress (2 trials for GFP (control) and 2 trials for{" "}
            <i>mDzGCL</i>), with each construct including 6 infiltrated leaves
            for observation. This allowed for the results to have greater
            reliability.
          </p>
          <br />
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

          <h3>Limitations</h3>

          {/* ============================REFERENCES====================== */}

          <h1 id="references">REFERENCES</h1>
          <ol class="references">
            <li>
              Singcha P, Khaksar G, Sirijan M, Sirikantaramas S. Durian (
              <i>Durio zibethinus</i> L.) fruit: A superior dietary source of
              natural glutathione and &gamma;-glutamylcysteine. SSRN. 2023;
              4566631. doi:10.2139/ssrn.4566631
            </li>
            <li>
              Pinsorn P, Oikawa A, Watanabe M, Sasaki R, Ngamchuachit P, Hoefgen
              R, Saito K, Sirikantaramas S. Metabolic variation in the pulps of
              two durian cultivars: Unraveling the metabolites that contribute
              to the flavor. <i>Food Chemistry</i>. 2018; 268:118-125.
              doi:10.1016/j.foodchem.2018.06.066
            </li>
            <li>
              Meinke DW, Cherry JM, Dean C, Rounsley SD, Koornneef M.{" "}
              <i>Arabidopsis thaliana</i>: A model plant for genome analysis.{" "}
              <i>Science</i>. 1998 Oct 23;282(5389):662-682.
              doi:10.1126/science.282.5389.662
            </li>
            <li>
              Figueroa P, Leon G, Elorsa E, Holuigue L, Jordana X. Three
              different genes encode the iron-sulfur subunit of succinate
              dehydrogenase in <i>Arabidopsis thaliana</i>. Plant Molecular
              Biology. 2021;46:241-250. doi:10.1023/A:1010612506070
            </li>
            <li>
              Emanuelsson O, Brunak S, von Heijne G, Nielsen H. Locating
              proteins in the cell using targetp, signalp and related tools.{" "}
              <i>Nature Protocols</i>. 2007;2(4):953-971.
              doi:10.1038/nprot.2007.131
            </li>
            <li>
              Armenteros JJ, Salvatore M, Emanuelsson O, Winther O, Von Heijne
              G, Elofsson A, Nielsen H. Detecting sequence signals in targeting
              peptides using deep learning. <i>Life Science Alliance</i>.
              2019;2(5). doi:10.26508/lsa.201900429
            </li>
            <li>
              Finn RD, Clements J, Eddy SR. HMMER web server: interactive
              sequence similarity searching. <i>Nucleic Acids Research</i>.
              2011;39(suppl_2):W29-37. doi:10.1093/nar/gkr367
            </li>
            <li>
              Bateman A, Coin L, Durbin R, Finn RD, Hollich V, Griffiths-Jones
              S, Khanna A, Marshall M, Moxon S, Sonnhammer EL, Studholme DJ. The
              Pfam protein families database. <i>Nucleic Acids Research</i>.
              2004;32(suppl_1):D138-141. doi:10.1093/nar/gkh121
            </li>
            <li>
              Jumper J, Evans R, Pritzel A, Green T, Figurnov M, Ronneberger O,
              Tunyasuvunakool K, Bates R, Žídek A, Potapenko A, Bridgland A.
              Highly accurate protein structure prediction with AlphaFold.{" "}
              <i>Nature</i>. 2021;596(7873):583-589.
              doi:10.1038/s41586-021-03819-2
            </li>
            <li>
              Evans R, O&aposs;Neill M, Pritzel A, Antropova N, Senior A, Green
              T, Žídek A, Bates R, Blackwell S, Yim J, Ronneberger O. Protein
              complex prediction with AlphaFold-Multimer. <i>bioRxiv</i>.
              2021:2021-10. doi:10.1101/2021.10.04.463034
            </li>
            <li>
              Khaksar G, Sangchay W, Pinsorn P, Sangpong L, Sirikantaramas S.
              Genome-wide analysis of the <i>DOF</i> gene family in durian
              reveals fruit ripening-associated and cultivar-dependent DOF
              transcription factors. <i>Scientific Reports</i>. 2019;9(1):12109.
              doi:10.1038/s41598-019-48601-7
            </li>
            <li>
              Pinsorn P, Oikawa A, Watanabe M, Sasaki R, Ngamchuachit P, Hoefgen
              R, Saito K, Sirikantaramas S. Metabolic variation in the pulps of
              two durian cultivars: Unraveling the metabolites that contribute
              to the flavor. <i>Food Chemistry</i>. 2018; 268:118-125.
              doi:10.1016/j.foodchem.2018.06.066{" "}
            </li>
          </ol>

          <div class="yBox60" />

          {/* =================================DO NOT EDIT BELOW=========================== */}
        </div>
      </div>
    </div>
  );
}

export default Engineering;
