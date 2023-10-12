import {useRef} from 'react';
import Link from 'next/link';

export default function MedalPage() {

    const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/medalrequirements.png";
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
                <div style={{position: "sticky", top:"200px"}}class="column">
                    <h2 style={{marginBottom: '20px'}}>Medal Requirements</h2>
                    <button class="contentsButton" onClick={() => handleClick("header1")}>
                        Bronze Medal Deliverables
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header2")}>
                        Silver Medal Deliverables
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header3")}>
                        Gold Medal Deliverables
                    </button>
                
                </div>
                
            {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
            {/* ====================CODE FOR TEXT STARTS=============================== */}

            </div>
            <div class="column medalRequirements">
                <div class="yBox60"/>
                <div class="medalBox">
                <h1><center>Medal Requirements</center></h1>

                <p style={{textAlign:`center`}}>
                    &nbsp;&nbsp;&nbsp;&nbsp; Our team has completed the following deliverables required for the Bronze, Silver, and Gold medals.
                </p>
                </div>
                <div class="medalBox">
                    <h1 id="header1" class="medal"><center>Bronze Medal Deliverables</center></h1>
                    <p>
                    Click on a deliverable for more details:
                    </p>
                    <p>
                    1. <Link style={{color:"#145C69"}} href="https://2023.igem.wiki/thailand-ris"><u>Wiki</u></Link>
                    </p>
                    <p>
                    2. <Link style={{color:"#145C69"}} href="https://competition.igem.org/deliverables/judging-form"><u>Judging Form</u> </Link> — then enter &apos;&apos;Thailand-RIS&apos;&apos;
                    </p>
                    <p>
                    3. <Link style={{color:"#145C69"}} href="https://attributions.igem.org/?teamID=4629"><u>Project Attributions</u></Link>
                    </p>
                    <p>
                    4. <Link style={{color:"#145C69"}} href="https://2023.igem.wiki/thailand-ris/description"><u>Project Description & Inspiration</u></Link>
                    </p>
                    <p>
                    5. <Link style={{color:"#145C69"}} href="https://2023.igem.wiki/thailand-ris/contribution"><u>Contribution</u></Link>
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;a. Part Registry Entry here: <Link style={{color:"#145C69"}} href="https://parts.igem.org/Part:BBa_K4629000"><u>part BBa_K4629000</u></Link>
                    </p>
                    <p>
                    6.<Link style={{color:"#145C69"}} href="https://video.igem.org/w/4TvS4C6nUkvY3vV4T825Ri"><u>Project Promotion Video</u></Link>
                    </p>
                    <br/>
                        <iframe title="Thailand-RIS: Thailand RIS: Powering up Plant Defenses (2023) - Project Promotion [English]" class="medalPromoVid" src="https://video.igem.org/videos/embed/1f7cc087-7d9d-4442-aad9-f2ddad466c73" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
                </div>
                <div class="medalBox">
                    <h1 id="header2"  class="medal"><center>Silver Medal Deliverables</center></h1>
                    <h2>
                        Engineering
                    </h2>
                    <p>
                        This page details our team&apos;s progress through the engineering cycle: After conducting research by surveying farmers and the general public, we devised a strategy to tackle the identified issue of environmental stressors affecting crop yields. The approach to test our hypothesis for resolving this issue is outlined in the engineering section: mDZGCL was tested against GFP in three different types of stress and phenotype changes were observed. 
                    </p>
                    <br/>
                    <p>
                        More information here: <Link style={{color:"#145C69"}} href="https://2023.igem.wiki/thailand-ris/engineering"><u>Engineering</u></Link>
                    </p>
                    <p>
                        Part Registry Entry here: <Link style={{color:"#145C69"}} href="https://parts.igem.org/Part:BBa_K4629001"><u>part BBa_K4629001</u></Link>
                    </p>
                    <h2>
                        Human Practices
                    </h2>
                    <p>
                        This page includes the outreach and education we conducted during our project. We planned and carried out three interactive experiences based on genetic engineering in plants as a possible solution to reduce climate induced stress. This allowed us to better understand how our project may affect society, and also spread awareness of synthetic biology to the general public.
                    </p>
                        <br/>
                    <p>
                        More information here: <Link style={{color:"#145C69"}} href="https://2023.igem.wiki/thailand-ris/human-practices"><u>Human Practices</u></Link>
                    </p>
                </div>
                <div class="medalBox">
                    <h1 id="header3"class="medal"><center>Gold Medal Deliverables</center></h1>
               
                <h2>
                    Excellence in Synthetic Biology
                </h2>
                <p>
                    Our team uploaded an engineered part to the Parts Registry for the <b>Best New Basic Part Category</b>
                </p>
                <br/>
                <p>
                    More information here: <Link style={{color:"#145C69"}} href="https://2023.igem.wiki/thailand-ris/engineering"><u>Engineering Success</u></Link>
                </p>
                <p>
                    Part Registry entry here: <Link style={{color:"#145C69"}} href="https://parts.igem.org/Part:BBa_K4629001"><u>part BBa_K4629001</u></Link>
                </p>
            <h2>
                Specializations
            </h2>
            <p>
                Our team is submitting specializations in the <b>Best Integrated Human Practices</b> and <b>Inclusivity Award</b> categories. The two pages below highlight the accomplishments within our project that qualify us to receive prizes in these two categories.
            </p>
            <br/>
            <p><Link style={{color:"#145C69"}} href="https://2023.igem.wiki/thailand-ris/human-practices"><u>1. Human Practices</u></Link></p>
            <p><Link style={{color:"#145C69"}} href="https://2023.igem.wiki/thailand-ris/inclusivity"><u>2. Inclusivity</u></Link></p>
            </div>
            </div>
        </div>
    </div>

   
  );
}

