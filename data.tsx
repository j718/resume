export const name: string = "Jacob Clarke";
export const intro: string = `Over the last few years, I have worked in several fields related to
music, medicine, and cycling. I am currently studying at St. Louis
University School of Medicine as a prospective MD candidate and spend
my free time exploring St. Louis bike trails and city parks with my
wife Amanda.`;

export type PublicationProps = {
  reference: string;
  href?: string;
};

function d(str) {
  return ("" + str).replace(/(\n)\s+/g, "$1");
}

export const publications: Array<PublicationProps> = [
  // { reference: "Paper with Peds Department" },
  // { reference: "Paper with Taylor" },
  {
    reference:
      "Zhang JK, Patel M, Patel N, Clarke J, Almajali M, Alexopoulos G. Clinical and Radiographic Biomarkers of Delayed Cerebral Ischemia following Aneurysmal Subarachnoid Hemorrhage. Weill Cornell Medicine Neurological Research Symposium, New York City, NY. Jan 2021",
  },
  {
    href: "/publications/clarke_et_al_hnc.pdf",
    reference:
      "Clarke, Jacob A., Alyssa M. Despotis, Ricardo J. Ramirez, Jose P. Zevallos, and Angela L. Mazul. “Head and Neck Cancer Survival Disparities by Race and Rural–Urban Context.” Cancer Epidemiology and Prevention Biomarkers 29, no. 10 (October 1, 2020): 1955–61. https://doi.org/10.1158/1055-9965.EPI-20-0376.",
  },
  {
    href: "https://cebp-aacrjournals-org.ezp.slu.edu/content/29/6_Supplement_2/B099",
    reference:
      "Jacob Clarke, Angela Mazul. Rural Black Cases Have Worsened Outcomes in Head and Neck Cancer. Poster Presented at: AACR The Science of Cancer Disparities. 2019 Sep 20; San Francisco, CA",
  },
  {
    reference:
      "Joshua J. Nelson, Seth R. Stapley, Chris S. Finuf, Elizabeth Anderson, Jacob Clarke, Jordan T. Yorgason, Scott C. Steffensen. Effects of Cocaine on Spontaneous Dopamine Release Varies across Striatal Regions Poster Presented at: Mary-Lou Fulton Conference. 2018 Apr 12; Provo, UT.",
  },
];

enum ExperienceTypes {
  RESEARCH = "Research Experience",
  VOLUNTEER = "Volunteer Experience",
  WORK = "Work Experience",
}

export type ExperienceProps = {
  type: ExperienceTypes;
  organization: string;
  position: string;
  dates: string;
  supervisor?: string;
  link?: string;
  weeklyHours?: number;
  description: string;
  reasonLeaving?: string;
};

export const highlights = [
  "Jacob is invested in medical education. IllScripts",
  ""
]

export const experiences: Array<ExperienceProps> = [
  
  {
    organization: "St. Louis University School of Medicine",
    dates: "May 2021 - Present",
    position: "Student Researcher",
    supervisor: "Timothy Wiemken, PhD",
    description: `The Vaccine Adverse Events Reporting System (VAERS) is often difficult to use for research because its coding is done by non-medical personal. Consequently, many of the recorded symptoms are not relevant to vaccine adverse events. I recoded over 8000 symptoms from within VAERS database to more clinically relevant terms.I am now creating an online portal that researchers can use to query the newly recoded VAERS data. My work will make the data more relevant and easily accessible for research questions.
     `,
    type: ExperienceTypes.RESEARCH,
  },
  {
    organization: "The Church of Jesus Christ of Latter-day Saints",
    type: ExperienceTypes.VOLUNTEER,
    position: "Children's Choir Leader",
    weeklyHours: 3,
    description: `Music is an important part of my life. I led a children's choir of 30. Prior to COVID, we met weekly. During COVID, I created weekly online videos to help the children learn songs and taught several other weeks over zoom. We eventually held an entirely virtually recorded musical program during 2020.`,
    dates: "June 2019 - Present",
  },
  {
    organization: "SLU Ill Scripts",
    position: "Lead Web Developer",
    dates: "Oct 2020 - Present",
    type: ExperienceTypes.VOLUNTEER,
    description: `I created a study tool using anki for intervention to help students learn`,
    reasonLeaving: "N/A",
    link: "https://illscripts.com",
    supervisor: "Nora Porter, MD",
    weeklyHours: 1,
  },
  {
    organization: "SLU West Pavilion Cancer Center",
    type: ExperienceTypes.VOLUNTEER,
    position: "Volunteer Pianist",
    reasonLeaving: "I transitioned to spend more time working in my lab.",
    weeklyHours: 1,
    description: `I played piano outside of patient rooms while they were receiving chemotherapy.
      Total Time: 16 hours`,
    dates: "February 2019 - May 2019",
  },
  {
    organization: "Americorps",
    position: "Vaccination Clinic Volunteer",
    description: `I wanted to find a way to help with the St. Louis response to the COVID vaccine. Consequently, I volunteered twice at this community vaccination clinic. At the clinic, I reviewed past medical history and side effects with patients before receiving their vaccines.
    Total time: 10 hours.`,
    dates: "April 2021 - April 2021",
    type: ExperienceTypes.VOLUNTEER,
  },
  {
    organization: "The Church of Jesus Christ of Latter-day Saints",
    type: ExperienceTypes.VOLUNTEER,
    position: "Service Mission",
    supervisor: "Christian Fingerle, PhD",
    weeklyHours: 60,
    description:
      "I served a two-year mission for my church in north-eastern Germany. While there, I learned advanced German, taught free English and German classes to refugees, participated in several service activities, and taught people about my faith.",
    dates: "January 2014 - December 2015",
  },
  {
    organization: "Washington University School of Medicine",
    position: "Student Researcher",
    dates: "June 2019 - March 2020",
    description: "I published my work on racial and geographic cancer survival disparities in the AACR’s Cancer Epidemiology, Biomarkers & Prevention; I performed every statistical analysis found in the paper.",
    supervisor: "Angela Mazul, PhD",
    type: ExperienceTypes.RESEARCH,
  },
  {
    organization: "SignupClinic",
    position: "Lead Web Developer",
    dates: "Oct 2020 - Present",
    weeklyHours: 8,
    link: "https://slumed.signupclinic.com",
    description: `The program used by our school's volunteer clinic was poorly designed. Additionally, much of the information pertaining to our weekly clinics was spread across several google drive files. Using my background in computer programming, I volunteered to design a volunteer portal to manage all volunteer records and clinic signups. I am now working to bring my work to other school-led volunteer clinics. During this process, I learned to apply my passion for computer programming to applications that could be used in the clinic.
    `,
    type: ExperienceTypes.VOLUNTEER,
    reasonLeaving: "N/A",
  },
  
  {
    organization: "Washington University School of Medicine",
    position: "Lab Technician",
    dates: "Oct 2018 - May 2019",
    supervisor: "Jose Zevallos, MD, MPH, FACS",
    description: `I focused on identifying the differences in mRNA and protein expression between HPV(+) smokers and HPV(+) non smokers.
    I mastered the techniques of western blotting, qPCR, RT-PCR, and cell culturing.
    Performed Kaplan Meier and Cox proportional hazard regression analyses to describe health disparities.`,
    type: ExperienceTypes.RESEARCH,
  },
  
  {
    organization: "Brigham Young Steffensen Lab",
    position: "Lab Technician",
    dates: "Aug 2017 - Apr 2018",
    description: `Researched and troubleshot a new protocol for isolation of microglia from the mouse brain.
      Trained other students in intracranial injections of virus in rats and mice. Performed imaging on mice to check the response of dopamine neuron firing rates to alcohol incubation dose.
      Performed transcardial perfusions on rats and mice.`,
    type: ExperienceTypes.RESEARCH,
    reasonLeaving: "I graduated and moved out of the state.",
    supervisor: "Scott Steffensen, PhD",
    weeklyHours: 10,
  },
  {
    organization: "BYU Ballet Department",
    position: "Ballet Accompanist",
    dates: "Dec 2018 - Jun 2018",
    supervisor: "Daniel Fifield",
    description: `Developed a repertoire of over 30 songs within a two-week period.
      Mastered accompaniment for several dance techniques including slow tendu, quick tendu, ronde de jambe, grand battement, fondu, pirouette, grand pirouette, and little jumps.`,
    type: ExperienceTypes.WORK,
    reasonLeaving: "I graduated and moved out of the state",
    weeklyHours: 10,
  },
  {
    organization: "Provo Bicycle Collective",
    position: "Mechanic Certification Instructor",
    dates: "Dec 2017 - Jun 2018",
    weeklyHours: 10,
    description: `Taught mechanic certification courses at the Slate Canyon Youth Juvenile Detention Center to help students have a better chance at finding work after release.
      Repaired donated bikes to give them to the homeless in our community.
      Led multiple volunteer nights of over 15 volunteers, teaching them to repair donated bikes.`,
    type: ExperienceTypes.WORK,
    reasonLeaving: "I graduated and moved out of the state",
    supervisor: "Kira Johnson",
  },
];

export type EducationProps = {
  institution: string;
  degree: string;
  timeline: string;
  achievements?: Array<string>;
};

export const education: Array<EducationProps> = [
  {
    institution: "St. Louis University School of Medicine",
    degree: "MD Candidate",
    timeline: "Aug 2018 - Present",
    achievements: ["USMLE Step 1: 243"],
  },
  {
    institution: "Brigham Young University",
    degree: "BS of Molecular Biology",
    timeline: "Aug 2013 - Dec 2013, Jan 2016 - Aug 2018",
    achievements: [
      ,
      "GPA: 3.9",
      "MCAT: 519",
      "Cochair of Marketing for Global Oncology Club",
      "Member of Dean’s List for last six semesters",
    ],
  },
];
