// import React, { useEffect, useState } from "react";
// import { client, urlFor } from "../../client";
// import "./ProgramsPage.scss";

// const ProgramsPage = () => {
//   const [programs, setPrograms] = useState([]);

//   useEffect(() => {
//     client.fetch(`*[_type == "program"]{title, description, image, category}`)
//       .then(setPrograms);
//   }, []);

//   return (
//     <section className="programs-page">
//       <h1 className="section-title">All Programs</h1>
//       <div className="programs-grid">
//         {programs.map((program, i) => (
//           <div key={i} className="program-card">
//             <img src={urlFor(program.image)} alt={program.title} />
//             <h2>{program.title}</h2>
//             <p>{program.description}</p>
//             <span className="program-category">{program.category}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProgramsPage;



import React, { useState, useEffect } from "react";
import "./ProgramsPage.scss";

const dummyPrograms = [
  {
    id: 1,
    title: "Healthcare Outreach",
    description:
      "Our Healthcare Outreach program delivers free medical services, organizes health awareness campaigns, and provides essential medical supplies to underserved communities.",
    image: "/about01.png",
    impact: "Over 10,000 people have received free medical checkups since 2020.",
  },
  {
    id: 2,
    title: "Education Support",
    description:
      "Through scholarships, mentorship, and provision of school supplies, we aim to bridge the education gap for underprivileged children and youth.",
    image: "/about01.png",
    impact: "500+ students supported with scholarships and learning materials.",
  },
  {
    id: 3,
    title: "Skills Training",
    description:
      "We offer vocational training, digital literacy programs, and entrepreneurship support to empower youths and women towards financial independence.",
    image: "/about02.png",
    impact: "Trained 300+ youths and women in vocational and digital skills.",
  },
];

const ProgramsPage = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // later: replace with Sanity fetch
    setPrograms(dummyPrograms);
  }, []);

  return (
    <div className="programs-page">
      <h1 className="page-title">Programs & Initiatives</h1>
      <div className="programs-list">
        {programs.map((program) => (
          <div key={program.id} className="program-detail-card">
            <img src={program.image} alt={program.title} className="program-detail-image" />
            <div className="program-detail-content">
              <h2 className="program-detail-title">{program.title}</h2>
              <p className="program-detail-description">{program.description}</p>
              <p className="program-detail-impact"><strong>Impact:</strong> {program.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
console.log("Exporting ProgramsPage component");

export default ProgramsPage;


