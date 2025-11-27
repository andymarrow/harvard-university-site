// /data/academicsData.js

export const academicStats = [
  { label: "Degree Programs", value: "140+" },
  { label: "Degree-Granting Schools", value: "13" },
  { label: "Online Courses", value: "3,000+" },
  { label: "Learners Worldwide", value: "10M+" },
];

export const schools = [
  {
    id: "college",
    name: "Harvard College",
    desc: "The undergraduate liberal arts college.",
    image: "https://plus.unsplash.com/premium_photo-1731256171806-60ed370fcdab?w=500&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "seas",
    name: "Paulson School of Engineering",
    desc: "Science, technology, and engineering.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "hbs",
    name: "Harvard Business School",
    desc: "MBA, Doctoral, and Executive Education.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "hms",
    name: "Harvard Medical School",
    desc: "Leading the revolution in human health.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "law",
    name: "Harvard Law School",
    desc: "Advancing law and justice worldwide.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "design",
    name: "Graduate School of Design",
    desc: "Architecture, landscape, and planning.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  }
];

export const programs = [
  { 
    title: "African and African American Studies", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2000&auto=format&fit=crop",
    description: "The Department brings together scholars and scholarship from many disciplines to explore the histories, societies, and cultures of African and African-descended people. The field is not only interdisciplinary but also comparative and cross-cultural.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Students can choose between two tracks: African Studies or African American Studies, focusing on the histories, cultures, and politics of the African diaspora."
      },
      {
        type: "Graduate",
        name: "Ph.D. in African and African American Studies",
        school: "GSAS",
        info: "A rigorous interdisciplinary training program that identifies synergies in theory, concept, and method across the African Diaspora."
      }
    ]
  },
  { 
    title: "Applied Mathematics", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "SEAS",
    heroImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop",
    description: "Applied Mathematics at Harvard focuses on the creation and imaginative use of mathematical concepts to pose and solve problems over the entire gamut of the physical and biomedical sciences and engineering.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Provides a broad undergraduate education in the mathematical sciences, especially in those subjects that have proved vital to an understanding of problems arising in other disciplines."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Applied Mathematics",
        school: "SEAS / GSAS",
        info: "Students conduct research at the interface of mathematics and other fields, such as physics, biology, economics, and computer science."
      }
    ]
  },
  { 
    title: "Art, Film, and Visual Studies", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2000&auto=format&fit=crop",
    description: "The Department of Art, Film, and Visual Studies (AFVS) cultivates skills in both the practice and the critical study of the visual arts, combining the intensity of conservatory programs with the broad intellectual aims of a liberal arts college.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Areas of focus include studio arts, film/video making, and film and visual studies, fostering dialogue among makers, critics, and theorists."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Film and Visual Studies",
        school: "GSAS",
        info: "Focuses on the theory and history of media in relation to the visual arts, preparing the next generation of innovative scholars in the field."
      }
    ]
  },
  { 
    title: "Astrophysics", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop",
    description: "The science of astrophysics involves the study of matter and radiation in the universe as understood through the laws of physics. The Center for Astrophysics | Harvard & Smithsonian provides a rich and varied program of theoretical, observational, and experimental work.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Introduces students to a broad range of phenomena through a program of both observational and theoretical courses, building from a foundation of modern physics."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Astronomy and Astrophysics",
        school: "GSAS",
        info: "Students engage in research in nearly every branch of astrophysical work, from atomic physics to cosmology, using the full range of techniques from gamma ray detectors to radio antennas."
      }
    ]
  },
  { 
    title: "Bioengineering", 
    degree: "A.B., S.B., Ph.D.", 
    level: "Both", 
    school: "SEAS",
    heroImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop",
    description: "Bioengineering lies at the intersection of the physical and life sciences, incorporating principles from physics and chemistry to understand the operation of living systems.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "The concentration provides students a solid foundation in engineering and its application to the life sciences, within the setting of a liberal arts education."
      },
      {
        type: "Undergraduate",
        name: "Bachelor of Science (S.B.)",
        school: "Paulson School of Engineering",
        info: "A highly quantitative approach using mathematical analysis and modeling to capture the function of systems from subcellular to organism scales."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Bioengineering",
        school: "GSAS / SEAS",
        info: "Advanced research opportunities in tissue engineering, biomechanics, and therapeutic delivery systems."
      }
    ]
  },
  { 
    title: "Business Administration", 
    degree: "MBA", 
    level: "Graduate", 
    school: "HBS",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    description: "The Harvard MBA is a two-year, full-time residential program with a practical focus on general management. The program is renowned for its case method of instruction and its commitment to developing leaders who make a difference in the world.",
    degrees: [
      {
        type: "Graduate",
        name: "Master of Business Administration (MBA)",
        school: "Harvard Business School",
        info: "A rigorous curriculum that builds a foundation in general management concepts, followed by an elective curriculum that allows students to dive deep into their specific interests."
      }
    ]
  },
  { 
    title: "Computer Science", 
    degree: "A.B., S.B., Ph.D.", 
    level: "Both", 
    school: "SEAS",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
    description: "Computer Science at Harvard spans the range from theory to practice, including artificial intelligence, data science, networks, and systems. Students learn both the fundamentals of computation and computation's interaction with the world.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Flexible enough to allow students to combine the study of CS with other interests, including a secondary field or a joint concentration."
      },
      {
        type: "Undergraduate",
        name: "Bachelor of Science (S.B.)",
        school: "Paulson School of Engineering",
        info: "Provides greater technical depth in computer science and related technical fields, ideal for students planning graduate study or technical careers."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Computer Science",
        school: "SEAS / GSAS",
        info: "Research-intensive program covering AI, graphics, systems, theory, and more, preparing graduates for leadership in academia and industry."
      }
    ]
  },
  { 
    title: "Chemistry", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop",
    description: "Chemistry is the science of the structure, properties, and reactions of matter. The Department of Chemistry and Chemical Biology offers a world-class environment for research and education.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Designed to provide a broad foundation in the chemical sciences, with opportunities for research in faculty laboratories."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Chemistry",
        school: "GSAS",
        info: "Training in biological, organic, inorganic, and physical chemistry, encouraging students to explore problems at the frontiers of chemical science."
      }
    ]
  },
  { 
    title: "Data Science", 
    degree: "M.S.", 
    level: "Graduate", 
    school: "SEAS",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    description: "Data Science lies at the intersection of statistical methodology, computational science, and a wide range of application domains. The program offers strong preparation in statistical modeling, machine learning, optimization, and management of massive data sets.",
    degrees: [
      {
        type: "Graduate",
        name: "Master of Science (S.M.) in Data Science",
        school: "SEAS / GSAS",
        info: "A rigorous 3-semester program jointly led by Computer Science and Statistics faculties, training students in the rapidly growing field of data science."
      }
    ]
  },
  { 
    title: "Economics", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2000&auto=format&fit=crop",
    description: "Economics studies the behavior of social systems—such as markets, corporations, legislatures, and families—as the outcome of interactions through institutions between goal-directed individuals.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Covers a broad subject matter seeking to understand the social world through data and models, employing mathematical and statistical tools."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Economics",
        school: "GSAS",
        info: "Prepares students for careers in teaching and research in academia or for responsible positions in government, research organizations, or business enterprises."
      }
    ]
  },
  { 
    title: "Education Leadership", 
    degree: "Ed.L.D.", 
    level: "Graduate", 
    school: "HGSE",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop",
    description: "The Doctor of Education Leadership (Ed.L.D.) is a three-year, practice-based program designed to produce system-level leaders in American pre-K–12 education.",
    degrees: [
      {
        type: "Graduate",
        name: "Doctor of Education Leadership (Ed.L.D.)",
        school: "Harvard Graduate School of Education",
        info: "Taught by faculty from HGSE, HBS, and HKS, this multidisciplinary program prepares graduates to transform the education sector."
      }
    ]
  },
  { 
    title: "Electrical Engineering", 
    degree: "S.B., Ph.D.", 
    level: "Both", 
    school: "SEAS",
    heroImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop",
    description: "Electrical Engineering studies systems that sense, analyze, and interact with the world. It plays a critical role in innovations that improve quality of life, support economic growth, and address societal problems.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Science (S.B.)",
        school: "Paulson School of Engineering",
        info: "Students specialize in electronic circuits and devices while exploring robotics, control systems, and energy systems."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Electrical Engineering",
        school: "SEAS / GSAS",
        info: "Research areas include diamond nanofabrication, quantum devices, robotics, and the optimization of smart power grids."
      }
    ]
  },
  { 
    title: "English", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2000&auto=format&fit=crop",
    description: "The study of English literature teaches students how to analyze and appreciate the language of the past and to contribute to the narrative of the future.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Students hone their research and writing skills, becoming stronger readers and critical thinkers through the study of fiction, poetry, and drama."
      },
      {
        type: "Graduate",
        name: "Ph.D. in English",
        school: "GSAS",
        info: "Provides broad knowledge of the field, including critical and cultural theory, with opportunities for innovative scholarship."
      }
    ]
  },
  { 
    title: "Global Health", 
    degree: "MPH", 
    level: "Graduate", 
    school: "HSPH",
    heroImage: "https://images.unsplash.com/photo-1576091160550-217358c7db81?q=80&w=2000&auto=format&fit=crop",
    description: "The Global Health field of study prepares health professionals for leadership and management roles in global health at subnational, national, or international levels.",
    degrees: [
      {
        type: "Graduate",
        name: "Master of Public Health (MPH)",
        school: "T.H. Chan School of Public Health",
        info: "Emphasizes the development of analytical and methodological skills to effectively address important population health challenges in a global context."
      }
    ]
  },
  { 
    title: "History", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=2000&auto=format&fit=crop",
    description: "History is a broad discipline encompassing every dimension of human interaction in the past, including social life, the economy, culture, thought, and politics.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Students employ techniques of the humanities and social sciences to raise questions and probe for answers about the past."
      },
      {
        type: "Graduate",
        name: "Ph.D. in History",
        school: "GSAS",
        info: "Trains students to become skilled scholars and conscientious teachers, with opportunities to research almost any theme, time period, or place."
      }
    ]
  },
  { 
    title: "Human Evolutionary Biology", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2000&auto=format&fit=crop",
    description: "Investigates who we are, how we got here, and what makes us unique by using an evolutionary perspective to understand human behavior, physiology, and anatomy.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Provides skills to investigate human origins and uniqueness, influencing fields from medical science to economics."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Human Evolutionary Biology",
        school: "GSAS",
        info: "Interdisciplinary training in anatomy, physiology, behavior, ecology, and genetics to answer how evolution made humans the way they are."
      }
    ]
  },
  { 
    title: "Law", 
    degree: "J.D., LL.M.", 
    level: "Professional", 
    school: "HLS",
    heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop",
    description: "Harvard Law School provides unparalleled opportunities to study law with extraordinary colleagues in a rigorous, vibrant, and collaborative environment.",
    degrees: [
      {
        type: "Professional",
        name: "Juris Doctor (J.D.)",
        school: "Harvard Law School",
        info: "A three-year program providing a solid foundation in the United States legal system, preparing students for leadership in private practice, public service, and business."
      },
      {
        type: "Graduate",
        name: "Master of Laws (LL.M.)",
        school: "Harvard Law School",
        info: "A one-year program for students with a prior law degree, offering a broad platform to design their own course of study."
      }
    ]
  },
  { 
    title: "Medicine", 
    degree: "M.D.", 
    level: "Professional", 
    school: "HMS",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop",
    description: "Harvard Medical School is a community of dedicated experts working together to alleviate suffering and improve health and well-being for all.",
    degrees: [
      {
        type: "Professional",
        name: "Doctor of Medicine (M.D.)",
        school: "Harvard Medical School",
        info: "Two curricular tracks: 'Pathways' for active learning and early clinical experience, and 'HST' for students interested in biomedical research and physical sciences."
      }
    ]
  },
  { 
    title: "Philosophy", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2000&auto=format&fit=crop", // Reusing image with different context or find new one
    description: "Philosophy studies humanity's fundamental questions, reflecting on them in a systematic and rigorous way, drawing from fields as diverse as mathematics and literature.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Students learn to reflect on fundamental questions and answer them using careful argumentation."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Philosophy",
        school: "GSAS",
        info: "Strengths in moral and political philosophy, aesthetics, epistemology, and the history of philosophy."
      }
    ]
  },
  { 
    title: "Physics", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop", // Reusing physics/math image
    description: "Exploring fundamental problems that involve physics at all scales, from atomic and molecular physics to astrophysics and cosmology.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "A flexible program building from a foundation of modern physics, suitable for students intending to pursue graduate study or other careers."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Physics",
        school: "GSAS",
        info: "Innovative educational and research opportunities in areas like quantum optics, string theory, and condensed-matter physics."
      }
    ]
  },
  { 
    title: "Psychology", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?q=80&w=2000&auto=format&fit=crop",
    description: "The scientific study of the mind. We investigate the minds of humans and other species to gain a fundamental understanding of behavior, cognition, and emotion.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Develops skills to critically assess quantitative evidence and understand problems of mind and society."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Psychology",
        school: "GSAS",
        info: "Organized into four areas: Clinical Science, Developmental, Social Psychology, and Cognition, Brain, and Behavior."
      }
    ]
  },
  { 
    title: "Public Policy", 
    degree: "MPP", 
    level: "Graduate", 
    school: "HKS",
    heroImage: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2000&auto=format&fit=crop",
    description: "The Master in Public Policy (MPP) equips students with the analytical methods, conceptual frameworks, and habits of mind to craft solutions for real-world public problems.",
    degrees: [
      {
        type: "Graduate",
        name: "Master in Public Policy (MPP)",
        school: "Harvard Kennedy School",
        info: "A rigorous two-year program focusing on policy design, analysis, and implementation to prepare for careers in public service."
      }
    ]
  },
  { 
    title: "Sociology", 
    degree: "A.B., Ph.D.", 
    level: "Both", 
    school: "FAS",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop", // Reusing generic people/study image
    description: "The study of social life at every level, from two-person relationships to the rise and fall of nations. Sociology nurtures critical thinking through quantitative and qualitative analysis.",
    degrees: [
      {
        type: "Undergraduate",
        name: "Bachelor of Arts (A.B.)",
        school: "Harvard College",
        info: "Provides tools to engage effectively with the world, studying social frameworks and human interaction."
      },
      {
        type: "Graduate",
        name: "Ph.D. in Sociology",
        school: "GSAS",
        info: "Prepares students for scholarly research and teaching, covering fields like social inequality, economic sociology, and culture."
      }
    ]
  },
  { 
    title: "Urban Design", 
    degree: "MAUD", 
    level: "Graduate", 
    school: "GSD",
    heroImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop",
    description: "Combines intense design instruction, extensive applied research, and knowledge of urban history and theory to engage the practice of contemporary urbanism.",
    degrees: [
      {
        type: "Graduate",
        name: "Master of Architecture in Urban Design (MAUD)",
        school: "Graduate School of Design",
        info: "For students with a professional architecture degree, focusing on formal and organizational strategies for the public realm."
      },
      {
        type: "Graduate",
        name: "Master of Landscape Architecture in Urban Design (MLAUD)",
        school: "Graduate School of Design",
        info: "For students with a landscape architecture degree, bridging the gap between landscape and urbanism."
      }
    ]
  }
];