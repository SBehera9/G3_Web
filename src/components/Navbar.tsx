import React, { useState, useEffect } from "react"; // Add useEffect here
import { Link } from "react-router-dom";
import Logo from "../assets/Image/img4.png";

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [nestedDropdown, setNestedDropdown] = useState<string | null>(null);
  const [nestedPrivacyDropdown, setNestedPrivacyDropdown] = useState<string | null>(null);

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

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-teal-700 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[6%] py-4">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-60 transform transition duration-300 hover:scale-105"
          />
        </Link>

        <nav className="flex items-center w-auto">
          <ul className="text-base text-white flex justify-between">
          <li>
              <Link
                to="/"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-teal-100 hover:uppercase"
              >
                Home
              </Link>
            </li>

            {/* About Dropdown */}
            <li
              onMouseEnter={() => handleDropdown("about")}
              onMouseLeave={() => handleDropdown("about")}
              className="relative"
            >
              <Link
                to="//"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-teal-100 hover:uppercase"
              >
                About
              </Link>
              {openDropdown === "about" && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg w-48">
                  <li>
                    <Link
                      to="/aboutus"
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      AboutUs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career"
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li
              onMouseEnter={() => handleDropdown("services")}
              onMouseLeave={() => handleDropdown('null')}
              className="relative"
            >
              <Link
                to="//"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-teal-100 hover:uppercase"
              >
                Services
              </Link>
              {openDropdown === "services" && (
                <ul className="absolute left-0 mt-2 bg-white  shadow-lg w-48">
                  <li
                    onMouseEnter={() => handleNestedDropdown("consulting")}
                    onMouseLeave={() => handleNestedDropdown('null')}
                    className="relative"
                  >
                    <Link
                      to="//"
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      Consulting Services
                    </Link>
                    {nestedDropdown === "consulting" && (
                      <ul className="absolute left-48 top-0 bg-white  shadow-lg w-48">
                        <li>
                          <Link
                            to="/cyber-security"
                            className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                          >
                            Cyber Security
                          </Link>
                        </li>
                        <li
                          onMouseEnter={() => handleNestedPrivacyDropdown("data-privacy")}
                          onMouseLeave={() => handleNestedPrivacyDropdown('null')}
                          className="relative"
                        >
                          <Link
                            to="//"
                            className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                          >
                            Data Privacy
                          </Link>
                          {nestedPrivacyDropdown === "data-privacy" && (
                            <ul className="absolute left-48 top-0 bg-white  shadow-lg w-48">
                              <li>
                                <Link
                                  to="/implementation"
                                  className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                                >
                                  Framework Implementation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/privacyregulation"
                                  className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
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
                  <li
                    onMouseEnter={() => handleNestedDropdown("assessment")}
                    onMouseLeave={() => handleNestedDropdown('null')}
                    className="relative"
                  >
                    <Link
                      to="//"
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      Assessment
                    </Link>
                    {nestedDropdown === "assessment" && (
                      <ul className="absolute left-48 top-2 bg-white  shadow-lg w-48">
                        <li>
                          <Link
                            to="/privacyass"
                            className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                          >
                            Privacy Assessments
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/cybersecurityass"
                            className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
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
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      Professional Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vapt"
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      VAPT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security-privacy"
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      Security & Privacy Standards
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Products Dropdown */}
            <li
              onMouseEnter={() => handleDropdown("products")}
              onMouseLeave={() => handleDropdown("products")}
              className="relative"
            >
              <Link
                to="//"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-teal-100 hover:uppercase"
              >
                Our Products
              </Link>
              {openDropdown === "products" && (
                <ul className="absolute left-0 mt-2 bg-white  shadow-lg w-48">
                  <li>
                    <Link
                      to="/soltrisk"
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      Soltrisk
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Resources Dropdown */}
            <li
              onMouseEnter={() => handleDropdown("resources")}
              onMouseLeave={() => handleDropdown("resources")}
              className="relative"
            >
              <Link
                to="//"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-teal-100 hover:uppercase"
              >
                Resources
              </Link>
              {openDropdown === "resources" && (
                <ul className="absolute left-0 mt-2 bg-white  shadow-lg w-48">
                  <li>
                    <Link
                      to="//"
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="//"
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      Policies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="//"
                      className="block px-4 py-2 text-teal-950 hover:text-white bg-transparent hover:bg-teal-800 border-l-4 border-transparent hover:border-teal-400"
                    >
                      Case Studies
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact Us Dropdown */}
            <li>
              <Link
                to="/contact"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-teal-100 hover:uppercase"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
