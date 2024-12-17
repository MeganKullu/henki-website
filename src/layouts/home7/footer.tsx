// import Widgets from '@layouts/home7/widget-footer';
// import Copyright from '@layouts/home7/copyright';
import { footer } from '@layouts/footer/data';
import React from "react";
const { widgets, payment, social } = footer;

const Footer: React.FC = () => {
  return (
    <footer className="footer-seven border-t border-black/18 pt-10 md:pt-16 bg-skin-six text-gray-400">
      {/* <Widgets widgets={widgets} social={social} /> */}
      {/* <Copyright payment={payment}/> */}
    </footer>
  );
};

export default Footer;
