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
  link: string
  id: string
  description?: string
  achievements?: string[]
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
    description: 'Developed adaptive algorithms for controlling soft robots in medical applications, achieving 90%+ positioning accuracy despite nonlinear material deformation.',
    link: '/nonparamjacobian.pdf',
    video: '',
    image: '/soft-robot.jpg',
    id: 'project1',
  },
  {
    name: 'Handheld Delta Robot for Enhanced Motor Control',
    description: 'Engineered a Python-based collaborative robot that provides subtle assistance during precision tasks using computer vision and real-time control.',
    link: 'https://mrd.umn.edu/active-research-projects/shared-control',
    video: '',
    image: '/delta-robot.jpg',
    id: 'project2',
  },
  {
    name: 'Grip Force Device Validation for Muscular Dystrophy Research',
    description: 'Validated a video game-based assessment system for measuring muscle strength in children with muscular dystrophy, achieving 99.7% completion rate across 311 participants.',
    link: 'https://jneuroengrehab.biomedcentral.com/articles/10.1186/s12984-021-00908-1',
    video: '',
    image: '/gameplay.png',
    id: 'project3',
  },
  {
    name: 'Surgical Skill Evaluation Research Project',
    description: 'Managed large-scale research evaluating surgical technical skills through crowdsourcing, coordinating thousands of participants and developing comprehensive databases.',
    link: 'https://www.proquest.com/docview/3180533619/abstract/5F1BC982D644788PQ/1?accountid=14586&sourcetype=Dissertations%20&%20Theses',
    video: '',
    image: '/website.jpg',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Hamline University',
    title: 'Lecturer – Applied Math',
    start: '2025',
    end: 'Present',
    link: 'https://www.hamline.edu/',
    id: 'hamline',
    description: 'Delivered six course sections across three disciplines — statistics, linear algebra, and calculus — within a single academic year, managing up to four concurrent sections per semester.',
    achievements: [
      'Incorporated hands-on data analysis labs using RStudio, giving students practical experience with a widely used statistical computing environment',
      'Developed multi-modal instructional materials including structured lectures, practice worksheets, collaborative group activities, and digital labs to address varied learning styles',
      'Rapidly developed proficiency in three courses new to my teaching portfolio',
      'mplemented standards-based grading across all courses, aligning assessment practices with demonstrated mastery to better support student learning outcomes',
    ],
    technologies: ['R/RStudio', 'LaTex', 'Teaching & Curriculum Development']
  },
  {
    company: 'University of Wisconsin - River Falls',
    title: 'Lecturer – Physics & Engineering',
    start: '2024',
    end: '2025',
    link: 'https://www.uwrf.edu/',
    id: 'uwrf',
    description: 'Designed and delivered hands-on engineering curriculum for undergraduate students, focusing on practical applications of physics and engineering principles. Successfully mentored student capstone projects from concept to prototype.',
    achievements: [
      'Enhanced student comprehension of instrumentation and data collection through LabVIEW programming coursework',
      'Led dynamics courses in systems analysis, resulting in improved practical engineering application understanding',
      'Developed comprehensive machine design curriculum covering extrusion, mechanical systems, and manufacturability',
      'Mentored student capstone projects including a solar-powered electrical system that achieved full functionality',
      'Adapted course content based on continuous feedback, achieving measurable improvements in student engagement'
    ],
    technologies: ['LabVIEW', 'MATLAB', 'CAD', 'SolidWorks', 'Teaching & Curriculum Development']
  },
  {
    company: 'University of Minnesota - Twin Cities',
    title: 'Research Assistant – Robotics & Data-Driven Medical Technology',
    start: '2019',
    end: '2024',
    link: 'https://mrd.umn.edu/',
    id: 'umn',
    description: 'Led cutting-edge research in soft robotics and medical device control systems, developing innovative solutions for human-robot collaboration in medical applications. Secured research funding through grant proposals and published peer-reviewed findings.',
    achievements: [
      'Developed visual servoing control systems using Python and OpenCV for soft robotic applications, achieving precise end-effector positioning for medical procedures',
      'Published research in Journal of NeuroEngineering and Rehabilitation and presented findings at the 2020 Institute for Engineering in Medicine Conference',
      'Analyzed stress concentrations in mechanical components to determine load capacities, informing design revisions',
      'Created comprehensive database solutions in Python to analyze thousands of trial results, implementing automated data extraction and visualization capabilities',
      'Managed Linux server infrastructure on Google Cloud Platform for large-scale data collection and analysis',
      'Led interdisciplinary collaboration between engineers, statisticians, surgeons, and researchers'
    ],
    technologies: ['Python', 'OpenCV', 'MATLAB', 'Linux', 'Google Cloud Platform', 'R/RStduio', 'SolidWorks']
  },
  {
    company: 'Hu-Friedy Mfg Co, LLC',
    title: 'R&D, Manufacturing and QA Co-Op | Medical Device Engineering',
    start: '2015',
    end: '2018',
    link: 'https://www.hufriedygroup.com/en',
    id: 'hufriedy',
    description: 'Engineered comprehensive testing protocols and design validation systems for medical devices, ensuring regulatory compliance and product reliability. Led design optimization initiatives and modernization efforts for legacy product lines.',
    achievements: [
      'Developed stress testing and life cycle validation protocols under extreme conditions for medical device reliability',
      'Executed Design of Experiments (DoE) for product families, identifying common failure mechanisms to improve longevity',
      'Designed and fabricated mechanical/electrical test fixtures using Arduino and SolidWorks, improving testing efficiency',
      'Performed 3D scanning of legacy products, utilizing surface modeling to generate accurate 3D models for modernization',
      'Restructured test reporting systems to meet regulatory standards, enhancing cross-team communication and QA practices'
    ],
    technologies: ['SolidWorks', 'Arduino', 'ANSYS', '3D Scanning', 'Statistical Analysis', 'DoE']
  },
]


export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Research and Publications',
    description: 'Research Interests, on-going works, peer-reviewed publications, dissertations, and presentations.',
    link: '/blog/publications',
    uid: 'blog-publications',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ogotthelf',
  },
]

export const EMAIL = 'orla.gotthelf@gmail.com'