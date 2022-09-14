import { Footer } from "flowbite-react";
import React from "react";

const MyFooter: React.FC = () => {
  return (
    <div className="sticky bottom-0 w-full h-auto">
      <Footer>
        <div className="w-full">
          <div className="w-full px-4 py-6 bg-gray-400 dark:bg-gray-600 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="dupadhyay3"
              year={new Date().getFullYear()}
            />
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default MyFooter;
