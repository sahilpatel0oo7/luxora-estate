"use client";

import { useState } from 'react';
import Footer from './footer';
import Header from './header';

// Shared Style Elements for Clean Design
const badgeStyle = {
  background: 'linear-gradient(90deg, rgba(14, 165, 233, 0.15), rgba(99, 102, 241, 0.15))',
  border: '1px solid rgba(14, 165, 233, 0.3)',
  color: '#38bdf8',
  padding: '6px 16px',
  borderRadius: '9999px',
  fontSize: '0.85rem',
  fontWeight: '600',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  marginBottom: '20px',
  display: 'inline-block',
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '10px 20px',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  minWidth: '160px',
};

const labelStyle = {
  fontSize: '0.75rem',
  color: '#94a3b8',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '6px',
  fontWeight: '600',
};

const inputStyle = {
  background: 'transparent',
  border: 'none',
  color: '#ffffff',
  fontSize: '1rem',
  fontWeight: '500',
  outline: 'none',
  width: '100%',
};

export default function Home() {
  const [searchTab, setSearchTab] = useState('buy');

  // FIXED: Removed the invalid backslash escape characters (\$) from the prices
  const premiumProperties = [
    { id: 1, title: 'Aetheria Volumetric Villa', location: 'Malibu, CA', price: '\$4,850,000', beds: 4, baths: 5, space: '4,200 sqft', img: 'https://unsplash.com' },
    { id: 2, title: 'Luminary Obsidian Penthouse', location: 'Manhattan, NY', price: '\$8,200,000', beds: 3, baths: 3.5, space: '3,100 sqft', img: 'https://unsplash.com' },
    { id: 3, title: 'Verdant Axis Eco-Estate', location: 'Austin, TX', price: '\$2,950,000', beds: 5, baths: 6, space: '5,600 sqft', img: 'https://unsplash.com' }
  ];

  return (
    <main
      style={{
        width: '100%',
        overflowX: 'hidden',
        background: '#030712', 
        color: '#ffffff',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <Header />
      {/* Structural Geometry & Vector Grids */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.01) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.01) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at 50% 30%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, #000 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Hero Core Visual Hub */}
      <section style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '120px 24px 60px', textAlign: 'center' }}>
        <span style={badgeStyle}>Next-Gen Architecture</span>
        
        <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: '800', letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '24px' }}>
          Unveil Your Ultimate <br />
          <span style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Architectural Destiny
          </span>
        </h1>
        
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '640px', margin: '0 auto 48px', lineHeight: '1.6' }}>
          Explore an exclusive, hyper-curated index of high-end smart estates, luxury architectural masterpieces, and premium modern dwellings.
        </p>

        {/* Floating Glassmorphic Search Dashboard Engine */}
        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '10px', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8)' }}>
          
          {/* Internal Operation Filter Mode Switchers */}
          <div style={{ display: 'flex', gap: '8px', padding: '10px 14px' }}>
            <button onClick={() => setSearchTab('buy')} style={{ background: searchTab === 'buy' ? '#0ea5e9' : 'transparent', border: 'none', color: '#fff', padding: '8px 20px', borderRadius: '9999px', cursor: 'pointer', fontWeight: '600' }}>Buy</button>
            <button onClick={() => setSearchTab('rent')} style={{ background: searchTab === 'rent' ? '#0ea5e9' : 'transparent', border: 'none', color: '#fff', padding: '8px 20px', borderRadius: '9999px', cursor: 'pointer', fontWeight: '600' }}>Rent</button>
          </div>

          {/* Integrated Dynamic Form Input Layout Grid */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.04)' }}>
            <div style={inputContainerStyle}>
              <label style={labelStyle}>Location Target</label>
              <input type="text" placeholder="e.g. Beverly Hills, CA" style={inputStyle} />
            </div>
            
            <div style={inputContainerStyle}>
              <label style={labelStyle}>Property Category</label>
              <select style={{ ...inputStyle, cursor: 'pointer', color: '#ffffff' }}>
                <option value="villa" style={{background: '#0f172a'}}>Modernist Villa</option>
                <option value="penthouse" style={{background: '#0f172a'}}>Glass Penthouse</option>
                <option value="mansion" style={{background: '#0f172a'}}>Smart Complex</option>
              </select>
            </div>

            <div style={{ ...inputContainerStyle, borderRight: 'none' }}>
              <label style={labelStyle}>Investment Range</label>
              <input type="text" placeholder="\$2.5M - \$5.0M" style={inputStyle} />
            </div>

            <button style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)', border: 'none', color: '#fff', padding: '16px 36px', borderRadius: '14px', fontWeight: '700', cursor: 'pointer', marginLeft: 'auto' }}>
              Search Estates
            </button>
          </div>
        </div>
      </section>

      {/* Corporate High-Density Performance Analytics Line */}
      <section style={{ maxWidth: '1000px', margin: '40px auto 100px', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', margin: '0 0 4px' }}>\$1.2B+</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Volume Transacted</p>
        </div>
        <div>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0ea5e9', margin: '0 0 4px' }}>99.4%</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Satisfaction Index</p>
        </div>
        <div>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', margin: '0 0 4px' }}>250+</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Elite Architectural Awards</p>
        </div>
      </section>

      {/* Curated Luxury Inventory Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 120px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span style={badgeStyle}>Exclusive Portfolio</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0 0 8px', letterSpacing: '-0.02em' }}>Featured Masterpieces</h2>
            <p style={{ color: '#64748b', margin: 0 }}>Hand-picked architectural properties exhibiting elite industrial design standards.</p>
          </div>
          {/* RESTORED: Completed the broken button block from previous snippet */}
          <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '12px 24px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' }}>
            View Full Index →
          </button>
        </div>

        {/* Dynamic Responsive Property Listing Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {premiumProperties.map((property) => (
            <div key={property.id} style={{ background: 'rgba(15, 23, 42, 0.3)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src={property.img} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#0ea5e9', padding: '6px 14px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
                  {property.price}
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 6px' }}>{property.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 20px' }}>📍 {property.location}</p>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.06)', margin: '0 0 16px' }} />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#94a3b8',
                    fontSize: '0.85rem',
                  }}
                >
                  <span>🛏️ {property.beds} Beds</span>
                  <span>🛁 {property.baths} Baths</span>
                  <span>📐 {property.space}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}