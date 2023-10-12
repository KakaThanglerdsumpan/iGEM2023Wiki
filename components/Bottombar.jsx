import React from "react";

function Footer() {
  return (
    <footer className="bg-what text-white p-6">
      <div className="flex flex-wrap justify-center space-x-6 mb-6">
        <img
          src="https://static.igem.wiki/teams/4629/wiki/chulalongkorn-university-official-logo-svg.png"
          className="h-16 sm:h-32"
          alt="Sponsor"
        />
        <img
          src="https://static.igem.wiki/teams/4629/wiki/bangchak.png"
          className="h-16 sm:h-32"
          alt="Sponsor"
        />
        <img
          src="https://static.igem.wiki/teams/4629/wiki/logo-mahachok-fruits-01.png"
          className="h-16 sm:h-32"
          alt="Sponsor"
        />
        <img
          src="https://static.igem.wiki/teams/4629/wiki/ris.png"
          className="h-16 sm:h-32"
          alt="Sponsor"
        />
      </div>
      <div className="text-center">
        <p className="mb-0 text-white text-sm sm:text-base">
          &copy; 2023 - Content on this site is licensed under a{" "}
          <a
            className="text-faded-underline underline"
            href="https://creativecommons.org/licenses/by/4.0/"
            rel="license"
          >
            Creative Commons Attribution 4.0 International license
          </a>
          .
        </p>
        <p className="text-white text-sm sm:text-base">
          The repository used to create this website is available at{" "}
          <a
            className="text-faded-underline underline"
            href="https://gitlab.igem.org/2023/thailand-ris"
          >
            gitlab.igem.org/2023/thailand-ris
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
