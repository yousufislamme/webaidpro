// components/Footer.js

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">WebAidPro</h2>
          <p className="text-sm">Transforming your business with powerful web applications.</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/">
            <span className="text-sm">Home</span>
          </Link>
          <Link href="/services">
            <span className="text-sm">Services</span>
          </Link>
          <Link href="/about">
            <span className="text-sm">About</span>
          </Link>
          <Link href="/contact">
            <span className="text-sm">Contact</span>
          </Link>
        </div>
        <div className="text-sm">
          <p>Email: <a href="mailto:contact@webaidpro.com" className="underline">contact@webaidpro.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="underline">(123) 456-7890</a></p>
          <p>Address: 123 Tech Avenue, Innovation City, Techland</p>
        </div>
      </div>
      <div className="text-center text-xs mt-4">
        &copy; {new Date().getFullYear()} WebAidPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
