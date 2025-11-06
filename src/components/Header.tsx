import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Clock from "./Clock";

const navItems = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT US" },
  { href: "#events", label: "EVENTS" },
  { href: "#incubation", label: "INCUBATION" },
  { href: "#team", label: "TEAM" },
  { href: "#contact", label: "CONTACT" },
];

const menuVariants = {
  hidden: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-background py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/IEDC Logo.svg" alt="IEDC Logo" className="h-12" />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-8 w-8" />
            </button>
          </div>
          <div className="hidden md:block">
            <Clock />
          </div>
        </div>
        
        <div className="text-center mb-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">IEDC CUSAT</h1>
          <p className="text-sm md:text-base tracking-widest text-muted-foreground uppercase">
            Innovation and Entrepreneurship Development Cell
          </p>
        </div>
        
        <div className="border-t border-border mb-4"></div>
        <nav className="hidden md:block border-b border-border pb-4">
          <ul className="flex justify-center gap-12 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="hover:text-sky-500 transition-colors duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-background z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="w-full h-full p-4">
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="h-8 w-8" />
                </button>
              </div>
              <nav>
                <ul className="flex flex-col items-center gap-8 text-2xl font-medium">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="hover:text-sky-500 transition-colors duration-300">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
