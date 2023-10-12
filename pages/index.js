import {useRef} from 'react';
import Link from 'next/link'

function HomePage() {
    return(
       <div>
            <div class="slide-container">
            <section class="pls1">
                <h1>Slide 1</h1>
            </section>
            <section class="pls2">
                <h1>Iframe here ig</h1>
            </section>
            <section class="pls3">
                <div class="grid-container">
                    <div class="grid-item"></div>
                    <div class="grid-item">
                        <h1 class="title">INCREASE</h1>
                        <h1 class="subtitle">
                            plant stress response capabilities.
                        </h1>
                    </div>
                    <div class="grid-item">
                        <h1 class="percentage">35%</h1>
                        <h1 class="subtitle">
                            of farmers in Chantaburi cited droughts as the most
                            pressing issue towards their crop yields.
                        </h1>
                    </div>
                    <div class="grid-item"></div>
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