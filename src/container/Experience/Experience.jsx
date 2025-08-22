// ExperienceTimeline.jsx
// import React, { useState } from 'react';
// import './Experience.scss';

// const dummyData = [
  // {
//     title: 'Frontend Developer',
//     institution: 'TechNova Inc.',
//     startDate: 'Jan 2023',
//     endDate: 'Dec 2023',
//     summary: 'Built and maintained UI components for client projects.',
//     role: 'UI Engineer',
//     achievements: [
//       'Improved app load time by 30%',
//       'Developed a design system in React',
//       'Led a team of 3 junior devs'
//     ]
//   },
//   {
//     title: 'Backend Engineer',
//     institution: 'CodeCrafters Ltd.',
//     startDate: 'Jul 2022',
//     endDate: 'Dec 2022',
//     summary: 'Worked on scalable Node.js APIs and MongoDB integration.',
//     role: 'API Developer',
//     achievements: [
//       'Built authentication service with JWT',
//       'Increased request handling by 40%',
//       'Implemented logging and monitoring tools'
//     ]
//   },
//   {
//     title: 'Fullstack Intern',
//     institution: 'DevSprint Africa',
//     startDate: 'Mar 2022',
//     endDate: 'Jun 2022',
//     summary: 'Contributed to fullstack web projects using MERN stack.',
//     role: 'Fullstack Intern',
//     achievements: [
//       'Built admin dashboards with charting tools',
//       'Wrote clean, reusable code',
//       'Learned version control using Git'
//     ]
//   },
//   {
//     title: 'Software Tester',
//     institution: 'SoftCheck Labs',
//     startDate: 'Jan 2022',
//     endDate: 'Mar 2022',
//     summary: 'Tested software applications for bugs and usability.',
//     role: 'QA Tester',
//     achievements: [
//       'Detected 120+ bugs before production',
//       'Streamlined bug reporting process',
//       'Collaborated with devs for faster fixes'
//     ]
//   },
//   {
//     title: 'Technical Support Intern',
//     institution: 'SupportWise',
//     startDate: 'Sep 2021',
//     endDate: 'Dec 2021',
//     summary: 'Assisted customers with technical issues and documentation.',
//     role: 'Support Rep',
//     achievements: [
//       'Resolved 100+ tickets per week',
//       'Created self-help documentation',
//       'Reduced ticket response time by 25%'
//     ]
//   },
//   {
//     title: 'Junior Developer',
//     institution: 'BuildSmart Devs',
//     startDate: 'May 2021',
//     endDate: 'Aug 2021',
//     summary: 'Built small web tools and improved frontend code quality.',
//     role: 'Frontend Dev',
//     achievements: [
//       'Helped modernize legacy codebase',
//       'Wrote unit tests for components',
//       'Contributed to team documentation'
//     ]
//   },
//   {
//     title: 'Intern Developer',
//     institution: 'QuickLaunch Labs',
//     startDate: 'Jan 2021',
//     endDate: 'Apr 2021',
//     summary: 'Supported frontend builds and styling.',
//     role: 'Web Intern',
//     achievements: [
//       'Built responsive pages with SCSS',
//       'Contributed to accessibility improvements',
//       'Practiced Agile standups and sprints'
//     ]
//   }
// ];

// const ExperienceTimeline = () => {
//   const [experiences] = useState(dummyData);
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   return (
//     <div className="timeline-container">
//       <div className="column">
//         <h2>Experience</h2>
//         <div className="timeline-scroll">
//           {experiences.map((item, i) => (
//             <div
//               key={i}
//               className={`timeline-card ${selectedIndex === i ? 'active' : ''}`}
//               onClick={() => setSelectedIndex(i)}
//             >
//               <div className="timeline-marker"></div>
//               <div className="card-content">
//                 <span className="duration">{item.startDate} - {item.endDate}</span>
//                 <h3>{item.title}</h3>
//                 <p>{item.summary}</p>
//                 {selectedIndex === i && (
//                   <div className="details">
//                     <p><strong>Institution:</strong> {item.institution}</p>
//                     <p><strong>Role:</strong> {item.role}</p>
//                     <p><strong>Achievements:</strong></p>
//                     <ul>
//                       {item.achievements.map((point, idx) => (
//                         <li key={idx}>{point}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceTimeline;


// ==========


// import React, { useState } from 'react';
// import './Experience.scss';

// const dummyData = [
//   {
//     title: 'Frontend Developer',
//     institution: 'TechNova Inc.',
//     startDate: 'Jan 2023',
//     endDate: 'Dec 2023',
//     summary: 'Built and maintained UI components for client projects.',
//     role: 'UI Engineer',
//     achievements: [
//       'Improved app load time by 30%',
//       'Developed a design system in React',
//       'Led a team of 3 junior devs'
//     ]
//   },
//   {
//     title: 'Backend Engineer',
//     institution: 'CodeCrafters Ltd.',
//     startDate: 'Jul 2022',
//     endDate: 'Dec 2022',
//     summary: 'Worked on scalable Node.js APIs and MongoDB integration.',
//     role: 'API Developer',
//     achievements: [
//       'Built authentication service with JWT',
//       'Increased request handling by 40%',
//       'Implemented logging and monitoring tools'
//     ]
//   },
//   {
//     title: 'Fullstack Intern',
//     institution: 'DevSprint Africa',
//     startDate: 'Mar 2022',
//     endDate: 'Jun 2022',
//     summary: 'Contributed to fullstack web projects using MERN stack.',
//     role: 'Fullstack Intern',
//     achievements: [
//       'Built admin dashboards with charting tools',
//       'Wrote clean, reusable code',
//       'Learned version control using Git'
//     ]
//   },
//   {
//     title: 'Software Tester',
//     institution: 'SoftCheck Labs',
//     startDate: 'Jan 2022',
//     endDate: 'Mar 2022',
//     summary: 'Tested software applications for bugs and usability.',
//     role: 'QA Tester',
//     achievements: [
//       'Detected 120+ bugs before production',
//       'Streamlined bug reporting process',
//       'Collaborated with devs for faster fixes'
//     ]
//   },
//   {
//     title: 'Technical Support Intern',
//     institution: 'SupportWise',
//     startDate: 'Sep 2021',
//     endDate: 'Dec 2021',
//     summary: 'Assisted customers with technical issues and documentation.',
//     role: 'Support Rep',
//     achievements: [
//       'Resolved 100+ tickets per week',
//       'Created self-help documentation',
//       'Reduced ticket response time by 25%'
//     ]
//   },
//   {
//     title: 'Junior Developer',
//     institution: 'BuildSmart Devs',
//     startDate: 'May 2021',
//     endDate: 'Aug 2021',
//     summary: 'Built small web tools and improved frontend code quality.',
//     role: 'Frontend Dev',
//     achievements: [
//       'Helped modernize legacy codebase',
//       'Wrote unit tests for components',
//       'Contributed to team documentation'
//     ]
//   },
//   {
//     title: 'Intern Developer',
//     institution: 'QuickLaunch Labs',
//     startDate: 'Jan 2021',
//     endDate: 'Apr 2021',
//     summary: 'Supported frontend builds and styling.',
//     role: 'Web Intern',
//     achievements: [
//       'Built responsive pages with SCSS',
//       'Contributed to accessibility improvements',
//       'Practiced Agile standups and sprints'
//     ]
//   }
// ];

// const ExperienceTimeline = () => {
//   const [experiences] = useState(dummyData);
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const handleCardClick = (i) => {
//     setSelectedIndex(prev => (prev === i ? null : i));
//   };

//   return (
//     <div className="timeline-container">
//       <div className="column">
//         <h2>Experience</h2>
//         <div className="timeline-scroll">
//           {experiences.map((item, i) => (
//             <div
//               key={i}
//               className={`timeline-card ${selectedIndex === i ? 'active' : ''}`}
//               onClick={() => handleCardClick(i)}
//             >
//               <div className="timeline-marker"></div>
//               <div className="card-content">
//                 <span className="duration">{item.startDate} - {item.endDate}</span>
//                 <h3>{item.title}</h3>
//                 <p>{item.summary}</p>

//                 {selectedIndex === i && (
//                   <div className="details-panel">
//                     <button
//                       className="close-btn"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedIndex(null);
//                       }}
//                     >
//                       &times;
//                     </button>
//                     <h3>{item.title}</h3>
//                     <p><strong>Institution:</strong> {item.institution}</p>
//                     <p><strong>Role:</strong> {item.role}</p>
//                     <p><strong>Achievements:</strong></p>
//                     <ul>
//                       {item.achievements.map((point, idx) => (
//                         <li key={idx}>{point}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceTimeline;

import React, { useState } from 'react';
import './Experience.scss';
import { AppWrap, MotionWrap } from "../../wrapper";

const dummyData = [
  {
    title: 'Frontend Developer',
    institution: 'TechNova Inc.',
    startDate: 'Jan 2023',
    endDate: 'Dec 2023',
    summary: 'Built and maintained UI components for client projects.',
    role: 'UI Engineer',
    achievements: [
      'Improved app load time by 30%',
      'Developed a design system in React',
      'Led a team of 3 junior devs'
    ]
  },
  {
    title: 'Backend Engineer',
    institution: 'CodeCrafters Ltd.',
    startDate: 'Jul 2022',
    endDate: 'Dec 2022',
    summary: 'Worked on scalable Node.js APIs and MongoDB integration.',
    role: 'API Developer',
    achievements: [
      'Built authentication service with JWT',
      'Increased request handling by 40%',
      'Implemented logging and monitoring tools'
    ]
  },
  {
    title: 'Fullstack Intern',
    institution: 'DevSprint Africa',
    startDate: 'Mar 2022',
    endDate: 'Jun 2022',
    summary: 'Contributed to fullstack web projects using MERN stack.',
    role: 'Fullstack Intern',
    achievements: [
      'Built admin dashboards with charting tools',
      'Wrote clean, reusable code',
      'Learned version control using Git'
    ]
  },
  {
    title: 'Software Tester',
    institution: 'SoftCheck Labs',
    startDate: 'Jan 2022',
    endDate: 'Mar 2022',
    summary: 'Tested software applications for bugs and usability.',
    role: 'QA Tester',
    achievements: [
      'Detected 120+ bugs before production',
      'Streamlined bug reporting process',
      'Collaborated with devs for faster fixes'
    ]
  },
  {
    title: 'Technical Support Intern',
    institution: 'SupportWise',
    startDate: 'Sep 2021',
    endDate: 'Dec 2021',
    summary: 'Assisted customers with technical issues and documentation.',
    role: 'Support Rep',
    achievements: [
      'Resolved 100+ tickets per week',
      'Created self-help documentation',
      'Reduced ticket response time by 25%'
    ]
  },
  {
    title: 'Junior Developer',
    institution: 'BuildSmart Devs',
    startDate: 'May 2021',
    endDate: 'Aug 2021',
    summary: 'Built small web tools and improved frontend code quality.',
    role: 'Frontend Dev',
    achievements: [
      'Helped modernize legacy codebase',
      'Wrote unit tests for components',
      'Contributed to team documentation'
    ]
  },
  {
    title: 'Intern Developer',
    institution: 'QuickLaunch Labs',
    startDate: 'Jan 2021',
    endDate: 'Apr 2021',
    summary: 'Supported frontend builds and styling.',
    role: 'Web Intern',
    achievements: [
      'Built responsive pages with SCSS',
      'Contributed to accessibility improvements',
      'Practiced Agile standups and sprints'
    ]
  }
];

const ExperienceTimeline = () => {
  const [experiences] = useState(dummyData);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCardClick = (i) => {
    setSelectedIndex(prev => (prev === i ? null : i));
  };

  return (
    <div>
      <h2 className="timeline-title">Experience</h2>
      <div className="timeline-container">
        <div className="column">
          <div className="timeline-scroll">
            {experiences.map((item, i) => (
              <div
                key={i}
                className={`timeline-card ${selectedIndex === i ? 'active' : ''}`}
                onClick={() => handleCardClick(i)}
              >
                <div className="timeline-marker"></div>
                <div className="card-content">
                  <span className="duration">{item.startDate} - {item.endDate}</span>
                  <h3>{item.title}</h3>
                  <p className="institution-name">- {item.institution}</p>
                  <p><strong>{item.institution}</strong></p>
                  <p>{item.summary}</p>

                  <span className="expand-indicator">
                    {selectedIndex === i ? 'Click to close' : 'Click to expand'}
                  </span>

                  {selectedIndex === i && (
                    <div className="details-panel">
                      <button
                        className="close-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedIndex(null);
                        }}
                      >
                        &times;
                      </button>
                      <h3>{item.title}</h3>
                      <p><strong>Role:</strong> {item.role}</p>
                      <p><strong>Achievements:</strong></p>
                      <ul>
                        {item.achievements.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(ExperienceTimeline, "app__footer"),
  "experience",
  "app__whitebg"
);
