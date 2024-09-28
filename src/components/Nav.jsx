import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import DarkSwitch from "./DarkSwitch";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="nike_logo"
            height={29}
            width={129}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-500"
              >
                {item.label}
              </a>
            </li>
          ))}
          <DarkSwitch />
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="menu"
            width={25}
            height={25}
            className="dark:text-slate-200 dark:filter dark:invert"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
