import Link from "next/link";
const Bottombar = () => {
  return (
    <div class="wideFooter">
      <div class="footer">
        <div class={`sponsors`}>
          <img
            class="sponsor"
            src={`https://static.igem.wiki/teams/4629/wiki/chulalongkorn.png`}
          />
          <img
            class="sponsor"
            src={`https://static.igem.wiki/teams/4629/wiki/bangchak1.png`}
          />
          <img
            class="sponsor"
            src={`https://static.igem.wiki/teams/4629/wiki/mahachok.png`}
          />
          <img
            class="sponsor"
            src={`https://static.igem.wiki/teams/4629/wiki/ris.png`}
          />
        </div>
        <hr />
        <h5 style={{ color: `white`, textAlign: `center` }}>
          © 2023 - Content on this site is licensed under a{" "}
          <Link
            style={{ color: `#145C69` }}
            href={`https://creativecommons.org/licenses/by/4.0/`}
          >
            <u>Creative Commons Attribution 4.0 International license</u>
          </Link>
          .
          <br />
          The repository used to create this website is available at{" "}
          <Link
            style={{ color: `#145C69` }}
            href={`https://gitlab.igem.org/2023/thailand-ris`}
          >
            <u>gitlab.igem.org/2023/thailand-ris</u>
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Bottombar;
