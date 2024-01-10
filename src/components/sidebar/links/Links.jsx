import React from "react";

const Links = () => {
  const linkItems = ["Home", "Education", "Projects", "Contact"];

  return (
    <div className="sidebar__links">
      {linkItems.map((link) => (
        <a href={`#${link}`} key={link}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default Links;
