"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { menu } from "@/data/portofolio";
import { whatsappLink } from "./social";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-2 z-30 w-full md:top-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-glow relative rounded-2xl bg-gray-900/90 px-3 after:absolute after:inset-0 after:-z-10 after:rounded-2xl after:backdrop-blur-xs">
          <div className="flex h-14 items-center justify-between gap-3">
            <div className="flex flex-1 items-center">
              <Logo />
            </div>

            {/* Menu desktop */}
            <nav aria-label="Menu utama" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {menu.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors duration-200 hover:text-white focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-1 items-center justify-end gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm cursor-pointer bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
              >
                Hubungi Saya
              </a>
              <button
                type="button"
                className="flex size-9 cursor-pointer items-center justify-center rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 md:hidden"
                aria-expanded={open}
                aria-controls="menu-hp"
                aria-label={open ? "Tutup menu" : "Buka menu"}
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>

          {/* Menu HP */}
          <AnimatePresence>
            {open && (
              <motion.nav
                id="menu-hp"
                aria-label="Menu utama"
                className="overflow-hidden md:hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="flex flex-col gap-1 border-t border-gray-800 py-3">
                  {menu.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-gray-300 hover:bg-gray-800 hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
