let pageLeftElement;
let pageRightElement;
let fileContainerElement;

let fileCollection = [
  {
    "pageTitle" : "What is Social Media Algorithm?",
    "id" : "SNS_Algorithm",
    "mainDescription" : ['An algorithm can be seen as <mark>a set of mathematical rules that define how a group of data operates</mark>. On social media, algorithms help maintain order and rank search results and advertisements.'," For example, Facebook employs algorithms to dictate the order in which pages and content are displayed. As of 2021, there are approximately 4.5 billion internet users, with around 57% of the global population using social media. Given this massive scale, it is virtually impossible to monitor and manage all users manually. Thus, algorithms play a crucial role in determining the validity and placement of social media accounts and content." , "These algorithms determine how content is filtered, ranked, selected and recommended to users. In some ways, <mark>algorithms influence our choices and what we see on social media.</mark>"],
    "mainImage" : "algorithm.webp",
    "subTitle" : "Why are social media algorithms important?",
    "subDescription" : [["Filter out the content noise","This prevents overwhelming users with endless content and helps them find what they like faster."],
      ["Show users more of what they’re interested in","This personalization improves user engagement and in turn, creates a positive user experience."],
      ["Personalize user experience","Algorithms leverage data to personalize content recommendations."],
      ["Maximize organic reach","Creators and marketers can optimize their content for algorithms to leverage its distribution potential."]],
    "videoURL" : "https://www.youtube.com/embed/KWt_IL3JViY",
  },
  {
    "pageTitle" : "What is the Twitter (X) algorithm?",
    "id" : "Twitter",
    "mainDescription" : ["The Twitter (X) algorithm is the platform’s recommendation system that uses machine learning to determine what content users see in their Feeds. Various factors, including <mark>relevance, popularity and the types of content you engage with</mark> determine the posts you see." , 
                        "Back in 2017, Twitter (X) introduced the relevance model in its algorithm, replacing “While You Were Away” with “In Case You Missed It”. Those changes continue to resonate today with posts <mark>presented to users based on their relevance instead of in a chronological order.</mark>",
                        "Another big recent change to the Twitter (X) is the algorithm now puts more emphasis on <mark>highlighting content from smaller accounts</mark>. The goal is to create a more level playing field and expose users to a wider range of voices and perspectives on the platform. This update gives smaller accounts a better chance to grow their audience and make an impact."],
    "mainImage" : "twitter.png",
    "subTitle" : "How the Twitter (X) algorithm works in 2024",
    "subDescription" : [["User interactions","Content is recommended based on your activity, including who you follow and interact with."],
      ["Relevancy","The relevance of a Tweet is based on the keywords used, the user’s interests and previous interactions."],
      ["Profile Reputation Score","Active profiles engaging with others gain higher visibility; Twitter also uses TweetCred, a PageRank algorithm, to rate a profile’s credibility based on its followers, past activities, safety status and device usage."],
      ["Also other features like.. ","Location and language, Engagement level, Recency and Similiar sccounts."]],
    "videoURL" : "https://www.youtube.com/embed/GXN34w8kju4",
  },
  {
    "pageTitle" : "The Instagram algorithm: How it works and strategies for 2024",
    "id" : "Instagram",
    "mainDescription" : ["Contrary to popular belief, there isn’t one, all-powerful algorithm. Each section of Instagram—Reels, Stories/Feed and Explore—has its own." , 
                        "From the time you publish a post to how often someone “likes” your content, these signals are all weighted differently on each part of the platform to rank posts. For example, when clicking through Stories, people most likely want to see content from their friends. But if they’re browsing Explore, they want to see something new.",
                        "At the end of the day, Instagram’s goal is to make users’ time on the platform worthwhile by showing them what they’ll like and what’s most relevant to them."],
    "mainImage" : "instagram.png",
    "subTitle" : "How does the Instagram algorithm work in 2024?",
    "subDescription" : [["How the Instagram Reels algorithm works","Reels are determined by User engagement, Interaction History, The content, and Who posted it."],
      ["How the Instagram Feed and Instagram Story algorithm works","They are related with The content itself, Who posted it, User activity, and Interaction history."],
      ["How the Instagram Explore page algorithm works","Explore decides what to show you by looking at two things: your past interactions, and other accounts who like the same content you do. This helps Instagram get to know you better, and surface new posts and accounts you might enjoy."]],
    "videoURL" : "https://www.youtube.com/embed/VvSnhSo6LkM",
  },
  {
    "pageTitle" : "What is the TikTok algorithm?",
    "id" : "TikTok",
    "mainDescription" : ["The TikTok algorithm is a system that makes content recommendations tailored to each user. It decides which videos a user might like based on their individual interests and displays them on the user’s For You page." , 
                        "As a result, the For You page is highly personalized for each user. What you see on your For You page will not be the same as what your friend or colleague sees on their For You page.",
                        "For example, someone who watches a lot of beauty and makeup content will naturally see more recommendations for similar videos. Yet, those videos will rarely show up for someone who mostly consumes content related to sports and gaming."],
    "mainImage" : "tiktok.png",
    "subTitle" : "How the TikTok algorithm works in 2024",
    "subDescription" : [["Engagement","Finishing a long video or favoriting it also tells TikTok that content really resonated with you."],
      ["User Interactions","This information allows the platform to get a better understanding of each user’s unique preferences and how they change over time."],
      ["Video information","Video information like captions, hashtags and sounds also helps TikTok understand how to rank the content."],
      ["Device and account indicators","The main information it looks at are: Country settings, Language preferences, Device type, and Category selection"]],
    "videoURL" : "https://www.youtube.com/embed/nfczi2cI6Cs",
  },
  {
    "pageTitle" : "Challenges of Social Network Algorithms",
    "id" : "More",
    "mainDescription" : ["Social network algorithms enhance user experiences but create 'filter bubbles', spread misinformation, and reinforce biases. Users should seek diverse perspectives and verify content to avoid these pitfalls." , 
                        "These algorithms often misuse personal data for targeted ads and encourage addictive behavior, negatively impacting mental health. Limiting usage and adjusting privacy settings can mitigate these effects.",
                        "A lack of transparency and control in algorithms can lead to unintended consequences like discrimination. Advocating for fairness and improving media literacy is essential for ethical algorithm use."],
    "mainImage" : "sns_algorithm.jpg",
    "subTitle" : "Major Controversies Surrounding Social Media Algorithms",
    "subDescription" : [["Facebook’s Fake News Spread (2016 US Election)","During and after the 2016 US presidential election, Facebook’s algorithm faced criticism for contributing to the spread of fake news and misinformation. Facebook subsequently restructured its news content prioritization and implemented fact-checking systems."],
      ["YouTube’s Algorithm and Extremist Content (2019)","YouTube’s recommendation algorithm was criticized for excessively promoting extremist and conspiracy-related content to users. Algorithm often suggested progressively more radical content."],
      ["Instagram and Mental Health Concerns","Instagram’s algorithm faced criticism for overexposing users to idealized life images, negatively impacting the mental health of younger audiences, particularly teens. In 2021, internal research revealed Instagram’s contribution to mental health issues, especially among teenage girls."]],
    "videoURL" : "https://www.youtube.com/embed/tlyb0BASsEs",
  }
];
/////URLParam
document.addEventListener("DOMContentLoaded", function(){

  /* Get page element references */
  pageLeftElement = document.getElementById("pageLeft");
  pageRightElement = document.getElementById("pageRight");
  fileContainerElement = document.getElementById("fileContainer");

  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlTag = urlParams.get('tag');

  if (urlTag == null) { /* Display Cover of file */
    pageLeftElement.style.backgroundColor = "transparent";
    pageLeftElement.style.backgroundImage = "none";
    pageLeftElement.style.border = "none";


    pageRightElement.style.borderLeft = "none";
    pageRightElement.style.backgroundImage = "none";
    pageRightElement.style.backgroundColor = "orange";
    let newTitle = document.createElement("P");
    newTitle.classList.add("title");
    newTitle.innerText = "Social Network Algorithm";
    pageRightElement.appendChild(newTitle);


    fileContainerElement.style.gridTemplateColumns = "1fr 1fr 600px 1fr 1fr";
    fileContainerElement.style.gridTemplateAreas = '". . . . ."". . . . ."". . pageRight tagRight ."". . . . reference"';


  }

  else {
    /* Display individual file by trying to match the "ID" value */
    for (let i = 0; i < fileCollection.length; i++) {
      if (fileCollection[i]["id"] == urlTag) {
        createProjectPage(fileCollection[i]);
      }
    }
  }

});

function createProjectPage(incomingJSON) {

  let newHomeTag = document.createElement("A");
  newHomeTag.href = "index.html";
  newHomeTag.classList.add("home_tag");
  newHomeTag.innerText = "Home";
  fileContainerElement.appendChild(newHomeTag);

  let newPageTitle = document.createElement("H1");
  newPageTitle.innerText = "< "+ incomingJSON["pageTitle"]+" >";
  newPageTitle.classList.add("pageTitle");
  pageLeftElement.appendChild(newPageTitle);

  let newMainImage = document.createElement("IMG");
  newMainImage.classList.add("mainImage");
  newMainImage.src = incomingJSON["mainImage"];
  pageLeftElement.appendChild(newMainImage);

  let newMain = document.createElement("DIV");
  for (let i = 0; i < incomingJSON["mainDescription"].length; i++){
    let newMainDescription = document.createElement("P");
    newMainDescription.classList.add("description");
    newMainDescription.innerHTML = incomingJSON["mainDescription"][i];
    newMain.appendChild(newMainDescription);
  }
  pageLeftElement.appendChild(newMain);


  let newVideo = document.createElement("IFRAME");
  newVideo.classList.add("video");
  newVideo.src = incomingJSON["videoURL"];
  pageRightElement.appendChild(newVideo);


  let newSubTitle = document.createElement("H2");
  newSubTitle.innerText = incomingJSON["subTitle"];
  newSubTitle.classList.add("subTitle");
  pageRightElement.appendChild(newSubTitle);

  let newList = document.createElement("UL");
  newList.classList.add("list")
  for (let i = 0; i < incomingJSON["subDescription"].length; i++){
    let newListElement = document.createElement("LI");
    newListElement.classList.add("listElement");
    newListElement.innerText = incomingJSON["subDescription"][i][0];
    let newListSubElement = document.createElement("P");
    newListSubElement.classList.add("listSubElement");
    newListSubElement.innerText = incomingJSON["subDescription"][i][1];

    newListElement.appendChild(newListSubElement);
    newList.appendChild(newListElement);
  } 
  pageRightElement.appendChild(newList);
  
  // pageTitleElement.innerText = incomingJSON["itemTitle"];

  // let newProjectElement = document.createElement("DIV");

  // let newProjectImage = document.createElement("IMG");
  // newProjectImage.classList.add("projectHeroImage");
  // newProjectImage.src = incomingJSON["image"];
  // newProjectElement.appendChild(newProjectImage);

  // let newProjectDescription = document.createElement("P");
  // newProjectDescription.classList.add("description");
  // newProjectDescription.innerText = incomingJSON["description"];
  // newProjectElement.appendChild(newProjectDescription);

  // projectDisplayElement.appendChild(newProjectElement);

}