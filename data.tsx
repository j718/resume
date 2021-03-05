export type PublicationProps = {
  reference: string;
  href?: string;
};
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
    href:
      "https://cebp-aacrjournals-org.ezp.slu.edu/content/29/6_Supplement_2/B099",
    reference:
      "Jacob Clarke, Angela Mazul. Rural Black Cases Have Worsened Outcomes in Head and Neck Cancer. Poster Presented at: AACR The Science of Cancer Disparities. 2019 Sep 20; San Francisco, CA",
  },
  {
    reference:
      "Joshua J. Nelson, Seth R. Stapley, Chris S. Finuf, Elizabeth Anderson, Jacob Clarke, Jordan T. Yorgason, Scott C. Steffensen. Effects of Cocaine on Spontaneous Dopamine Release Varies across Striatal Regions Poster Presented at: Mary-Lou Fulton Conference. 2018 Apr 12; Provo, UT.",
  },
];

export type ExperienceProps = {
  location: string;
  title: string;
  takeaways?: Array<string>;
  timeline?: string;
  description?: string;
};

export const experiences: Array<ExperienceProps> = [
  {
    location: "SLU West Pavilion",
    title: "Student Volunteer Pianist",
    takeaways: ["Played piano for patients receiving ambulatory chemotherapy"],
  },
  {
    location: "SLU HRC",
    title: "Lead Website Dev",
    timeline: "Oct 2020 - Present",
  },
  {
    location: "SLU Ill Scripts",
    title: "Lead Developer",
    timeline: "Oct 2020 - Present",
  },
  {
    location: "Washington University Head and Neck Cancer Lab",
    title: "Lab Technician",
    timeline: "Oct 2018 - Sept 2019",
    description: "Research lab led by Dr. Jose P. Zevallos",
    takeaways: [
      ,
      " Focused on identifying the differences in mRNA and protein expression between HPV(+) smokers and HPV(+) non smokers.",
      " Mastered the techniques of western blotting, qPCR, RT-PCR, and cell culturing.",
      " Performed Kaplan Meier and Cox proportional hazard regression analyses to describe health disparities.",
    ],
  },
  {
    location: "Brigham Young Steffensen Lab",
    title: "Lab Technician",
    timeline: "Aug 2017 - Apr 2018",
    description: "Research lab led by Dr. Scott Steffensen",
    takeaways: [
      ,
      " Researched and troubleshot a new protocol for isolation of microglia from the mouse brain.",
      " Trained other students in intracranial injections of virus in rats and mice. Performed imaging on mice to check the response of dopamine neuron firing rates to alcohol incubation dose.",
      " Performed transcardial perfusions on rats and mice.",
    ],
  },
  {
    location: "BYU Ballet Department",
    title: "Ballet Accompanist",
    timeline: "Dec 2018 - Jun 2018",
    takeaways: [
      ,
      " Developed a repertoire of over 30 songs within a two-week period.",
      " Mastered accompaniment for several dance techniques including slow tendu, quick tendu, ronde de jambe, grand battement, fondu, pirouette, grand pirouette, and little jumps.",
    ],
  },
  {
    location: "Provo Bicycle Collective",
    title: "Mechanic Certification Instructor",
    timeline: "Dec 2017 - Jun 2018",
    description: "Non-profit bicycle shop",
    takeaways: [
      ,
      " Taught mechanic certification courses at the Slate Canyon Youth Juvenile Detention Center to help students have a better chance at finding work after release.",
      ,
      " Repaired donated bikes to give them to the homeless in our community.",
      ,
      " Led multiple volunteer nights of over 15 volunteers, teaching them to repair donated bikes.",
    ],
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
