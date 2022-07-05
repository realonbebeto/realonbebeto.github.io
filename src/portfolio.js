/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bebeto Nyamwamu",
  title: "Hello 👋🏿, I'm Bebeto",
  subTitle: emoji(
    "Machine Learning Engineer/Data Scientist 🧑🏿‍💻 specialising in Python for AI, Data Science for most part and Node for Backend once in a while. I am passionate about building ML apps using the Python AI library ecosystems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/17tVcgsONrVsCQCJ0w65BdNPPVI9waoch/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/realonbebeto",
  linkedin: "https://www.linkedin.com/in/realonebebeto/",
  gmail: "nberbetto@gmail.com",
  gitlab: "https://gitlab.com/realonebebeto",
  twitter: "https://twitter.com/realonbebeto",
  kaggle: "https://kaggle.com/realonbebeto",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY and CURIOUS ML Engineer WHO WANTS TO EXPLORE ML TECH STACKS",
  skills: [
    emoji("⚡ Perform Exploratory Data Analysis and Feature Engineering"),
    emoji("⚡ Train, Develop and Test Machine Learning Models"),
    emoji("⚡ Deploy Models as Progressive Applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Scikit-Learn",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Python(FastAPI)",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github-square"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Udacity",
      logo: require("./assets/images/udacityLogo.png"),
      subHeader: "AWS Machine Learning Scholarship program",
      duration: "June 2021 - October 2021",
      desc: "Learnt Fundamentals of Machine Learning",
      descBullets: [
        "Generative AI, Reinforcement learning, and Computer Vision",
        "Software Engineering, OOP"
      ]
    },
    {
      schoolName: "Worldquant University",
      logo: require("./assets/images/wquLogo.png"),
      subHeader: "Applied Data Science",
      duration: "April 2021 - June 2021",
      desc: "Learnt Python for Data Science",
      descBullets: [
        "Python (Numpy, Pandas), Data Wrangling, SQL, JSON, Data Structures"
      ]
    },
    {
      schoolName: "JKUAT",
      logo: require("./assets/images/jkuatLogo.png"),
      subHeader: "Bachelor of Science in Geomatic Engineering",
      duration: "2013 - 2019",
      desc: "Learnt Math, Programming and Analysis Courses",
      descBullets: [
        "Project on Morphometric and Change Detection Analysis for Prioritization of Sub Basin Conservation, Case Study of Taita Hills",
        "Demonstrating data science, spatial analysis, and remote sensing skills."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Scikit-Learn",
      progressPercentage: "89%"
    },
    {
      Stack: "Backend with FastAPI",
      progressPercentage: "80%"
    },
    {
      Stack: "Tensorflow",
      progressPercentage: "70%"
    },
    {
      Stack: "Docker",
      progressPercentage: "79%"
    },
    {
      Stack: "Spark with pySpark",
      progressPercentage: "79%"
    },
    {
      Stack: "Databricks",
      progressPercentage: "70%"
    },
    {
      Stack: "SQL",
      progressPercentage: "60%"
    },
    {
      Stack: "AWS",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "benshi.ai",
      companylogo: require("./assets/images/benshi.png"),
      date: "March 2022 – Ongoing",
      desc: "Data Processing, Behaviour Analysis and Modelling for Healthcare Delivery Optimization",
      descBullets: [
        "Tech Stach: Python, Azure Databricks, pySpark, Lifelines, Matplotlib, Seaborn",
        "Data Processing Pipelines using pySpark for healthcare delivery optimization",
        "Cleaning, Feature Engineering, and Analysis of partners' data using pySpark, Azure Databricks, seaborn, matplotlib",
        "Time Series, Survival Analysis, and Modelling to understand and predict user churn and time to associated events using pySurvival and Lifelines"
      ]
    },
    {
      role: "Data Science Associate",
      company: "Ajua",
      companylogo: require("./assets/images/Ajua.png"),
      date: "Aug 2021 – Ongoing",
      desc: "Reporting, Data Preprocessing, Model Training and Deployment",
      descBullets: [
        "Tech Stach: Python, Tensorflow, Numpy, Matplotlib, SpaCy, GLOVE(NLP), Excel",
        "Data Analysis and Report writing using Excel for various clients",
        "Development of survey questions for benchmark data collection",
        "Exploration of NLP technologies like spaCy, GLOVE for use",
        "Design and development of NLP Deep learning pipeline and deployment",
        "Playing Lead role in the technical development of machine learning pipelines"
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "Omdena",
      companylogo: require("./assets/images/omdenaLogo.png"),
      date: "Nov 2021 – Jan 2022",
      desc: "Developing an AI Model to Identify School Locations in Sudan from Satellite Imagery",
      descBullets: [
        "Tech Stach: Python, Tensorflow, Numpy, Matplotlib",
        "Learnt proper computer vision data annotation",
        "Collaborated to build YOLO and Faster RCNN models for school detection"
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "Omdena",
      companylogo: require("./assets/images/omdenaLogo.png"),
      date: "June 2021 – August 2021",
      desc: "Using Satellite Imagery to Detect and Assess the Damage of Armyworms in Farming",
      descBullets: [
        "Tech Stach: Python, Tensorflow, Numpy, Geopandas, Matplotlib",
        "Built a Resnet-50 model to predict the area affected by Armyworm pest and classify level of infestation",
        "Accuracy of over 90% and RMSE of 0.36"
      ]
    },
    {
      role: "Data Analyst",
      company: "Dalberg Research",
      companylogo: require("./assets/images/dalbergLogo.png"),
      date: "October 2016",
      desc: "Collected and Cleaned Data",
      descBullets: [
        "Tech Stach: Excel, Python",
        "Managed the task of collecting, cleaning and organizing data from online sources for Biofoods, hotels and restaurants."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "TOP ML APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/specLogo.png"),
      projectName: "Car Prediction",
      projectDesc:
        "Car Object Detection and Localization Application using Tensorflow/Docker/FastAPI/React",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/realonbebeto/Car-Detection"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/specLogo.png"),
      projectName: "Startup Recommender",
      projectDesc:
        "Startup Recommender Application using KNN(Scikit-Learn)/Streamlit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://start-upp.herokuapp.com/"
        },
        {
          name: "Visit Report",
          url: "https://drive.google.com/file/d/1OtYSzBA_Sjrw4H_EGeDsRD9yO7aw3IpP/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Hackathons and Some Cool Stuff that I have done !",

  achievementsCards: [
    /*{
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },*/
    {
      title:
        "Google NLP Hack Series: Swahili Social Media Sentiment Analysis Challenge",
      subtitle:
        "Developed a Deep Learning Model based on Roberta Base for Swahili Sentiment Analysis and was Ranked 7th",
      image: require("./assets/images/zindi.webp"),
      footerLink: [
        {
          name: "View Participation",
          url: "https://zindi.africa/competitions/swahili-social-media-sentiment-analysis-challenge/leaderboard"
        }
      ]
    }
    /*{
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }*/
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write, share, and teach others on what I have learnt.",

  blogs: [
    {
      url: "https://omdena.com/blog/supervised-machine-learning-damage-assessment-farming/",
      title: "Supervised Machine Learning for Damage Assessment in Agriculture",
      description:
        "Developing a Supervised Machine Learning prediction model to tackle farm pest challenges in agriculture. Including a personal story on overcoming impostor syndrome while working with Omdena AI changemakers from around the world."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a role/opening or want to say hi? My Inbox is open for you",
  number: "+254-702022848",
  email_address: "nberbetto@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "realonbebeto", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
