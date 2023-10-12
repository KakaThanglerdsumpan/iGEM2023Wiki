function MembersPage({ children }) {
  const wideTitleScreenUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/teamtitletext.png";
  const teamImgUrl = "https://static.igem.wiki/teams/4629/wiki/titlescreens/members-page/teamphoto.png";


    return (
      <div>
        <img class="wideTitleScreen" style={{width: "100%", marginBottom: "-4px", marginLeft: "auto", marginRight: "auto"}} src={wideTitleScreenUrl}/>
        <img style={{width: "100%", marginBottom: "-4px"}} src={teamImgUrl}/>
       
        <div class="yBox60"></div>
        <div class="membersWide sidePadded50">
          <h1 class="membersHeading"><u>Leaders</u></h1>
          {/* IVY */}
          <div class="leftRow memberCard">  
              <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/04-ivy.png"/>
              <div class="leftCol">
                <h1 class="memberName">Thitilapa (Ivy) Sae-Heng</h1>
                <div class="leaderBlockColor">
                  <h2 class="leaderPositions">Team Captain • Wet & Dry Lab and Human Practices Member</h2>
                </div>
                <p class =" memberText">
                  Hello! My name is Ivy and I&apos;m currently a senior at Ruamrudee International School. I am the Team Captain for Thailand-RIS this year and this is my second year of iGEM! As someone who is passionate about biology, iGEM has enabled me to explore and dive deeper into the subject, especially regarding synthetic biology. I have enjoyed working on iGEM 2023 this year in the various groups that I&apos;m involved in and I&apos;m excited to present our work and meet new people at the Jamboree in Paris!
                </p>
              </div>
          </div>
          {/* MIU */}
          <div class="rightRow memberCard">  
              <div class="rightCol">
                <h1 class="memberName">Unyakorn (Miu) Patrathiranond</h1>
                <div class="leaderBlockColor">
                  <h2 class="leaderPositions">Wet Lab Co-Leader, Design Leader</h2>
                </div>
                <p class =" memberText">
                Hi, my name is Miu. I&apos;m a junior at Ruamrudee International school and a Wet Lab Co-Leader and Design Leader. As someone who has always been passionate about art and consistently intrigued by biology, iGEM has become the perfect outlet for my ambitions. Exploring synthetic biology in Chulalongkorn&apos;s lab and creating art to represent our team has been an incredibly gratifying privilege and my experiences so far have taught me many new things. I hope to learn even more at the Jamboree in Paris!                </p>
              </div>
              <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/05-miu.png"/>
          </div>  
          {/* GUNN */}
          <div class="leftRow memberCard">  
              <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/06-gunn.png"/>
              <div class="leftCol">
                <h1 class="memberName">Thanakorn (Gunn) Vajirakachorn</h1>
                <div class="leaderBlockColor">
                  <h2 class="leaderPositions">Wet Lab Co-Leader, Human Practices Co-Leader</h2>
                </div>
                <p class =" memberText">
                Hello everyone! My name is Gunn and I&apos;m a junior at Ruamrudee International School. I am both one of the team leaders of Wet Lab and Human Practices of Thailand-RIS. As someone with a keen interest in biology, I am so honored and grateful to be a part of this team. Participating in labs while also exploring my interests in the social sciences through Human Practices has really ticked my box. I especially loved organizing and leading the elementary school workshop, where we led the kids through fun activities related to our project. This is my first year in iGEM and I&apos;m so excited to present what our team has done at the Jamboree!
                </p>
              </div>
          </div>
          {/* KAKA */}
          <div class="rightRow memberCard">  
              <div class="rightCol">
                <h1 class="memberName">Dhirath (Kaka) Thanglerdsumpan</h1>
                <div class="leaderBlockColor">
                  <h2 class="leaderPositions">Dry Lab Co-Leader, Wiki Team Co-Leader</h2>
                </div>
                <p class =" memberText">
                Wassup! I&apos;m Kaka, currently a junior at Ruamrudee International School. I enjoy coding and anime, but I also like to touch grass and swim. This is my second year on the Thailand-RIS iGEM team. This year I am honored to serve as the Wiki Team Co-Leader and Dry Lab Team Co-Leader. Exploring the realm of deep learning models and their applications in performing <i>in silico</i> analyses in the dry lab has truly captivated me, highlighting the intriguing intersection of computer science and biology. 
                </p>
              </div>
              <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/11-kaka.png"/>
          </div> 
            {/* JACKY */}
            <div class="leftRow memberCard">  
          <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/08-jacky.png"/>

              <div class="leftCol">
                <h1 class="memberName">Setthachai (Jacky) Lertwatsana</h1>
                <div class="leaderBlockColor">
                  <h2 class="leaderPositions">Human Practice Co-Leader, Wiki Team Member</h2>
                </div>
                <p class =" memberText">
                Hello, my name is Jacky. I am one of the leaders of the human practices team and a member of the wiki team. I am a junior this year and am very excited to be presenting our website and what we have done in human practices!                </p>
              </div>
          </div>   
          
          {/* ANANYA */}
          <div class="rightRow memberCard">  
              <div class="rightCol">
                <h1 class="memberName">Ananya Dharna</h1>
                <div class="leaderBlockColor">
                  <h2 class="leaderPositions">Collaborations Co-Leader, Wet Lab Member</h2>
                </div>
                <p class =" memberText">
                Hello, my name is Ananya. I am a junior at Ruamrudee International School and I also Co-Lead the Collaborations Team along with being a member of Wet Lab. I have always been passionate about Biology and partaking in this competition doing what I love is a dream come true. I am excited and look forward to presenting our project at the Paris Jamboree :)                </p>
              </div>
              <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/07-ananya.png"/>
          </div>  
          {/* ANIKA */}
          <div class="leftRow memberCard">  
              <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/09-anika.png"/>
              <div class="leftCol">
                <h1 class="memberName">Anika Kapur</h1>
                <div class="leaderBlockColor">
                  <h2 class="leaderPositions">Dry Lab Co-Leader, Human Practices Co-Leader, Wet Lab Member</h2>
                </div>
                <p class =" memberText">
                Heyyy, I am Anika! I&apos;m currently a junior at Ruamrudee International School. I am leading the dry lab team along with the human practices and am a member of the wet lab. I&apos;m so excited to be attending the Paris Jamboree and meeting you guys!                </p>
              </div>
          </div>

        
          {/* VIN */}
          <div class="rightRow memberCard">  
              <div class="rightCol">
                <h1 class="memberName">Vin Pungprasert</h1>
                <div class="leaderBlockColor">
                  <h2 class="leaderPositions">Collaborations Co-Leader, Wet Lab Member</h2>
                </div>
                <p class =" memberText">
                Hey there! I&apos;m Vin, currently a junior at Ruamrudee International School. I&apos;m the Collaborations Co-Leader and a wet lab member. It&apos;s my first year participating in iGEM and I&apos;m very excited for what lies ahead in the Jamboree.                 </p>
              </div>
              <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/13-vin.png"/>

          </div>

            {/* MAERA */}
          <div class="leftRow memberCard">  
          <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/10-maera.png"/>

              <div class="leftCol">
                <h1 class="memberName">Maera Singh</h1>
                <div class="leaderBlockColor">
                  <h2 class="leaderPositions">Human Practices Co-Leader, Wiki Team Member</h2>
                </div>
                <p class =" memberText">
                Hi, I&apos;m Maera Singh, a junior at Ruamrudee International School. I&apos;m part of the wiki team and I&apos;m one of the leaders for Human Practices. My highlight for iGEM was the integrated human practices with the ES Workshop, where we introduced kids to our project. I look forward to presenting our project at the Jamboree and sharing my experience with iGEM!           </p>
              </div>
          </div>
          
          {/* THAMOGNYA */}
          <div class="rightRow memberCard">  
              <div class="rightCol">
                <h1 class="memberName">Thamognya Kodi</h1>
                <div class="leaderBlockColor">
                  <h2 class="leaderPositions">Wiki Team Co-Leader</h2>
                </div>
                <p class =" memberText">
                  Thamognya Kodi is a junior at Ruamrudee International School serving as the Wiki Team Co-Leader.
                </p>
              </div>
              <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/12-kodi.png"/>
          </div>  
          {/* --------------------------members----------------------------- */}
          <h1 class="membersHeading"><u>Members</u></h1>


          {/* PLUEM */}
          <div class="leftRow memberCard">  
          <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/14-pleum.png"/>
                <div class="leftCol">
                  <h1 class="memberName">Pannavit (Pleum) Dangvijit</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Wet Lab and Human Practices Member</h2>
                  </div>
                  <p class =" memberText">
                  Hi, I&apos;m Pleum! I&apos;m currently a junior at Ruamrudee International School. I&apos;m a Wet Lab and Human Practices member for the TRIS iGEM team. It&apos;s my first year involved in iGEM and attending the Jamboree in Paris. I&apos;m responsible for editing both the promotional video and the presentation video which will be shown in the Jamboree. I&apos;m very happy and impressed with the progress of our team. The rest of the team and I are eager to present our project!                
                  </p>
                </div>
            </div> 
          {/* AXE */}
          <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Sirakrit (Axe) Ratanachai</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Wet Lab, Human Practices, and Collaborations Member</h2>
                  </div>
                  <p class =" memberText">
                  I&apos;m Axe, member of the wet lab, Human Practices, and Collaborations team for Ruamrudee International School. Though I won&apos;t be there at the Jamboree, I have worked hard alongside our team to explore and accomplish our project. I trust our team will do great presenting at the Jamboree.
                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/17-axe.png"/>

            </div>
             {/* SARA */}
          <div class="leftRow memberCard">  
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/15-sara.png"/>
                <div class="leftCol">
                  <h1 class="memberName">Supissara (Sara) Sirichantaropas</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Wet Lab and Human Practices Member</h2>
                  </div>
                  <p class =" memberText">
                  Hi, I&apos;m Sara, a junior at Ruamrudee International School. I am a member of the Wet Lab and Human Practices teams in Thailand-RIS. I really enjoyed exploring my passions in both Biology and English through working with the Chula Lab and contributing to writing the reports for the Wet Lab and Human Practices. I am looking forward to attending the Jamboree this year.
</p>
                </div>
            </div>
            
            
            {/* TYNA */}
            <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Tyna MacPherson Sethaputra</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Dry Lab, Human Practices, and Collaborations Member</h2>
                  </div>
                  <p class =" memberText">
                  Hello, I&apos;m Tyna and I am currently a sophomore at Ruamrudee International school. I am part of the Dry Lab, Human Practice and Collaborations team on Thailand-RIS and have had a lot of fun working on our iGEM project. I am so lucky to be part of Thailand-RIS as it is such a special team with such ambitious and smart people. And although I will not be present, I can&apos;t wait to see what we achieve at the Jamboree this year.            
                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/16-tyna.png"/>
            </div> 
           
            {/* PRIN */}
            <div class="leftRow memberCard">  
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/18-prin.png"/>
                <div class="leftCol">
                  <h1 class="memberName">Aornvara (Prin) Uchupalanun</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Wet & Dry Lab, Human Practices, and Collaborations Member</h2>
                  </div>
                  <p class =" memberText">
                  Hi, I&apos;m Prin! I&apos;m currently a sophomore at Ruamrudee International School and a member of the Wet Lab, Dry Lab, Human Practices, and Collaboration Team for Thailand-RIS this year. Unfortunately, I will not be attending the presentation at Jamboree this year, yet enthusiasm and hard work remain palpable throughout our project. Therefore, I am thrilled to see our team presenting at Jamboree this year!
                  </p>
                </div>
            </div>

            {/* AIKO */}
          <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Jidapa (Aiko) Jittirat</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Wet Lab and Collaborations Member</h2>
                  </div>
                  <p class =" memberText">
                  Greetings, allow me to introduce myself -- I&apos;m Aiko, currently a sophomore at Ruamrudee International School. Within the vibrant academic community, I&apos;ve actively engaged as a member of both the Wet Lab and Collaborations groups. This year marks my first in the iGEM team, a thrilling journey that has pushed me to explore the realms of synthetic biology.
                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/19-aiko.png"/>
            </div>

                {/* ACHI */}
                <div class="leftRow memberCard">  
                  <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/23-achi.png"/>
                  <div class="leftCol">
                    <h1 class="memberName">Kitrawipong (Achi) Pongwilai</h1>
                    <div class="leaderBlockColor">
                      <h2 class="memberPositions">Wet Lab and Human Practices Member</h2>
                    </div>
                    <p class =" memberText">
                    Hey! I&apos;m Achi and I am a wet lab and human practices member of Thailand-RIS. I have learned lots of new skills and different techniques in the lab along with getting to interact with farm owners. I am glad to be joining you guys at the Jamboree this year!
                    </p>
                  </div>
              </div>
            
              {/* Ray */}
              <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Kritpaul (Ray) Prasattongosoth</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Collaborations and Wet Lab Member</h2>
                  </div>
                  <p class =" memberText">
                  Hey! I&apos;m Ray and I am part of the wet lab team as well as the collaborations team of Thailand-RIS IGEM. I have learned lots of new skills and experiences working with my peers this year and our project has really hit the spot in my interests in biology. I look forward to going to the jamboree this year!

                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/22-ray.png"/>
            </div> 

            {/* SUN */}
          <div class="leftRow memberCard">  
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/24-sun.png"/>
                <div class="leftCol">
                  <h1 class="memberName">Suphanat (Sun) Thanombooncharoen</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Wet Lab Member</h2>
                  </div>
                  <p class =" memberText">
                  Hi there! I&apos;m Sun, a first-year IGEM member on the Lab team. I had a lot of fun being in the lab and discovering new things. While I can&apos;t be at the Jamboree, I hope everyone is having fun and discovering new things!
                  </p>
                </div>
            </div>
            
            {/* TEM */}
            <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Thanatorn (Tem) Onraksa</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Human Practices Member</h2>
                  </div>
                  <p class =" memberText">
                  Hi I&apos;m Tem. This year&apos;s project really piqued my interest in biology. With this amazing 2023 iGEM team, everyone should expect a high level of effort and nothing less!!!                
                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/25-tem.png"/>
            </div> 

            {/* TUN */}
            <div class="leftRow memberCard">  
            <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/26-tun.png"/>

                <div class="leftCol">
                  <h1 class="memberName">Itthipat (Tun) Saipornchai</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Wet Lab and Human Practices Member</h2>
                  </div>
                  <p class =" memberText">
                  Hey all! I&apos;m Tun and I&apos;m a part of Wet Lab and Human Practices. Although I wouldn&apos;t be able to make it to this year&apos;s jamboree, I am very grateful that I have been able to work alongside my peers which I really enjoyed doing and hopefully we could bring back some silverware this year!               
                  </p>
                </div>
            </div> 
            
            {/* VIEW */}
            <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Wariya (View) Turongkinanon</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Design Member</h2>
                  </div>
                  <p class =" memberText">
                  Hi! I&apos;m View and I&apos;m currently a junior at Ruamrudee International School. This is my first year in the iGEM team as a member of the Design, working on design aspects of the team and collaborating with the Wiki team. Design has been my passion since I was young and I&apos;m delighted to be contributing to this design process. Lastly, I&apos;m looking forward to seeing our team presenting our project at the Jamboree this year!               
                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/21-view.png"/>
            </div> 
        
            {/* FORTUNE*/}
            <div class="leftRow memberCard"> 
            <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/20-fortune.png"/> 
                <div class="leftCol">
                  <h1 class="memberName">Vattikorn (Fortune) Kunkongkaphan</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Design and Collaborations Member</h2>
                  </div>
                  <p class =" memberText">
                  Hey, I&apos;m Fortune, currently a senior at Ruamrudee International School. I am a member of the Design and the Collaboration team. I believe synthetic biology is a great means through which scientists can create meaningful change in the world.            
                  </p>
                </div>
            </div> 

            {/* PUN */}
          <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Patcharipa (Pun) Jeerapat</h1>
                  <div class="leaderBlockColor">
                    <h2 class="memberPositions">Human Practices and Collaborations Member </h2>
                  </div>
                  <p class =" memberText">
                  Hello! I&apos;m Pun, I&apos;m currently a senior in Ruamrudee International School. Being a part of the Thailand-RIS team has not only enhanced my knowledge of genetic engineering but has also enabled me to collaborate with locals  to make a greater impact on our community.
                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/27-pun.png"/>

            </div>

            
            
          

          {/* --------------------------advisors & instructors----------------------------- */}
          <h1 class="membersHeading"><u>Advisors & Instructors</u></h1>
            {/* NICOLE */}
            <div class="leftRow memberCard">  
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/32-nicole.png"/>
                <div class="leftCol">
                  <h1 class="memberName">Nicole Sabet</h1>
                  <div class="leaderBlockColor">
                    <h2 class="advisorPositions">Primary Instructor</h2>
                  </div>
                  <p class =" memberText">
                  Thailand-RIS is making its third appearance at iGEM! With a growing and more diverse team, we have been working hard to build capacity across grade levels and embrace the new and adjusted aspects of the competition. I am continually impressed with the level of independence that our team members demonstrate to execute such a high level project and to work with community members both in and outside of RIS. My main role as adviser is to support the team leaders with their plans, offer guidance during the ups and downs and to ensure smooth and safe travel to the Jamboree. As with our previous two teams, we have set our sights high but are focused primarily on learning from this experience and seeing where we can make an impact in the community. When I am not working with the team, I can be found teaching Biology, coordinating our IB Diploma Program and spending time with my family.
                  </p>
                </div>
            </div>
            {/* OLIVIER */}
            <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Olivier Fernandez</h1>
                  <div class="leaderBlockColor">
                    <h2 class="advisorPositions">Secondary Instructor</h2>
                  </div>
                  <p class =" memberText">
                  Bonjour, Sawadee krub. My Name is Olivier Fernandez. I am a teacher at Ruamrudee International School, Bangkok - Thailand. I am helping and assisting my biology colleague and our Thailand-RIS iGEM 2023 to Paris. Looking forward to a wonderful Jamboree and learning experience for our students in Paris.                
                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/members-page/member-images/33-olivier.png"/>
            </div> 
            
            {/* Teerapong Buaboocha */}
            <div class="leftRow memberCard">  
            <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/titlescreens/members-page/teerapong.png"/>

                <div class="leftCol">
                  <h1 class="memberName">Assoc.Prof.Dr. Teerapong Buaboocha</h1>
                  <div class="leaderBlockColor">
                    <h2 class="advisorPositions">Wet Lab Consultant</h2>
                  </div>
                  <p class =" memberText">
                  Dr. Teerapong Buaboocha is an associate professor at Chulalongkorn University. He received his Bachelor of Sciences from Chulalongkorn University and his Ph.D. from the University of Illinois. His research area is in biochemistry and plant biology. Team Thailand-RIS would like to sincerely thank Dr. Teerapong Buaboocha for his guidance with our project.               
                  </p>
                </div>
            </div> 
            {/* Supaart */}
            <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Assoc.Prof.Dr. Supaart Sirikantaramas</h1>
                  <div class="leaderBlockColor">
                    <h2 class="advisorPositions">Wet Lab Consultant, Dry Lab Consultant</h2>
                  </div>
                  <p class =" memberText">
                  Dr. Supaart Sirikantaramas is an associate professor at Chulalongkorn University. He received a Bachelor of Sciences in Biochemistry from Chulalongkorn University and received his Master of Sciences and Ph.D. from Kyushu University, Japan in Biology and Pharmaceutical Science respectively. Team Thailand-RIS would like to sincerely thank Dr. Supaart Sirikantaramas for his guidance with our project. 
                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/titlescreens/members-page/supaart.png"/>

            </div>

            {/* GIFT */}
            <div class="leftRow memberCard">
             <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/titlescreens/members-page/gift.png"/>
  
                <div class="leftCol">
                  <h1 class="memberName">Kittiya (Gift) Tantisuwanichkul</h1>
                  <div class="leaderBlockColor">
                    <h2 class="advisorPositions">Lead Wet Lab Advisor, Dry Lab Advisor</h2>
                  </div>
                  <p class =" memberText">
                  Miss Kittiya Tantisuwanichkul, referred to as “Gift”, received her bachelor&apos;s degree in Biochemistry and Sciences from Chulalongkorn University, and is currently a PhD student in Biochemistry and Sciences at Chulalongkorn University. Something she really enjoys about conducting research is that research helps her understand things that she is interested in, and understand why things are the way that they are. Her passion in research is what motivated her to continue her studies as a PhD student. Team Thailand-RIS is immensely grateful for the colossal amount of support we have received from Miss Gift and her team.
                  </p>
                </div>
            </div>


            {/* ADHITYO */}
            <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Dr. Adhityo (Adhit) Wicaksono</h1>
                  <div class="leaderBlockColor">
                    <h2 class="advisorPositions">Dry Lab Consultant</h2>
                  </div>
                  <p class =" memberText">
                  Halo! My name is Adhit, I am a postdoc researcher from Indonesia, and I am currently working at Lab 708, the Center of Excellence in Molecular Crops, Faculty of Science, Chulalongkorn University. I have been so into plant biology since I was elementary school. Back then, I was doing experiments on the effects of salt on the mung bean, and I cannot believe that this plant once again became one of my specimens in this postdoctoral project! I started my journey at Institut Teknologi Bandung, Indonesia, where I majored in biology for my BSc, and I was a member of the Plant Science and Biotechnology research group. Then I continued for MSc at Universitas Gadjah Mada, Indonesia, where I focused on plant breeding and genetics. After that, I took an odd detour where I studied biomechanics and biomimetics for my PhD in Åbo Akademi University, Finland, and here, I learned so much working with molecular modelling. In Indonesia, I was once a cram school biology teacher for my freelance job, where I love to share my molecular biology enthusiasm to my students, and I am also one of the advisory boards of Synthetic Biology Indonesia (Synbio ID). I love working with plant bioinformatics for multi-omics analysis, because this way, I can dive into plant&apos;s awesome molecular machinery and learn something new. For Thailand-RIS, I am happy to serve as the advisor to Ms. Nicole Sabet and enjoy teaching everyone with the bioinformatics analysis (dry lab).
                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/titlescreens/members-page/adhit.png"/>
            </div>

             
            {/* CHRIS */}
            <div class="leftRow memberCard">  
            <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/titlescreens/members-page/chris.png"/>
                <div class="leftCol">
                  <h1 class="memberName">Dr. Gholamreza (Chris) Khaksar</h1>
                  <div class="leaderBlockColor">
                    <h2 class="advisorPositions">Dry Lab Advisor</h2>
                  </div>
                  <p class =" memberText">
                  Dr. Gholamreza Khaksar, referred to as “Chris”, is a senior post-doctoral fellow at the Department of Biochemistry, Faculty of Science, Chulalongkorn University. He received his BSc in Fishery engineering from Gorgan University of Agricultural Sciences, Iran in 2007. Then, he pursued his graduate study and obtained his PhD in Biotechnology (international program) from King Mongkut&apos;s University of Technology Thonburi (KMUTT), Thailand in 2018. Since then, he has been working as a postdoctoral fellow. His research interests engage in applying multi-omics approaches (genomes, transcriptomes, metabolomes, hormonome, and interactome) to gain a better understanding of the molecular mechanism underlying post-harvest ripening of climacteric fruit and plant-bacteria interactions for enhancing biotic/abiotic stress tolerance. Team Thailand-RIS is extremely thankful for his assistance, which has been instrumental to the dry lab portion of our project.               
                  </p>
                </div>
            </div> 
           
            {/* BALL */}
            <div class="rightRow memberCard">  
                <div class="rightCol">
                  <h1 class="memberName">Poorichaya (Ball) Singcha</h1>
                  <div class="leaderBlockColor">
                    <h2 class="advisorPositions">Wet Lab Advisor</h2>
                  </div>
                  <p class =" memberText">
                  Miss Poorichaya Singcha, referred to as “Ball”, received her bachelor&apos;s degree in Biochemistry and Sciences from Chulalongkorn University, and is currently a Masters student in Biochemistry and Sciences at Chulalongkorn University. Her love for sciences started from her love of nature and the environment, and from watching various documentaries. Science and research helps him understand things better, and inquire. Team Thailand-RIS is very grateful for Miss Ball and her team for their support.               
                  </p>
                </div>
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/titlescreens/members-page/ball.png"/>
            </div> 
            {/* CAKE */}
            <div class="leftRow memberCard">  
                <img class="memberImg" src="https://static.igem.wiki/teams/4629/wiki/titlescreens/members-page/cake.png"/>
                <div class="leftCol">
                  <h1 class="memberName">Sudarat (Cake) Kasemcholathan</h1>
                  <div class="leaderBlockColor">
                    <h2 class="advisorPositions">Wet Lab Advisor</h2>
                  </div>
                  <p class =" memberText">
                  Miss Sudarat Kasemcholathan, referred to as “Cake”, received her Bachelor of Science (Biology) and Master of Science (Biotechnology) from Naresuan University, and is currently a PhD Student in Biotechnology at Chulalongkorn University. She has also been the recipient of the Science Achievement Scholarship since 2013. At the age of fourteen, while her house was being renovated, she saw chemical names that she had learnt in class on labels on paint buckets. She then realized that science is all around us, and she knew that she wanted to study science from then on. Every time she conducts research, the excitement of discovery and discussion has never left her. She is interested in molecular mechanisms of floral development and carotenoid metabolism, specifically the study of diversity and evolution. Team Thailand-RIS is very grateful for Miss Cake and her team for their support.
                  </p>
                </div>
            </div>       
        </div>
       
      </div>
    );
  }
  
  export default MembersPage;
  