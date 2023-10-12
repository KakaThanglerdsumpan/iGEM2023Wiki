import {useRef} from 'react';

export default function DesignPage() {

    const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/design.png";
    const narrowTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/phone/labtitletext.png";
    const handleClick = (elID) => {
    const element = document.getElementById(elID)
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
  };
  

  return (
    <div>
        <img class="wideTitleScreen" style={{width: "100%", marginBottom: "-4px"}} src={wideTitleScreenUrl}/>
        <div class="row">
            <div class="contentsBar">
                <div style={{position: "sticky", top:"200px"}}class="column">
                    <h2 style={{marginBottom: '20px'}}>Design</h2>
                    <button class="contentsButton" onClick={() => handleClick("header1")}>
                        Synthesizing the Mitochondrial GCL
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header2")}>
                        Evaluation through <i>In Silico</i> Analysis 
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header3")}>
                        Plasmid Design
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header4")}>
                        References
                    </button>
                </div>
                

                
            </div>
            <div style={{paddingTop:"60px"}}class="text">
    


                <h1 id="header1">Synthesizing the Mitochondrial GCL</h1>
                <p>The synthesis of the mitochondrial <i>Durio zibethinus</i> Glutamate-Cysteine Ligase (mDzGCL) protein used in this project was done through replacing the chloroplast transit peptide found in <i>Durio zibethinus</i> Glutamate-Cysteine Ligase (DzGCL) with a mitochondrial transit peptide found in <i>Arabidopsis thaliana</i> succinate dehydrogenase (SDH).</p>
                    <div class="indent">

                    <h2>Plant and Gene Selection</h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;DzGCL was selected as the ideal candidate GCL protein for relocalization due to its remarkable attributes observed in <i>D. zibethinus</i>. This unique plant species displays significantly elevated levels of glutathione (GSH)<sup>[1]</sup> in its ripe fruit pulp much higher than that in other plants<sup>[2]</sup>. This distinct characteristic suggests the DzGCL as a candidate enzyme with possibly high activity. GCL serves as the rate limiting enzyme in the production of GSH, the primary antioxidant. 

                            <br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;<i>A. thaliana</i>  SDH, on the other hand, served as our model for obtaining the mitochondrial transit peptide. <i>A. thaliana</i> was chosen as our model plant due to its well-established status in plant biology research, with its genetic characteristics widely studied and understood<sup>[3]</sup>. Furthermore, given that SDH is a fundamental component within the mitochondrial electron transport chain, the team hypothesized that it must contain a mitochondrial transit peptide facilitating its localization to the mitochondria. Through literature review, this hypothesis was found to be valid as Figueroa <i>et al</i>. successfully identified the transit peptide in <i>A. thaliana</i> SDH and validated its role in localizing SDH to the mitochondria in 2001<sup>[4]</sup>. 

                        </p>
                    <h2>Gene Modification</h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;The first step was to identify the amino acid sequence of DzGCL from the NCBI database (accession number: XP_022738907.1). After obtaining the amino acid sequence, the natural chloroplast transit peptide of DzGCL must be predicted in order to be deleted and replaced accordingly. The chloroplast transit peptide within DzGCL was predicted through the TargetP-2.0 software<sup>[5]</sup>(Fig. 1), utilizing its deep learning algorithm trained on a diverse dataset of biological sequences, including known chloroplast transit peptides,  to recognize indicative features of sorting signals<sup>[6]</sup>. 

                        </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig1.png"/>
                        <h5>
                            <b>Figure 1.</b> Prediction of chloroplast transit peptide in DzGCL by TargetP-2.0, where all of the amino acids from the left peak and onwards to the left boxed in gray were predicted to be part of the chloroplast transit peptide. 
                        </h5>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; After deleting the chloroplast transit peptide from DzGCL, the next step was to identify the amino acid sequence for <i>A. thaliana</i> SDH from NCBI database (accession number: CAC19855.1), in which the mitochondrial transit peptide has already been identified as amino acids positions 1 to 29 by Figueroa <i>et al</i>.<sup>[4]</sup>. The identified mitochondrial transit peptide was subsequently copied and inserted into the DzGCL in the stead of the deleted chloroplast transit peptide, yielding mDzGCL as shown in Fig. 2. The amino acid sequences were finally translated back to nucleotides to obtain <i>mDzGCL</i> gene utilized in the plasmid.  

                        </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig2.png"/>
                        <h5>
                            <b>Figure 2.</b> Diagram of the replacement of the transit peptide in the GCL amino acid sequence
                        </h5>
                    </div>

                <h1 id="header2">Evaluation of the Modified Protein through <i>In Silico</i> Analysis</h1>
                    <h2>Localization</h2>

                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;After acquiring mDzGCL, <i>In silico</i> subcellular localization prediction of the modified GCL was performed through deep learning using TargetP-2.0 to confirm the success of the modification in producing a mitochondrial GCL. As shown in the table in Fig. 4, it was predicted that mDzGCL will localize in the mitochondria with a 92.25% probability that its transit peptide is mitochondrial, confirming the success of the modification in relocalizing the DzGCL to the mitochondria. 
                            
                        </p>

                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig3.png"/>
                        <h5>
                            <b>Figure 3.</b> Subcellular localization prediction of the modified mDzGCL by TargetP-2.0
                        </h5>

                    <h2>Function</h2>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;After confirming the localization of the mDzGCL to be mitochondria, the next step was to confirm that the enzymatic function of the modified GCL (mDzGCL) was not disturbed by the modification of the transit peptide and was still the same as that of the unmodified GCL (DzGCL).
                        <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Having the FASTA sequences of the chloroplastic DzGCL and the mitochondrial mDzGCL, the first thing done was to acquire predictions of their maps through the HMMER program <sup>7</sup>, HMMScan, which utilizes the hidden Markov model and statistical analyses to find matches in the sequence with known functional domain sequences in a database. In this case, the Pfam protein database<sup>8</sup> was used. The maps outputted by HMMScan of DzGCL and mDzGCL are displayed in Fig. 4 and Fig. 5, respectively. Both figures show that HMMScan was able to identify the signature glutamate-cysteine ligase family 2 functional domain of a GCL represented by the brown section in the maps. Furthermore, the length of the functional domains calculated by finding the difference in the end and the start amino acid positions were found to be the same. Thus, the modifications in the mDzGCL were shown to have not disturbed the functional domain of GCL. 
                    </p>
                    <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig4.jpg"/>
                        <h5>
                            <b>Figure 4.</b> Map of DzGCL (unmodified) predicted through HMMScan (HMMer) showing the signature glutamate-cysteine ligase family 2 functional domain of a GCL. 
                        </h5>
                    <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig5.jpg"/>
                        <h5>
                            <b>Figure 5.</b> Map of mDzGCL (modified )predicted through HMMScan (HMMer), which also shows the signature glutamate-cysteine ligase family 2 functional domain of a GCL. 
                        </h5>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    To further verify the integrity of the enzymatic function of GCL in mDzGCL, 3D structures of DzGCL and mDzGCL were predicted using AlphaFold2, a software that combines empirical knowledge on protein structure with a deep-learning algorithm, leveraging evolutionary data through multiple-sequence alignment. This approach often yields protein models of comparable accuracy to experimentally determined structures<sup>9, 10</sup>. The predictions obtained from AlphaFold2 were then visualized in PyMOL v2.5.5 (by Schrödinger) for analysis. Shown in Fig. 6, the 3D structures of DzGCL and mDzGCL, respectively, are observably similar except for the tail, in which the difference is due to modifications in the N-terminal when replacing the chloroplast transit peptide in mDzGCL with mitochondrial one. The similarity between the two 3D structures is better displayed in Fig. 7, where the DzGCL (green) and mDzGCL (red) are overlaid, and a complete overlap is observable. Therefore, since the structure of the modified GCL (mDzGCL) closely resembles that of the unmodified GCL (DzGCL), the enzymatic function should also remain approximately the same. 

                    </p>
                    <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig6.png"/>
                        <h5>
                            <b>Figure 6.</b> The 3D structures of DzGCL (unmodified) and mDzGCL (the modified DzGCL) predicted through AlphaFold2. The functional domain of  DzGCL and mDzGCL are highlighted in green and red, respectively.
                        </h5>
          
                    <img class="figureTooBig"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig8.jpg"/>
                        <h5>
                            <b>Figure 7.</b>  3D structures of DzGCL (unmodified) and mDzGCL predicted through AlphaFold2, overlaid, showing complete overlap.                         
                        </h5>
                   <p></p>
                    
                <h1 id="header3">Plasmid Design</h1>
                    <img class="figureTooBig"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig9.jpg"/>
                        <h5>
                            <b>Figure 8:</b> <i>mDzGCL</i> in  pCAMBIA1301 plasmid construct
                        </h5>
                    <img class="figureTooBig"src="https://static.igem.wiki/teams/4629/wiki/dry-lab/fig10.jpg"/>
                         <h5>
                             <b>Figure 9:</b> <i>GFP</i> in  pCAMBIA1301 Plasmid Construct
                        </h5>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        In total, two plasmids were used in the project: one is the <i>mDzGCL</i> in pCAMBIA1301 to infiltrate plants with the <i>mDzGCL</i> gene designed by the team and the other is the <i>GFP</i> in pCAMBIA1301 as a positive control<br/>

                        &nbsp;&nbsp;&nbsp;&nbsp;
                        The pCAMBIA 1301 <i>mDzGCL</i> construct (Fig. 8) contains the the <i>DzGCL</i> gene acquired from <i>D. zibethinus</i> and the gene for the mitochondrial transit peptide from <i>A. thaliana</i>.. This transit peptide allows for localization of DzGCL into the mitochondria instead of the chloroplast. Additionally the plasmid was constructed using the pCAMBIA1301 (AF234297.1) template, which includes antibiotic resistance genes. Specifically, it features a kanamycin resistance gene to select bacteria, as only transformed bacteria will survive in environments with this antibiotic. Additionally, a hygromycin marker enables the selection of transformed plants. The 35s gene promoter in this construct enhances the expression level of the <i>mDzGCL</i>  within the infiltrated plants, aligning with the project&apos;s aim to make the GSH pathway more efficient.<br/>

                        &nbsp;&nbsp;&nbsp;&nbsp;
                        The <i>GFP</i> construct (Fig. 9) contains Green Fluorescent Protein which makes the infiltrated plant grow when exposed to blue to UV range light. This construct does not interfere with the GSH Pathway so it can serve as a positive control for comparing <i>mDzGCL</i>-infiltrated plants under different environmental conditions. Similarly to <i>mDzGCL</i>, it also incorporates the 35s promoter. Other plasmid components also mirror those of the <i>mDzGCL</i> plasmid, ensuring a precise comparison of the impact of the mitochondrial transit peptide and GCL on plant stress response.<br/><br/>

                        &nbsp;&nbsp;&nbsp;&nbsp;
                        All the components mentioned above were acquired from the NCBI database (https://www.ncbi.nlm.nih.gov/) and put into one sequence. This sequence was then sent to the Biomatik Company (USA) for gene synthesis and its insertion into the vector.

                    </p>

            <h2 id="header4">References</h2>
                <ol class="references">
                    <li>
                        Singcha P, Khaksar G, Sirijan M, Sirikantaramas S. Durian (<i>Durio zibethinus</i> L.) fruit: A superior dietary source of natural glutathione and &gamma;-glutamylcysteine. SSRN. 2023; 4566631. doi:10.2139/ssrn.4566631
                    </li>
                    <li>
                        Pinsorn P, Oikawa A, Watanabe M, Sasaki R, Ngamchuachit P, Hoefgen R, Saito K, Sirikantaramas S. Metabolic variation in the pulps of two durian cultivars: Unraveling the metabolites that contribute to the flavor. Food Chemistry. 2018; 268:118-125. doi:10.1016/j.foodchem.2018.06.066
                    </li>
                    <li>
                        Meinke DW, Cherry JM, Dean C, Rounsley SD, Koornneef M. <i>Arabidopsis thaliana</i>: A model plant for genome analysis. Science. 1998 Oct 23;282(5389):662-682. doi:10.1126/science.282.5389.662
                    </li>
                    <li>
                        Figueroa P, Leon G, Elorsa E, Holuigue L, Jordana X. Three different genes encode the iron-sulfur subunit of succinate dehydrogenase in <i>Arabidopsis thaliana</i>. Plant Molecular Biology. 2021;46:241-250. doi:10.1023/A:1010612506070
                    </li>
                    <li>
                        Emanuelsson O, Brunak S, von Heijne G, Nielsen H. Locating proteins in the cell using targetp, signalp and related tools. Nature Protocols. 2007;2(4):953-971. doi:10.1038/nprot.2007.131
                    </li>
                    <li>
                        Armenteros JJ, Salvatore M, Emanuelsson O, Winther O, Von Heijne G, Elofsson A, Nielsen H. Detecting sequence signals in targeting peptides using deep learning. Life Science Alliance. 2019;2(5). doi:10.26508/lsa.201900429
                    </li>
                    <li>
                        Finn RD, Clements J, Eddy SR. HMMER web server: interactive sequence similarity searching. Nucleic Acids Research. 2011;39(suppl_2):W29-37. doi:10.1093/nar/gkr367
                    </li>
                    <li>
                        Bateman A, Coin L, Durbin R, Finn RD, Hollich V, Griffiths-Jones S, Khanna A, Marshall M, Moxon S, Sonnhammer EL, Studholme DJ. The Pfam protein families database. Nucleic Acids Research. 2004;32(suppl_1):D138-141. doi:10.1093/nar/gkh121
                    </li>
                    <li>
                        Jumper J, Evans R, Pritzel A, Green T, Figurnov M, Ronneberger O, Tunyasuvunakool K, Bates R, Žídek A, Potapenko A, Bridgland A. Highly accurate protein structure prediction with AlphaFold. Nature. 2021;596(7873):583-589. doi:10.1038/s41586-021-03819-2
                    </li>
                    <li>
                        Evans R, O&apos;Neill M, Pritzel A, Antropova N, Senior A, Green T, Žídek A, Bates R, Blackwell S, Yim J, Ronneberger O. Protein complex prediction with AlphaFold-Multimer. biorxiv. 2021:2021-10. doi:10.1101/2021.10.04.463034
                    </li>

                </ol>

                <div  class="yBox100"/>
                


            </div>
        </div>
    </div>
   
  );
}
