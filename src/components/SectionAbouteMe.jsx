import { useState, useEffect, useRef } from "react";
import "./SectionAboutMe.scss";

const SectionAboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleEsc = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (contentRef.current && !contentRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(true);
  };

  let content = (
    <div className="content" ref={contentRef}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        vero nobis corrupti maiores aperiam sint debitis! Error quis minus
      </p>
    </div>
  );

  return (
    <section id="about-me">
      <h2 className="about-me-title">About Me</h2>
      <div className="about-me-info">
        <div className="about-me-info-box">
          <h3 className="about-me-info-title">title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            debitis omnis, nihil quod aut ab rem impedit, dolorum velit,
            corrupti dignissimos soluta error laboriosam itaque. Quod qui quam
            sed obcaecati! Cumque mollitia quibusdam est cupiditate nisi libero
            deserunt nihil doloremque repudiandae ullam ex maiores rem,
            explicabo nam ea fuga, quae quas pariatur? Voluptates odit
            aspernatur perferendis rem animi ratione accusantium.
          </p>
          <button onClick={handleClick} className="about-me-btn">
            Learn more...
          </button>
        </div>
        <div className="about-me-info-img"></div>
        {isOpen && content}
      </div>
    </section>
  );
};

export default SectionAboutMe;
