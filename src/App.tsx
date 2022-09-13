import { Button, DarkThemeToggle, Flowbite, Navbar } from 'flowbite-react';
import React from 'react';
import s from './App.module.scss';

function App() {
  return (
    <Flowbite>
      <div className={s.app}>
        <Navbar
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand href="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Welcome to the React Challenge
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            
              <DarkThemeToggle />
          </div>
        </Navbar>
      </div>
    </Flowbite>
  );
}

export default App;
