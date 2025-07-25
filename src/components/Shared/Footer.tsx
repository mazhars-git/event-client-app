import { Facebook, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 border-t pt-5">
      <div className="container mx-auto px-4 pb-3 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="Logo" className="h-8 w-8" /> */}
          <span className="text-lg font-bold uppercase">EventApp</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-muted-foreground text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <Facebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <Github />
          </a>
        </div>
      </div>
      <div className="bg-black py-3">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} EventApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
