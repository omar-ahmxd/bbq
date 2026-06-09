// Temporary "Service Suspended" page shown while the site is on hold.
// To bring the live site back, set MAINTENANCE_MODE = false in src/main.tsx
// (or revert the commit) and redeploy.

function Maintenance() {
  return (
    <>
      {/* Override the main site's global styles (cursor: none, white body bg)
          so the standalone maintenance page renders correctly. */}
      <style>{`
        html, body { height: 100%; }
        body {
          cursor: auto !important;
          background-color: #0A0A0A !important;
          overflow: hidden;
        }
        @keyframes maintFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <main
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(circle at 50% 18%, #1B4D3E 0%, #10271f 38%, #0A0A0A 78%)',
          color: '#F8F6F0',
          fontFamily: "'Source Sans 3', system-ui, sans-serif",
          textAlign: 'center',
          padding: '40px 24px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: 540,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'maintFadeIn 0.8s ease both',
          }}
        >
          <img
            src="/TPL-logo.png"
            alt="The Barbeque Lounge"
            style={{
              display: 'block',
              width: 260,
              maxWidth: '72vw',
              height: 'auto',
              marginBottom: 30,
              filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.55))',
            }}
          />

          <div
            style={{
              display: 'inline-block',
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#D4AF37',
              border: '1px solid rgba(212,175,55,0.5)',
              borderRadius: 999,
              padding: '6px 18px',
              marginBottom: 18,
            }}
          >
            Notice
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(28px, 5.2vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.18,
              margin: '0 0 16px',
              color: '#FEFEFE',
            }}
          >
            Service Temporarily Suspended
          </h1>

          {/* gold divider */}
          <div
            style={{
              width: 56,
              height: 2,
              background: '#D4AF37',
              margin: '0 auto 16px',
              borderRadius: 2,
            }}
          />

          <p
            style={{
              fontSize: 'clamp(15px, 2.6vw, 18px)',
              lineHeight: 1.7,
              color: 'rgba(248,246,240,0.75)',
              margin: '0 auto',
              maxWidth: 440,
            }}
          >
            This website has been temporarily suspended. Please reach out to the
            developer to restore service.
          </p>
        </div>
      </main>
    </>
  );
}

export default Maintenance;
