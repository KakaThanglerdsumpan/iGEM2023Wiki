import { useRef } from "react";

export default function inclusivityPage() {
  const wideTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/inclusivity.png";
  const narrowTitleScreenUrl =
    "https://static.igem.wiki/teams/4629/wiki/titlescreens/titlescreensphone/inclusivityphone.png";
  const handleClick = (elID) => {
    const element = document.getElementById(elID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <img
        class="wideTitleScreen"
        style={{ width: "100%", marginBottom: "-4px" }}
        src={wideTitleScreenUrl}
      />
      {/* <img class="narrowTitleScreen" style={{width: "100%", marginBottom: "-4px"}} src={narrowTitleScreenUrl}/> */}
      <div class="row">
        <div class="contentsBar">
          <div style={{ position: "sticky", top: "100px" }} class="column">
            <h1 style={{ marginBottom: "20px" }}>Contents</h1>
            <button
              class="contentsButton"
              onClick={() => handleClick("header1")}
            >
              Introduction
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header2")}
            >
              General public
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header3")}
            >
              Stakeholders
            </button>
            <button
              class="contentsButton"
              onClick={() => handleClick("header4")}
            >
              Next generation
            </button>
          </div>

          {/* ====================CODE FOR SIDE BAR ENDS=============================== */}
          {/* ====================CODE FOR TEXT STARTS=============================== */}
        </div>
        <div style={{ paddingTop: "60px" }} class="text">
          <h1 id="header1">
            <b>Introduction:</b>
          </h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;In 2019 and 2022, RIS assembled teams of ten
            or fewer interested friends to compete in iGEM. In contrast, iGEM
            2023 was opened up to the entirety of our high school in a formal
            selection process. This led to a larger team roster composed of more
            diverse grade levels, nationalities, and focused interests, ranging
            from illustration and communication to biology and coding. To
            satisfy iGEM criteria, it is crucial that we tap into local
            infrastructure for both our lab and human practices teams. Although
            we have the strength of being a largely Thai-knowledgeable team, we
            also have a growing contingent of non-Thai members who have been
            able to make strong contributions without Thai language skills. The
            adult contingent of our team and attributions is somewhat similar in
            diversity, which allows for strong advising in multiple aspects of
            the program.
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;There are only 6 teams participating from
            South East Asia this year, and out of those 6 teams, we are the only
            high school team, thus making us an embodiment of inclusivity for
            both South East Asians and young adults in synthetic biology.
            Moreover, most teams in the SEA region — both at the high school and
            collegiate level — do not have the capacity or funds to travel to
            the world stage for an expensive and time consuming competition such
            as iGEM. The fact that we are the only high school team that is
            representing the SEA region in iGEM 2023 is an incredible honor and
            privilege, but it also makes our team responsible for the
            representation of our cultures in order to reflect the experiences
            of the 688 million people in SEA.
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The motto of iGEM is &apos;&apos; Local
            People Solving Local Problems,&apos;&apos; and yet for the
            overwhelmingly underrepresented SEA, there are no hands to help in
            solving local issues with synthetic biology. According to the
            General Survey conducted by the team, 68.8% of participants think
            that GMOs are harmful to the environment and that they produce
            negative long term effects. These results also mimic the
            misunderstandings about synthetic biological products such as GMOs,
            which have only been growing over hundreds of years in this area of
            the world. This is why the Thailand-RIS team pursues inclusivity and
            awareness, aiming to bring understanding to everyone even when this
            part of the world considers these topics taboo.
          </p>

          <h1 id="header2">
            <b>Including the general public</b>
          </h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The Thailand-RIS Human Practices&apos; Team
            sent out the General Survey to gauge the general public&apos;s
            opinion on GMOs. The survey had options for a broad range of ages
            (teenagers - senior citizens) and was available in both Thai and
            English. This allowed for more responses from a wider audience,
            further establishing the idea of inclusivity, as our team encouraged
            both Thai and non-Thai citizens residing in Thailand to be a part of
            our project. The survey also gave a voice to a much wider community
            than would have been possible had our team met physically, thus
            enhancing the data collected. This survey spoke to our team’s
            inclusivity as anyone who came across the General Survey could
            easily access and fill it out.
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Additionally, in the Chanthaburi Community
            Outreach, the farmers and stakeholders whom we were presenting to
            mainly spoke Thai, and some could not understand English at all.
            Knowing this, our team took the necessary measures to ensure that we
            were being inclusive to our listeners. So, we translated our project
            description and content and verbally communicated in Thai. Not only
            were we aware of including our listeners, but by stating our project
            in a different language that our listeners can understand, we are
            broadening the field of synthetic biology to more societies and our
            local communities.
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Our project addressed multiple UN SDGs,
            namely SDG #8: Decent Work and Economic Growth, SDG #11: Sustainable
            Cities and Communities, and SDG #12: Responsible Consumption and
            Production. GMOs are involved in the work of farm laborers and farm
            owners, and can influence their incomes and livelihoods. Our project
            strives to lessen the struggles of farming within local communities
            by lowering plant stresses. GMOs grow more efficiently and do not
            require as many resources, which benefits everyone and promotes
            sustainability while decreasing food waste for communities. With
            synthetic biology, producers will be able to more easily grow durian
            plants despite increasing stressors due to climate change. Likewise,
            consumers will be able to enjoy stronger and therefore more
            available plants with cheaper prices.
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Synthetic biology aids in decreasing
            inequality and the gaps that come with it in Thailand because it
            allows for easier farming and production of various crops. This can
            lower prices of crop goods and increase affordability, allowing more
            individuals the ability to access and purchase a diverse range of
            crops and goods that only the privileged currently access. This
            would also be beneficial for the farmers as they would reduce their
            losses and as a result better support their families.
          </p>
          <h1 id="header3">
            <b>
              Including stakeholders in provincial agrarian communities: farm
              workers to business owners to political leaders
            </b>
          </h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Our team&apos;s Chanthaburi Community
            Outreach was another way in which inclusivity was demonstrated in
            our project, as the activities informed the farming community about
            GMOs and its implications in a world of Western science. Our
            interactions with the local community allowed us to speak about
            issues that are not critically discussed in local curricula and
            therefore difficult to bring up in daily conversations. Since deeper
            exchanges surrounding GMOs are generally limited within the English
            language and corresponding literature or reserved for academic and
            political discourse, our Thai language contributions allowed the
            farmers and farm laborers to better understand the advantages and
            risks of genetic engineering. Modern science stemmed from Western
            Europe, and as a result, has restricted science to English related
            languages. Our Thai presentations and activities have gone against
            this trend and shed light on important and relevant topics
            surrounding GMOs for the farming community. It also enabled us to
            appreciate more the potential opportunities and challenges of
            applying our work to real crops. This opened up discussions about
            the future of synthetic biology and where it can bring Thailand
            economically as a hub of food security in the South East Asian
            region.
          </p>
          <h1 id="header4">
            <b>Including the next generation:</b>
          </h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Prior to the Elementary School Workshop, we
            were informed that there were several fourth grade students with
            weaker English learning skills who may need extra support. These
            students were in English Language Development (ELD) and the teachers
            informed us that if the instructions or choices were not visual,
            they may not be able to participate to the fullest in the activity.
            Accordingly, the activities that were organized were specifically
            tailored for the engagement of <i>all</i> fourth graders, regardless
            of their English level. For example, in the plasmid activity, we
            focused heavily on using symbols instead of words so that kids with
            weaker English proficiencies would have an easier time recognizing
            traits for the assignment. This means our work is easily
            transferable outside of RIS to a local public school or even easily
            borrowed by other teams for their own language environments, thus
            enhancing inclusivity. For the comic, the story plotline was
            relatively easy to follow, and the speech bubbles that we provided
            gave the students room to add their own creative flairs to the
            comic. This approach enabled diverse learners to understand our
            project better and frame it to their own interpretations.
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;We decided to focus on 4th grade students at
            RIS as an audience for this workshop, which included spreading
            awareness of the climate concerns that currently affect agriculture
            in Thailand. Examples of these impacts include floods and droughts,
            which damage crops and the livelihoods of suppliers and consumers
            alike. In this era of climate change, understanding these global
            issues early is crucial for developing continued awareness that both
            knowledge <i>and</i> collaboration are needed to address global
            issues of sustainable consumption.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/01-es.jpg"
          />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Our interactive mini-info session spoke to
            global warming and its effects on Thailand, connecting the issue to
            our project&apos;s goal of reducing plant stress. The presentation
            was highly visual with many quiz-style questions in order to
            facilitate and check for understanding. Additionally, we led the 4th
            graders through two fun activities: 1. a plasmid-based design and 2.
            a comic strip to color, annotate, and freely interpret.
          </p>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The plasmid activity allowed students to
            create their own &apos;&apos;dream tomato&apos;&apos; by customizing
            various traits such as color, shape, leaves, and an extra
            characteristic. This extra trait was our way of encouraging the 4th
            graders to add their own flair to their tomatoes. Not only did this
            activity promote how science can be fun, but it also drew awareness
            to the fact that science can help people alter crops based on their
            desired needs. The underlying message behind this activity was both
            innovative and educational.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/02-es.png"
          />
          <h5>
            <i>
              Examples of students&apos; work in the plasmid activity - they
              selected their tomato&apos;s color, leaves, shape, and extra
              (glitter/sparkles) for more fun!
            </i>
          </h5>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/03-es.jpg"
          />
          <h5>
            <i>
              We invited some students to come up and present their tomato
              designs to the group.
            </i>
          </h5>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The comic strip we created had a storyline
            based on our project — it told the story of a durian becoming
            stronger and more stress resistant after being agroinfiltrated with
            the agrobacterium we synthesized. The comic strip featured text
            bubbles so that the 4th graders could add their own dialogue and
            interpretations of the story, which also had an underlying message
            that they could play a part in the world of synthetic biology. It
            allows students to become more immersed in the story of increasing
            plant resistance. This component of the comic strip was developed in
            collaboration with the 4th grade teachers who provided advice on
            what interactive and hands-on activities could look like at a 4th
            grade level. The text bubbles allowed for every comic strip to have
            its own unique story and idea, which hopefully introduced everyone
            to the concept of how science can be used in the real world.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/04-es.png"
          />
          <h5>
            <i>
              Examples of students&apos; comics - the one on the top left
              features a comic where the 4th grader drew one of our team members
              as the female protagonist, which was very sweet.
            </i>
          </h5>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Both activities allowed the students to be
            included in synthetic biology by enabling them to make their own
            choices so that they would be able to learn new concepts while still
            having fun.
          </p>
          <img
            class="figureTooBig"
            src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/05-es.jpg"
          />
          <img
            class="figureTooBig"
            src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/06-es.jpg"
          />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The workshop was very successful and
            engaging for both the 4th graders and our team. The students
            demonstrated genuine interest, and were eager to ask
            thought-provoking questions. During the workshop, we felt their
            attention, curiosity, and enthusiasm shine through. Our team felt
            extremely proud of the fact that we were able to provide an
            educational and interactive learning environment while still
            maintaining a creative space for the 4th graders. We were also
            grateful for the teachers who took the time to facilitate this
            workshop and make it a reality. After the workshop, we received a
            heartwarming message from Ms Mina Park, one of the 4th grade science
            teachers who assisted our team in ensuring that the workshop content
            was appropriate for 4th graders.
          </p>
          <img
            class="figure"
            src="https://static.igem.wiki/teams/4629/wiki/human-practices/es-workshop/07-es.png"
          />
          <h5>
            <i>
              Email received from Ms Mina Park regarding the success of the
              workshop, and the 4th grade team&apos;s gratitude towards
              Thailand-RIS.
            </i>
          </h5>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;This experience has not only been a benefit
            to the elementary students but also to us, as we learned valuable
            lessons from collaborating and interacting with different age
            groups. We also grew as a team, learning to strengthen our
            cooperation and communication skills. Moreover, with the help of our
            workshop, the 4th graders are now aware that they can contribute to
            higher level sciences even when they are still young. We have
            enabled them to become passionate and interested in biology, and
            demonstrated to them that they don&apos;t need to be a scientist or
            a professional to play a part in the changes that science can bring.
            By exposing the students to fun activities that act as a vessel of
            creativity and agency, we have contributed to raising the next
            generation of children living in Thailand to be more educated in
            synthetic biology.
          </p>
          <center>
            <iframe
              title="Thailand-RIS: 08 ES (2023) [English]"
              width="560"
              height="315"
              src="https://video.igem.org/videos/embed/33137170-fad9-4a3c-80d8-b122d542830a"
              frameborder="0"
              allowfullscreen=""
              sandbox="allow-same-origin allow-scripts allow-popups"
            ></iframe>
          </center>
          <h5>
            <i>Post-workshop interview done with six of the 4th graders.</i>
          </h5>
        </div>
      </div>
    </div>
  );
}
