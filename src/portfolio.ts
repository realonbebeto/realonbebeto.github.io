import emoji from "react-easy-emoji";
import { SiKubernetes, SiPostgresql, SiPython, SiJavascript, SiAmazonaws, SiGooglecloud, SiDocker, SiPandas, SiTensorflow, SiJupyter, SiFastapi, SiMlflow, SiHtml5, SiGit, SiScikitlearn, SiLooker, SiNumpy, SiElasticsearch } from "react-icons/si"
import { FaCode } from "react-icons/fa"
import { TbBrandGoogleBigQuery } from "react-icons/tb"
import { DiSpark } from "react-icons/di"


const homeInfo = {
  username: "Bebeto Nyamwamu",
  greeting: "Hello 👋🏿, I'm ",
  prefname: "Nyamwamu",
  prefTitle: "Fullstack ML/Data Engineer",
  subtitle: emoji(
    "Fullstack ML/Data Engineer with a wealth of experience in building and deploying data science apps. I am agile in using the Python AI & Data Science library ecosystem for MLOps/DataOps"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1B46NPH6e8epBZpqJJr-vasp0Il4uhlyq/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaInfo = {
  github: "https://github.com/realonbebeto",
  linkedin: "https://www.linkedin.com/in/realonebebeto/",
  gmail: "nberbetto@gmail.com",
  calendly: "https://calendly.com/realonbebeto",
  gitlab: "https://gitlab.com/realonebebeto",
  twitter: "https://twitter.com/realonbebeto",
  kaggle: "https://kaggle.com/realonbebeto",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

const headLine = {
  text: "Fullstack Machine Learning/Data Engineer | Python | DataOps | MLOps"
}

// Skills Section

const skillsInfo = {
  title: "SKILLS",
  subTitle: "PROFICIENCIES",
  jd: [
    emoji(
      "⚡ EDA & Feature Engineering"
    ),
    emoji(
      "⚡ Machine Learning: Building, Testing, Deploying, Monitoring and Maintaining Models as Applications"
    ),
    emoji("⚡ Data Engineering: Designing, Building and Orchestration of Datawarehouse ETL & ELT Pipelines"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  languageskills: [{
    skillName: "Python",
    fontAwesomeClassname: SiPython
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: SiJavascript
  },
  {
    skillName: "HTML",
    fontAwesomeClassname: SiHtml5
  }
  ],

  frameworkskills: [
    {
      skillName: "Numpy",
      fontAwesomeClassname: SiNumpy
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: SiPandas
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: SiTensorflow
    },
    {
      skillName: "Spark",
      fontAwesomeClassname: DiSpark
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: SiFastapi
    },
    {
      skillName: "Mlflow",
      fontAwesomeClassname: SiMlflow
    },
    {
      skillName: "Scikit-Learn",
      fontAwesomeClassname: SiScikitlearn
    },
    {
      skillName: "Prefect",
      fontAwesomeClassname: FaCode
    },

  ],

  cloud: [
    {
      skillName: "GCP",
      fontAwesomeClassname: SiGooglecloud
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: SiAmazonaws
    }
  ],

  databaseskills: [
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: SiPostgresql
    },
    {
      skillName: "BigQuery",
      fontAwesomeClassname: TbBrandGoogleBigQuery
    }
  ],

  others: [
    {
      skillName: "docker",
      fontAwesomeClassname: SiDocker
    },
    {
      skillName: "k8s",
      fontAwesomeClassname: SiKubernetes
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassname: SiJupyter
    },
    {
      skillName: "Git",
      fontAwesomeClassname: SiGit
    },
    {
      skillName: "Looker",
      fontAwesomeClassname: SiLooker
    },
    {
      skillName: "Elastic Search",
      fontAwesomeClassname: SiElasticsearch
    }

  ],
  display: true // Set false to hide this section, defaults to true
};


// Experience Section
const workInfo = {
  title: "EXPERIENCE",
  display: true, //Set it to true to show workExperiences Section
  experiences: [
    {
      role: "Data Engineer",
      company: "Zoniq",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "September 2023 – To date",
      desc: "Building and maintaing location scouting and profiling platform",
      stack: ["Python", "FastAPI", "AWS", "Docker", "DVC", "BigQuery"],
      descBullets: [
        "Application Development: Maintaining and developing DVC - Papermill prediction utilization pipeline code",
        "API Integration & Deployment: Building and maintaining a software platform to run location evaluations using FastAPI",
        "Infrastructure Maintenance: Managing docker running product services on EC2",
        "Web Scraping Monitoring: Automated monitoring solution for data scrapers on AWS Lambda, ensuring efficient data collection"
      ]
    },
    {
      role: "ML Engineer",
      company: "Omdena",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2023 – October 2023",
      desc: "Building a Fraud Detection System in Insurance",
      stack: ["Python", "Tensorflow", "FastAPI", "AWS", "Docker", "Scikit-Learn", "Elastic Search"],
      descBullets: [
        "Predictive Modeling: Built ensemble model with scikit learn, XGBoost, and LightGBM achieving 80% + accuracy in fraud detection",
        "Predictive Modeling: Developed an alteration model with Tensorflow achieving 70% + accuracy in detecting document alteration",
        "Predictive Modeling: Built a claim document similarity search using Tensorflow and Elasticsearch to identify already used documents",
        "Predictive Modeling: Built the YOLO objection detection model to detect the use of stamps in documents",
        "API Integration and Deployment: Developed FastAPI API service serving as an interface for the other models",
        "Infrastructure Maintenance: Deployed the model(s) platform on AWS EC2 via Docker"
      ]
    },
    {
      role: "Data Scientist/Engineer",
      company: "Ajua",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "Aug 2021 – August 2023",
      desc: "Reporting, Data Preprocessing, Model Training and Deployment",
      stack: ["Python", "Prefect", "GCP", "AWS", "k8s", "Docker", "Excel"],
      descBullets: [
        "Ad - hoc Analysis: Data analysis and quarterly market research applying data from the Ajua SaaS survey platform",
        "Predictive Modeling: NLP sentiment analysis with Tensorflow, XGBoost achieving 80% + accuracy",
        "Infrastructure Maintenance: Managing docker running models, Prefect, MLFlow on AWS’s EC2 and GCP's Compute Engine",
        "ETL and Data Warehousing: Batched ETL pipelines on GCP's Compute Engine for BigQuery storage - Visual Analytics: Developed, deployed, and maintained BigQuery-Looker dashboards"
      ]
    },
    {
      role: "Data Scientist",
      company: "benshi.ai",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "March 2022 – July 2022",
      desc: "Data Processing, Behaviour Analysis and Modelling for Healthcare Delivery Optimization",
      stack: ["Spark", "pySurvival", "Azure Databricks"],
      descBullets: [
        "Analytics Transformation: pySpark pipelines for behavior analysis in healthcare delivery optimization, processing millions of logs",
        "Feature Engineering & Analytics: Generated new features, and analyzed partners' data on Azure Databricks with pySpark, Seaborn",
        "Predictive Modeling: pySurvival and Lifelines for time series analysis, with 60 % + accuracy in predicting user churn and event timing"
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "Omdena",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Nov 2021 – Jan 2022",
      desc: "Developing an AI Model to Identify School Locations in Sudan from Satellite Imagery",
      stack: ["Python", "Tensorflow", "Numpy"],
      descBullets: [
        "Learnt proper computer vision data annotation",
        "Collaborated to build YOLO and Faster RCNN POC models for school detection with average 75% accuracies"
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "Omdena",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Nov 2021 – Jan 2022",
      desc: "Developing an AI Model to Assess Fall Armyworm Risk in Mali from Satellite Imagery",
      stack: ["Python", "Tensorflow", "Numpy"],
      descBullets: [
        "Collaborated in a team of 50 to collect relevant data",
        "Collaborated in a team to preprocess satellite images",
        "Built a Resnet-50 model to predict the area affected by Armyworm pest and classify level of infestation",
        "POC model with accuracy of over 90% in classification and RMSE of 0.36 in area prediction"
      ]
    },
    {
      role: "Data Analyst",
      company: "Dalberg Research",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "October 2016",
      desc: "Collection and Cleaning of Data",
      stack: ["Python", "Excel"],
      descBullets: [
        "Managed the task of collecting, cleaning and organizing data from online sources for Biofoods, hotels and restaurants."
      ]
    }
  ]
};

// Education Section

const educationInfo = {
  title: "EDUCATION",
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Grand Valley State University",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "MSc. in Data Science & Analytics",
      duration: "August 2023 - Ongoing",
      desc: "Advancing Data Science & Engineering",
      descBullets: [
        "High Perfomance Computing",
        "Data Engineering",
        "Applied Statistics"
      ]
    },
    {
      schoolName: "Udacity",
      // logo: require("./assets/images/harvardLogo.png"),
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
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Applied Data Science",
      duration: "April 2021 - June 2021",
      desc: "Learnt Python for Data Science",
      descBullets: ["Python (Numpy, Pandas), Data Wrangling, SQL, JSON, Data Structures"]
    },
    {
      schoolName: "JKUAT University",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "BSc. in Geospatial Engineering",
      duration: "September 2013 - November 2019",
      desc: "Learnt Math, Programming and Analysis Courses",
      descBullets: [
        "Project on Morphometric and Change Detection Analysis for Prioritization of Sub Basin Conservation, Case Study of Taita Hills",
        "Demonstrating data science, spatial analysis, and remote sensing skills."
      ]
    }
  ]
};

var openSourceProjectsInfo = {
  title: "OTHER PROJECTS",
  display: true
}

// BigProjects Section

const bigProjectsInfo = {
  title: "FEATURED PROJECTS",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectname: "Saayahealth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerlink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }

      ],
      //  Only top 3 stack skills recommended here.
      stack: ["Python", "JavaScript", "TypeScrip"]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectname: "Nextu",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerlink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ],
      //  Only top 3 stack skills recommended here.
      stack: ["Python", "JaxScript", "TypeScrip"]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectname: "Saayahealth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerlink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ],
      //  Only top 3 stack skills recommended here.
      stack: ["Python", "JavaScript", "TypeScript"]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectname: "Saayahealth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerlink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ],
      //  Only top 3 stack skills recommended here.
      stack: ["Python", "JavaScript", "TypeScript"]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Achievements Section
const achievementsInfo = {
  title: "ACHIEVEMENTS",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievements: [
    {
      title: "Google NLP Hack Series: Swahili Social Media Sentiment Analysis Challenge",
      subtitle:
        "Developed a Deep Learning Model based on Roberta Base for Swahili Sentiment Analysis and was Ranked 7th",
      // image: require("./assets/images/codeInLogo.webp"),
      link: "https://zindi.africa/competitions/swahili-social-media-sentiment-analysis-challenge/leaderboard"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogInfo = {
  title: "PUBLICATIONS",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/pulse/what-ajua-doing-comments-customer-feedback-opportunities-exist-/",
      title: "What is Ajua Doing with Comments in Customer Feedback and Opportunities that Exist for a Business",
      description:
        "Customer Feedback is at the centre of Business Success."
    },
    {
      url: "https://omdena.com/blog/supervised-machine-learning-damage-assessment-farming/",
      title: "Supervised Machine Learning for Damage Assessment in Agriculture",
      description:
        "Developing a Supervised Machine Learning prediction model to tackle farm pest challenges in agriculture."
    },
    {
      url: "https://drive.google.com/file/d/1OtYSzBA_Sjrw4H_EGeDsRD9yO7aw3IpP/view?usp=sharing",
      title: "Startup Classification - Recommender System",
      description:
        "A report on a recommender system based on KNN set up and runs on streamlit sharing"
    },
    {
      url: "https://www.researchgate.net/publication/345005831_Morphometric_and_Change_Detection_Analysis_for_Prioritization_of_Sub_Basin_Conservation_Case_Study_of_Taita_Hills",
      title: "Morphometric and Change Detection Analysis for Prioritization of Sub Basin Conservation, Case Study of Taita Hills",
      description:
        "A study analyzing the risk of Taita Hills region of harmful runoff and soil erosion by employing morphometric analysis and change detection in a GIS environment to prioritize the Taita Hills in Taita Taveta County"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


export { homeInfo, headLine, socialMediaInfo, skillsInfo, educationInfo, workInfo, bigProjectsInfo, openSourceProjectsInfo, achievementsInfo, blogInfo };