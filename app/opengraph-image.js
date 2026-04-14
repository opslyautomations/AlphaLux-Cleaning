import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AlphaLux Cleaning — Premium Cleaning Services'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0B1D3A 0%, #1A2E50 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        {/* Logo wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              background: '#C9A84C',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: '900',
              color: '#0B1D3A',
            }}
          >
            A
          </div>
          <div style={{ color: '#C9A84C', fontSize: '28px', fontWeight: '700', letterSpacing: '6px' }}>
            ALPHALUX CLEANING
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            color: 'white',
            fontSize: '56px',
            fontWeight: '800',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: '1.15',
            marginBottom: '20px',
          }}
        >
          Premium Cleaning Services
        </div>

        {/* Sub-headline */}
        <div style={{ color: '#94A3B8', fontSize: '26px', textAlign: 'center', marginBottom: '48px' }}>
          New York · New Jersey · Connecticut
        </div>

        {/* CTA pill */}
        <div
          style={{
            background: '#C9A84C',
            color: '#0B1D3A',
            fontSize: '20px',
            fontWeight: '700',
            padding: '14px 40px',
            borderRadius: '50px',
            letterSpacing: '1px',
          }}
        >
          Book Your Free Quote → (631) 336-8565
        </div>
      </div>
    ),
    { ...size },
  )
}
