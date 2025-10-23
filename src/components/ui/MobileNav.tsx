"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const isMobile = useIsMobile();

  // menu items
  const menuItems = [
    { href: "#about", label: "About", track: "About-me" },
    { href: "#experience", label: "Experience", track: "experience" },
    { href: "#projects", label: "Projects", track: "Projects" },
    { href: "#faq", label: "FAQ", track: "FAQ" },
    { href: "#contact", label: "Contact", track: "Contact" },
  ];

  // mount guard for SSR (portals need document)
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isMobile) return null;

  const toggle = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  // The portal content
  const portalNode = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-lg"
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel — full screen centered menu; you can change to slide-in if you prefer */}
          <motion.aside
            key="panel"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 400 }}
            className="
              fixed inset-0 z-[10000] 
              flex flex-col items-center justify-center
              p-8
            "
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-5 right-5 p-3 rounded-full hover:bg-accent/10 transition-colors z-[10001]"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            {/* Menu */}
            <nav className="flex flex-col items-center space-y-8 z-[10001]">
              {menuItems.map((m) => (
                <motion.a
                  key={m.href}
                  href={m.href}
                  data-track={m.track}
                  onClick={close}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-2xl md:text-3xl font-semibold text-center hover:text-accent transition-colors"
                >
                  {m.label}
                </motion.a>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Burger button remains inline where nav sits */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {/* Portal to body ensures the overlay is outside any parent stacking context */}
      {typeof document !== "undefined"
        ? createPortal(portalNode, document.body)
        : null}
    </>
  );
}
