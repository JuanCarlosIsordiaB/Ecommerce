import React from "react";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs py-4">
      <footer className="text-gray-400">
        Ecommerce | Shop © {new Date().getFullYear()} All Rights Reserved
      </footer>
    </div>
  );
};

export default Footer;
