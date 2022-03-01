import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import myStyles  from '../styles/Header.module.css';
import { useState } from "react";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  const [noOfGuests, setNoOfGuests] = useState(1);

  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }


  const handleChange = e => {
    setSearchInput(e.target.value);
  }

  const search = () => {
    router.push({
      pathname : '/search',
      query:{
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });
    setSearchInput('');
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2 px-5 md:px-10">
      
        {/* Left --- logo */}
        <div
          className="relative flex items-center h-10 cursor-pointer my-auto"
          style={{ width: "40%" }}
          onClick={()=>router.push('/')}
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
              placeholder={placeholder || "Start Your Search"}
              value={searchInput}
              name='search'
              id='search'
              onChange={handleChange}
              autoComplete='off'
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

        {(searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker 
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
              className="font-semibold text-xl shadow-md"
            />
            
            <div className="flex items-center border-b mb-4 mt-2">
              <h3 className="text-2xl font-semibold flex-grow">Number of Guests</h3>
              <UsersIcon className="h-5"/>
              <input type="number" className="w-12 pl-2 text-lg outline-none text-red-400" min={1}
                value={noOfGuests}
                onChange={(e)=>setNoOfGuests(e.target.value)}
              />
            </div>

            <div className="flex py-1">
              <button className="flex-grow text-gray-500 hover:bg-gray-500 hover:text-white rounded-lg py-1 font-semibold" onClick={()=>setSearchInput("")}>Cancel</button>
              <button  onClick={search} className="flex-grow text-red-400 hover:bg-red-400 hover:text-white rounded-lg py-1 font-semibold">Search</button>
            </div>

          </div>
        ))}
      
    </header>
  );
};

export default Header;
