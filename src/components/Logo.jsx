import React from 'react';

const Logo = ({ className = "" }) => (
  <div className={`flex items-baseline gap-0 cursor-pointer select-none ${className}`} aria-label="Rubinaath Logo" title="Home">
    {/* R — uppercase, extra-bold, near-black */}
    <span style={{ fontWeight: 900, fontSize: '1.35rem', color: '#0f172a', letterSpacing: '-0.02em' }}>R</span>
    {/* ubi — regular weight, same size, same black */}
    <span style={{ fontWeight: 400, fontSize: '1.35rem', color: '#0f172a', letterSpacing: '-0.02em' }}>ubi</span>
    {/* naath — medium weight, accent blue, slight right-tracking separation */}
    <span style={{ fontWeight: 500, fontSize: '1.35rem', color: '#2563eb', letterSpacing: '-0.01em', marginLeft: '0.5px' }}>naath</span>
    {/* dot accent — same blue, favicon-readable */}
    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2563eb', display: 'inline-block', marginLeft: '2px', marginBottom: '3px', flexShrink: 0 }} />
  </div>
);

export default Logo;
