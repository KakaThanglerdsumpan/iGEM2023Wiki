import Image from "next/image";
import React from "react";

import "tailwindcss/tailwind.css";

// // import '../styles/index.module.css';

// // function MastHead() {
// //     return (
// //       <div class="masthead">
// //         <video
// //           autoplay
// //           loop
// //           muted
// //           playsinline
// //           class="absolute w-full min-h-screen object-cover video-bg"
// //         >
// //           <source src="/thailand-ris/Titleanimation.mp4" />
// //         </video>
// //         <div class="text-container absolute w-full text-center bottom-20 drop-shadow">
// //           <p class="text-white text-heading">Thailand-RIS</p>
// //           <p class="text-white text-subheading">Powering up Plant Defenses</p>
// //           <p class="text-white text-description">
// //             Modifying glutamate-cysteine ligase localization to boost plant stress
// //             response rates through improved reactive oxygen species mitigation.
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }
  

// function MastHead() {
//   return (
//     <div className="masthead">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute w-full min-h-screen object-cover"
//       >
//         <source src="https://video.igem.org/videos/embed/4016ee61-6073-43e6-b29a-57b543f65205" />
//       </video>
//       <div className="text-container absolute w-full text-center bottom-20 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
//         <p className="text-white text-4xl sm:text-6xl">Thailand-RIS</p>
//         <p className="text-white text-3xl sm:text-4xl">
//           Powering up Plant Defenses
//         </p>
//         <p className="text-white text-lg sm:text-xl">
//           Modifying glutamate-cysteine ligase localization to boost plant stress
//           response rates through improved reactive oxygen species mitigation.
//         </p>
//       </div>
//     </div>
//   );
// }

// const BackgroundVideo = () => {
//   return (
//     <div className="relative min-h-screen">
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{
//           backgroundImage:
//             'url("https://static.igem.wiki/teams/4629/wiki/promobackground.png")',
//         }}
//       ></div>

//       <div className="absolute inset-0 flex items-center justify-center z-100">
//         <video
//           className="w-3/4 h-auto rounded-[5%]"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/thailand-ris/Titleanimation.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// const Pls = () => {
//   return (
//     <div className="relative min-h-screen">
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{
//           backgroundImage:
//             'url("https://static.igem.wiki/teams/4629/wiki/gradient.png")',
//         }}
//       ></div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-transparent absolute inset-0 text-center items-center justify-center z-100">
//         <div className="p-5"></div>
//         <div className="p-5">
//           <h1 className="text-what text-3xl sm:text-5xl font-black">
//             INCREASE
//           </h1>
//           <h1 className="text-xl sm:text-2xl font-bold">
//             plant stress response capabilities.
//           </h1>
//         </div>
//         <div className="p-5">
//           <h1 className="text-whatt text-3xl sm:text-5xl font-black">35%</h1>
//           <h1 className="text-xl sm:text-2xl font-bold">
//             of farmers in Chantaburi cited droughts as the most pressing issue
//             towards their crop yields.
//           </h1>
//         </div>
//         <div className="p-5"></div>
//       </div>
//     </div>
//   );
// };

// const Bgimage = () => {
//   return (
//     <div className="relative min-h-screen">
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{
//           backgroundImage:
//             'url("https://static.igem.wiki/teams/4629/wiki/quotebackground.png")',
//         }}
//       ></div>

//       <div className="absolute inset-0 flex items-center text-center justify-center z-100  drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
//         <div class="flex items-center justify-center h-screen text-white">
//           <div class="text-center">
//             <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
//               The difference between life and death:
//             </h1>
//             <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
//               48 hours
//             </h1>
//             <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
//               one gene.
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       <MastHead />
//       <BackgroundVideo />
//       <Pls />
//       <Bgimage />
//     </div>
//   );
// }


function MastHead() {
    return (
      <div className="tw-masthead">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="tw-absolute w-full min-h-screen object-cover"
        >
          <source src="https://video.igem.org/videos/embed/4016ee61-6073-43e6-b29a-57b543f65205" />
        </video>
        <div className="tw-text-container tw-absolute w-full tw-text-center tw-bottom-20 tw-drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
          <p className="tw-text-white tw-text-4xl tw-sm:text-6xl">Thailand-RIS</p>
          <p className="tw-text-white tw-text-3xl tw-sm:text-4xl">
            Powering up Plant Defenses
          </p>
          <p className="tw-text-white tw-text-lg tw-sm:text-xl">
            Modifying glutamate-cysteine ligase localization to boost plant stress
            response rates through improved reactive oxygen species mitigation.
          </p>
        </div>
      </div>
    );
  }
  
  const BackgroundVideo = () => {
    return (
      <div className="tw-relative min-h-screen">
        <div
          className="tw-absolute inset-0 tw-bg-cover tw-bg-center tw-z-0"
          style={{
            backgroundImage:
              'url("https://static.igem.wiki/teams/4629/wiki/promobackground.png")',
          }}
        ></div>
  
        <div className="tw-absolute inset-0 tw-flex tw-items-center tw-justify-center tw-z-100">
          <video
            className="tw-w-3/4 tw-h-auto tw-rounded-[5%]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/thailand-ris/Titleanimation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };
  
  const Pls = () => {
    return (
      <div className="tw-relative min-h-screen">
        <div
          className="tw-absolute inset-0 tw-bg-cover tw-bg-center tw-z-0"
          style={{
            backgroundImage:
              'url("https://static.igem.wiki/teams/4629/wiki/gradient.png")',
          }}
        ></div>
  
        <div className="tw-grid tw-grid-cols-1 tw-sm:grid-cols-2 tw-gap-5 tw-border-transparent tw-absolute inset-0 tw-text-center tw-items-center tw-justify-center tw-z-100">
          <div className="tw-p-5"></div>
          <div className="tw-p-5">
            <h1 className="tw-text-what tw-text-3xl tw-sm:text-5xl tw-font-black">
              INCREASE
            </h1>
            <h1 className="tw-text-xl tw-sm:text-2xl tw-font-bold">
              plant stress response capabilities.
            </h1>
          </div>
          <div className="tw-p-5">
            <h1 className="tw-text-whatt tw-text-3xl tw-sm:text-5xl tw-font-black">35%</h1>
            <h1 className="tw-text-xl tw-sm:text-2xl tw-font-bold">
              of farmers in Chantaburi cited droughts as the most pressing issue
              towards their crop yields.
            </h1>
          </div>
          <div className="tw-p-5"></div>
        </div>
      </div>
    );
  };
  
  const Bgimage = () => {
    return (
      <div className="tw-relative min-h-screen">
        <div
          className="tw-absolute inset-0 tw-bg-cover tw-bg-center tw-z-0"
          style={{
            backgroundImage:
              'url("https://static.igem.wiki/teams/4629/wiki/quotebackground.png")',
          }}
        ></div>
  
        <div className="tw-absolute inset-0 tw-flex tw-items-center tw-text-center tw-justify-center tw-z-100  tw-drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
          <div class="tw-flex tw-items-center tw-justify-center h-screen tw-text-white">
            <div class="tw-text-center">
              <h1 class="tw-text-3xl tw-sm:text-4xl tw-md:text-5xl tw-lg:text-6xl tw-xl:text-7xl tw-font-bold mb-4">
                The difference between life and death:
              </h1>
              <h1 class="tw-text-4xl tw-sm:text-5xl tw-md:text-6xl tw-lg:text-7xl tw-xl:text-8xl tw-font-bold mb-4">
                48 hours
              </h1>
              <h1 class="tw-text-2xl tw-sm:text-3xl tw-md:text-4xl tw-lg:text-5xl tw-xl:text-6xl tw-font-bold">
                one gene.
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default function Home() {
    return (
      <div className="tw-min-h-screen">
        <MastHead />
        <BackgroundVideo />
        <Pls />
        <Bgimage />
      </div>
    );
  }
  