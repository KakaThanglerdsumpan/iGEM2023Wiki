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
                        BRONZE MEDAL DELIVERABLES
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header2")}>
                        SILVER MEDAL DELIVERABLES
                    </button>
                    <button class="contentsButton" onClick={() => handleClick("header3")}>
                        GOLD MEDAL DELIVERABLES
                    </button>
                
                </div>
                
            {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
            {/* ====================CODE FOR TEXT STARTS=============================== */}

            </div>
            <div class="column text">
            <h1 id="header1"><center>Medal Requirements</center></h1>
                <div class="medalBox">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; Our team has completed the following deliverables required for the Bronze, Silver, and Gold medals.
                </p>
                </div>
                <div class="medalBox">
                    <h1 id="header2"><center>Bronze Medal Deliverables</center></h1>
                    <p>
                    Click on a deliverable for more details:
                    </p>
                    <p>
                    1. <Link style={{color:"#145C69"}} href="https://2023.igem.wiki/thailand-ris"><u>Wiki</u></Link>
                    </p>
                    <p>
                    2. <Link style={{color:"#145C69"}} href="https://competition.igem.org/deliverables/judging-form"><u>Judging Form</u> </Link> — then type &apos;&apos;Thailand-RIS&apos;&apos;
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
                        &nbsp;&nbsp;&nbsp;&nbsp;a. Part Registry Entry here: <Link style={{color:"#145C69"}} href="https://parts.igem.org/Part:BBa_K4629000"><u>part BBa_K4629000</u></Link>.
                    </p>
                    <p>
                    6.<Link style={{color:"#145C69"}} href="https://video.igem.org/w/4TvS4C6nUkvY3vV4T825Ri"><u>Project Promotion Video</u></Link>
                    </p>
                        <br/>
                    <iframe title="Thailand-RIS: 08 ES (2023) [English]" width="560" height="315" src="https://video.igem.org/w/4TvS4C6nUkvY3vV4T825Ri" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
                </div>
                <div class="medalBox">
                    <h1 id="header3"><center>Silver Medal Deliverables</center></h1>
                    <p>
                    
                    </p>

                </div>
                <div class="medalBox">
                    <h1 id="header3"><center>Gold Medal Deliverables</center></h1>
                </div>


            </div>
           
        </div>
    </div>

   
  );
}

