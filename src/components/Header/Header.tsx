import { DarkThemeToggle, Navbar } from "flowbite-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 h-auto shadow-md">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Welcome to the React Challenge
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <DarkThemeToggle />
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
