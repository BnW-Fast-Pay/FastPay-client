/** @format */

import { FC, useState } from "react";
import TextButton from "./Button";
import { Link } from "@remix-run/react";

const HeaderNavigation: FC = () => {
  const [menu, setMenu] = useState(false);

  const MenuToggle = () => {
    setMenu(!menu);
  };

  return (
    <nav className="min-w-full font-comfortaa z-30 fixed">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="inset-y-0 left-0 flex items-center">
            <img
              className="h-12 w-12 md:hidden"
              src="/BNW-logo.svg"
              alt="BNW FastPay logo"
            />
            <img
              className="h-12 w-20 hidden md:block"
              src="/BNW-large-logo.svg"
              alt="BNW FastPay logo"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="rounded-md px-3 py-2">
                <img className="h-12 w-12" src="/home-icon.svg" alt="Home" />
              </Link>
              <Link to="/services" className="rounded-md px-3 py-2">
                Services
              </Link>
              <Link to="/pricing" className="rounded-md px-3 py-2">
                Pricing
              </Link>
              <Link to="/about/contact" className="rounded-md px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/signin" className="">
                <TextButton
                  text="Login"
                  width="w-[5rem]"
                  height="h-[2.5rem]"
                  textColor="font-[--black]"
                  border="border border-[--black] rounded-[8px]"
                  onClick={() => {}}
                />
              </Link>
              <Link to="/" className="">
                <TextButton
                  text="Sign up"
                  width="w-[5rem]"
                  height="h-[2.5rem]"
                  textColor="text-[--heading-reversed] "
                  buttonColor="bg-[--enabled]"
                  border="border rounded-[8px]"
                  onClick={() => {}}
                />
              </Link>
              <Link to="/" className="">
                <img
                  className="h-10 w-10"
                  src="/profile-icon.svg"
                  alt="Profile"
                />
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <div
              className="relative inline-flex items-center justify-center rounded-md p-2"
              onClick={MenuToggle}
              onKeyDown={(e) => {
                if (e.key === "Enter") MenuToggle();
              }}
              role="button"
              tabIndex={0}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {<Menu />}
            </div>
          </div>
        </div>
      </div>
      {menu ? <MobileMenu /> : null}
    </nav>
  );
};

function MobileMenu() {
  return (
    <div className="block md:hidden z-50 text-center" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <Link
          to="/"
          className="bg-gray-900 text-amber-500 block rounded-md px-3 py-2 text-base font-medium"
        >
          HOME
        </Link>
        <Link
          to="/portfolio"
          className="hover:bg-gray-700 hover:text-amber-500 block rounded-md px-3 py-2 text-base font-medium"
        >
          PORTFOLIO
        </Link>
        <Link
          to="/about"
          className="hover:bg-gray-700 hover:text-amber-500 block rounded-md px-3 py-2 text-base font-medium"
        >
          ABOUT
        </Link>
        <Link
          to="/about/contact"
          className="hover:bg-gray-700 hover:text-amber-500 block rounded-md px-3 py-2 text-base font-medium"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <TextButton
      text="Menu"
      width="w-[4rem]"
      height="h-[2rem]"
      textColor="font-[--black]"
      border="border border-[--black] rounded-[--radius-sm]"
      onClick={() => {}}
    />
  );
}

export default HeaderNavigation;
