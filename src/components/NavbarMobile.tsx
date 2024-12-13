import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Image/img4.png";

const NavbarMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [nestedDropdown, setNestedDropdown] = useState<string | null>(null);
  const [nestedPrivacyDropdown, setNestedPrivacyDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); 
    setNestedDropdown(null);
    setNestedPrivacyDropdown(null);
  };

  const handleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
    setNestedDropdown(null); 
    setNestedPrivacyDropdown(null);
  };

  const handleNestedDropdown = (menu: string) => {
    setNestedDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleNestedPrivacyDropdown = (menu: string) => {
    setNestedPrivacyDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-teal-700 text-white shadow-lg">
      <div className="flex items-center justify-between px-5 py-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-12 w-48" />
        </Link>
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="bg-teal-700">
          <ul className="text-base">
            <li>
              <Link
                to="/"
                className="block px-5 py-3 hover:bg-teal-600"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>

            {/* About Dropdown */}
            <li>
              <div
                className="block px-5 py-3 hover:bg-teal-600 cursor-pointer"
                onClick={() => handleDropdown("about")}
              >
                About
              </div>
              {openDropdown === "about" && (
                <ul className="bg-teal-800">
                  <li>
                    <Link
                      to="/aboutus"
                      className="block px-5 py-2 hover:bg-teal-600"
                      onClick={toggleMenu}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career"
                      className="block px-5 py-2 hover:bg-teal-600"
                      onClick={toggleMenu}
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li>
              <div
                className="block px-5 py-3 hover:bg-teal-600 cursor-pointer"
                onClick={() => handleDropdown("services")}
              >
                Services
              </div>
              {openDropdown === "services" && (
                <ul className="bg-teal-800">
                  <li>
                    <div
                      className="block px-5 py-2 hover:bg-teal-600 cursor-pointer"
                      onClick={() => handleNestedDropdown("consulting")}
                    >
                      Consulting Services
                    </div>
                    {nestedDropdown === "consulting" && (
                      <ul className="bg-teal-900">
                        <li>
                          <Link
                            to="/cyber-security"
                            className="block px-5 py-2 hover:bg-teal-600"
                            onClick={toggleMenu}
                          >
                            Cyber Security
                          </Link>
                        </li>
                        <li>
                          <div
                            className="block px-5 py-2 hover:bg-teal-600 cursor-pointer"
                            onClick={() => handleNestedPrivacyDropdown("data-privacy")}
                          >
                            Data Privacy
                          </div>
                          {nestedPrivacyDropdown === "data-privacy" && (
                            <ul className="bg-teal-900">
                              <li>
                                <Link
                                  to="/implementation"
                                  className="block px-5 py-2 hover:bg-teal-600"
                                  onClick={toggleMenu}
                                >
                                  Framework Implementation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/privacyregulation"
                                  className="block px-5 py-2 hover:bg-teal-600"
                                  onClick={toggleMenu}
                                >
                                  Privacy Regulation
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      className="block px-5 py-2 hover:bg-teal-600 cursor-pointer"
                      onClick={() => handleNestedDropdown("assessment")}
                    >
                      Assessment
                    </div>
                    {nestedDropdown === "assessment" && (
                      <ul className="bg-teal-900">
                        <li>
                          <Link
                            to="/privacyass"
                            className="block px-5 py-2 hover:bg-teal-600"
                            onClick={toggleMenu}
                          >
                            Privacy Assessments
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/cybersecurityass"
                            className="block px-5 py-2 hover:bg-teal-600"
                            onClick={toggleMenu}
                          >
                            Cybersecurity Assessments
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      to="/professional"
                      className="block px-5 py-2 hover:bg-teal-600"
                      onClick={toggleMenu}
                    >
                      Professional Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vapt"
                      className="block px-5 py-2 hover:bg-teal-600"
                      onClick={toggleMenu}
                    >
                      VAPT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security-privacy"
                      className="block px-5 py-2 hover:bg-teal-600"
                      onClick={toggleMenu}
                    >
                      Security & Privacy Standards
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Products Dropdown */}
            <li>
              <div
                className="block px-5 py-3 hover:bg-teal-600 cursor-pointer"
                onClick={() => handleDropdown("products")}
              >
                Our Products
              </div>
              {openDropdown === "products" && (
                <ul className="bg-teal-800">
                  <li>
                    <Link
                      to="/soltrisk"
                      className="block px-5 py-2 hover:bg-teal-600"
                      onClick={toggleMenu}
                    >
                      Soltrisk
                    </Link>
                  </li>
                </ul>
              )}
            </li>

             {/* Resources Dropdown */}
             <li>
              <div
                className="block px-5 py-3 hover:bg-teal-600 cursor-pointer"
                onClick={() => handleDropdown("resources")}
              >
                Resources
              </div>
              {openDropdown === "resources" && (
                <ul className="bg-teal-800">
                  <li>
                    <Link
                      to="//"
                      className="block px-5 py-2 hover:bg-teal-600"
                      onClick={toggleMenu}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="//"
                      className="block px-5 py-2 hover:bg-teal-600"
                      onClick={toggleMenu}
                    >
                      Policies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="//"
                      className="block px-5 py-2 hover:bg-teal-600"
                      onClick={toggleMenu}
                    >
                      Case Studies
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact Us */}
            <li>
              <Link
                to="/contact"
                className="block px-5 py-3 hover:bg-teal-600"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavbarMobile;
