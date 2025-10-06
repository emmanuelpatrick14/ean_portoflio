// import React, { useState, useEffect } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import './Navbar.scss';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { id: 'blogs', label: 'Blogs', href: '#blogs' },
//     { id: 'AboutUs', label: 'About us', href: '/about-us' },
//     // { id: 'events', label: 'Events', href: '#events' },
//     { id: 'programs', label: 'Our Programs', href: '/programs' },

//   ];

//   // Close sidebar when clicking outside
//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (menuOpen && !e.target.closest('.app__navbar-menu-content')) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [menuOpen]);

//   return (
//     <>
//       <nav className="app__navbar">
//         <div className="app__navbar-logo">
//           <a href="#home" aria-label="Home">
//             <img
//               src="your-logo-path.png"
//               alt="Logo"
//               className="healogo"
//               width={60}
//               height="auto"
//             />
//             <p>Healogo</p>
//           </a>
//         </div>

//         <ul className="app__navbar-links" role="menubar" aria-label="Primary navigation">
//           {navLinks.map(({ id, label, href }) => (
//             <li key={id} role="none">
//               <div aria-hidden="true" />
//               <a href={href} role="menuitem" tabIndex={0}>
//                 {label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <button className="app__navbar-donate" type="button">
//           Donate
//         </button>

//         <div
//           className="app__navbar-menu"
//           aria-label="Open menu"
//           aria-expanded={menuOpen}
//           aria-controls="mobile-menu"
//           role="button"
//           tabIndex={0}
//           onClick={() => setMenuOpen(true)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter' || e.key === ' ') setMenuOpen(true);
//           }}
//         >
//           <HiMenuAlt4 aria-hidden="true" />
//         </div>
//       </nav>

//       {menuOpen && (
//         <div className="app__navbar-menu-overlay">
//           <div
//             id="mobile-menu"
//             className="app__navbar-menu-content"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Mobile navigation menu"
//           >
//             <HiX
//               aria-label="Close menu"
//               role="button"
//               tabIndex={0}
//               onClick={() => setMenuOpen(false)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' || e.key === ' ') setMenuOpen(false);
//               }}
//             />
//             <ul>
//               {navLinks.map(({ id, label, href }) => (
//                 <li key={id}>
//                   <a
//                     href={href}
//                     onClick={() => setMenuOpen(false)}
//                     tabIndex={0}
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import './Navbar.scss';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
// const navLinks = [
//   { id: 'blogs', label: 'Blogs', href: '#blogs' },
//   { id: 'AboutUs', label: 'About us', href: '/about-us' },
//   { id: 'programs', label: 'Our Programs', href: '/programs' },
//   { id: 'events', label: 'Events', href: '/events' },
//   { id: 'partners', label: 'Our Partners', href: '/partners' },
//   { id: 'contact', label: 'Contact', href: '/contact' },
// ];


//   // Close sidebar when clicking outside
//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (menuOpen && !e.target.closest('.app__navbar-menu-content')) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [menuOpen]);

//   return (
//     <>
//       <nav className="app__navbar">
//         {/* Logo */}
//         <div className="app__navbar-logo">
//           <a href="#home" aria-label="Home">
//             <img
//               src="your-logo-path.png"
//               alt="Logo"
//               className="healogo"
//               width={60}
//               height="auto"
//             />
//             <p>Healogo</p>
//           </a>
//         </div>

//         {/* Nav links + Donate button */}
//         <div className="app__navbar-right">
//           <ul className="app__navbar-links" role="menubar" aria-label="Primary navigation">
//             {navLinks.map(({ id, label, href }) => (
//               <li key={id} role="none">
//                 <div aria-hidden="true" />
//                 <a href={href} role="menuitem" tabIndex={0}>
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <button className="app__navbar-donate" type="button">
//             Donate
//           </button>
//         </div>

//         {/* Mobile menu icon */}
//         <div
//           className="app__navbar-menu"
//           aria-label="Open menu"
//           aria-expanded={menuOpen}
//           aria-controls="mobile-menu"
//           role="button"
//           tabIndex={0}
//           onClick={() => setMenuOpen(true)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter' || e.key === ' ') setMenuOpen(true);
//           }}
//         >
//           <HiMenuAlt4 aria-hidden="true" />
//         </div>
//       </nav>

//       {/* Mobile menu overlay */}
//       {menuOpen && (
//         <div className="app__navbar-menu-overlay">
//           <div
//             id="mobile-menu"
//             className="app__navbar-menu-content"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Mobile navigation menu"
//           >
//             <HiX
//               aria-label="Close menu"
//               role="button"
//               tabIndex={0}
//               onClick={() => setMenuOpen(false)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' || e.key === ' ') setMenuOpen(false);
//               }}
//             />
//             <ul>
//               {navLinks.map(({ id, label, href }) => (
//                 <li key={id}>
//                   <a
//                     href={href}
//                     onClick={() => setMenuOpen(false)}
//                     tabIndex={0}
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


// // Navbar.jsx
// import React, { useState, useEffect } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import './Navbar.scss';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { id: 'blogs', label: 'Blogs', href: '#blogs' },
//     { id: 'AboutUs', label: 'About Us', href: '/about-us' },
//     { id: 'programs', label: 'Our Programs', href: '/programs' },
//     { id: 'events', label: 'Events', href: '/events' },
//     { id: 'partners', label: 'Our Partners', href: '/partners' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
//   ];

//   // Close sidebar when clicking outside
//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (menuOpen && !e.target.closest('.app__navbar-menu-content')) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [menuOpen]);

//   return (
//     <>
//       <nav className="app__navbar">
//         {/* Logo */}
//         <div className="app__navbar-logo">
//           <a href="#home" aria-label="Home">
//             <img
//               src="your-logo-path.png"
//               alt="Logo"
//               className="healogo"
//               width={60}
//               height="auto"
//             />
//             <p>Helping Hands</p>
//           </a>
//         </div>

//         {/* Nav links + Donate button */}
//         <div className="app__navbar-right">
//           <ul className="app__navbar-links" role="menubar" aria-label="Primary navigation">
//             {navLinks.map(({ id, label, href }) => (
//               <li key={id} role="none">
//                 <a href={href} role="menuitem" tabIndex={0}>
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <button className="app__navbar-donate" type="button">
//             Donate
//           </button>
//         </div>

//         {/* Mobile menu icon */}
//         <div
//           className="app__navbar-menu"
//           aria-label="Open menu"
//           aria-expanded={menuOpen}
//           aria-controls="mobile-menu"
//           role="button"
//           tabIndex={0}
//           onClick={() => setMenuOpen(true)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter' || e.key === ' ') setMenuOpen(true);
//           }}
//         >
//           <HiMenuAlt4 aria-hidden="true" />
//         </div>
//       </nav>

//       {/* Mobile menu overlay */}
//       {menuOpen && (
//         <div className="app__navbar-menu-overlay">
//           <div
//             id="mobile-menu"
//             className="app__navbar-menu-content"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Mobile navigation menu"
//           >
//             <HiX
//               aria-label="Close menu"
//               role="button"
//               tabIndex={0}
//               onClick={() => setMenuOpen(false)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' || e.key === ' ') setMenuOpen(false);
//               }}
//             />
//             <ul>
//               {navLinks.map(({ id, label, href }) => (
//                 <li key={id}>
//                   <a
//                     href={href}
//                     onClick={() => setMenuOpen(false)}
//                     tabIndex={0}
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;




// // Navbar.jsx
// import React, { useState, useEffect } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import './Navbar.scss';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { id: 'blogs', label: 'Blogs', href: '#blogs' },
//     { id: 'AboutUs', label: 'About Us', href: '/about-us' },
//     { id: 'programs', label: 'Our Programs', href: '/programs' },
//     { id: 'events', label: 'Events', href: '/events' },
//     { id: 'partners', label: 'Our Partners', href: '/partners' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
//   ];

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (menuOpen && !e.target.closest('.app__navbar-menu-content')) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [menuOpen]);

//   return (
//     <>
//       <nav className="app__navbar">
//         {/* Logo */}
//         <div className="app__navbar-logo">
//           <a href="#home" aria-label="Home">
//             <img
//               src="your-logo-path.png"
//               alt="Logo"
//               className="healogo"
//               width={60}
//               height="auto"
//             />
//             <p>Helping Hands</p>
//           </a>
//         </div>

//         {/* Nav links + Donate button */}
//         <div className="app__navbar-right">
//           <ul className="app__navbar-links" role="menubar" aria-label="Primary navigation">
//             {navLinks.map(({ id, label, href }) => (
//               <li key={id} role="none">
//                 <a href={href} role="menuitem" tabIndex={0}>
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <button className="app__navbar-donate" type="button">
//             Donate
//           </button>
//         </div>

//         {/* Mobile menu icon */}
//         <div
//           className="app__navbar-menu"
//           aria-label="Open menu"
//           aria-expanded={menuOpen}
//           aria-controls="mobile-menu"
//           role="button"
//           tabIndex={0}
//           onClick={() => setMenuOpen(true)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter' || e.key === ' ') setMenuOpen(true);
//           }}
//         >
//           <HiMenuAlt4 aria-hidden="true" />
//         </div>
//       </nav>

//       {/* Mobile menu overlay */}
//       {menuOpen && (
//         <div className="app__navbar-menu-overlay">
//           <div
//             id="mobile-menu"
//             className="app__navbar-menu-content"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Mobile navigation menu"
//           >
//             <HiX
//               aria-label="Close menu"
//               role="button"
//               tabIndex={0}
//               onClick={() => setMenuOpen(false)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' || e.key === ' ') setMenuOpen(false);
//               }}
//             />
//             <ul>
//               {navLinks.map(({ id, label, href }) => (
//                 <li key={id}>
//                   <a
//                     href={href}
//                     onClick={() => setMenuOpen(false)}
//                     tabIndex={0}
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import './Navbar.scss';
// import healogo from "../../../public/healogo.png"


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // get current route

  const navLinks = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'blog', label: 'Blogs', href: '/blog' },
    { id: 'AboutUs', label: 'About Us', href: '/about-us' },
    { id: 'programs', label: 'Our Programs', href: '/programs' },
    { id: 'events', label: 'Events', href: '/events' },
    { id: 'partners', label: 'Our Partners', href: '/partners' },
    { id: 'contact', label: 'Contact', href: '/contact-us' },
  ];

  // filter out the current page
  const visibleLinks = navLinks.filter(link => link.href !== location.pathname);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest('.app__navbar-menu-content')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [menuOpen]);

  return (
    <>
      <nav className="app__navbar">
        {/* Logo */}
        <div className="app__navbar-logo">
          <a href="/" aria-label="Home">
            <img src="/healogo.png" alt="Logo" className="healogo" width={60} height="auto" />
            <p>Healing Hearts Widows’ <br />Support Foundations</p>
          </a>
        </div>

        {/* Nav links + Donate button */}
        <div className="app__navbar-right">
          <ul className="app__navbar-links" role="menubar">
            {visibleLinks.map(({ id, label, href }) => (
              <li key={id}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

        <a href="/donate" aria-label='Donate'><button className="app__navbar-donate" type="button">Donate</button></a>  
        </div>

        {/* Mobile menu icon */}
        <div
          className="app__navbar-menu"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen(true)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMenuOpen(true); }}
        >
          <HiMenuAlt4 aria-hidden="true" />
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="app__navbar-menu-overlay">
          <div id="mobile-menu" className="app__navbar-menu-content" role="dialog" aria-modal="true">
            <HiX aria-label="Close menu" role="button" tabIndex={0} onClick={() => setMenuOpen(false)}
                 onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMenuOpen(false); }} />
            <ul>
              {visibleLinks.map(({ id, label, href }) => (
                <li key={id}>
                  <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
