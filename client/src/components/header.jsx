import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'

const Header = () => {
  const logoRef = useRef();
  const navBtnsRef = useRef();
  const navLinksRef = useRef();

  const tl = gsap.timeline({ defaults: { duration: 0.6 } });

  useEffect(() => {
    tl.fromTo(
      logoRef.current,
      { opacity: 0, x: -30, y: -20, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1 }
    );

    tl.fromTo(
      navBtnsRef.current,
      { opacity: 0, x: 30, y: -20, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1 },
      '<'
    );

    tl.fromTo(navLinksRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0 });
  }, []);

  return (
    <header className="flex items-center justify-between py-6 px-12  bg-teal-900 text-white">
      <h1
        ref={logoRef}
        className="cursor-pointer text-green-400 text-5xl font-bold italic tracking-wider font-['Lilita One']"
      >
        STARBUCKS
      </h1>
      <nav ref={navLinksRef} className="flex gap-6 items-center">
        <a
          href="#"
          className="p-1 text-gray-400 tracking-wide font-medium text-lg border-b-2 border-b-transparent transition duration-300 hover:text-white hover:border-b-green-500"
        >
          About
        </a>
        <a
          href="#"
          className="p-1 text-gray-400 tracking-wide font-medium text-lg border-b-2 border-b-transparent transition duration-300 hover:text-white hover:border-b-green-500"
        >
          Contact
        </a>
        <a
          href="#"
          className="p-1 text-gray-400 tracking-wide font-medium text-lg border-b-2 border-b-transparent transition duration-300 hover:text-white hover:border-b-green-500"
        >
          Pricing
        </a>
        <a
          href="#"
          className="p-1 text-gray-400 tracking-wide font-medium text-lg border-b-2 border-b-transparent transition duration-300 hover:text-white hover:border-b-green-500"
        >
          Services
        </a>
      </nav>
      <div ref={navBtnsRef} className="flex gap-8 items-center">
        <button className="text-gray-400 tracking-wide text-lg transition duration-300 hover:text-white">
          Login
        </button>
        <button className=" text-lg py-2 px-4 tracking-wide bg-green-500 font-bold rounded">
          Sign Up!
        </button>
      </div>
    </header>
  );
};

export default Header;
