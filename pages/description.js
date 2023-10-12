import {useRef} from 'react';
import Link from 'next/link'
export default function Description() {

    const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/description.png";
    const narrowTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/titlescreensphone/descriptionphone.png";
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
    
                
            {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
            {/* ====================CODE FOR TEXT STARTS=============================== */}

            <div style={{paddingTop:"60px", margin:"auto"}}class="text">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;Thailand is heavily dependent on its agricultural sector. According to the International Trade Administration<sup>[1]</sup>, agriculture employs approximately 1/3 of the Thai labor force. The United Nations Food and Agriculture Organization<sup>[2]</sup> denotes the total land used for agriculture in Thailand as 37%. Maintaining crop yields is, thus, crucial to sustain both Thailand’s food security and a healthy population. However, Thailand experiences frequent harsh weather conditions exacerbated by climate change: droughts, excessive heat, and rising sea levels all play a major factor in the declining health of crops. As weather conditions become more extreme each year, farmers are left with decreasing crop yields.
                </p>
                <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/wet-lab/description/wldesc1.jpg"/>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;Under stress, plants suffer cellular damage from the accumulation of reactive oxygen species (ROS). Oxidative stress is a common phenomenon that affects various organisms, from animals to plants to bacteria. When undergoing oxidative stress, organisms experience increased levels of ROS, which can cause damage to the basic building blocks of the cell, including DNA, proteins, and lipids.<sup>[3]</sup>. The effects of ROS in plants are often observable by the naked human eye, mainly seen as wilting following periods of stress through droughts, extreme temperatures, and elevated salinity levels.
                </p>
                <br></br>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;Aerobic cells naturally produce an antioxidant called Glutathione (GSH) which neutralizes the effects of ROS. However, Glutamate-Cysteine Ligase (GCL) — the rate-limiting enzyme of the GSH biosynthetic pathway — is localized in the chloroplasts of plant cells (Fig. 1). As a result, GSH is primarily synthesized within the chloroplast and then actively transported to the mitochondria, where it can combat high accumulations of ROS. This transportation process may cause plant stress response to be slower. 
                </p>
                <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/wet-lab/description/wldesc2.png"/>
                <h5>
                    <b>Figure 1:</b> Localization of biosynthesis pathway of glutamic acid and cysteine metabolizing into GSH through GCL and GSH synthase. (This figure was modified from Noctor <i>et at</i> ., 2011) <sup>[4]</sup>. 
                </h5>
                <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/wet-lab/description/wldesc3.png"/>
                <h5>
                    <b>Figure 2:</b> Biosynthesis pathway of glutamic acid and cysteine metabolizing into GSH through GCL and GSH synthase. 
                </h5>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;In GSH biosynthesis, GCL catalyzes the formation of &gamma;-Glutamyl-cysteine (&gamma;-EC), which subsequently forms GSH by glutathione synthase (GSS) (Fig. 2). A study by Quintana-Cabrera <i>et at</i>. (March 6, 2012) found that by directing the biosynthesis of &gamma;-EC to the mitochondria, which originally cannot produce GSH due to the absence of a mitochondrial GSS, the mitochondria could now effectively detoxify ROS, hydrogen peroxide and superoxide anions, in human HEK293T cell. Moreover, the full prevention of apoptotic death was also found in primary neurons which endogenously synthesized &gamma;-EC<sup>[5]</sup>. As ROS were also produced in plants, this paper inspired the team to create a hypothesis as to whether modifying GCL to localize to the mitochondria could in turn enhance the stress response of plants by shortening the pathway to neutralizing ROS.
                </p>
                <br></br>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;By directing GCL to the mitochondria by changing its transit peptide, plants might hypothetically be more effective in dealing with ROS. The goal of this project looking beyond this competition is increasing crop yields in Thailand through modified crops that are more resistant to environmental stress, which, in turn, supports the Thai agricultural sector as a whole. In doing so, Thailand-RIS aims to ensure that agricultural families in Thailand are equipped with the means to sustain themselves and form sustainable communities working towards both UN Sustainable Development Goal 11, Sustainable Cities and Communities, and Sustainable Development Goal 12, &apos;&apos;Responsible consumption and production&apos;&apos;.<sup>[2]</sup>
                </p>
                <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/wet-lab/description/wldesc4.jpg"/>

            <h2><b>References</b></h2>
                <ol class="references">
                    <li>
                        Thailand - agriculture. International Trade Administration | Trade.gov. July 25, 2022. Accessed Septeber 3, 2023. https://www.trade.gov/country-commercial-guides/thailand-agriculture#:~:text=Agriculture%20accounts%20for%20only%20six,canned%20tuna%2C%20and%20canned%20pineapple.
                    </li>
                    <li>
                        Country Profile - Thailand. Food and Agriculture Organization of the United Nations. 2011. Accessed September 7, 2023. https://www.fao.org/3/ca0408en/CA0408EN.pdf.
                    </li>
                    <li>
                        Huang C, Yin Z. Highly efficient synthesis of glutathione via a genetic engineering enzymatic method coupled with yeast ATP generation. Catalysts. 2019;10(1):33. doi:10.3390/catal10010033
                    </li>
                    <li>
                        Noctor G, Queval G, Mhamdi A, Chaouch S, Foyer CH. Glutathione. Arabidopsis Book. 2011;9:e0142. doi:10.1199/tab.0142.
                    </li>
                    <li>
                        Quintana-Cabrera R, Fernandez-Fernandez S, Bobo-Jimenez V, Escobar J, Sastre J, Almeida A, Bola&ntios JP. &gamma;-Glutamylcysteine detoxifies reactive oxygen species by acting as glutathione peroxidase-1 cofactor. Nature Communications. 2012;3(1):718. doi:10.1038/ncomms1722
                    </li>
                </ol>
            
            <div  class="yBox100"/>
            
            

            </div>
        </div>
   
  );
}

