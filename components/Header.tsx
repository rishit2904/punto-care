'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Car } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/maintenance', label: 'Maintenance' },
  { href: '/specifications', label: 'Specifications' },
  { href: '/troubleshooting', label: 'Troubleshooting' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="logo">
              <div className="logo-icon">
                <Car size={24} />
              </div>
              <span>Punto<span style={{ color: 'var(--color-primary)' }}>Care</span></span>
            </Link>

            <nav className="nav">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <Link href="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
              <div className="logo-icon">
                <Car size={24} />
              </div>
              <span>Punto<span style={{ color: 'var(--color-primary)' }}>Care</span></span>
            </Link>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
