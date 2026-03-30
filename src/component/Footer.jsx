import React from "react";
import facebookImg from "../assets/facebook.png";
import instagramImg from "../assets/instagram.png";
import twitterImg from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-4 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-4 space-y-4">
          <h2 className="text-2xl font-bold text-purple-500">DigiTools</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="font-bold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-400 text-sm list-none">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm list-none">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm list-none">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="font-bold mb-4">Social Links</h3>
          <div className="flex gap-4">
            <img
              src={instagramImg}
              alt="IG"
              className="w-6 h-6 hover:opacity-80 cursor-pointer"
            />
            <img
              src={facebookImg}
              alt="FB"
              className="w-6 h-6 hover:opacity-80 cursor-pointer"
            />
            <img
              src={twitterImg}
              alt="TW"
              className="w-6 h-6 hover:opacity-80 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
        &copy; 2026 DigiTools Platform. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
