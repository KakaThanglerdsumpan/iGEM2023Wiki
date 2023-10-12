import {useRef} from 'react';

export default function NotebookPage() {

    const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/notebook.png";
    const narrowTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/phone/note.png";
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
           
        <div style={{paddingTop:"60px", margin:"auto"}}class="text">

                
            <iframe
            class="pdf"
            src="https://static.igem.wiki/teams/4629/wiki/wet-lab/igem-2023-tris-lab-notebook.pdf"
          />

                <div  class="yBox100"/>
        </div>
                


       
    </div>
   
  );
}
