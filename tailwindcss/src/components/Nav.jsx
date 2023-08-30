import { list } from "postcss";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constant";

const Nav = () => {
  return (
    <header className="padding-x pt-10 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((items, index) => {
            return (
              <li key={index}>
                <a
                  href={items.href}
                  className=" font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {items.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className=" hidden max-lg:block">
          <img src={hamburger} width={25} height={25} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
