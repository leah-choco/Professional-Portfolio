import React from "react";

/*For the header, I want it to be white with gold bottom-border
-It needs to include the navbar component? 
-It will need to stay consistent on every page
-Will have "About Me", page opens with that, picture, name.. etc
-Will have Portfolio, different projects in components
--Will have contact form
--Will have Resume, Google Link to resume */

/*<a
href="google docs sharable link"
//target = "_blank" this opens up a new tab to my google docs*/
function Header({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          //target = "_blank" this opens up a new tab to my google docs
          onClick={() => handlePageChange("Projects")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://docs.google.com/document/d/1-B0Bd3GqD-P8bBREHyThjBUX6MdnrExAtxKIVBB67Yw/edit?usp=sharing"
          //target= "_blank"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Header;
