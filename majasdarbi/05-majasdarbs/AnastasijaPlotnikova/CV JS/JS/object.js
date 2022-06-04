const person = {
    fullName: "Anastasija Plotņikova",
    profession: "Future Front-End Developer",
    description: "I am a focused person, with my own personal view, for each individual situation, but at the same time, I can listen to multiple points of view and find a common solution.I adapt quickly to any job, I have always found contact with each individual. I am an independent person, trying to resolve conflict situations constructively. Responsibly perform my job duties without unnecessary supervision. I am always open to new challenges and goals.",
    projectsTitle: "Projects",
    projectsLink: ["https://anasteti4ka.github.io/goit-markup-hw-08/", "https://anasteti4ka.github.io/goit-js-hw-08-gallery/"],
    projectsLinkDescription: ["HTML5, CSS3", "JavaScript"],
    experience: "Work Experience",
    experienceTitle: ["Front-End Developer", "Sales manager", "Branch Manager"],
    experiencePlace: ["Freelance", "GASTROBURG SIA", "AD BALTIC SIA"],
    experiencePeriod: ["From now - and in future - Worldwile", "October 2018 - up to now - Latvia", "August 2012 - January 2018 - Latvia"],
    experienceDuties: ["I will learn JavaScript, and I will figure out how to work with frameworks and libraries", "I will learn & figure out what is 'under the hood' on the server side.", "I won't be intimidated by preprocessors and assemblers", "I will be able to work with version control (Git, GitHub, CVS, etc.), use graphic editors, “play” with various CMS templates.", "Sale of professional (HORECA) kitchen equipment for restaurants, hotels, bars.", "Attracting new customers.", "1C Program: Invoicing, Entering Converters, Reporting, and c.TRELLO board", "From 08.2012 - 12.2013 I worked as Customer specialist, from 01.2014 - 10.2014 I worked as Regional Representative, From 11.2014 - 08.01.2018", "I was Branch manager. Branch activities organization, customer support.", "Scheduling for 6 employees."],
    education: "Education",
    educationPlace: ["University of Latvia", "GoIT online education", "University of Turiba", "Riga School of Tourism and Commerce"],
    educationName: ["Front-End developer", "Project manager", "Tourism service commercial worker"],
    educationPeriod: ["April 2022 - June 2022 - Latvia", "September 2020 - March 2021 - online", "March 2018 - May 2018 - Latvia", "Septermber 2008 - June 2012 - Latvia"],
    contactInfo: ["+371 20007763", "anasteti4ka@inbox.lv"],
    sidebarTitle: ["Contacts", "Tech Skills", "Soft Skills"],
    sidebarItem: ["HTML5","CSS3", "GIT", "Microsoft office", "JavaScript", "Scrum", "Agile", "GTD", "Teamwork" ],
};

let myName = document.querySelector(".myself__name");
console.log(myName);

myName.innerHTML = person.fullName;

let myProfession = document.querySelector(".myself__profession");
console.log(myProfession);

myProfession.innerHTML = person.profession;

let myDescription = document.querySelector(".myself__description");
console.log(myDescription);

myDescription.innerHTML = person.description;


let myProjects = document.querySelector(".projects__title");
console.log(myProjects);

myProjects.innerHTML = person.projectsTitle;

let myProjectsLink = document.getElementsByClassName("projects__link");
console.log(myProjectsLink);

myProjectsLink[0].innerHTML = person.projectsLink[0];
myProjectsLink[1].innerHTML = person.projectsLink[1];

let myLinkDescription = document.getElementsByClassName("projects__link-description");
console.log(myLinkDescription);

myLinkDescription[0].innerHTML = person.projectsLinkDescription[0];
myLinkDescription[1].innerHTML = person.projectsLinkDescription[1];

let myExperience = document.querySelector(".experience");
console.log(myExperience);

myExperience.innerHTML = person.experience;

let myExperienceTitle = document.getElementsByClassName("experience__title");
console.log(myExperienceTitle);

myExperienceTitle[0].innerHTML = person.experienceTitle[0];
myExperienceTitle[1].innerHTML = person.experienceTitle[1];
myExperienceTitle[2].innerHTML = person.experienceTitle[2];

let myExperiencePlace = document.getElementsByClassName("experience__place");
console.log(myExperiencePlace);

myExperiencePlace[0].innerHTML = person.experiencePlace[0];
myExperiencePlace[1].innerHTML = person.experiencePlace[1];
myExperiencePlace[2].innerHTML = person.experiencePlace[2];

let myExperiencePeriod = document.getElementsByClassName("experience__period");
console.log(myExperiencePeriod);

myExperiencePeriod[0].innerHTML = person.experiencePeriod[0];
myExperiencePeriod[1].innerHTML = person.experiencePeriod[1];
myExperiencePeriod[2].innerHTML = person.experiencePeriod[2];

let myExperienceDuties = document.getElementsByClassName("experience__duties-text");
console.log(myExperienceDuties);

myExperienceDuties[0].innerHTML = person.experienceDuties[0];
myExperienceDuties[1].innerHTML = person.experienceDuties[1];
myExperienceDuties[2].innerHTML = person.experienceDuties[2];
myExperienceDuties[3].innerHTML = person.experienceDuties[3];
myExperienceDuties[4].innerHTML = person.experienceDuties[4];
myExperienceDuties[5].innerHTML = person.experienceDuties[5];
myExperienceDuties[6].innerHTML = person.experienceDuties[6];
myExperienceDuties[7].innerHTML = person.experienceDuties[7];
myExperienceDuties[8].innerHTML = person.experienceDuties[8];
myExperienceDuties[9].innerHTML = person.experienceDuties[9];

let myEducation = document.querySelector(".education");
console.log(myEducation);

myEducation.innerHTML = person.education;

let myEducationPlace = document.getElementsByClassName("education__place");
console.log(myEducationPlace);

myEducationPlace[0].innerHTML = person.educationPlace[0];
myEducationPlace[1].innerHTML = person.educationPlace[1];
myEducationPlace[2].innerHTML = person.educationPlace[2];
myEducationPlace[3].innerHTML = person.educationPlace[3];

let myEducationName = document.getElementsByClassName("education__name");
console.log(myEducationName);

myEducationName[0].innerHTML = person.educationName[0];
myEducationName[1].innerHTML = person.educationName[0];
myEducationName[2].innerHTML = person.educationName[1];
myEducationName[3].innerHTML = person.educationName[2];

let myEducationTime = document.getElementsByClassName("education__period");
console.log(myEducationTime);

myEducationTime[0].innerHTML = person.educationPeriod[0];
myEducationTime[1].innerHTML = person.educationPeriod[1];
myEducationTime[2].innerHTML = person.educationPeriod[2];
myEducationTime[3].innerHTML = person.educationPeriod[3];

let myContactInfo = document.getElementsByClassName("sidebar__contact-link");
console.log(myContactInfo);

myContactInfo[0].innerHTML = person.contactInfo[0];
myContactInfo[1].innerHTML = person.contactInfo[1];

let mySidebarTitle = document.getElementsByClassName("sidebar__title");
console.log(mySidebarTitle);

mySidebarTitle[0].innerHTML = person.sidebarTitle[0];
mySidebarTitle[1].innerHTML = person.sidebarTitle[1];
mySidebarTitle[2].innerHTML = person.sidebarTitle[2];

let mySidebarItem = document.getElementsByClassName("sidebar__text--white");
console.log(mySidebarItem);

mySidebarItem[0].innerHTML = person.sidebarItem[0];
mySidebarItem[1].innerHTML = person.sidebarItem[1];
mySidebarItem[2].innerHTML = person.sidebarItem[2];
mySidebarItem[3].innerHTML = person.sidebarItem[3];
mySidebarItem[4].innerHTML = person.sidebarItem[4];
mySidebarItem[5].innerHTML = person.sidebarItem[5];
mySidebarItem[6].innerHTML = person.sidebarItem[6];
mySidebarItem[7].innerHTML = person.sidebarItem[7];
mySidebarItem[8].innerHTML = person.sidebarItem[8];