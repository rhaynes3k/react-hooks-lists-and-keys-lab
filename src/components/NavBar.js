import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkList = links.map(lks => {
    return <a key={lks} href={`#${lks}`}>{lks}</a>
  })
  return <nav>{linkList}</nav>;
}

export default NavBar;
