type Project = {
  name: string
  description: string
  link: string
  video: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
  link?: string
  description?: string
  highlights?: { category: string; items: string[] }[]
  technologies?: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  /*
  {
    name: 'A Piano for your Pocket',
    description: 'During 2020 I decided to make a piano.',
    link: 'https://github.com/Majoras-Other-Mask/DIY-Pocket-Piano',
    video:'',
    image: '/placeholder.png',
    id: 'project3',
  },
  */
  {
    name: 'Soft Robotic Medical Device Control System',
    description: 'Online Jacobian estimation give a cable-driven soft robot model-free control with applications for minimally invasive surgery. I developed an adaptive algorithms for controlling a soft robots capable of navigating the tortous pathways of human anatomy that was implemented using both computer vision and an electromagnetic tracker. Read more about it on my write up linked to below!',
    link: '/blog/soft-robot',
    video: '',
    image: '/soft-robot.jpg',
    id: 'project1',
  },
  {
    name: 'Handheld Delta Robot for Enhanced Motor Control',
    description: 'As part of a project on collaborative robotics I designed and tuned a Python-based control system that could provide task assistance by using computer vision and real-time control. The portion of the project I worked on focused on the Fitts\'s Law reciprocal tapping test to gathering initial data on how humans and robots interact on a task.',
    link: 'https://mrd.umn.edu/active-research-projects/shared-control',
    video: '',
    image: '/delta-robot.jpg',
    id: 'project2',
  },
  {
    name: 'Grip Force Device Validation for Muscular Dystrophy Research',
    description: 'While new therapies are continuously introduced to treat muscular dystrophy, current assessment tests are challenging to quantify, cannot be used in non-ambulatory patients, or can de-motivate pediatric patients. A bio-feedback grip sensor that motivates children to complete maximal and fatiguing grip protocols through a game-based interface was developed and data was collected from over 300 participants. My work on this project focused on compiling the data into a functional database (using Python), completing the statistical analysis (using RStudio), and taking lead on writing a paper which was then published in the Journal of NMeuroEngineering and Rehabilitation, linked to below.',
    link: 'https://jneuroengrehab.biomedcentral.com/articles/10.1186/s12984-021-00908-1',
    video: '',
    image: '/gameplay.png',
    id: 'project3',
  },
  {
    name: 'Surgical Skill Evaluation Research Project',
    description: 'I managed a large-scale research project evaluating surgical technical skills through crowdsourcing (Amazon MTurk), coordinating thousands of participants and developing comprehensive database. This work can be found on my publications page as my PhD thesis, linked to below.',
    link: '/blog/publications',
    video: '',
    image: '/website.jpg',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Medical Robotics and Devices Lab, University of Minnesota',
    title: 'Research Consultant (Independent)',
    start: '2025',
    end: 'Present',
    id: 'consultant',
    description:
      'Continuing soft robotics and clinical research with the Medical Robotics and Devices Lab, carrying projects from hardware validation through peer-reviewed publication.',
    highlights: [
      {
        category: 'Electro-Mechanical Engineering',
        items: [
          'Extended a soft robot control scheme from computer vision feedback to electromagnetic tracker-based servoing, enabling control in environments where image capture is not possible',
          'Validated the controller across multiple cable-driven soft robots with both external and embedded actuation, documenting consistent positioning accuracy',
        ],
      },
      {
        category: 'Quantitative Analysis',
        items: [
          'Programmed an adaptive algorithm that estimates and updates the Jacobian with least squares in real time, reaching targets with over 90% accuracy despite nonlinear soft material deformation',
          'Processed and statistically analyzed several years of clinical study data in R, using outcome measures defined with surgeon collaborators',
        ],
      },
      {
        category: 'Leadership & Communication',
        items: [
          'Lead author on a peer-reviewed publication and a 2026 Design of Medical Devices Conference paper and presentation, with two additional manuscripts in submission',
          'Collaborated across three universities with a principal investigator, graduate students, and surgeons, and mentored a graduate student in research methods',
        ],
      },
    ],
    technologies: ['Python', 'OpenCV', 'Adaptive Control', 'Electromagnetic Tracking', 'R', 'Technical Writing'],
  },
  {
    company: 'Hamline University · University of Wisconsin–River Falls',
    title: 'Lecturer – Engineering, Physics & Applied Math',
    start: '2024',
    end: '2026',
    id: 'lecturer',
    description:
      'Taught engineering and mathematics courses at two universities, rapidly developing proficiency in course material.',
    highlights: [
      {
        category: 'Electro-Mechanical Engineering',
        items: [
          'Taught machine design (fatigue, tolerancing, material selection, gears, design for manufacturability) and rigid-body dynamics',
          'Created LabVIEW programs interfacing NI DAQ hardware with strain gauges, and trained students on an MTS load frame and hardness tester',
          'Advised a solar-powered electrical system capstone team through design decisions and troubleshooting to a working prototype',
        ],
      },
      {
        category: 'Quantitative Analysis',
        items: [
          'Taught applied statistics including hypothesis testing, ANOVA, linear regression, chi-square testing, and power calculations',
          'Designed hands-on RStudio data analysis labs and added ethical experimental design to the required statistics curriculum',
        ],
      },
      {
        category: 'Leadership & Communication',
        items: [
          'Managed up to four concurrent course sections per semester, rapidly coming up to speed on every course new to my portfolio',
          'Gathered student feedback through surveys and check-ins, adjusting activities mid-semester and collaborating with faculty to refine materials',
        ],
      },
    ],
    technologies: ['LabVIEW', 'NI DAQ', 'MTS Load Frame', 'R/RStudio', 'Machine Design', 'Curriculum Development'],
  },
  {
    company: 'University of Minnesota – Twin Cities',
    title: 'Research Assistant – Medical Technology',
    start: '2019',
    end: '2024',
    id: 'umn',
    description:
      'Designed, built, and validated medical devices and robotic systems, and led the statistical analysis behind my MS thesis, PhD dissertation, and a peer-reviewed publication.',
    highlights: [
      {
        category: 'Electro-Mechanical Engineering',
        items: [
          'Built a remote IV pump alarm notifier during the early COVID-19 pandemic: a Teensy microcontroller filtered microphone audio to detect alarms and radioed an outside unit, on a custom PCB, with five verified sets delivered to the clinical partner',
          'Developed a Python and OpenCV control system for a handheld delta robot, including a custom PID autotuner, packaged as a reusable class teammates integrated into their code',
          'Characterized force distribution in a grip force dynamometer using MTS load frame testing and FEA, and calibrated devices by regression across repeated trials',
        ],
      },
      {
        category: 'Quantitative Analysis',
        items: [
          'Validated a game-based grip force system with 311 participants (99.7% completion), using ANOVA, t-tests, and regression in R to show agreement with normative values in 14 of 20 age groups',
          'Led the statistical analysis validating crowdsourced surgical skill assessment across thousands of participants, forming the basis of my MS thesis and PhD dissertation',
          'Built Python databases and managed a Linux server on Google Cloud Platform to collect and analyze thousands of participant responses',
        ],
      },
      {
        category: 'Leadership & Communication',
        items: [
          'Collected the preliminary data for about one third of a funded NIH grant proposal and drafted its methods, results, and discussion',
          'Served as lab manager for about two years and led collaboration among engineers, statisticians, surgeons, and researchers',
          'Lead author in the Journal of NeuroEngineering and Rehabilitation (2021) and presenter at the 2020 Institute for Engineering in Medicine Conference',
        ],
      },
    ],
    technologies: ['Python', 'OpenCV', 'PID Control', 'Teensy', 'PCB Design', 'SolidWorks', 'FEA', 'R/RStudio', 'Linux', 'Google Cloud Platform'],
  },
  {
    company: 'Hu-Friedy Mfg Co, LLC',
    title: 'R&D, Manufacturing and QA Co-Op – Medical Device Engineering',
    start: '2015',
    end: '2018',
    id: 'hufriedy',
    description:
      'Three co-op terms across R&D, manufacturing, and quality assurance for dental hand instruments and ultrasonic scalers.',
    highlights: [
      {
        category: 'Electro-Mechanical Engineering',
        items: [
          'Created production drawings with GD&T and tolerance stack-up analysis, and modeled injection-molded prototype parts in SolidWorks',
          'Designed and fabricated mechanical and electrical test fixtures using Arduino and SolidWorks, improving testing consistency and efficiency',
        ],
      },
      {
        category: 'Quantitative Analysis',
        items: [
          'Ran a Design of Experiments on o-ring dimensions, profile, and coating to identify drivers of ultrasonic scaler failure',
          'Ran accelerated life tests simulating years of use in under one week, and compared ANSYS FEA predictions against physical test data',
          'Created a repeatable, quantitative test method for a performance issue that had no existing measure, using an Arduino-controlled fixture',
        ],
      },
      {
        category: 'Leadership & Communication',
        items: [
          'Presented test findings in design reviews with cross-functional teams and worked directly with manufacturing floor staff',
          'Consolidated four separate test reporting documents into one guided Excel workbook, and participated in CAPAs and a Kaizen event',
        ],
      },
    ],
    technologies: ['SolidWorks', 'GD&T', 'ANSYS', 'Arduino', 'DoE', 'Accelerated Life Testing', 'MTS Load Frame'],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Research and Publications',
    description: 'Research Interests, on-going works, peer-reviewed publications, dissertations, and presentations.',
    link: '/blog/publications',
    uid: 'blog-publications',
  },
  {
    title: 'Personal Projects',
    description: 'Hobby projects completed at home using my personal prototyping workshop.',
    link: '/blog/personal-projects',
    uid: 'blog-personal-projects',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ogotthelf',
  },
]

export const EMAIL = 'orla.gotthelf@gmail.com'
