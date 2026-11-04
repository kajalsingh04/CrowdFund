// function Footer() {
//   return (
//     <footer className='bg-slate-900 text-white py-10 mt-20'>
//       <div className='max-w-7xl mx-auto px-8'>
//         <h2 className='text-3xl font-bold'>CrowdFund</h2>

//         <p className='mt-4 text-gray-400'>
//           Helping people through trusted fundraising campaigns.
//         </p>

//         <div className='mt-6 text-gray-400'>
//           © 2026 CrowdFund. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .ft-root {
          font-family: 'Sora', sans-serif;
          background: #0a0f1e;
          color: #fff;
          margin-top: 80px;
          position: relative;
          overflow: hidden;
        }

        /* background blobs */
        .ft-root::before {
          content: '';
          position: absolute;
          top: -120px; left: -80px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,97,255,0.10) 0%, transparent 70%);
          pointer-events: none;
        }
        .ft-root::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -60px;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* top gradient line */
        .ft-topline {
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b61ff 30%, #06b6d4 70%, transparent);
        }

        .ft-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 56px 32px 40px;
        }

        /* ── Main row ── */
        .ft-main {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        @media (max-width: 860px) {
          .ft-main { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 540px) {
          .ft-main { grid-template-columns: 1fr; }
        }

        /* brand col */
        .ft-brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          text-decoration: none;
        }
        .ft-logo-mark {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #3b61ff, #06b6d4);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px rgba(59,97,255,0.35);
          flex-shrink: 0;
        }
        .ft-brand-name {
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #fff 40%, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ft-tagline {
          font-size: 0.875rem;
          color: #94a3b8;
          line-height: 1.7;
          max-width: 240px;
          font-weight: 400;
        }

        /* social icons */
        .ft-socials {
          display: flex;
          gap: 10px;
          margin-top: 24px;
        }
        .ft-social-btn {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.18s, color 0.18s, transform 0.18s, border-color 0.18s;
        }
        .ft-social-btn:hover {
          background: rgba(59,97,255,0.18);
          border-color: rgba(59,97,255,0.35);
          color: #a5b4fc;
          transform: translateY(-2px);
        }

        /* nav cols */
        .ft-col-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 18px;
        }
        .ft-col-links {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .ft-link {
          font-size: 0.865rem;
          color: #64748b;
          text-decoration: none;
          font-weight: 400;
          transition: color 0.15s, transform 0.15s;
          display: inline-block;
        }
        .ft-link:hover {
          color: #a5b4fc;
          transform: translateX(3px);
        }

        /* ── Bottom bar ── */
        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-top: 28px;
          flex-wrap: wrap;
        }

        .ft-copyright {
          font-size: 0.8rem;
          color: #475569;
          font-weight: 400;
        }
        .ft-copyright span {
          color: #64748b;
        }

        .ft-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #4ade80;
          background: rgba(74,222,128,0.08);
          border: 1px solid rgba(74,222,128,0.18);
          padding: 5px 12px;
          border-radius: 99px;
        }
        .ft-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: ft-pulse 2s ease-in-out infinite;
        }
        @keyframes ft-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); }
          50%      { box-shadow: 0 0 0 5px rgba(74,222,128,0); }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-topline" />

        <div className="ft-inner">
          <div className="ft-main">

            {/* Brand column */}
            <div>
              <div className="ft-brand-logo">
                <div className="ft-logo-mark">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h2 className="ft-brand-name">CrowdFund</h2>
              </div>

              <p className="ft-tagline">
                Helping people through trusted fundraising campaigns.
              </p>

              <div className="ft-socials">
                {/* Twitter/X */}
                <a href="#" className="ft-social-btn" aria-label="Twitter">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="ft-social-btn" aria-label="Instagram">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="ft-social-btn" aria-label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Platform links */}
            <div>
              <div className="ft-col-title">Platform</div>
              <div className="ft-col-links">
                <a href="/" className="ft-link">Home</a>
                <a href="/explore" className="ft-link">Explore</a>
                <a href="/create-campaign" className="ft-link">Start Campaign</a>
                <a href="/dashboard" className="ft-link">Dashboard</a>
              </div>
            </div>

            {/* Company links */}
            <div>
              <div className="ft-col-title">Company</div>
              <div className="ft-col-links">
                <a href="#" className="ft-link">About Us</a>
                <a href="#" className="ft-link">How it Works</a>
                <a href="#" className="ft-link">Blog</a>
                <a href="#" className="ft-link">Careers</a>
              </div>
            </div>

            {/* Legal links */}
            <div>
              <div className="ft-col-title">Legal</div>
              <div className="ft-col-links">
                <a href="#" className="ft-link">Privacy Policy</a>
                <a href="#" className="ft-link">Terms of Service</a>
                <a href="#" className="ft-link">Cookie Policy</a>
                <a href="#" className="ft-link">Contact Us</a>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="ft-bottom">
            <div className="ft-copyright">
              © 2026 CrowdFund. All rights reserved.
            </div>
            <div className="ft-badge">
              <span className="ft-badge-dot" />
              All systems operational
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer