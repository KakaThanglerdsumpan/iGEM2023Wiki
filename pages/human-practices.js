import {useRef} from 'react';
import Link from "next/link";

export default function HPPage() {

    const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/humanpractices.png";
    const narrowTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/titlescreensphone/humanpracticesphone.png";
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
                        <h2 style={{marginBottom: '20px'}}>Human Practices</h2>
                            <button class="contentsButton" onClick={() => handleClick("header1")}>
                                Introduction
                            </button>
                            <button class="contentsButton" onClick={() => handleClick("header2")}>
                                Chanthaburi Community Outreach
                            </button>
                            <button class="contentsButton" onClick={() => handleClick("header3")}>
                                Middle School Workshop
                            </button>
                            <button class="contentsButton" onClick={() => handleClick("header4")}>
                                Elementary School Workshop
                            </button>
                </div>
                
            {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
            {/* ====================CODE FOR TEXT STARTS=============================== */}

            </div>
            <div style={{paddingTop:"60px"}}class="text">

                <h1 id="header1">Introduction</h1>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Thailand-RIS&apos; Human Practices team planned and carried out three interactive experiences based on genetic engineering in plants as a possible solution to reduce climate induced stress. This was done in order to connect and engage with both our school (Ruamrudee International School) community and the greater Thai community.
                            </p>  
                                <br/>
                            <p>  
                                &nbsp;&nbsp;&nbsp;&nbsp;In Thailand, GM crops are a growing and viable contributor to sustainable practices in food security and the economy. Because of this, the team must understand their impacts on the community and pair this with the implications of our project. To do this, we conducted two surveys about GMOs — one directed to farmers and one directed to the general public — to glean the general awareness of synthetic biology among producers (farmers) and consumers (buyers and distributors of products for local and international markets). Looking at the results, we noticed several misconceptions:
                            </p>

                    <h2>General Survey</h2>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/introduction/01-in.png"/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Our goal in Human Practices was to address these misconceptions for a more balanced and progressive understanding of the potential behind genetic engineering in relation to healthy crop production. In addition to visiting the communities who participated in the surveys, we also took inspiration from the results to create awareness workshops for both middle and elementary school-aged students so that stereotypes regarding GMOs can be minimized in future Thai generations. 
                            </p>
                                <b/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;All these projects were based on data collected using the sample population of 222 people who filled out the general <Link style={{color:"#145C69"}} href="https://docs.google.com/forms/d/e/1FAIpQLSeRaCpV3adxiOUAaz-T-7JKugZU17hRNbx9nUJJ24QEghAsaQ/viewform" target="_blank"><b><u>survey</u></b></Link> T-RIS sent out.
                            </p>
                <h1 id="header2">Chanthaburi Community Outreach</h1>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Chanthaburi is one of seven provinces in eastern Thailand, located on the Gulf of Thailand bordering Cambodia&apos;s Battambang and Pailin provinces. Chanthaburi is well known for its impact on the Thai economy through agriculture — namely durian production. It is the largest producer of durians in Thailand, generating more than tens of billions of baht for Thailand annually. Its land is highly suitable for growing durian, taking five to seven years for a young durian tree to grow mature enough to produce the delicious fruit we enjoy. 
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/01-ch.jpg"/>
                            <h5>
                                    <i>Image of the durian farm</i> 
                            </h5>
                        <img class="figureTooBig"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/02-ch.jpg"/>
                            <h5>
                                    <i>Team Thailand-RIS&apos; Human Practices Team touring the durian farm.</i> 
                            </h5>
                            <div class="row">
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;The human practices team made two trips to Chanthaburi: the first was to conduct interviews with stakeholders and the second was to present our project and the potential benefits of genetic modification to local durian farmers and business leaders as well as political leaders. These trips were conducted according to data collected from this <Link style={{color:"#145C69"}} href="https://docs.google.com/forms/d/e/1FAIpQLScaz5hXCo7KgKJns5xdmXTQy2BzQZoXM_fnWwGMweU3l7wQ_A/viewform?usp=sharing"><b><u>survey</u></b></Link>, which was sent across Thailand&apos;s agricultural provinces. We were able to do this with the help of the Mahachok Fruits, which is owned by Mr. Phatthanaphon Lertwatsana. Mahachok Fruits is a business that engages with the agricultural industry, and acts as an international distribution center for fruits. Using their connections within the community, the Human Practices team was able to more efficiently send this survey to a wider audience.
                                </p>
                                <div class="column">
                                <img src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/03-ch.png" style={{width: "200px", height: "370px", marginLeft:"15px"}}/>
                            <h5>
                                <i>Mr. Phatthanaphon Lertwatsana — Owner of Mahachok Fruits</i>
                            </h5>
                            </div>
                        </div>
    
                           
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/04-ch.png"/>
                            <h5>
                                    <i>Survey results of one of the questions from our Human Practices Farmers&apos; Survey</i>
                            </h5>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;The survey results helped us plan our next step: targeted interviews with local stakeholders, both farmers and distributors. From the survey, we learned that the majority of the community believed that organically grown crops are safer than those that were chemically altered (via spray and/or injection) or genetically modified; however, through conversations, we also learned that it is near impossible to keep fruits such as durian stable through organic planting. We, therefore, constructed the interview questions in such a way as to better understand the current misconceptions and perceptions of GM foods within the communities we visited, and to see how well-received our project might be by our interviewees in terms of economic and health benefits. 
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/05-ch.jpg"/>
                            <h5>
                                    <i>Members of Team Thailand-RIS&apos; interviewing a durian farmer.</i>
                            </h5>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Our second visit to Chanthaburi was a community event that lasted over two days, building upon the interactions from the first visit. On the first evening, Mahachok Fruits organized a gathering of local farmers and community leaders to hear a presentation and to speak with us. To start the night, we first introduced ourselves and our project&apos;s aim, connecting this with why we visited Chanthaburi and how the area offers a highly relevant site for discussions concerning plant stress. We were careful to share a balanced outlook on genetic modification, discussing not only the benefits as we see it in relation to our proposed plant modification, but also the risks of gene editing as it relates to potential environmental (e.g. elimination of wildtypes or selectively bred species) and human health impacts (e.g. allergies).
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/06-ch.jpg"/>
                            <h5>
                                    <i>Team Thailand-RIS&apos; Human Practices team with Salaeng Municipality Mayor, Mr. Thosapol Wonggumpun (นายทศพล วงษ์กำปั่น). Below the stage are fruits given by the farmers.</i>   
                            </h5>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/07-ch.jpg"/>
                            <h5>
                                    <i>The event our team hosted, with around a hundred farmers at Mahachok Fruits distribution center.</i>
                            </h5>   
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;To keep the session interactive, a trivia quiz followed with questions relating to our project that promoted meaningful conversations between team members and farmers. The team that won received small potted plant gifts.
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/08-ch.jpg"/>
                            <h5>
                                    <i>Two of our winners receiving a potted plant prize.</i>
                            </h5>   
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;To close the presentation, we encouraged our audience to envision <i>&apos;&apos;What will access to genetic modification and the progress of farming look like in the next 50 years&apos;&apos; </i> through drawings. 
                            </p>
                                <br/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;It should be noted that GM foods generate mixed feelings in Thailand, where staples like rice, durian and other crops for export are highly protected, creating a bit of a negative stigma around GMOs; however, in the past few years there have been shifts in this perception, but the information is still not necessarily widely accessible. Our interactions with the local community were significant because we were able to speak about issues that are not critically discussed in local curricula and therefore difficult to bring up in daily conversations. Since deeper conversations surrounding GMOs are generally limited within English language-literature or reserved for academic and political discourse, our Thai language contributions allowed the farmers and farmhands to better converse about the advantages and risks of genetic engineering and for us to appreciate more the potential opportunities and challenges of applying our work to real crops. This opened up discussions about the future of synthetic biology and where it can bring Thailand economically as a hub of food security in the South East Asian region. 
                            </p>   
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/09-ch.png"/>
                            <h5>
                                <i>Pictures of our team engaging with the local farmers and answering their questions regarding the activities.</i>
                            </h5> 
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;The next day, we were invited to meet with the governor of Chanthaburi, Mr. Suthee Thongyam. Mr. Suthee shared with us the challenges that farmers face in Chanthaburi, highlighting the persistent issue of drought that has exacerbated over the years. Little did we know that our lab experiments would uncover something truly remarkable: the plants that performed best against stress were the ones that were placed in drought-like conditions. This unanticipated alignment between our research and its real world applications has the potential to be a game-changer for durian cultivation and possibly the health and durability of many more crops. It offers hope for more improved harvests, and represents a step forward in our journey with close ties to UN SDG 8: Decent Work and Economic Growth, UN SDG 11: Sustainable Cities and Communities, and UN SGD 12: Responsible Consumption and Production. 
                            </p>
                                <br/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Despite our excitement to learn of the potential impacts our project may have, we must be mindful of the full ethical and safety contexts of our work. Mr. Suthee mentioned that certain farmers have grown GMO crops in the past and that they were ineffective. This opened our eyes to the fact that although GMOs may have an important role to play in the future of agricultural industries, farmers may be hesitant to invest in new technologies if the claims made about them are not fully achievable or advantageous to their crops or livelihoods. We acknowledge that it is crucial to have trustworthy research available to inform stakeholders&apos; decisions with solid scientific evidence. To move forward, the Chanthaburi community would want us to provide well-founded research studies that show the benefits <i>and</i> safety of GMOs in durian farming. 
                            </p>
                        <img class="figureTooBig"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/10-ch.png"/>
                        <img class="figureTooBig"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/11-ch.png"/>
                            <h5>
                                <i>Thailand-RIS discussing durian growth and business in Chanthaburi with the Governor of Chanthaburi. Mr. Suthee is wearing a blue shirt, sitting on the wooden chair.</i>
                            </h5>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;In the end, our journey to Chanthaburi demonstrated reciprocal engagement, with meaningful conversations having taken place between the team and the local farming community on several occasions. Through thoughtful planning and interactions, we gained invaluable insights into the perceptions and needs of the people our project directly affects. The alignment of our research with real-world farming challenges, especially the issue of drought, rewarded us with renewed enthusiasm. The warm reception from Chanthaburi&apos;s farmers and the governor highlighted the importance of trust and scientific integrity within our project. As we move forward, we are excited about the potential impacts of our research on durian cultivation and agricultural innovation, and we remain committed to delivering well-founded studies that address the concerns and aspirations of our vibrant community.
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/chanthaburi/12-ch.jpeg"/>
                            <h5>
                                <i>Team Thailand-RIS&apos; Human Practices Team with the Governor of Chanthaburi, who is standing in the center.</i>
                            </h5>
                <h1 id="header3">Middle School Workshop</h1>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;The human practices team presented their research and the lab results — including the different aspects of the iGEM competition — to middle school students (7th & 8th graders). 
                            </p>
                                <br/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Our goal was to create awareness about GMOs and the concept of plant stress as it connects to our project. We started by surveying MS students about their prior knowledge of GMOs. This allowed us to identify what topics to cover in the presentation that would be at a suitable level.
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/ms-workshop/01-ms.jpg"/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;This workshop tied into Ruamrudee International School&apos;s school-wide learner outcomes, also known as the &apos;&apos;Principles of Phoenix,&apos;&apos; or POPs. The POPs focus on improving students as a community, and center around the concepts of heads, hands, and hearts. Heads represent academic growth and critical thinking, hands symbolize creativity and resourcefulness, while hearts reflect empathy and kindness. We aimed to demonstrate these integral components throughout the MS workshop.  
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/ms-workshop/02-ms.jpg"/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;The 7th and 8th graders currently include GMOs as part of the curriculum within their genetics unit (NGSS standards: MLS1-5, MLS3-1 and MLS4-5); thus, our presentation focused on the cell, structures & functions of organelles, GMOs, and the nature of plant stress relative to our project with a glimpse into the field of synthetic biology. Next semester, 7th and 8th graders will debate about the pros and cons of GMOs. They can use the workshop knowledge to support their arguments. To keep the workshop accessible to 12 and 13 year olds, we were careful to define terms like mitochondria and DNA as we outlined types of plant stressors and the methods required to minimize them in agriculture. We then incorporated what the students learned with a Quizlet live. When the game ended, we divided into smaller table groups to clarify commonly missed questions and misconceptions about GMOs. 
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/ms-workshop/03-ms.jpg"/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Toward the end of the workshop, we shared basic information on the benefits and drawbacks of GMOs, along with the reasons as to why we proposed the modification of plants. Although the reputation of GMOs has improved over the past decade, the usage of GMOs can be a controversial topic in Thailand. We therefore wanted to make sure that students understood both sides so that in the future they will be equipped to consider balanced arguments and make informed decisions regarding the use and consumption of GM products. By exposing the students to the basis of synthetic biology now, any wariness of genetically modified plants may be reduced, and the potential to lean into genetic engineering to find biological solutions to problems may be better understood. 
                            </p>
                                <br/>
                            <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;MS students can be both open minded but also highly questioning: new perspectives are gained by considering pre-existing knowledge and weighing the pros and cons of a certain idea or action. Because of this, we incorporated a chart visualizing both advantages and disadvantages of GM foods. We were careful not to hide the potential environmental impacts that could take place if mistakes occurred in the modification processes or the potential for allergies to be triggered through new proteins. Since the information given in the presentation allowed students to envision both sides, a broader picture was painted on the complexities of GMOs and synthetic biology. This approach to learning enables the skills needed to evaluate other important, current and relevant issues in their future.
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/ms-workshop/04-ms.jpg"/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;We knew that for this age group, only explaining our project and discussing its implications in a lecture format would be boring, and therefore, have a minimal lasting impact. We upped the engagement factor by including multiple easy-to-understand images on the slides, frequently asking questions, and checking for understanding. Additionally, by incorporating our personal experiences with biology into the presentation, students were able to feel motivated to continue learning, and also looked forward to joining high school. The students enjoyed our workshop, and there is a possibility to incorporate iGEM-specific content into the MS Curriculum for the annual GMO discussions. 
                            </p>
                                <br/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Returning to our POPs, the workshop was a great opportunity for middle schoolers to practice 
                                    <i> heads</i> as they became better critical thinkers and were open-minded towards new perspectives on GMOs and its innovative uses in Thailand. 
                                    <i> Hands</i> as they collaborated with one another through the Quizlet platform, and
                                    <i> hearts</i> as they evaluated GMOs and their health benefits while also becoming more considerate towards farmers and their views of local and global GMO impacts.
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/ms-workshop/05-ms.jpg"/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Overall, the workshop was a beneficial experience for students, their teachers and our team, providing both a valuable and hopefully sustainable learning <i>and</i> teaching experience.
                            </p>
                <h1 id="header4">Elementary School Workshop</h1>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Our goal for introducing our synbio project to an upper-elementary aged audience was to nurture their natural curiosity and develop their interest in biology and science in general. Through our workshop, they got a glimpse of the real-world applications of synthetic biology and were inspired to make a difference in the future.
                            </p>
                                <br/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;We decided to focus on 4th grade students at RIS as an audience for this workshop, which included spreading awareness of the climate concerns that currently affect agriculture in Thailand. Examples of these impacts include floods and droughts, which damage crops and the livelihoods of suppliers and consumers alike. In this era of climate change, understanding these global issues early is crucial for developing continued awareness that both knowledge  <i>and</i> collaboration are needed to address global issues of sustainable consumption.
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/01-es.jpg"/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Our interactive mini-info session spoke to global warming and its effects on Thailand, connecting the issue to our project&apos;s goal of reducing plant stress. The presentation was highly visual with many quiz-style questions in order to facilitate and check for understanding. Additionally, we led the 4th graders through two fun activities: 1. a plasmid-based design and 2. a comic strip to color, annotate, and freely interpret. 
                            </p>
                                <br/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;The plasmid activity allowed students to create their own &apos;&apos;dream tomato&apos;&apos; by customizing various traits such as color, shape, leaves, and an extra characteristic. This extra trait was our way of encouraging the 4th graders to add their own flair to their tomatoes. Not only did this activity promote how science can be fun, but it also drew awareness to the fact that science can help people alter crops based on their desired needs. The underlying message behind this activity was both innovative and educational.
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/02-es.png"/>
                            <h5>
                                <i>Examples of students&apos; work in the plasmid activity - they selected their tomato&apos;s color, leaves, shape, and extra (glitter/sparkles) for more fun!</i>
                            </h5>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/03-es.jpg"/>
                            <h5>
                                <i>We invited some students to come up and present their tomato designs to the group.</i>
                            </h5>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;The comic strip we created had a storyline based on our project — it told the story of a durian becoming stronger and more stress resistant after being agroinfiltrated with the agrobacterium we synthesized. The comic strip featured text bubbles so that the 4th graders could add their own dialogue and interpretations of the story, which also had an underlying message that they could play a part in the world of synthetic biology. It allows students to become more immersed in the story of increasing plant resistance. This component of the comic strip was developed in collaboration with the 4th grade teachers who provided advice on what interactive and hands-on activities could look like at a 4th grade level. The text bubbles allowed for every comic strip to have its own unique story and idea, which hopefully introduced everyone to the concept of how science can be used in the real world. 
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/04-es.png"/>
                            <h5>
                                <i>Examples of students&apos; comics - the one on the top left features a comic where the 4th grader drew one of our team members as the female protagonist, which was very sweet.</i>
                            </h5>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Both activities allowed the students to be included in synthetic biology by enabling them to make their own choices so that they would be able to learn new concepts while still having fun.
                            </p>
                        <img class="figureTooBig"src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/05-es.jpg"/>
                        <img class="figureTooBig"src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/06-es.jpg"/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;The workshop was very successful and engaging for both the 4th graders and our team. The students demonstrated genuine interest, and were eager to ask thought-provoking questions. During the workshop, we felt their attention, curiosity, and enthusiasm shine through. Our team felt extremely proud of the fact that we were able to provide an educational and interactive learning environment while still maintaining a creative space for the 4th graders. We were also grateful for the teachers who took the time to facilitate this workshop and make it a reality. After the workshop, we received a heartwarming message from Ms Mina Park, one of the 4th grade science teachers who assisted our team in ensuring that the workshop content was appropriate for 4th graders.
                            </p>
                        <img class="figure"src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/07-es.png"/>
                            <h5>
                                <i>Email received from Ms Mina Park regarding the success of the workshop, and the 4th grade team&apos;s gratitude towards Thailand-RIS.</i>
                            </h5>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;This experience has not only been a benefit to the elementary students but also to us, as we learned valuable lessons from collaborating and interacting with different age groups. We also grew as a team, learning to strengthen our cooperation and communication skills. Moreover, with the help of our workshop, the 4th graders are now aware that they can contribute to higher level sciences even when they are still young. We have enabled them to become passionate and interested in biology, and demonstrated to them that they don&apos;t need to be a scientist or a professional to play a part in the changes that science can bring. By exposing the students to fun activities that act as a vessel of creativity and agency, we have contributed to raising the next generation of children living in Thailand to be more educated in synthetic biology.
                            </p>
                            <center> 
                                <iframe title="Thailand-RIS: 08 ES (2023) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/33137170-fad9-4a3c-80d8-b122d542830a" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
                            </center>
                            <h5>
                                <i>Post-workshop interview done with six of the 4th graders.</i>
                            </h5>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Since the 4th graders loved the activity and team so much, we plan to host another session with them to recount what we will accomplish and experience at the Giant Jamboree in Paris.
                            </p>
            </div>
        </div>
    </div>
   
  );
}
