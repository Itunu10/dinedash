import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../../../data/header-data";
import LogoComponent from "../../logo";
import ButtonComponent from "../../tags/button";
import { useNavigate } from "react-router";

const MainHeader = () => {
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();
  return (
    <header className="flex p-5 items-center shadow-md justify-between">
      <LogoComponent />
      <nav className="md:block hidden">
        <ul className="flex items-center gap-5">
          {headerData.map((header) => {
            return (
              <li
                onClick={() => scrollToSection(header.href)}
                role="button"
                key={header.title}
              >
                <a>{header.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="flex items-center md:gap-10 gap-3">
        <ButtonComponent
          width="w-fit"
          className="whitespace-nowrap flex items-center gap-2"
          onClick={() => navigate("/login")}
        >
          <span>
            <Icon icon="charm:git-request" />
          </span>
          <span>Order now</span>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => scrollToSection("contact")}
          className="whitespace-nowrap md:flex hidden items-center gap-5"
        >
          <span>
            <Icon icon="line-md:phone-call-loop" />
          </span>
          <span>Contact</span>
        </ButtonComponent>
      </nav>
    </header>
  );
};

export default MainHeader;
