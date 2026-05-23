import React from 'react';

// Shared styling objects for consistent design hierarchy
const headingStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: '700',
  color: '#ffffff',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  marginBottom: '20px',
};

const linkStyle: React.CSSProperties = {
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: '0.95rem',
  transition: 'color 0.2s ease',
  cursor: 'pointer',
  display: 'block',
  marginBottom: '12px',
};

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: '#030712', // Matches your exact background hex code
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
        zIndex: 2,
        padding: '80px 24px 40px',
        boxSizing: 'border-box',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Decorative background glow for a subtle accent look */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '10%',
          width: '30vw',
          height: '20vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Main responsive structural layout container grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Brand/Identity Segment */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                AETHERIA
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Curating high-end smart estates, luxury architectural masterpieces, and premium modern dwellings globally.
            </p>
          </div>

          {/* Nav Links Column 1 */}
          <div>
            <h4 style={headingStyle}>Portfolios</h4>
            <a style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Modern Villas</a>
            <a style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Glass Penthouses</a>
            <a style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Smart Complexes</a>
            <a style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Eco-Estates</a>
          </div>

          {/* Nav Links Column 2 */}
          <div>
            <h4 style={headingStyle}>Company</h4>
            <a style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Our Vision</a>
            <a style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Elite Agents</a>
            <a style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Press Kit</a>
            <a style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Contact Support</a>
          </div>

          {/* Interactive Newsletter Update Segment */}
          <div>
            <h4 style={headingStyle}>Exclusive Drops</h4>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
              Subscribe to receive updates on private, off-market real estate drops before they launch.
            </p>
            <div style={{ display: 'flex', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '6px', boxSizing: 'border-box' }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  padding: '8px 12px',
                  flex: 1,
                  width: '100%',
                }}
              />
              <button
                style={{
                  background: '#0ea5e9',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#0284c7')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#0ea5e9')}
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Horizontal Divider Break Line */}
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.06)', margin: '0 0 30px' }} />

        {/* Lower Legal Rights Pane */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', color: '#64748b', fontSize: '0.85rem' }}>
          <span>© {new Date().getFullYear()} Aetheria Real Estate Index. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</a>
            <a style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
