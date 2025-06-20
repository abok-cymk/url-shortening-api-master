import { memo, useState, useRef, useEffect, useCallback } from "react";
import Logo from "./ui/Logo";
import MenuItem from "./MenuItem";
import { HiBars3 } from "react-icons/hi2";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header className="px-6 lg:px-0 py-10">
      <nav className="max-w-6xl mx-auto" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-x-8 w-full">
          <Logo />
          <div className="hidden md:flex items-center justify-between w-full">
            <ul role="list" className="flex items-center gap-x-4">
              {["features", "pricing", "resources"].map((item) => (
                <li
                  key={item}
                  className="text-GrayishViolet hover:text-VeryDarkViolet transition-colors duration-300 ease-in"
                >
                  <MenuItem
                    to={`#${item}`}
                    className="capitalize text-sm"
                    aria-current="page"
                  >
                    <span>{item}</span>
                  </MenuItem>
                </li>
              ))}
            </ul>

            <ul className="cta flex items-center gap-x-4">
              {["login", "sign up"].map((item) => (
                <li
                  key={item}
                  className="text-GrayishViolet hover:text-VeryDarkViolet transition-colors duration-300 ease-in"
                >
                  <MenuItem to={`#${item}`} className="capitalize text-sm">
                    <span>{item}</span>
                  </MenuItem>
                </li>
              ))}
            </ul>
          </div>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden block cursor-pointer"
          >
            <HiBars3 size={36} />
          </button>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden">
          <MobileMenu
            ref={menuRef}
            open={menuOpen}
            className="bg-DarkViolet shadow-lg rounded-lg text-center text-white text-lg font-medium mt-6 px-4"
          >
            <ul className="flex flex-col gap-y-4 p-6">
              {["features", "pricing", "resources"].map((item) => (
                <li key={item}>
                  <MenuItem
                    to={`#${item}`}
                    className="capitalize text-lg block py-2"
                  >
                    <span>{item}</span>
                  </MenuItem>
                </li>
              ))}
            </ul>
            <ul className="cta flex-col items-center py-6">
              {["login", "sign up"].map((item) => (
                <li key={item} className="nth-[2]:mt-4">
                  <MenuItem to={`#${item}`} className="capitalize text-sm">
                    <span>{item}</span>
                  </MenuItem>
                </li>
              ))}
            </ul>
          </MobileMenu>
        </div>
      </nav>
    </header>
  );
};

export default memo(Navbar);
