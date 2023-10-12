import {useRef} from 'react';
import Link from 'next/link'

function Engineering() {

    const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/engineering.png";
    const narrowTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/titlescreensphone/engineeringphone.png";
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
            <div style={{position: "sticky", top:"200px"}}class="column">
                    <h2 style={{marginBottom: '20px'}}>Engineering</h2>
                    <button class="contentsButton" onClick={() => handleClick("header1")}>
                        Approach
                    </button>
                
                    <button class="contentsButton" onClick={() => handleClick("header3")}>
                        Vector Construction with Mitochondrial Transit Peptide
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header4")}>
                        Plant Material and Preparation
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header5")}>
                        Bacteria Transformation
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header6")}>
                        Plant Transformation
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header7")}>
                        Conditions/Treatment
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header8")}>
                        &gamma;-EC Content Analysis
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header9")}>
                        Statistical Analysis
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header10")}>
                        Bibliography
                    </button>
                </div>
                
            {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
            {/* ====================CODE FOR TEXT STARTS=============================== */}

            </div>
            <div style={{paddingTop:"60px"}}class="text">

                <h1 id="header1"><b>Approach</b></h1>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp; Agroinfiltration approach was chosen in order to localize GCL into mitochondria in plants. <i>Agrobacterium tumefaciens</i> is a phytopathogenic bacterium that infects plant cells, leading to crown gall disease by transferring  part of its genetic material into the plant genome. This type of bacterium is now modified to be harmless for use as a key tool in biotechnology in order to transfer genes of interest into plant cells for a variety of biological uses. For localizing mitochondria, <i>A. tumefaciens</i> was transformed by the construction of mitochondrial transit peptide and <i>Durio zibethinus GCL</i> gene and subsequently agroinfiltrated  into <i>Nicotiana benthamiana</i> leaves. As <i>N. benthamiana</i> is one of the plants with the most mapped genomes, so it would be easier to interpret results. Moreover, many studies have shown that <i>N. benthamiana</i> is a good host system for studying the functional characterization of many genes, making it an efficient system for infiltration.
                    </p>
                    <br></br>
                
                <h1 id="header2"><b>Procedure</b></h1>
                    <h2 id="header3"><b>Vector Construction With Mitochondrial Transit Peptide</b> </h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;The amino acid sequence of DzGCL was obtained from the NCBI database (accession number: XP_022738907.1). The chloroplast transit peptide was predicted using TargetP-2.0 <sup>[1]</sup> and then was removed from the full-length of DzGCL. The mitochondrial transit peptide from <i>Arabidopsis thaliana</i> Succinate dehydrogenase <sup>[2]</sup> was then inserted instead of the chloroplast transit peptide to obtain the completed sequence of DzGCL with the mitochondrial transit peptide (mDzGCL). This protein then was translated back into nucleotides and inserted in pCAMBIA1301. The complete construct was ordered from Biomatik company (USA). Read more in design.
                        </p>
                    <h2 id="header4"><b>Plant material and preparation</b></h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;The seeds of <i>N. benthamiana</i> were scattered in pots containing peat moss and were grown under controlled conditions. The plants were cultivated in an environment maintained at 25&deg;C, with a light-dark cycle of 16 hours of illumination followed by 8 hours of darkness (provided by artificial lights at an intensity of 4,500 lux). Two-week-old plants were planted individually into new pots and were grown under similar conditions.
                        </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/wet-lab/engineering/figurecombine1.png"/>
                        <h5>
                            <i>N. benthamiana</i> plants growing under controlled conditions at 25&deg;C, with a light-dark cycle of 16 hours of illumination followed by 8 hours of darkness (provided by artificial lights at an intensity of 4,500 lux)
                        </h5>
                    <h2 id="header5"><b>Bacteria Transformation</b></h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;The construct and control (<i>GFP</i> in pCAMBIA1301) vector were transformed into <i>A. tumefaciens</i> strain GV3101 and cloning was confirmed with Colony PCR. <i>GFP</i> was chosen as it has no effect towards the GSH pathway. 
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;After obtaining the colonies of <i>A. tumefaciens</i>, certain colonies were selected (Fig 1a). These colonies were swirled into a mixture of PCR solutions (buffer, MgCl<sub>2</sub>, dNTP, Taq DNA Polymerase (Thermo Scientific, UK), Nuclease Free H<sub>2</sub>O, primers) and put into a thermal cycler. 
                        </p>
                        <br></br>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;To verify the presence of the <i>mDzGCL</i> in plasmid, specific primers were designed to anneal to both ends of the target DNA sequence. Figure 1b depicts a successful gel electrophoresis result as the primers are specific to the band lengths of the <i>mDzGCL</i> with mitochondria in the pCAMBIA1301 plasmid.  
                        </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/wet-lab/engineering/engineeringcombine3.png"/>
                        <h5>
                            <b>Figure 1.</b> (a) Bacteria colony growth on an agar medium with antibiotic , only transformed  <i>A. tumefaciens</i> should be resistant to.  and (b) Gel electrophoresis of the colony PCR for <i>mDzGCL</i>-pCAMBIA1301 plasmid.
                        </h5>
                    <h2 id="header6"><b>Plant Transformation</b></h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;<i>A. tumefaciens</i> containing the construct or control was cultured at 30&deg;C for 48 hours, then pelleted and resuspended in an OD<sub>600</sub> = 0.5 in MM buffer (10 mM MES pH 5.6, 10 mM MgCl<sub>[2]</sub>). For agroinfiltration, the <i>A. tumefaciens</i> solution containing either gene or a control vector was mixed with the <i>A. tumefaciens</i> solution harboring the gene encoding the silencing inhibitor protein p19 at a ratio of 1:1. Thereafter, 100 mg/l acetosyringone was added, and the mixed culture solution was incubated at room temperature for 3 hours under dark conditions. The solution was then used to infiltrate the surface of three individual leaves per  <i>N. benthamiana</i> plant using a needleless 1-mL syringe. For each construct, 6-week-old plants were used.<sup>[3]</sup>. At least 4 leaves, considered as 4 replicates, were infiltrated for each construct.
                        </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/wet-lab/engineering/figurecombine2.png"/>
                        <h5>
                            Incubation of culture solution and infiltration of <i>N. benthamiana</i> 
                        </h5>
                    <h2 id="header7"><b>Conditions/Treatment</b></h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;The transiently overexpressed  <i>mDzGCL</i> and control in <i>N. benthamiana</i>  were treated under normal, drought, heat, and salt stress conditions. 
                        </p>
                        <div class="indent">
                            <ol type="a">
                                <li>
                                    <p>
                                        In normal conditions, the plants were grown under 25&deg;C receiving 16 hours of light and 8 hours of darkness while being watered daily. 
                                    </p>
                                </li>
                                <br></br>
                                <li>
                                    <p>
                                        Drought conditions were primarily simulated by not watering the <i>N. benthamiana</i> plants, starting from the first day. This was done immediately due to the previously wet soil taking a set amount of time to fully dry. The plants were still grown in the same temperatures and light/dark conditions as the normal conditions.  
                                    </p>
                                </li>
                                <br></br>
                                <li>
                                    <p>
                                        For the heat stress conditions, plants were grown under 25&deg;C receiving 16 hours of light and 8 hours of darkness while being watered every day. After 5 days, the <i>N. benthamiana</i> were placed in conditions under 30&deg;C with 12/12 hours of light/dark. <i>mDzGCL</i> will not be expressed until after 4 days, so variables are not introduced until after that amount of time.
                                    </p>
                                </li>
                                <br></br>
                                <li>
                                    <p>
                                        Salt stress conditions consisted of the <i>N. benthamiana</i> plants growing under 25&deg;C with 16/8 hours of light/dark and daily watering. After 5 days, 30mL of 150 mM of NaCl was added to the soil, and an additional 10mL every 2 days for a total of 11 days.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    <h2 id="header8"><b>&gamma;-EC Content Analysis</b></h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;The construct and control were agroinfiltrated on <i>N. benthamiana</i> leaves. After 5 days, the infiltrated leaves were collected, immediately frozen in liquid nitrogen, ground into a fine powder, and freeze dried, which was then used for the metabolite analysis.
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;The &gamma;-EC and GSH were extracted and analyzed by HPLC &apos;&apos;Metabolic variation in the pulps of two durian cultivars: Unraveling the &apos;&apos;<sup>[4]</sup> 
                        </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/wet-lab/engineering/wlengineering6.jpg"/>
                    
                    <h2 id="header9"><b>Statistical Analysis</b></h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;Significance analysis of the corresponding experimental data was performed using T-test calculator (*p &lt; 0.05).
                        </p>

                <h2 id="header10">Bibliography</h2>
                    <ol class="references">
                        <li>
                            Emanuelsson O, Brunak S, von Heijne G, Nielsen H. Locating proteins in the cell using targetp, signalp and related tools. Nature News. April 19, 2007. Accessed July 29, 2023. https://www.nature.com/articles/nprot.2007.131. 
                        </li>
                        <li>
                            Figueroa P, Leon G, Elorsa E, Holuigue L, Jordana X. Three different genes encode the iron-sulfur subunit of succinate dehydrogenase in Arabidopsis thaliana. Plant molecular biology. May 2001. Accessed June 15, 2023. https://pubmed.ncbi.nlm.nih.gov/11442063/.   
                        </li>
                        <li>
                            Khaksar G, Sangchay W, Pinsorn P, Sangpong L, Sirikantaramas S. Genome-wide analysis of the  <i>DOF</i> gene family in durian reveals fruit ripening-associated and cultivar-dependent DOF transcription factors. Nature News. August 20, 2019. Accessed June 16. https://www.nature.com/articles/s41598-019-48601-7.
                        </li>
                        <li>
                            Pinsorn P, Oikawa A, Watanabe M, et al. Metabolic variation in the pulps of two durian cultivars: Unraveling the metabolites that contribute to the flavor. Food Chemistry. June 15, 2018. Accessed October 8, 2023. https://doi.org/10.1016/j.foodchem.2018.06.066.  
                        </li>
                    </ol>
                <div  class="yBox100"/>

            </div>
        </div>
    </div>
   
  );
}

export default Engineering;
