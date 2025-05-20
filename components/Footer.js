import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer({ footer }) {
  if (!footer) return null;

  const {
    nav = {},
    socialMedia = [],
    copyright
  } = footer;

  return (
    <footer className={`${styles.footer} bg-dark text-light py-5`}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Logo Section */}
          <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
            {nav.logo && (
              <Link href="/" className="d-inline-block">
                <Image
                  src={nav.logo}
                  alt="Company Logo"
                  width={180}
                  height={40}
                  className={`${styles.logo} img-fluid`}
                  priority
                />
              </Link>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
              {nav.links?.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className={`${styles.navLink} text-light text-decoration-none`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={`Visit our ${social.platform} profile`}
                >
                  <Image 
                    src={social.icon} 
                    alt={`${social.platform} icon`} 
                    width={24} 
                    height={24} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-3 text-muted">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
