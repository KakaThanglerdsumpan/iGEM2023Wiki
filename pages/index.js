// import {useRef} from 'react';

// export default function HomePage() {

//     const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/igemhomepagefinal.jpg";
//     const handleClick = (elID) => {
//     const element = document.getElementById(elID)
//     if (element) {
//         element.scrollIntoView({behavior: 'smooth'});
//     }
//   };
// //   

//   return (
//     <div>
//         <img class="wideTitleScreen" style={{width: "100%", marginBottom: "-4px"}} src={wideTitleScreenUrl}/>
                

//             <div style={{paddingTop:"60px", margin: "auto"}}class="text">
//                     <p>
//                         &nbsp;&nbsp;&nbsp;&nbsp;This project has a biosafety level of 2. To manage the amount of risk in this project, a strict set of rules were followed and written procedures were planned and approved by the Chulalongkorn lab advisors to ensure proper biosafety. Proper training on decontamination, biological waste management, personal protective equipment, safe handling of biological spills, and the transportation of biological materials were received from the Chulalongkorn lab advisors. This allowed the team to upload lab rules to a high standard. Additionally, the team was provided with the proper personal protective equipment, biosafety supplies, and training for this project. <sup>[1-7]</sup>
//                     </p>
//                     <p>
//                         &nbsp;&nbsp;&nbsp;&nbsp;For example, when working with <i>A. tumefaciens</i>, a biosafety cabinet was used to prevent the potential effects of inhalation or skin contact. When agroinfiltrating <i>N. benthamiana</i>, safety glasses and lab coats were used to prevent the <i>A. tumefaciens</i> from entering the eyes. 
//                     </p>
//                     <br></br>
//                     <p>
//                         &nbsp;&nbsp;&nbsp;&nbsp;Thailand-RIS team members did not take any substances outside of the lab and did not bring any inside (i.e. food). The lab used is one that is used by many other Chulalongkorn biologists who, alongside the Thailand-RIS team, adhere to strict regulations<sup>[1-7]</sup> to remain safe for biosafety level 2 experiments. Materials were autoclaved as needed in order to avoid contamination and spread. Gloves and other equipment were properly disposed of into a designated trash bin for biological waste. 
//                     </p>
//                     <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/wet-lab/safety/wlsafety1.jpg"/>
//                     <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/wet-lab/safety/wlsafety2.jpg"/>
//                     <h5>
//                         Agroinfiltration of <i>N. benthamiana</i> with gloves, lab coats, and safety goggles. Safety goggles were used during agroinfiltration to prevent the solution from entering the eyes. Biosafety cabinet used when creating the agroinfiltration solution.
//                     </h5>

//                 <h2>References</h2>
//                     <ol class="references">
//                         <li>
//                             Chuanchuen R. Biological Spills - Response and Clean Up. Cuvetamr.vet.chula.ac.th. September 16, 2020. Accessed June 13, 2023. http://www.cuvetamr.vet.chula.ac.th/media/content/file/2021/04/CONTENT_FILE_35_20210421083831.pdf.
//                         </li>
//                         <li>
//                             Chuanchuen R. Hands on Practice - PPE. Cuvetamr.vet.chula.ac.th. September 16, 2020. Accessed June 13, 2023. http://www.cuvetamr.vet.chula.ac.th/media/content/file/2021/04/CONTENT_FILE_35_20210421082952.pdf.
//                         </li>
//                         <li>
//                             Chuanchuen R. Decontamination. Cuvetamr.vet.chula.ac.th. September 16, 2020. Accessed June 13, 2023. http://www.cuvetamr.vet.chula.ac.th/media/content/file/2021/04/CONTENT_FILE_35_20210421082830.pdf.
//                         </li>
//                         <li>
//                             Biosafety Equipment — PPE and BSCs. Cuvetamr.vet.chula.ac.th. Accessed June 13, 2023. http://www.cuvetamr.vet.chula.ac.th/media/content/file/2021/04/CONTENT_FILE_35_Biosafety%20equipment_PPE%20BSC.pdf.
//                         </li>
//                         <li>
//                             Biosafety Equipment - Decontamination &amp; Disinfection. Cuvetamr.vet.chula.ac.th. Accessed June 13, 2023. http://www.cuvetamr.vet.chula.ac.th/media/content/file/2021/04/CONTENT_FILE_35_20210421075056.pdf.
//                         </li>
//                         <li>
//                             Chuanchuen R. Biological Waste Management. Cuvetamr.vet.chula.ac.th. September 16, 2020. Accessed June 13, 2023. http://www.cuvetamr.vet.chula.ac.th/media/content/file/2021/04/CONTENT_FILE_35_20210421075030.
//                         </li>
//                         <li>
//                             Puangseree J. Transportation of Biological materials. Cuvetamr.vet.chula.ac.th. September 16, 2020. Accessed June 13, 2023. http://www.cuvetamr.vet.chula.ac.th/media/content/file/2021/04/CONTENT_FILE_35_20210421083845.pdf.
//                         </li>
//                     </ol>

//             </div>
            
//             <div  class="yBox60"/>


//         </div>
   
//   );
// }

// import {useRef} from 'react';

// export default function HomePage() {
//     return (
//         <div>
//             <div class="titleScreen">
//         <div class="column">
//           <div class="sizedbox100" />
//           <h1 class="title">THAILAND_RIS</h1>
//           <h3 class="description">
//             Modifying and expressing a novel antimicrobial peptide, bombolitin,
//             to combat bacterial wilt caused by the plant pathogenic bacteria{" "}
//             <i>Ralstonia solanacearum</i> in solanaceous crops.
//           </h3>
//           <img
//             src="https://static.igem.wiki/teams/4314/wiki/igemlogopurple.png"
//             class="titlelogo"
//           />
//         </div>
//       </div>
//       <div class="sizedbox100"/>
//       <div class="sizedbox30"/>
//       <h1 class="heading" align="center">
//         PROMOTIONAL VIDEO
//       </h1>
//       <div class="sizedbox20"/>
//       <div class="stack">
//         <img
//           src="https://static.igem.wiki/teams/4314/wiki/blob-1.svg"
//           class="stackedchild bgblob"
//         />
//         <iframe
//           title="Thailand_RIS: Bacteria-Battling Bombolitin (2022) - Project Promotion [English]"
//           class="video promovid"
//           src="https://video.igem.org/videos/embed/2a213e6b-77ef-475c-94ec-f4ba8cef0e55"
//           frameborder="0"
//           allowfullscreen=""
//           sandbox="allow-same-origin allow-scripts allow-popups"
//         ></iframe>
//       </div>
//         </div>

//     );
// }

import {useRef} from 'react';
import Link from 'next/link'
import Image from 'next/image';

function HomePage() {
    return(
       <div>
            <section class="pls1">
                <div class="masthead">
                    <div class="text-container">
                        <h1 class="homeTitle">
                            THAILAND-RIS
                        </h1>
                        <h2 class="projectTitle">
                            Powering Up Plant Defenses
                        </h2>
                        
                        <h3 style={{maxWidth:`650px`, textAlign: `center`}} class="text-white text-lg">
                            Modification of glutamate-cysteine ligase subcellular localization to
                            enhance plant stress response rates through improved
                            reactive oxygen species mitigation.
                        </h3>
                    </div>
                </div>
            </section>
        
        <div class="stack">
        <img
          src="https://static.igem.wiki/teams/4629/wiki/promobackground.png"
          class="stackedchild bggradient" 
        />
       
        <iframe title="Thailand-RIS: TRIS Title animation (2023) [English]"      class="video promovid" src="https://video.igem.org/videos/embed/4016ee61-6073-43e6-b29a-57b543f65205" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
      </div>
        
       </div>
    );
}
export default HomePage;
