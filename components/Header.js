import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import myStyles  from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <section className="grid grid-cols-3 bg-white shadow-md py-2 px-5 md:px-10">
        {/* Left --- logo */}
        <div
          className="relative flex items-center h-10 cursor-pointer my-auto"
          style={{ width: "40%" }}
        >
          <Image
            src="https://links.papareact.com/qd3"
            alt="Airbnb Logo"
            layout="fill"
            objectFit="contain" //Stops from changing aspect ratio but stills takes the same space
            objectPosition="left"
          />
        </div>

        {/* Middle --- search */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <div className="flex-grow">
            <input
              className="pl-5 outline-none bg-transparent w-full text-sm text-gray-600 placeholder-gray-400"
              type="text"
              placeholder="Start Your Search"
            />
          </div>

          <div>
            <SearchIcon className="hidden md:inline-flex h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer md:mx-2" />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4 text-gray-500">
          <p className={myStyles.setText}>Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer"/>
          <div className="flex items-center space-x-2 border-2 rounded-full p-2">
            <MenuIcon className="h-6 cursor-pointer"/>
            <UserCircleIcon className="h-6 cursor-pointer"/>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
