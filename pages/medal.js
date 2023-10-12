import {useRef} from 'react';

export default function MedalPage() {

    const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/labtitletext.png";
    const narrowTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/labtitletext.png";
    const handleClick = (elID) => {
    const element = document.getElementById(elID)
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
  };
  

  return (
    <div>
        <img class="wideTitleScreen" style={{width: "100%", marginBottom: "-4px"}} src={wideTitleScreenUrl}/>
        {/* <img class="narrowTitleScreen" style={{width: "100%", marginBottom: "-4px"}} src={narrowTitleScreenUrl}/> */}
        <div class="row">
            <div class="contentsBar">
                <div style={{position: "sticky", top:"100px"}}class="column">
                    <h1 style={{marginBottom: '20px'}}>Contents</h1>
                    <button class="contentsButton" onClick={() => handleClick("header1")}>
                        Header1
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header2")}>
                        Header2
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header3")}>
                        Header3
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header4")}>
                        Header4
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header5")}>
                        Header5
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header6")}>
                        Header6
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header7")}>
                        Header6
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header8")}>
                        Header6
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header9")}>
                        Header6
                    </button>
                </div>
                
            {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
            {/* ====================CODE FOR TEXT STARTS=============================== */}

            </div>
            <div style={{paddingTop:"60px"}}class="text">

                <h1 id="header1">Synthesizing the Mitochondrial GCL</h1>
                    <p>
                        The synthesis of the mitochondrial <i>Durio zibethinus</i> Glutamate-Cysteine Ligase (mDzGCL) protein used in this project was done through replacing the chloroplast transit peptide found in <i>Durio zibethinus</i> Glutamate-Cysteine Ligase (DzGCL) with a mitochondrial transit peptide found in <i>Arabidopsis thaliana</i> succinate dehydrogenase (SDH).
                    </p>
                        <div class="indent">

                        <h2>Plant and Gene Selection</h2>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;DzGCL was selected as the ideal candidate GCL protein for relocalization due to its remarkable attributes observed in <i>D. zibethinus </i>. This unique plant species displays significantly elevated levels of glutathione (GSH)<sup>[1]</sup> in its ripe fruit pulp much higher than that in other plants<sup>[2]</sup>. This distinct characteristic suggests the DzGCL as a candidate enzyme with possibly high activity. GCL serves as the rate limiting enzyme in the production of GSH, the primary antioxidant. 
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i>A. thaliana</i>  SDH, on the other hand, served as our model for obtaining the mitochondrial transit peptide. A. thaliana was chosen as our model plant due to its well-established status in plant biology research, with its genetic characteristics widely studied and understood<sup>[3]</sup>. Furthermore, given that SDH is a fundamental component within the mitochondrial electron transport chain, the team hypothesized that it must contain a mitochondrial transit peptide facilitating its localization to the mitochondria. Through literature review, this hypothesis was found to be true as Figueroa <i>et al</i>. successfully identified the transit peptide in <i>A. thaliana</i> SDH and validated its role in localizing SDH to the mitochondria in 2001<sup>[4]</sup>. 
                            </p>
                        <h2>Gene Modification</h2>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;The first step was to identify the amino acid sequence of DzGCL from the NCBI database (accession number: XP_022738907.1). After obtaining the amino acid sequence, the natural chloroplast transit peptide of DzGCL must be predicted in order to be deleted and replaced accordingly. The chloroplast transit peptide within DzGCL was predicted through the TargetP-2.0 software<sup>[5]</sup>(Fig. 1), utilizing its deep learning algorithm trained on a diverse dataset of biological sequences, including known chloroplast transit peptides,  to recognize indicative features of sorting signals<sup>[6]</sup>. 
                            </p>
                            <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig1.png"/>
                            <h5>
                                <b>Figure 1.</b> Prediction of chloroplast transit peptide in DzGCL by TargetP-2.0, where all of the amino acids from the left peak and onwards to the left boxed in gray were predicted to be part of the chloroplast transit peptide. 
                            </h5>
                            <img class="figureTooBig"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig1.png"/>
                            <h5>
                                <b>Figure 1.</b> Prediction of chloroplast transit peptide in DzGCL by TargetP-2.0, where all of the amino acids from the left peak and onwards to the left boxed in gray were predicted to be part of the chloroplast transit peptide. 
                            </h5>
                        </div>
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
