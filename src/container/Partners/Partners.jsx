// import React from "react";
// import "./Partners.scss";

// // Example partner logos (replace with real ones or links)
// // import partner1 from "../../assets/partner1.png";
// // import partner2 from "../../assets/partner2.png";
// // import partner3 from "../../assets/partner3.png";
// // import partner4 from "../../assets/partner4.png";
// const partnersData = [
//   {
//     id: 1,
//     name: "Global Health Initiative",
//     // logo: partner1,
//     description: "Supporting healthcare programs and community health awareness across Nigeria.",
//   },
//   {
//     id: 2,
//     name: "EduFuture Foundation",
//     // logo: partner2,
//     description: "Empowering students through scholarships, mentorship, and educational workshops.",
//   },
//   {
//     id: 3,
//     name: "Tech for Good",
//     // logo: partner3,
//     description: "Providing digital skills training and tech resources for youth empowerment.",
//   },
//   {
//     id: 4,
//     name: "Green Earth NGO",
//     // logo: partner4,
//     description: "Promoting sustainability and environmental awareness in local communities.",
//   },
// ];

// const Partners = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Replace with actual submission logic (e.g., send to API or email service)
//     console.log("Form submitted!", e.target);
//     alert("Thanks for your interest! We'll be in touch soon.");
//   };

//   return (
//     <section className="partners-page">
//       <div className="background-art"></div>

//       <h2 className="partners-title">
//         Our <span className="highlight">Partners</span>
//       </h2>

//       <p className="partners-text">
//         We collaborate with leading organizations that share our vision of
//         empowering communities and promoting sustainable development. These
//         partnerships allow us to extend our impact across health, education,
//         technology, and environmental initiatives.
//       </p>

//       <div className="partners-grid">
//         {partnersData.map((partner) => (
//           <div key={partner.id} className="partner-card">
//             <img src={partner.logo} alt={partner.name} />
//             <h3>{partner.name}</h3>
//             <p>{partner.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* New Become a Partner Section */}
//       <div className="become-partner-section">
//         <h2 className="partners-title">  {/* Reusing title class for consistency */}
//           Become a <span className="highlight">Partner</span>
//         </h2>
//         <p className="partners-text">
//           Interested in joining forces to support widows and their families? Fill out the form below, and let's chat about how we can make a difference together. Your partnership could change lives!
//         </p>
//         <form className="partner-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="orgName">Organization Name</label>
//             <input type="text" id="orgName" name="orgName" required placeholder="e.g., Helping Hands Inc." />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contactName">Contact Person's Name</label>
//             <input type="text" id="contactName" name="contactName" required placeholder="e.g., Jane Doe" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required placeholder="e.g., jane@helpinghands.com" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number (Optional)</label>
//             <input type="tel" id="phone" name="phone" placeholder="e.g., +234 810-456-7890" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Tell Us About Your Interest</label>
//             <textarea id="message" name="message" required placeholder="How would you like to partner with us?"></textarea>
//           </div>
//           <button type="submit" className="submit-button">Submit</button>
//           <p className="privacy-note">We'll only use this information to discuss potential partnerships. Your privacy matters to us.</p>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Partners;




// import React, { useState } from "react";
// import "./Partners.scss";

// Example partner logos (replace with real ones or links)
// import partner1 from "../../assets/partner1.png";
// import partner2 from "../../assets/partner2.png";
// import partner3 from "../../assets/partner3.png";
// import partner4 from "../../assets/partner4.png";

// const partnersData = [
//   {
//     id: 1,
//     name: "Global Health Initiative",
//     // logo: partner1,
//     description: "Supporting healthcare programs and community health awareness across Nigeria.",
//   },
//   {
//     id: 2,
//     name: "EduFuture Foundation",
//     // logo: partner2,
//     description: "Empowering students through scholarships, mentorship, and educational workshops.",
//   },
//   {
//     id: 3,
//     name: "Tech for Good",
//     // logo: partner3,
//     description: "Providing digital skills training and tech resources for youth empowerment.",
//   },
//   {
//     id: 4,
//     name: "Green Earth NGO",
//     // logo: partner4,
//     description: "Promoting sustainability and environmental awareness in local communities.",
//   },
// ];

// const Partners = () => {
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);

//     // Validate required fields
//     if (
//       !form.orgName.value ||
//       !form.contactName.value ||
//       !form.email.value ||
//       !form.message.value
//     ) {
//       setErrorMsg("Please fill in all required fields to proceed.");
//       setSuccessMsg("");
//       return;
//     }

//     // Clear messages
//     setErrorMsg("");
//     setSuccessMsg("");

//     try {
//       // Submit to Formspree via fetch
//       const response = await fetch("https://formspree.io/f/your-form-id", {  // Replace with your Formspree endpoint
//         method: "POST",
//         body: formData,
//         headers: {
//           Accept: "application/json",
//         },
//       });

//       if (response.ok) {
//         setSuccessMsg(
//           "Your information has been received successfully! Expect to be added to our WhatsApp community soon, and we'll get back to you officially via email."
//         );
//         form.reset();  // Clear form
//       } else {
//         setErrorMsg("Oops! Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setErrorMsg("Oops! Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section className="partners-page">
//       <div className="background-art"></div>

//       <h2 className="partners-title">
//         Our <span className="highlight">Partners</span>
//       </h2>

//       <p className="partners-text">
//         We collaborate with leading organizations that share our vision of
//         empowering communities and promoting sustainable development. These
//         partnerships allow us to extend our impact across health, education,
//         technology, and environmental initiatives.
//       </p>

//       <div className="partners-grid">
//         {partnersData.map((partner) => (
//           <div key={partner.id} className="partner-card">
//             <img src={partner.logo} alt={partner.name} />
//             <h3>{partner.name}</h3>
//             <p>{partner.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* New Become a Partner Section */}
//       <div className="become-partner-section">
//         <h2 className="partners-title">
//           Become a <span className="highlight">Partner</span>
//         </h2>
//         <p className="partners-text">
//           Interested in joining forces to support widows and their families? Fill out the form below, and let's chat about how we can make a difference together. Your partnership could change lives!
//         </p>
//         <form className="partner-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="orgName">Organization Name</label>
//             <input type="text" id="orgName" name="orgName" required placeholder="e.g., Helping Hands Inc." />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contactName">Contact Person's Name</label>
//             <input type="text" id="contactName" name="contactName" required placeholder="e.g., Jane Doe" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required placeholder="e.g., jane@helpinghands.com" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number (Optional)</label>
//             <input type="tel" id="phone" name="phone" placeholder="e.g., +234 810-456-7890" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Tell Us About Your Interest</label>
//             <textarea id="message" name="message" required placeholder="How would you like to partner with us?"></textarea>
//           </div>
//           <button type="submit" className="submit-button">Submit</button>
//           {successMsg && <p className="success-message">{successMsg}</p>}
//           {errorMsg && <p className="error-message">{errorMsg}</p>}
//           <p className="privacy-note">We'll only use this information to discuss potential partnerships. Your privacy matters to us.</p>
//         </form>
//         {/* Aesthetic conclusion section with whitish-pink background */}
//         <div className="form-conclusion">
//           Together, we can empower widows and build stronger communities. Thank you for reaching out!
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;


// ========================

// newest


// 4==========================


// 
// import { useState } from 'react';

// const partnersData = [
  // ... (your existing partnersData remains the same)
// ];

// const Partners = () => {
//   const [formData, setFormData] = useState({
//     orgName: '',
//     contactName: '',
//     email: '',
//     phone: '',
//     orgType: 'non-profit',
//     interestArea: 'health',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log('Partner form submitted:', formData);
//     alert('Thank you for your interest! We will contact you soon.');
//     setFormData({
//       orgName: '',
//       contactName: '',
//       email: '',
//       phone: '',
//       orgType: 'non-profit',
//       interestArea: 'health',
//       message: ''
//     });
//   };

//   return (
//     <section className="partners-page">
//       <div className="background-art"></div>

//       <h2 className="partners-title">
//         Our <span className="highlight">Partners</span>
//       </h2>

//       <p className="partners-text">
//         We collaborate with leading organizations that share our vision of
//         empowering communities and promoting sustainable development. These
//         partnerships allow us to extend our impact across health, education,
//         technology, and environmental initiatives.
//       </p>

//       <div className="partners-grid">
//         {partnersData.map((partner) => (
//           <div key={partner.id} className="partner-card">
//             {/* Temporary placeholder for logos - replace with actual imports */}
//             <div className="partner-logo-placeholder" style={{
//               width: '100%',
//               height: '120px',
//               backgroundColor: '#f0f0f0',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginBottom: '1rem',
//               borderRadius: '8px'
//             }}>
//               <span style={{ color: '#666' }}>{partner.name}</span>
//             </div>
//             <h3>{partner.name}</h3>
//             <p>{partner.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* New Become a Partner Section */}
//       <div className="become-partner-section">
//         <h2 className="partners-title">
//           Become a <span className="highlight">Partner</span>
//         </h2>

//         <p className="partners-text">
//           Join us in making a difference. Whether you're a non-profit, corporate entity,
//           or individual with resources to share, we'd love to explore partnership
//           opportunities that align with our mission of empowering widows and their families.
//         </p>

//         <form onSubmit={handleSubmit} className="partner-form">
//           <div className="form-group">
//             <label htmlFor="orgName">Organization Name*</label>
//             <input
//               type="text"
//               id="orgName"
//               name="orgName"
//               value={formData.orgName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="contactName">Contact Person*</label>
//             <input
//               type="text"
//               id="contactName"
//               name="contactName"
//               value={formData.contactName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="email">Email*</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="orgType">Organization Type*</label>
//               <select
//                 id="orgType"
//                 name="orgType"
//                 value={formData.orgType}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="non-profit">Non-Profit</option>
//                 <option value="corporate">Corporate</option>
//                 <option value="government">Government</option>
//                 <option value="individual">Individual/Philanthropist</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="interestArea">Area of Interest*</label>
//               <select
//                 id="interestArea"
//                 name="interestArea"
//                 value={formData.interestArea}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="health">Health</option>
//                 <option value="education">Education</option>
//                 <option value="technology">Technology</option>
//                 <option value="environment">Environment</option>
//                 <option value="vocational">Vocational Training</option>
//                 <option value="financial">Financial Empowerment</option>
//               </select>
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">How would you like to partner with us?*</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           <button type="submit" className="submit-btn">
//             Submit Partnership Request
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Partners;





// mailto=================




// import React, { useState } from "react";
// import "./Partners.scss";

// // Example partner logos (replace with real ones or links)
// // import partner1 from "../../assets/partner1.png";
// // import partner2 from "../../assets/partner2.png";
// // import partner3 from "../../assets/partner3.png";
// // import partner4 from "../../assets/partner4.png";

// const partnersData = [
//   {
//     id: 1,
//     name: "Global Health Initiative",
//     // logo: partner1,
//     description: "Supporting healthcare programs and community health awareness across Nigeria.",
//   },
//   {
//     id: 2,
//     name: "EduFuture Foundation",
//     // logo: partner2,
//     description: "Empowering students through scholarships, mentorship, and educational workshops.",
//   },
//   {
//     id: 3,
//     name: "Tech for Good",
//     // logo: partner3,
//     description: "Providing digital skills training and tech resources for youth empowerment.",
//   },
//   {
//     id: 4,
//     name: "Green Earth NGO",
//     // logo: partner4,
//     description: "Promoting sustainability and environmental awareness in local communities.",
//   },
// ];

// const Partners = () => {
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     // Validate required fields
//     if (
//       !form.orgName.value ||
//       !form.contactName.value ||
//       !form.email.value ||
//       !form.message.value
//     ) {
//       setErrorMsg("Please fill in all required fields to proceed.");
//       return;
//     }

//     // Clear error
//     setErrorMsg("");

//     // Construct mailto URL
//     const companyEmail ="emmanueljoee@gmail.com";  // Replace with your actual company email
//     const subject = encodeURIComponent("Partnership Request from " + form.orgName.value);
//     const body = encodeURIComponent(
//       `Organization Name: ${form.orgName.value}\n` +
//       `Contact Person: ${form.contactName.value}\n` +
//       `Email: ${form.email.value}\n` +
//       `Phone: ${form.phone.value || "Not provided"}\n` +
//       `Message: ${form.message.value}`
//     );

//     const mailtoUrl = `mailto:${companyEmail}?subject=${subject}&body=${body}`;

//     // Open the email client
//     window.location.href = mailtoUrl;

//     // Optional: Show a prompt (since it's not auto-sent)
//     alert("Your email client will open—please review and send the message to complete your partnership request!");
    
//     // Clear form
//     form.reset();
//   };

//   return (
//     <section className="partners-page">
//       <div className="background-art"></div>

//       <h2 className="partners-title">
//         Our <span className="highlight">Partners</span>
//       </h2>

//       <p className="partners-text">
//         We collaborate with leading organizations that share our vision of
//         empowering communities and promoting sustainable development. These
//         partnerships allow us to extend our impact across health, education,
//         technology, and environmental initiatives.
//       </p>

//       <div className="partners-grid">
//         {partnersData.map((partner) => (
//           <div key={partner.id} className="partner-card">
//             <img src={partner.logo} alt={partner.name} />
//             <h3>{partner.name}</h3>
//             <p>{partner.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* New Become a Partner Section */}
//       <div className="become-partner-section">
//         <h2 className="partners-title">
//           Become a <span className="highlight">Partner</span>
//         </h2>
//         <p className="partners-text">
//           Interested in joining forces to support widows and their families? Fill out the form below, and let's chat about how we can make a difference together. Your partnership could change lives!
//         </p>
//         <form className="partner-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="orgName">Organization Name</label>
//             <input type="text" id="orgName" name="orgName" required placeholder="e.g., Helping Hands Inc." />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contactName">Contact Person's Name</label>
//             <input type="text" id="contactName" name="contactName" required placeholder="e.g., Jane Doe" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required placeholder="e.g., jane@helpinghands.com" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number (Optional)</label>
//             <input type="tel" id="phone" name="phone" placeholder="e.g., +234 810-456-7890" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Tell Us About Your Interest</label>
//             <textarea id="message" name="message" required placeholder="How would you like to partner with us?"></textarea>
//           </div>
//           <button type="submit" className="submit-button">Submit</button>
//           {errorMsg && <p className="error-message">{errorMsg}</p>}
//           <p className="privacy-note">We'll only use this information to discuss potential partnerships. Your privacy matters to us.</p>
//         </form>
//         {/* Aesthetic conclusion section with whitish-pink background */}
//         <div className="form-conclusion">
//           Together, we can empower widows and build stronger communities. Thank you for reaching out!
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;



// import React from "react";
// import "./Partners.scss";
// import { useForm, ValidationError } from "@formspree/react";

// // Example partner logos (replace with real ones or links)
// // import partner1 from "../../assets/partner1.png";
// // import partner2 from "../../assets/partner2.png";
// // import partner3 from "../../assets/partner3.png";
// // import partner4 from "../../assets/partner4.png";

// const partnersData = [
//   {
//     id: 1,
//     name: "Global Health Initiative",
//     // logo: partner1,
//     description: "Supporting healthcare programs and community health awareness across Nigeria.",
//   },
//   {
//     id: 2,
//     name: "EduFuture Foundation",
//     // logo: partner2,
//     description: "Empowering students through scholarships, mentorship, and educational workshops.",
//   },
//   {
//     id: 3,
//     name: "Tech for Good",
//     // logo: partner3,
//     description: "Providing digital skills training and tech resources for youth empowerment.",
//   },
//   {
//     id: 4,
//     name: "Green Earth NGO",
//     // logo: partner4,
//     description: "Promoting sustainability and environmental awareness in local communities.",
//   },
// ];

// const Partners = () => {
//   const [state, handleSubmit] = useForm("xqadgrzb");  // Your Formspree form ID

//   if (state.succeeded) {
//     return (
//       <section className="partners-page">
//         <div className="background-art"></div>

//         <h2 className="partners-title">
//           Our <span className="highlight">Partners</span>
//         </h2>

//         <p className="partners-text">
//           We collaborate with leading organizations that share our vision of
//           empowering communities and promoting sustainable development. These
//           partnerships allow us to extend our impact across health, education,
//           technology, and environmental initiatives.
//         </p>

//         <div className="partners-grid">
//           {partnersData.map((partner) => (
//             <div key={partner.id} className="partner-card">
//               <img src={partner.logo} alt={partner.name} />
//               <h3>{partner.name}</h3>
//               <p>{partner.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Become a Partner Section with Success Message */}
//         <div className="become-partner-section">
//           <h2 className="partners-title">
//             Become a <span className="highlight">Partner</span>
//           </h2>
//           <p className="partners-text">
//             Interested in joining forces to support widows and their families? Fill out the form below, and let's chat about how we can make a difference together. Your partnership could change lives!
//           </p>
//           <p className="success-message">
//             Your information has been received successfully! Expect to be added to our WhatsApp community soon, and we'll get back to you officially via email.
//           </p>
//           {/* Aesthetic conclusion section with whitish-pink background */}
//           <div className="form-conclusion">
//             Together, we can empower widows and build stronger communities. Thank you for reaching out!
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="partners-page">
//       <div className="background-art"></div>

//       <h2 className="partners-title">
//         Our <span className="highlight">Partners</span>
//       </h2>

//       <p className="partners-text">
//         We collaborate with leading organizations that share our vision of
//         empowering communities and promoting sustainable development. These
//         partnerships allow us to extend our impact across health, education,
//         technology, and environmental initiatives.
//       </p>

//       <div className="partners-grid">
//         {partnersData.map((partner) => (
//           <div key={partner.id} className="partner-card">
//             <img src={partner.logo} alt={partner.name} />
//             <h3>{partner.name}</h3>
//             <p>{partner.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* New Become a Partner Section */}
//       <div className="become-partner-section">
//         <h2 className="partners-title">
//           Become a <span className="highlight">Partner</span>
//         </h2>
//         <p className="partners-text">
//           Interested in joining forces to support widows and their families? Fill out the form below, and let's chat about how we can make a difference together. Your partnership could change lives!
//         </p>
//         <form className="partner-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="orgName">Organization Name</label>
//             <input type="text" id="orgName" name="orgName" required placeholder="e.g., Helping Hands Inc." />
//             <ValidationError prefix="Organization Name" field="orgName" errors={state.errors} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contactName">Contact Person's Name</label>
//             <input type="text" id="contactName" name="contactName" required placeholder="e.g., Jane Doe" />
//             <ValidationError prefix="Contact Name" field="contactName" errors={state.errors} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required placeholder="e.g., jane@helpinghands.com" />
//             <ValidationError prefix="Email" field="email" errors={state.errors} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number (Optional)</label>
//             <input type="tel" id="phone" name="phone" placeholder="e.g., +234 810-456-7890" />
//             <ValidationError prefix="Phone" field="phone" errors={state.errors} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Tell Us About Your Interest</label>
//             <textarea id="message" name="message" required placeholder="How would you like to partner with us?"></textarea>
//             <ValidationError prefix="Message" field="message" errors={state.errors} />
//           </div>
//           <button type="submit" className="submit-button" disabled={state.submitting}>
//             Submit
//           </button>
//           <p className="privacy-note">We'll only use this information to discuss potential partnerships. Your privacy matters to us.</p>
//         </form>
//         {/* Aesthetic conclusion section with whitish-pink background */}
//         <div className="form-conclusion">
//           Together, we can empower widows and build stronger communities. Thank you for reaching out!
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;















// =============

// import React, { useRef } from "react";
// import "./Partners.scss";
// import { useForm, ValidationError } from "@formspree/react";


// const partnersData = [
//   {
//     id: 1,
//     name: "Global Health Initiative",
//     // logo: partner1,
//     // description: "Supporting healthcare programs and community health awareness across Nigeria.",
//   },
//   {
//     id: 2,
//     name: "EduFuture Foundation",
//     // logo: partner2,
//     // description: "Empowering students through scholarships, mentorship, and educational workshops.",
//   },
//   {
//     id: 3,
//     name: "Tech for Good",
//     // logo: partner3,
//     // description: "Providing digital skills training and tech resources for youth empowerment.",
//   },
//   {
//     id: 4,
//     name: "Green Earth NGO",
//     // logo: partner4,
//     // description: "Promoting sustainability and environmental awareness in local communities.",
//   },
// ];

// const Partners = () => {
//   const [state, handleSubmit] = useForm("xqadgrzb");  // For Become a Partner form
//   const [contactState, contactHandleSubmit] = useForm("your-contact-form-id");  // New form for Contact Us (replace with your actual Formspree ID)
//   const partnerSectionRef = useRef(null);  // Existing ref for scrolling

//   if (state.succeeded) {
//     // ... (rest of the code remains the same as before)
//   }

//   return (
//     <section className="partners-page">
//       <div className="background-art"></div>

//       <h2 className="partners-title">
//         Our <span className="highlight">Partners</span>
//       </h2>

//       <p className="partners-text">
//         We collaborate with leading organizations that share our vision of
//         empowering communities and promoting sustainable development. These
//         partnerships allow us to extend our impact across health, education,
//         technology, and environmental initiatives.
//       </p>

//       <div className="partners-grid">
//         {partnersData.map((partner) => (
//           <div key={partner.id} className="partner-card">
//             <img src={partner.logo} alt={partner.name} />
//             <h3>{partner.name}</h3>
//             <p>{partner.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* <button 
//         onClick={() => partnerSectionRef.current.scrollIntoView({ behavior: 'smooth' })} 
//         className="scroll-button"
//       >
//         Volunteer for Event
//       </button> */}

//       <div className="become-partner-section" ref={partnerSectionRef}>
//         <h2 className="partners-title">
//           Volunteer / <span className="highlight">Become a Partner</span>
//         </h2>
//         {/* Become a Partner form remains the same */}
//         <form className="partner-form" onSubmit={handleSubmit}>
//           {/* ... (existing form fields) */}
//         </form>
//         <div className="form-conclusion">
//           Together, we can empower widows and build stronger communities. 
//         </div>
//       </div>

//       {/* New Contact Us Section */}
//       <div className="contact-us-section">
//         <h2 className="partners-title">Contact Us</h2>
//         <p className="partners-text">
//           Have questions, feedback, or just want to say hello? Fill out this form, and we'll get back to you as soon as possible.
//         </p>
//         <form className="contact-form" onSubmit={contactHandleSubmit}>
//           <div className="form-group">
//             <label htmlFor="contactName">Your Name</label>
//             <input type="text" id="contactName" name="name" required placeholder="e.g., John Doe" />
//             <ValidationError prefix="Name" field="name" errors={contactState.errors} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contactEmail">Email</label>
//             <input type="email" id="contactEmail" name="email" required placeholder="e.g., john@example.com" />
//             <ValidationError prefix="Email" field="email" errors={contactState.errors} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contactMessage">Message</label>
//             <textarea id="contactMessage" name="message" required placeholder="How can we help?"></textarea>
//             <ValidationError prefix="Message" field="message" errors={contactState.errors} />
//           </div>
//           <button type="submit" className="submit-button" disabled={contactState.submitting}>
//             Send Message
//           </button>
//           <p className="privacy-note">We respect your privacy and will only use this to respond to your inquiry.</p>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Partners;




// ================================


import React, { useRef } from "react";
import "./Partners.scss";
import { useForm, ValidationError } from "@formspree/react";

const partnersData = [
  { id: 1, name: "Global Health Initiative", logo: "/graphql.png" },
  { id: 2, name: "EduFuture Foundation", logo: "/git.png" },
  { id: 3, name: "Tech for Good", logo: "/css.png" },
  { id: 4, name: "Green Earth NGO", logo: "/express.png" },
];

const Partners = () => {
  const [state, handleSubmit] = useForm("xqadgrzb");
  const [contactState, contactHandleSubmit] = useForm("your-contact-form-id");
  const partnerSectionRef = useRef(null);

  return (
    <section className="partners-page">
      <div className="background-art"></div>

      <h2 className="partners-title">
        Our <span className="highlight">Partners</span>
      </h2>

      <p className="partners-text">
        We collaborate with leading organizations that share our vision of
        empowering communities and promoting sustainable development.
      </p>

      {/* Industry-standard partner logos grid */}
      <div className="partners-logos">
        {partnersData.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
            <span>{partner.name}</span>
          </div>
        ))}
      </div>

      {/* Keep Become a Partner + Contact forms as-is */}
      <div className="become-partner-section" ref={partnerSectionRef}>
        <h2 className="partners-title">
          Volunteer / <span className="highlight">Become a Partner</span>
        </h2>
        <form className="partner-form" onSubmit={handleSubmit}>
          {/* form fields go here */}
        </form>
        <div className="form-conclusion">
          Together, we can empower widows and build stronger communities.
        </div>
      </div>

     {/* New Contact Us Section */} 
     <div className="contact-us-section"> 
      <h2 className="partners-title">Contact Us</h2> 
      <p className="partners-text"> Have questions, feedback, or just want to say hello? Fill out this form, and we'll get back to you as soon as possible. </p>
      
       <form className="contact-form" onSubmit={contactHandleSubmit}> 
        <div className="form-group"> <label htmlFor="contactName">Your Name</label> 
        <input type="text" id="contactName" name="name" required placeholder="e.g., John Doe" /> 
        <ValidationError prefix="Name" field="name" errors={contactState.errors} /> 
        </div> <div className="form-group"> <label htmlFor="contactEmail">Email</label>
         <input type="email" id="contactEmail" name="email" required placeholder="e.g., john@example.com" />
          <ValidationError prefix="Email" field="email" errors={contactState.errors} /> </div> <div className="form-group">
             <label htmlFor="contactMessage">Message</label> 
             <textarea id="contactMessage" name="message" required placeholder="How can we help?"></textarea>
              <ValidationError prefix="Message" field="message" errors={contactState.errors} /> 
              </div> <button type="submit" className="submit-button" disabled={contactState.submitting}> Send Message </button>
               <p className="privacy-note">We respect your privacy and will only use this to respond to your inquiry.</p>
               </form> </div> </section> ); };

export default Partners