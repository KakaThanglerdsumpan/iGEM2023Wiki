import Link from 'next/link'
const Bottombar = () => {
  return (
    <div class="footer">
        
        <div class={`sponsors`}>
          <img  height="100px"src={`https://static.igem.wiki/teams/4629/wiki/chulalongkorn.png`}/> 
          <img src={`https://static.igem.wiki/teams/4629/wiki/bangchak.png`}/> 
          <img src={`https://static.igem.wiki/teams/4629/wiki/mahachok.png`}/> 
          <img src={`https://static.igem.wiki/teams/4629/wiki/ris.png`}/> 

        </div>
        <h5 style={{color:"white", }}>
          © 2023 - Content on this site is licensed under a <Link style={{color: `#145C69`}} href={`https://creativecommons.org/licenses/by/4.0/`}><u>Creative Commons Attribution 4.0 International license</u></Link>.
          <br/>
          The repository used to create this website is available at <Link style={{color: `#145C69`}} href={`https://gitlab.igem.org/2023/thailand-ris`}><u>gitlab.igem.org/2023/thailand-ris</u></Link> 
        </h5>
    </div>
  );
};

export default Bottombar;
