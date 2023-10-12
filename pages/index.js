import {useRef} from 'react';
import Link from 'next/link'
import Image from 'next/image';

function HomePage() {
    return(
       <div>
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
       </div>
    );
}
export default HomePage;