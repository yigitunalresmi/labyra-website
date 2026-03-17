"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import LabyraLogo from "@/components/LabyraLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-10 h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="logo-spin">
            <LabyraLogo className="w-8 h-8" />
          </div>
          <span className="text-xl font-bold tracking-tight">LABYRA</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-text transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/iletisim"
            className="btn-shimmer text-sm font-medium bg-cta text-white rounded-lg px-5 py-2.5 hover:bg-cta-hover transition-colors"
          >
            Demo Talep Et
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-bg/98 backdrop-blur-xl border-b border-border px-6 pb-6 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-base text-muted hover:text-text transition-colors border-b border-border/50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            className="inline-block mt-4 text-sm font-medium bg-cta text-white rounded-lg px-5 py-2.5"
            onClick={() => setOpen(false)}
          >
            Demo Talep Et
          </Link>
        </div>
      )}
    </nav>
  );
}
