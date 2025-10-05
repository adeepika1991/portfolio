"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const menuItems = [
    { href: "#about", label: "About", track: "About-me" },
    { href: "#experience", label: "Experience", track: "experience" },
    { href: "#projects", label: "Projects", track: "Projects" },
    { href: "#faq", label: "FAQ", track: "FAQ" },
    { href: "#contact", label: "Contact", track: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  if (!isMobile) {
    return null;
  }

  return (
    <>
      {/* Burger Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 90 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-40"
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-background border-l border-border z-50 p-6"
            >
              {/* Close button in panel */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    data-track={item.track}
                    onClick={handleLinkClick}
                    className="text-lg font-medium hover:text-accent transition-colors py-2"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
