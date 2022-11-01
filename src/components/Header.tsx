import { NextPage } from 'next';
import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { FC, ReactNode } from 'react';

const menuItems = [
  {
    content: (
      <>
        <MenuIcon className="h-6 mr-1" />
        All
      </>
    ),
    className: 'link flex items-center',
  },
  {
    content: 'Prime Video',
    className: 'link',
  },

  {
    content: 'Amazon Business',
    className: 'link',
  },
  {
    content: "Tpday's Deals",
    className: 'link',
  },
  {
    content: 'Electronics',
    className: 'link hidden lg:inline-flex',
  },
  {
    content: 'Food & Category',
    className: 'link hidden lg:inline-flex',
  },
  {
    content: 'Prime',
    className: 'link hidden lg:inline-flex',
  },
  {
    content: 'Buy Again',
    className: 'link hidden lg:inline-flex',
  },
  {
    content: 'Shopper Toolkit',
    className: 'link hidden lg:inline-flex',
  },
  {
    content: 'Health & Personal Care',
    className: 'link hidden lg:inline-flex',
  },
];

const Header: React.FC = () => {
  const HeaderLogo: FC = () => (
    <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
      <Image
        src="/amazon.png"
        width={150}
        height={40}
        alt="amazon-logo"
        objectFit="contain"
        className="cursor-pointer"
      />
    </div>
  );

  const SearchBar: FC = () => (
    <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
      <input
        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
        type="text"
      />
      <SearchIcon className="h-12 p-4" />
    </div>
  );

  const ItemLinks: FC = () => (
    <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
      <div className="link">
        <p>Hello, Ashish</p>
        <p className="font-extrabold md:text-sm">Account & Lists</p>
      </div>
      <div className="link">
        <p>Returns</p>
        <p className="font-extrabold md:text-sm">& Orders</p>
      </div>
      <div className="relative link flex items-center">
        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
          0
        </span>
        <ShoppingCartIcon className="h-10" />
        <p className="hidden md:inline font-extrabold md:text-sm mt-2">
          Basket
        </p>
      </div>
    </div>
  );

  const TopNavBar: FC = () => (
    <div className="flex items-center bg-amazon_blue flex-grow py-2">
      <HeaderLogo />
      <SearchBar />
      <ItemLinks />
    </div>
  );

  const BottomNavBar: FC = () => (
    <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
      {menuItems.map(({ className, content }, index) => (
        <p key={index} className={className}>
          {content}
        </p>
      ))}
    </div>
  );

  return (
    <header>
      <TopNavBar />
      <BottomNavBar />
    </header>
  );
};

export default Header;