import { useRef, useState } from "react";
import { Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "../styles/style.css";

function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (eventKey) => {
    setSelectedLanguage(eventKey);
  };
  const languages = [
    { name: "English", value: "en" },
    { name: "Español", value: "es" },
    { name: "Français", value: "fr" },
    { name: "Deutsch", value: "de" },
  ];
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <p>Find A Nanny </p>

      <Nav className="mr-auto navlinks">
        <Nav.Link href="#" className="navlink" >Home</Nav.Link>
        <Nav.Link href="#" className="navlink" >About</Nav.Link>
        <Nav.Link href="#" className="navlink" >Contact</Nav.Link>
        <Nav.Link href="#" className="navlink" >Login</Nav.Link>
        <Nav.Link href="#" className="navlink" >Signup</Nav.Link>

      </Nav>
      <Nav>
      <Nav.Link href="#"><FontAwesomeIcon icon={faSearch} /> Search</Nav.Link>
    </Nav>
    <Nav>
    <Dropdown onSelect={handleLanguageChange}>
      <Dropdown.Toggle variant="secondary">
        {languages.find(language => language.value === selectedLanguage).name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languages.map(language => (
          <Dropdown.Item key={language.value} eventKey={language.value}>{language.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </Nav>
    </header>
  );
}

export default Navbar;
