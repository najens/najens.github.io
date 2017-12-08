// Get items from html
var title = document.getElementById("title");
var langBtn = document.getElementById("lang-btn");
var langBtnTxt = document.getElementById("lang-btn-txt");
var lang = document.getElementById("lang");
var langItems = lang.getElementsByTagName("a");
var en = document.getElementById("en");
var es = document.getElementById("es");
var pt = document.getElementById("pt");
var navButton = document.getElementById("nav-btn");
var navList = document.getElementById("nav-lst");
var navListItems = navList.getElementsByTagName("a");
var home = document.getElementById("home");
var section1 = document.getElementById("section-1");
var section2 = document.getElementById("section-2");
var section3 = document.getElementById("section-3");
var introGreeting = document.getElementById("intro-greeting");
var introName = document.getElementById("intro-name");
var introText = document.getElementById("intro-text");
var introLink = document.getElementById("intro-link");
var aboutHeading = document.getElementById("about-heading");
var aboutImg1 = document.getElementById("about-img-1");
var aboutSub1 = document.getElementById("about-sub-1");
var aboutText1 = document.getElementById("about-text-1");
var aboutSub2 = document.getElementById("about-sub-2");
var aboutText2 = document.getElementById("about-text-2");
var aboutSub3 = document.getElementById("about-sub-3");
var aboutText3 = document.getElementById("about-text-3");
var skillsHeading = document.getElementById("skills-heading");
var skill1 = document.getElementById("skill-1");
var percent1 = document.getElementById("percent-1");
var skill2 = document.getElementById("skill-2");
var percent2 = document.getElementById("percent-2");
var skill3 = document.getElementById("skill-3");
var percent3 = document.getElementById("percent-3");
var skill4 = document.getElementById("skill-4");
var percent4 = document.getElementById("percent-4");
var skill5 = document.getElementById("skill-5");
var percent5 = document.getElementById("percent-5");
var skill6 = document.getElementById("skill-6");
var percent6 = document.getElementById("percent-6");
var skill7 = document.getElementById("skill-7");
var percent7 = document.getElementById("percent-7");
var skill8 = document.getElementById("skill-8");
var percent8 = document.getElementById("percent-8");
var skill9 = document.getElementById("skill-9");
var percent9 = document.getElementById("percent-9");
var skill10 = document.getElementById("skill-10");
var percent10 = document.getElementById("percent-10");
var skillLabel1 = document.getElementById("skill-label-1");
var skillLabel2 = document.getElementById("skill-label-2");
var skillLabel3 = document.getElementById("skill-label-3");
var skillLabel4 = document.getElementById("skill-label-4");
var portfolioHeading = document.getElementById("portfolio-heading");
var portfolioProject1 = document.getElementById("portfolio-project-1");
var portfolioTopic1 = document.getElementById("portfolio-topic-1");
var portfolioProject2 = document.getElementById("portfolio-project-2");
var portfolioTopic2 = document.getElementById("portfolio-topic-2");
var copyright = document.getElementById("copyright");
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hi there and greetings!");

// Display text at start up
title.innerHTML = titleEN.title;
langBtnTxt.innerHTML = languagesEN.english;
en.innerHTML = languagesEN.english;
es.innerHTML = languagesEN.spanish;
pt.innerHTML = languagesEN.portuguese;
home.innerHTML = navEN.home;
section1.innerHTML = navEN.section1;
section2.innerHTML = navEN.section2;
section3.innerHTML = navEN.section3;
introGreeting.innerHTML = homeEN.text1;
introName.innerHTML = homeEN.text2;
introText.innerHTML = homeEN.text3;
introLink.innerHTML = homeEN.text4;
aboutHeading.innerHTML = aboutEN.heading;
// TODO: set alt text on image
aboutSub1.innerHTML = aboutEN.subheading1;
aboutText1.innerHTML = aboutEN.text1;
aboutSub2.innerHTML = aboutEN.subheading2;
aboutText2.innerHTML = aboutEN.text2;
aboutSub3.innerHTML = aboutEN.subheading3;
aboutText3.innerHTML = aboutEN.text3;
skillsHeading.innerHTML = skillsEN.heading;
skill1.innerHTML = skillsEN.skill1;
percent1.innerHTML = skillsEN.percent1;
skill2.innerHTML = skillsEN.skill2;
percent2.innerHTML = skillsEN.percent2;
skill3.innerHTML = skillsEN.skill3;
percent3.innerHTML = skillsEN.percent3;
skill4.innerHTML = skillsEN.skill4;
percent4.innerHTML = skillsEN.percent4;
skill5.innerHTML = skillsEN.skill5;
percent5.innerHTML = skillsEN.percent5;
skill6.innerHTML = skillsEN.skill6;
percent6.innerHTML = skillsEN.percent6;
skill7.innerHTML = skillsEN.skill7;
percent7.innerHTML = skillsEN.percent7;
skill8.innerHTML = skillsEN.skill8;
percent8.innerHTML = skillsEN.percent8;
skill9.innerHTML = skillsEN.skill9;
percent9.innerHTML = skillsEN.percent9;
skill10.innerHTML = skillsEN.skill10;
percent10.innerHTML = skillsEN.percent10;
skillLabel1.innerHTML = skillsEN.label1;
skillLabel2.innerHTML = skillsEN.label2;
skillLabel3.innerHTML = skillsEN.label3;
skillLabel4.innerHTML = skillsEN.label4;
portfolioHeading.innerHTML = portfolioEN.heading;
portfolioProject1.innerHTML = portfolioEN.project1;
portfolioTopic1.innerHTML = portfolioEN.topic1;
portfolioProject2.innerHTML = portfolioEN.project2;
portfolioTopic2.innerHTML = portfolioEN.topic2;
copyright.innerHTML = footerEN.copyright;


// Display text in English on click
en.addEventListener("click", function() {
  // Display text at start up
  title.innerHTML = titleEN.title;
  langBtnTxt.innerHTML = languagesEN.english;
  en.innerHTML = languagesEN.english;
  es.innerHTML = languagesEN.spanish;
  pt.innerHTML = languagesEN.portuguese;
  home.innerHTML = navEN.home;
  section1.innerHTML = navEN.section1;
  section2.innerHTML = navEN.section2;
  section3.innerHTML = navEN.section3;
  introGreeting.innerHTML = homeEN.text1;
  introName.innerHTML = homeEN.text2;
  introText.innerHTML = homeEN.text3;
  introLink.innerHTML = homeEN.text4;
  aboutHeading.innerHTML = aboutEN.heading;
  // TODO: set alt text on image
  aboutSub1.innerHTML = aboutEN.subheading1;
  aboutText1.innerHTML = aboutEN.text1;
  aboutSub2.innerHTML = aboutEN.subheading2;
  aboutText2.innerHTML = aboutEN.text2;
  aboutSub3.innerHTML = aboutEN.subheading3;
  aboutText3.innerHTML = aboutEN.text3;
  skillsHeading.innerHTML = skillsEN.heading;
  skill1.innerHTML = skillsEN.skill1;
  percent1.innerHTML = skillsEN.percent1;
  skill2.innerHTML = skillsEN.skill2;
  percent2.innerHTML = skillsEN.percent2;
  skill3.innerHTML = skillsEN.skill3;
  percent3.innerHTML = skillsEN.percent3;
  skill4.innerHTML = skillsEN.skill4;
  percent4.innerHTML = skillsEN.percent4;
  skill5.innerHTML = skillsEN.skill5;
  percent5.innerHTML = skillsEN.percent5;
  skill6.innerHTML = skillsEN.skill6;
  percent6.innerHTML = skillsEN.percent6;
  skill7.innerHTML = skillsEN.skill7;
  percent7.innerHTML = skillsEN.percent7;
  skill8.innerHTML = skillsEN.skill8;
  percent8.innerHTML = skillsEN.percent8;
  skill9.innerHTML = skillsEN.skill9;
  percent9.innerHTML = skillsEN.percent9;
  skill10.innerHTML = skillsEN.skill10;
  percent10.innerHTML = skillsEN.percent10;
  skillLabel1.innerHTML = skillsEN.label1;
  skillLabel2.innerHTML = skillsEN.label2;
  skillLabel3.innerHTML = skillsEN.label3;
  skillLabel4.innerHTML = skillsEN.label4;
  portfolioHeading.innerHTML = portfolioEN.heading;
  portfolioProject1.innerHTML = portfolioEN.project1;
  portfolioTopic1.innerHTML = portfolioEN.topic1;
  portfolioProject2.innerHTML = portfolioEN.project2;
  portfolioTopic2.innerHTML = portfolioEN.topic2;
  copyright.innerHTML = footerEN.copyright;
});

// Display text in Spanish on click
es.addEventListener("click", function() {
  title.innerHTML = titleES.title;
  langBtnTxt.innerHTML = languagesES.spanish;
  en.innerHTML = languagesES.english;
  es.innerHTML = languagesES.spanish;
  pt.innerHTML = languagesES.portuguese;
  home.innerHTML = navES.home;
  section1.innerHTML = navES.section1;
  section2.innerHTML = navES.section2;
  section3.innerHTML = navES.section3;
  introGreeting.innerHTML = homeES.text1;
  introName.innerHTML = homeES.text2;
  introText.innerHTML = homeES.text3;
  introLink.innerHTML = homeES.text4;
  aboutHeading.innerHTML = aboutES.heading;
  // TODO: set alt text on image
  aboutSub1.innerHTML = aboutES.subheading1;
  aboutText1.innerHTML = aboutES.text1;
  aboutSub2.innerHTML = aboutES.subheading2;
  aboutText2.innerHTML = aboutES.text2;
  aboutSub3.innerHTML = aboutES.subheading3;
  aboutText3.innerHTML = aboutES.text3;
  skillsHeading.innerHTML = skillsES.heading;
  skill1.innerHTML = skillsES.skill1;
  percent1.innerHTML = skillsES.percent1;
  skill2.innerHTML = skillsES.skill2;
  percent2.innerHTML = skillsES.percent2;
  skill3.innerHTML = skillsES.skill3;
  percent3.innerHTML = skillsES.percent3;
  skill4.innerHTML = skillsES.skill4;
  percent4.innerHTML = skillsES.percent4;
  skill5.innerHTML = skillsES.skill5;
  percent5.innerHTML = skillsES.percent5;
  skill6.innerHTML = skillsES.skill6;
  percent6.innerHTML = skillsES.percent6;
  skill7.innerHTML = skillsES.skill7;
  percent7.innerHTML = skillsES.percent7;
  skill8.innerHTML = skillsES.skill8;
  percent8.innerHTML = skillsES.percent8;
  skill9.innerHTML = skillsES.skill9;
  percent9.innerHTML = skillsES.percent9;
  skill10.innerHTML = skillsES.skill10;
  percent10.innerHTML = skillsES.percent10;
  skillLabel1.innerHTML = skillsES.label1;
  skillLabel2.innerHTML = skillsES.label2;
  skillLabel3.innerHTML = skillsES.label3;
  skillLabel4.innerHTML = skillsES.label4;
  portfolioHeading.innerHTML = portfolioES.heading;
  portfolioProject1.innerHTML = portfolioES.project1;
  portfolioTopic1.innerHTML = portfolioES.topic1;
  portfolioProject2.innerHTML = portfolioES.project2;
  portfolioTopic2.innerHTML = portfolioES.topic2;
  copyright.innerHTML = footerES.copyright;
});



// Display text in Portuguese on click
pt.addEventListener("click", function() {
  title.innerHTML = titlePT.title;
  langBtnTxt.innerHTML = languagesPT.portuguese;
  en.innerHTML = languagesPT.english;
  es.innerHTML = languagesPT.spanish;
  pt.innerHTML = languagesPT.portuguese;
  home.innerHTML = navPT.home;
  section1.innerHTML = navPT.section1;
  section2.innerHTML = navPT.section2;
  section3.innerHTML = navPT.section3;
  introGreeting.innerHTML = homePT.text1;
  introName.innerHTML = homePT.text2;
  introText.innerHTML = homePT.text3;
  introLink.innerHTML = homePT.text4;
  aboutHeading.innerHTML = aboutPT.heading;
  // TODO: set alt text on image
  aboutSub1.innerHTML = aboutPT.subheading1;
  aboutText1.innerHTML = aboutPT.text1;
  aboutSub2.innerHTML = aboutPT.subheading2;
  aboutText2.innerHTML = aboutPT.text2;
  aboutSub3.innerHTML = aboutPT.subheading3;
  aboutText3.innerHTML = aboutPT.text3;
  skillsHeading.innerHTML = skillsPT.heading;
  skill1.innerHTML = skillsPT.skill1;
  percent1.innerHTML = skillsPT.percent1;
  skill2.innerHTML = skillsPT.skill2;
  percent2.innerHTML = skillsPT.percent2;
  skill3.innerHTML = skillsPT.skill3;
  percent3.innerHTML = skillsPT.percent3;
  skill4.innerHTML = skillsPT.skill4;
  percent4.innerHTML = skillsPT.percent4;
  skill5.innerHTML = skillsPT.skill5;
  percent5.innerHTML = skillsPT.percent5;
  skill6.innerHTML = skillsPT.skill6;
  percent6.innerHTML = skillsPT.percent6;
  skill7.innerHTML = skillsPT.skill7;
  percent7.innerHTML = skillsPT.percent7;
  skill8.innerHTML = skillsPT.skill8;
  percent8.innerHTML = skillsPT.percent8;
  skill9.innerHTML = skillsPT.skill9;
  percent9.innerHTML = skillsPT.percent9;
  skill10.innerHTML = skillsPT.skill10;
  percent10.innerHTML = skillsPT.percent10;
  skillLabel1.innerHTML = skillsPT.label1;
  skillLabel2.innerHTML = skillsPT.label2;
  skillLabel3.innerHTML = skillsPT.label3;
  skillLabel4.innerHTML = skillsPT.label4;
  portfolioHeading.innerHTML = portfolioPT.heading;
  portfolioProject1.innerHTML = portfolioPT.project1;
  portfolioTopic1.innerHTML = portfolioPT.topic1;
  portfolioProject2.innerHTML = portfolioPT.project2;
  portfolioTopic2.innerHTML = portfolioPT.topic2;
  copyright.innerHTML = footerPT.copyright;
});

// Display nav list on click
navButton.addEventListener("click", function() {
  navList.classList = navList.classList == "nav-list flex-col" ? "nav-list hidden" : "nav-list flex-col";
});

// Hide nav list when nav list item is clicked
for (var i=0; i<navListItems.length; i++) {
  navListItems[i].addEventListener("click", function() {
    navList.classList = "nav-list hidden";
  });
}

// Display language list on click
langBtn.addEventListener("click", function() {
  lang.classList = lang.classList == "lang-list" ? "lang-list hidden" : "lang-list";
})

// Hide language list when lang list item is clicked
for (var i=0; i<langItems.length; i++) {
  langItems[i].addEventListener("click", function() {
    lang.classList = "lang-list hidden";
  })
}
