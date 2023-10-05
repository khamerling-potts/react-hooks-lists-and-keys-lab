import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navlinks = links.map((section) => {
    return (
      <a key={section} href={`#${section}`}>
        {section}
      </a>
    );
  });

  return <nav>{navlinks}</nav>;
}

export default NavBar;
