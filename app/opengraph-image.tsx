import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Compound Interest Calculator — Free Investment Tool'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 8, display: 'flex' }}>📈</div>
        <div style={{ fontSize: 48, fontWeight: 800, color: '#ffffff', marginBottom: 12, display: 'flex' }}>
          Compound Interest Calculator
        </div>
        <div style={{ fontSize: 24, color: '#94a3b8', maxWidth: 700, textAlign: 'center', display: 'flex' }}>
          See how your money grows over time. Calculate compound interest with interactive charts — free.
        </div>
        <div
          style={{
            marginTop: 32,
            padding: '12px 32px',
            background: '#059669',
            borderRadius: 12,
            fontSize: 20,
            fontWeight: 700,
            color: '#ffffff',
            display: 'flex',
          }}
        >
          calcinterest.com
        </div>
      </div>
    ),
    { ...size }
  )
}
