import {useRef} from 'react';
import Link from 'next/link'
import Image from 'next/image';

function HomePage() {
    return(
       <div>
           <div class="slide-container">
            <section class="pls1">
                <div class="masthead">
                    <div class="text-container">
                        <h1 class="text-white text-4xl sm:text-6xl">
                            THAILAND-RIS
                        </h1>
                        <h2 class="text-white text-3xl sm:text-4xl">
                            Powering up Plant Defenses
                        </h2>
                        
                        <h3 style={{maxWidth:`650px`, textAlign: `center`}} class="text-white text-lg sm:text-xl">
                            Modifying glutamate-cysteine ligase localization to
                            boost plant stress response rates through improved
                            reactive oxygen species mitigation.
                        </h3>
                    </div>
                </div>
            </section>
            <section class="pls2">
                <div class="video-container">
                    <iframe
                        title="Thailand-RIS: Thailand RIS: Powering up Plant Defenses (2023) - Project Promotion [English]"
                        src="https://video.igem.org/videos/embed/1f7cc087-7d9d-4442-aad9-f2ddad466c73"
                        frameborder="0"
                        allowfullscreen=""
                        sandbox="allow-same-origin allow-scripts allow-popups"
                        class="video-iframe"
                        height="100"
                        width="200"
                    ></iframe>
                </div>
            </section>
            <section class="pls3">
                <div class="grid-container">
                    <div class="grid-item">
                        <img
                            src="https://static.igem.wiki/teams/4629/wiki/stressresponse.png"
                            alt="Image description"
                            class="responsive-image"
                        />
                    </div>
                    <div class="grid-item">
                        <h1 class="titl">INCREASE</h1>
                        <h1 class="subtitl">
                            plant stress response capabilities.
                        </h1>
                    </div>
                    <div class="grid-item">
                        <h1 class="percentage">35%</h1>
                        <h1 class="subtitl">
                            of farmers in Chantaburi cited droughts as the most
                            pressing issue towards their crop yields.
                        </h1>
                    </div>
                    <div class="grid-item">
                        <img
                            src="https://static.igem.wiki/teams/4629/wiki/farmers.png
"
                            alt="Image description"
                            class="responsive-image"
                        />
                    </div>
                </div>
            </section>
            <section class="pls4">
                <div class="absolute-center">
                    <div>
                        <h1 class="title">
                            The difference between life and death:
                        </h1>
                        <h1 class="subtitle">48 hours</h1>
                        <h1 class="description">one gene.</h1>
                    </div>
                </div>
            </section>
        </div>
       </div>
    );
}
export default HomePage;