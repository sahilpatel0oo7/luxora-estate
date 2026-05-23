import React, { useState, useEffect } from 'react';

// Shared styling objects for modern aesthetic continuity
const linkStyle: React.CSSProperties = {
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: '500',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
};

const mobileMenuLinkStyle: React.CSSProperties = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: '600',
  padding: '16px 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  width: '100%',
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll behavior to trigger layout border styling shifts dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        // Fluid conversion down to a deep frosted translucent deck on scroll interaction
        background: isScrolled ? 'rgba(3, 7, 18, 0.75)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isScrolled ? '16px 24px' : '24px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          boxSizing: 'border-box',
        }}
      >
        {/* Brand Logo Anchor */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <span
            style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            AETHERIA
          </span>
        </div>

        {/* Central Core Desktop Navigation Panel */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {['Buy', 'Rent', 'Properties', 'Agents', 'About'].map((item) => (
            <a
              key={item}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#38bdf8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Button Deck Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            className="desktop-nav"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '10px 22px',
              borderRadius: '10px',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(14, 165, 233, 0.2)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Contact Agent
          </button>

          {/* Functional Hamburger Icon Toggle Button for Mobile Devices */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              width: '40px',
              height: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <div style={{ width: '20px', height: '2px', background: '#ffffff', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div style={{ width: '20px', height: '2px', background: '#ffffff', transition: '0.3s', opacity: isMobileMenuOpen ? 0 : 1 }} />
            <div style={{ width: '20px', height: '2px', background: '#ffffff', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Slide-Down Mobile Responsive Dropdown Layout Matrix */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: '#030712',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          {['Buy', 'Rent', 'Properties', 'Agents', 'About'].map((item) => (
            <a key={item} style={mobileMenuLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button
            style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '14px',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              marginTop: '20px',
              cursor: 'pointer',
              width: '100%',
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Agent
          </button>
        </div>
      )}

      {/* Universal CSS Embed Injection Override Element for Hide/Show Breakpoints */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          header button:has(div) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
