import {useRef} from 'react';
import Link from 'next/link'
export default function Contribution() {

    const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/contribution.png";
    const narrowTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/titlescreensphone/contributionphone.png";
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
           
            <div style={{paddingTop:"60px"}}class="text">

                <h1><b>New Basic Parts Registry</b></h1>
                    <p>
                        Our team used the enzyme glutamate-cysteine ligase of <i>Durio zibethinus</i>, referred to as DzGCL, as the basis for our project. GCL is an enzyme which produces the precursor elements of glutathione (GSH) in the chloroplast. GSH increases effectiveness of plant stress response as it mitigates increased levels of reactive oxygen species (ROS).
                    </p>
                    <br></br>
                    <p>
                        The amino acid sequence of <i>DzGCL</i> was obtained from the NCBI database (accession number: XP_022738907.1).
                    </p>
                    <br></br>
                    <p>
                        Our team has listed the gene <i>DzGCL</i> in the parts registry as <Link style={{color:`blue`}} href={`https://parts.igem.org/Part:BBa_K4629000`}><u>part BBa_K4629000</u></Link>.
                    </p>
                    <br></br>
                    <p>
                        Additionally, our team also modified <i>DzGCL</i> by removing the chloroplast transit peptide and replacing it with a mitochondrial transit peptide to form the gene <i>mDzGCL</i>. It is listed as <Link style={{color:`blue`}}href={`https://parts.igem.org/Part:BBa_K4629001`}><u>part BBa_K4629001</u></Link>. Additional information regarding the design of <i>mDzGCL</i> can be found in the <Link style={{color: `blue`}}href={`/engineering`}><u>Engineering section</u></Link>.
                    </p>
                <div  class="yBox100"/>

            </div>
    </div>
   
  );
}
