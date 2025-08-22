import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "projects", "experience", "skills","contact" ].map(
        (item, index) => (
          <a
          href={`#${item}`}
          key={item + index}
          className={`app__navigation-dot ${active === item ? 'app__navigation-dot--active' : ''}`}
          aria-label={item}
        />
       
        )
      )}
    </div>
  );
};

export default NavigationDots;
