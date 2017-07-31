$(document).ready(function(){

      var welcomeSlides = [
        {
          id: 'onboarding',
          section: 'ONBOARDING',
          title: 'Inspirational Quote',
          abstract: "You're welcomed into the ideaGarage each time with an uplifting, sometimes fun or quirky quote to set the tone that this experience is meant to motivate and inspire.  It is about being creative and thoughtful while having fun all while in service of your greater objective - to make a difference for your client, and possibly, the world.",
          image: "quote.png"
        },
        {
          id: 'meet-your-team',
          section: 'ONBOARDING',
          title: 'Choose your Garage',
          abstract: "If you've gone through the ideaGarage before, you'll have the option to access or continue developing previous work upon logging in. If new to the experience, you'll be brought to your team dashboard to begin.",
          image: "choose-your-garage.png",
        },
        {
          index: '4',
          id: 'dashboard',
          section: 'ONBOARDING',
          title: 'Dashboard',
          abstract: "The team dashboard serves as home base throughout the journey, presenting a real-time glimpse at your team's ideaGarage progress. This section also provides an introduction and jumping-off point to three stages of opportunity building: Ideate, Prioritize and Build.",
          image: "dashboard.png",
          watson: "From the beginning, sellers know that Watson is part of the team, serving as a cognitive coach throughout the experience."
        }
      ]


      var welcomeHTML = '';
        for ( i = 0; i < welcomeSlides.length; i++){
            welcomeHTML += '<section data-background-image="images/slide-background.svg" id="' + welcomeSlides[i].id + '">';
            welcomeHTML += '<div class="row"><div class="col-sm-8"><img src="images/' + welcomeSlides[i].image + '" style="height: 400px" class="center-block img-responsive"></div>';
            welcomeHTML += '<div class="col-sm-4"><p class="helv-bold experience-section-title">ONBOARDING</p>' +  '<h4>' + welcomeSlides[i].title + '</h4>';
            welcomeHTML += '<p>' + welcomeSlides[i].abstract + '</p>';
            if ( welcomeSlides[i].watson ){
              welcomeHTML += '<img class="img-responsive" style="padding-right: 5px; height: .5em; display: inline" src="images/watson.png"><p class="helv-bold" style="display: inline;">Watson Moment:</p><p>' + welcomeSlides[i].watson + '</p>';
            }
            welcomeHTML+='</div></section>';
        }
       $('#onboarding-section').append(welcomeHTML);

       var clientSlides = [
         {
           index: '1',
           id: 'clientIntelligence',
           section: 'CLIENT INSIGHT',
           title: 'Client Intelligence',
           abstract: "After onboarding, you'll access the Client Intelligence Dashboard, where real-time client insights are pulled directly from the Client Expansion App. This information is used to explore what's known about the client now, as well as client goals and needs to consider for the future. This foundation prepares your team for a successful ideaGarage journey.",
           image: "gifs/20_client-intelligence.gif",
           watson: "Watson recommends possible IBM offerings and solutions most aligned to client needs."
         },
         {
           index: '1',
           id: 'profilePage',
           section: 'CLIENT INSIGHT',
           title: 'Buyer Network: Profile Page',
           abstract: "The Buyer Network App is a piece of the ideaGarage experience. Individual buyer information is presented on the Profile page, where your team finds key insights into where the buyer sits within the client’s organizational structure. Job Role Personas allow you to deeply understand how to engage respective new buyers, while buyer and client news are aggregated from multiple sources.",
           image: "profile-page.png",
           watson: "Using Personality Insights, Watson helps sellers engage with clients in new ways."
         },
         {
           index: '2',
           id: 'influencerMap',
           section: 'CLIENT INSIGHT',
           title: 'Buyer Network: Influencer Map',
           abstract: "In addition to providing understanding on target buyers as individuals, Buyer Network supplies insights into a buyer's influencer network. As stakeholders in the buying decision, influencers are instrumental when it comes to gaining access to new buyers. With key information about them,  your team determines an intentional approach for engaging key buyers and influencers needed to effectively progress the opportunity.",
           image: "influencer-map.png"
         },
         {
           index: '3',
           id: 'ibmInteractions',
           section: 'CLIENT INSIGHT',
           title: 'Buyer Network: IBM Interactions',
           abstract: "The Interactions component of Buyer Network provides insights into recent interactions between IBM and target buyer(s) while supporting the team in tracking future client engagement and opportunity progression.",
           image: "ibm-interactions.png"
         }
       ]


       var clientHTML = '';
         for ( i = 0; i < clientSlides.length; i++){
           clientHTML += '<section data-background-image="images/slide-background.svg" id="' + clientSlides[i].id + '">';
           clientHTML += '<div class="row"><div class="col-sm-8"><img src="images/' + clientSlides[i].image + '" style="height: 400px" class="center-block img-responsive"></div>';
           clientHTML += '<div class="col-sm-4"><p class="helv-bold participants-section-title">' + clientSlides[i].section + '</p><h4 >' + clientSlides[i].title + '</h4>';
           clientHTML += '<p>' + clientSlides[i].abstract + '</p>';
           if ( clientSlides[i].watson ){
             clientHTML += '<img class="img-responsive" style="padding-right: 5px; height: .5em; display: inline" src="images/watson.png"><p class="helv-bold" style="display: inline;">Watson Moment:</p><p>' + clientSlides[i].watson + '</p>';
           }
           clientHTML+='</div></section>';
         }
        $('#client-section').append(clientHTML);

      var sparkSlides = [
        {
          index: '1',
          section: 'IDEATE',
          id: 'clientGoals',
          title: 'Select Client Goals',
          abstract: "Your first step is to select the top three client goals you would like to focus on.  It’s a simple click, with the flexibility to change selections at any time. Based on your choices, you’ll receive a prioritized set of industry-specific Spark cards.  Simple, consumable, relevant content for you to explore.",
          image: "gifs/04_spark-gallery.gif",
          watson: "Using client intelligence data, Watson can predict the most relevant client goals to help teams filter and sort Spark content."
        },
        {
          index: '2',
          section: 'IDEATE',
          id: 'sparkCard',
          title: 'Spark Card',
          abstract: 'Spark cards provide the essential components to begin building out an idea for your client.  From peer interviews to subject matter expert insights, each card serves up inspiration on how to help clients solve unique business challenges.',
          image: "gifs/05_spark-card.gif",
          url: "https://w3-connections.ibm.com/wikis/form/anonymous/api/wiki/1ea72ea5-36d4-45f0-b54f-a29ce4bae0e3/page/9ea399eb-07c5-40ba-9539-d8a91f7aafac/attachment/97479bcc-f90b-4155-9cc7-1d9feb6eda83/media/Anatomy_of_a_Spark_Card.pdf"
        },
        {
          index: '3',
          section: 'IDEATE',
          id: 'selectSparks',
          title: 'Select Your Sparks',
          abstract: 'As you find Sparks that ignite ideas for new client opportunities, save those Sparks to your dashboard. You can select as many Sparks as you like.',
          image: "gifs/06_select-sparks.gif"
        },
        {
          index: '4',
          id: 'myWorkspace',
          section: 'IDEATE',
          title: 'Sparks to Ideas',
          abstract: "After selecting the Sparks that are most relevant to your client and the client goals you will address, turn the Spark into an Idea by making it specific to your client.",
          image: "sparks-to-ideas.png"
        },
      ]


      var sparksHTML = '';
        for ( i = 0; i < sparkSlides.length; i++){
          sparksHTML += '<section data-background-image="images/slide-background.svg" id="' + sparkSlides[i].id + '">';
          sparksHTML += '<div class="row"><div class="col-sm-8"><img src="images/' + sparkSlides[i].image + '" style="height: 400px" class="center-block img-responsive"></div>';
          sparksHTML += '<div class="col-sm-4"><p class="helv-bold experience-section-title">' + sparkSlides[i].section + '</p><h4 >' + sparkSlides[i].title + '</h4>';
          sparksHTML += '<p>' + sparkSlides[i].abstract + '</p>';
          if ( sparkSlides[i].watson ){
            sparksHTML += '<img class="img-responsive" style="padding-right: 5px; height: .5em; display: inline" src="images/watson.png"><p class="helv-bold" style="display: inline;">Watson Moment:</p><p>' + sparkSlides[i].watson + '</p>';
          }
          if ( sparkSlides[i].url){
          	sparksHTML +='<a style="text-decoration: none" target="_window" href="' + sparkSlides[i].url + '"><button class="btn btn-primary">View the Anatomy of a Spark Card</buttob></a>'
          }
          sparksHTML+='</div></section>';
        }
       $('#ideate-section').append(sparksHTML);


      var ideasSlides = [

        {
          index: '2',
          id: 'teamWorkspace',
          section: 'PRIORITIZE',
          title: 'Team Workspace',
          abstract: "In the Team Workspace, you'll find all submitted Ideas from teammates clustered and prioritized based on similarities and voting. With your team's creativity on display, this section makes it clear that the original Sparks have ignited many new possibilities for your client. ",
          image: "gifs/10_vote.gif"
        },
        {
          index: '3',
          id: 'customizeIdea',
          section: 'PRIORITIZE',
          title: 'Evaluate',
          abstract: 'In this section, you and your teammates will collaboratively evolve and customize your client Ideas further. If desired, combine and rewrite Ideas using the best elements from each individual Idea submitted.',
          image: "gifs/09_customize.gif",
        },
        {
          index: '3',
          id: 'promoteIdea',
          section: 'PRIORITIZE',
          title: 'Promote',
          abstract: 'Before moving Ideas forward, review them as a team. Using a short checklist, ensure Ideas are of the highest quality and ready to develop further if desired.',
          image: "promote.png",
        }
      ]


      var ideasHTML = '';
        for ( i = 0; i < ideasSlides.length; i++){
          ideasHTML += '<section data-background-image="images/slide-background.svg" id="' + ideasSlides[i].id + '">';
          ideasHTML += '<div class="row"><div class="col-sm-8"><img src="images/' + ideasSlides[i].image + '" style="height: 400px" class="center-block img-responsive"></div>';
          ideasHTML += '<div class="col-sm-4"><p class="helv-bold idea-section-title">' + ideasSlides[i].section + '</p><h4 >' + ideasSlides[i].title + '</h4>';
          ideasHTML += '<p>' + ideasSlides[i].abstract + '</p>';
          if ( ideasSlides[i].watson ){
            ideasHTML += '<img class="img-responsive" style="padding-right: 5px; height: .5em; display: inline" src="images/watson.png"><p class="helv-bold" style="display: inline;">Watson Moment:</p><p>' + ideasSlides[i].watson + '</p>';
          }
          ideasHTML+='</div></section>';
        }
       $('#promote-section').append(ideasHTML);


      var propositionSlides = [
        {
          index: '1',
          id: 'propositionGallery',
          section: 'PROPOSITION',
          title: 'Ideas to Opportunity Briefs',
          abstract: "After reviewing the checklist, you'll be taken into a section where all submitted Ideas live. As a team, select the Ideas you want to move forward and progress into Opportunity Briefs, or suggested plans of action for the client. Non-prioritized Ideas will be stored in the ideaGarage for future consideration.",
          image: "idea-to-opp.png"
        },
        {
          index: '2',
          section: 'PROPOSITION',
          id: 'compellingReason',
          title: 'Compelling Reason to Act',
          abstract: "The first step in turning selected Ideas into Opportunity Briefs is articulating the client's Compelling Reason to Act. Here, work with your team to identify why the client needs to transform by setting up the Idea as a viable solution. What market disruptions must your client address? What factors require urgent action?",
          image: "gifs/12_compelling-reason-to-act.gif",
          watson: "Watson will be able to learn which elements are most successful and suggest the best language for the Compelling Reason to Act and all the value proposition sections."
        },
        {
          index: '3',
          section: 'PROPOSITION',
          id: 'capabilityProposition',
          title: 'Business Capabilities',
          abstract: "Next up, imagine the client has embraced your proposed solution. What new capabilities will they gain? What will they be able to do tomorrow that they cannot do today?",
          image: "gifs/13_capabilities.gif"
        },
        {
          index: '4',
          section: 'PROPOSITION',
          id: 'benefitsProposition',
          title: 'Client Benefits',
          abstract: "With new capabilities in place, what value will be created for the client in both quantitative and qualitative terms? Will they drive more revenue and profit? Create better customer experiences? Grow market share? Articulate the key benefits they will experience as a result of your Idea.",
          image: "gifs/14_benefits.gif"
        },
        {
          index: '6',
          section: 'PROPOSITION',
          id: 'businessCase',
          title: 'Client Business Case',
          abstract: "Reflecting on the new capabilities and benefits created for your client, collaborate with your team to build a case defining the solution's return on investment. As the final piece of the Opportunity Brief, this statement should express the quantifiable metrics your client can expect to achieve.",
          image: "business-case.png"
        },
        {
          index: '2',
          section: 'PROPOSITION',
          id: 'proposal-slide',
          title: 'Opportunity Brief',
          abstract: "Once the business case has been created, you're taken to the final Opportunity Brief, where all previous team ideaGarage activities are populated. Providing a summary of the key elements of the opportunity, the Brief can be shared with client buyers and internal IBM leadership. While visually appealing and professional, this section is also editable to ensure a truly customized client experience.",
          image: "gifs/18_proposal-scroll.gif",
          watson: "From beginning to end, Watson will be a coach and a partner in the ideaGarage experience, offering proposal confidence ratings and next steps."
        },
      ]


      var propositionHTML = '';
        for ( i = 0; i < propositionSlides.length; i++){
          propositionHTML += '<section data-background-image="images/slide-background.svg" id="' + propositionSlides[i].id + '">';
          propositionHTML += '<div class="row"><div class="col-sm-8"><img src="images/' + propositionSlides[i].image + '" style="height: 400px" class="center-block img-responsive"></div>';
          propositionHTML += '<div class="col-sm-4"><p class="helv-bold proposition-section-title">BUILD</p>' + '<h4 >' + propositionSlides[i].title + '</h4>';
          propositionHTML += '<p>' + propositionSlides[i].abstract + '</p>';
          if ( propositionSlides[i].watson ){
            propositionHTML += '<img class="img-responsive" style="padding-right: 5px; height: .5em; display: inline" src="images/watson.png"><p class="helv-bold" style="display: inline;">Watson Moment:</p><p>' + propositionSlides[i].watson + '</p>';
          }
          propositionHTML+='</div></section>';
        }
       $('#develop-section').append(propositionHTML);




/*PROPOSAL CONTENT */

      var proposalSlides = [
        {
          index: '1',
          id: 'proposalGallery',
          section: 'PROPOSAL',
          title: 'Proposal Gallery',
          abstract: "The Proposal Gallery houses all of the team’s Ideas that have been developed into Propositions. Team members collaborate on each Proposition individually. Team members can move easily between Propositions as they are being developed. The Proposal Gallery dashboard shows the progress for each Proposition being prepared to share with clients.",
          image: "proposal-gallery.png"
        },
        {
          index: '2',
          section: 'PROPOSAL',
          id: 'proposal-slide',
          title: 'Proposal',
          abstract: "The Proposal is the culmination of all of the previous team activities in the ideaGarage.  It creates a summary of the key elements of the opportunity that can be shared with client buyers and internal IBM leadership. The format is visually appealing and professional but also editable to ensure a truly customized client experience.",
          image: "gifs/18_proposal-scroll.gif",
          watson: "From beginning to end, Watson will be a coach and a partner in the ideaGarage experience, offering proposal confidence ratings and next steps."
        },
        {
          index: '3',
          section: 'PROPOSAL',
          id: 'proposalSubmission',
          title: 'Proposal Submission',
          abstract: "When the team agrees that a fully crafted opportunity is ready to be shared with and reviewed by IBM leadership, the proposal is “submitted,” preventing further editing until unlocked. While awaiting feedback on their proposal submission, team members can view and download a version of the Proposal. The team will be able to make further edits after feedback is received. A complete and ready proposal marks the conclusion of the Ideas App portion of the ideaGarage.",
          image: "gifs/19_submit-proposal.gif"
        }

      ]


      var proposalHTML = '';
        for ( i = 0; i < proposalSlides.length; i++){
          proposalHTML += '<section data-background-image="images/slide-background.svg" id="' + proposalSlides[i].id + '">';
          proposalHTML += '<div class="row"><div class="col-sm-8"><img src="images/' + proposalSlides[i].image + '" style="height: 400px" class="center-block img-responsive"></div>';
          proposalHTML += '<div class="col-sm-4"><p class="helv-bold proposal-section-title">' + proposalSlides[i].section + '</p><h4 >' + proposalSlides[i].title + '</h4>';
          proposalHTML += '<p>' + proposalSlides[i].abstract + '</p>';
          if ( proposalSlides[i].watson ){
            proposalHTML += '<img class="img-responsive" style="padding-right: 5px; height: .5em; display: inline" src="images/watson.png"><p class="helv-bold" style="display: inline;">Watson Moment:</p><p>' + proposalSlides[i].watson + '</p>';
          }
          proposalHTML+='</div></section>';
        }
       $('#proposal-section').append(proposalHTML);



/*BUYER CONTENT */

      var buyerSlides = [

      ]


      var buyerHTML = '';
        for ( i = 0; i < buyerSlides.length; i++){
          buyerHTML += '<section data-background-image="images/slide-background.svg" id="' + buyerSlides[i].id + '">';
          buyerHTML += '<div class="row"><div class="col-sm-8"><img src="images/' + buyerSlides[i].image + '" style="height: 400px" class="center-block img-responsive"></div>';
          buyerHTML += '<div class="col-sm-4"><p class="helv-bold buyer-section-title">' + buyerSlides[i].section + '</p><h4 >' + buyerSlides[i].title + '</h4>';
          buyerHTML += '<p>' + buyerSlides[i].abstract + '</p></div></section>';
        }
       $('#buyer-section').append(buyerHTML);



/*PREPARE TO ENGAGE CONTENT*/

      var engageSlides = [
        {
          index: '1',
          id: 'createConversation',
          section: 'ENGAGE',
          title: 'Create your Conversation',
          abstract: "Each team will develop a conversation to engage their target buyer(s) regarding the opportunity proposal. Employing IBM Design Thinking techniques, teams will collaborate to create a compelling conversation and client experience for the target buyer(s).",
          image: "conversation-by-design.png"
        },
        {
          index: '2',
          id: 'virtualAdvisorPanel',
          section: 'ENGAGE',
          title: 'Virtual Advisor Panel',
          abstract: "The team will have the opportunity to practice their client conversation and presentation of the Proposal to a virtual Advisor Panel and receive feedback upon which to move forward. Advisor Panels represent the conclusion of the ideaGarage program. However, account teams, sales leaders and SMEs will be expected to engage buyers and track opportunities in Sales Connect.",
          image: "virtual-advisory-panel.jpg"
        }
      ]


      var engageHTML = '';
        for ( i = 0; i < engageSlides.length; i++){
          engageHTML += '<section data-background-image="images/slide-background.svg" id="' + engageSlides[i].id + '">';
          engageHTML += '<div class="row"><div class="col-sm-8"><img src="images/' + engageSlides[i].image + '" style="height: 400px" class="center-block img-responsive"></div>';
          engageHTML += '<div class="col-sm-4"><p class="helv-bold engage-section-title">' + engageSlides[i].section + '</p><h4 >' + engageSlides[i].title + '</h4>';
          engageHTML += '<p>' + engageSlides[i].abstract + '</p></div></section>';
        }
       $('#engage-section').append(engageHTML);



      $('#menu-button').click(function(){
        $('#mural-menu').toggleClass('disabled');
      })

});
