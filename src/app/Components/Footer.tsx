import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
      <nav
        className='flex justify-center flex-wrap gap-6 text-slate-300 font-bold bg-gradient-to-r from-black to-blue-950'
        aria-label="Footer navigation"
      >
        <a className='hover:text-orange-500' href='#'>Home</a>
        <a className='hover:text-orange-500' href='#'>About</a>
        <a className='hover:text-orange-500' href='#'>Delivery</a>
        <a className='hover:text-orange-500' href='#'>Contact</a>
      </nav>

      <div className='flex justify-center space-x-5 transition-transform duration-500 hover:scale-105'>
        <a
          href="https://www.facebook.com"
          target='_blank'
          rel='nofollow noopener noreferrer'
          aria-label="Facebook"
        >
          <img
            src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
            alt="Facebook logo"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target='_blank'
          rel='nofollow noopener noreferrer'
          aria-label="Instagram"
        >
          <img
            src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
            alt="Instagram logo"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target='_blank'
          rel='nofollow noopener noreferrer'
          aria-label="LinkedIn"
        >
          <img
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt="LinkedIn logo"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.twitter.com"
          target='_blank'
          rel='nofollow noopener noreferrer'
          aria-label="Twitter"
        >
          <img
            src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
            alt="Twitter logo"
            className="w-8 h-8"
          />
        </a>
      </div>

      <p className='text-center text-white hover:text-orange-500'>
        2025 &copy; Hasnain Raza. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
