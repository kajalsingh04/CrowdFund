// import { useAuth } from '../context/AuthContext'

// function Profile() {
//   const { user } = useAuth()

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gray-100'>
//       <div className='bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg'>
//         <h1 className='text-4xl font-bold text-blue-700 mb-8'>
//           User Profile
//         </h1>

//         <div className='space-y-4 text-lg'>
//           <p>
//             <strong>Name:</strong> {user?.name}
//           </p>

//           <p>
//             <strong>Email:</strong> {user?.email}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile

import { useAuth } from '../context/AuthContext'

function Profile() {
  const { user } = useAuth()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .prof-root {
          font-family: 'Sora', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          background: #f0f4ff;
          position: relative;
          overflow: hidden;
        }

        /* background blobs */
        .prof-root::before {
          content: '';
          position: fixed;
          width: 520px; height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,97,255,0.10) 0%, transparent 70%);
          top: -140px; right: -120px;
          pointer-events: none;
        }
        .prof-root::after {
          content: '';
          position: fixed;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%);
          bottom: -100px; left: -80px;
          pointer-events: none;
        }

        /* ── Card ── */
        .prof-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 460px;
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.04),
            0 8px 24px rgba(59,97,255,0.08),
            0 32px 64px rgba(59,97,255,0.09);
          border: 1px solid rgba(255,255,255,0.9);
        }

        /* colour band at top */
        .prof-band {
          height: 6px;
          background: linear-gradient(90deg, #3b61ff, #06b6d4);
        }

        /* header section */
        .prof-header {
          padding: 40px 40px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: linear-gradient(160deg, #f8faff 0%, #ffffff 100%);
          border-bottom: 1px solid #f1f5f9;
        }

        /* avatar */
        .prof-avatar {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b61ff, #06b6d4);
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 18px;
          box-shadow: 0 6px 24px rgba(59,97,255,0.32);
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }

        .prof-greeting {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #3b61ff;
          margin-bottom: 6px;
        }

        .prof-name {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.04em;
          line-height: 1.2;
        }

        /* ── Info section ── */
        .prof-body {
          padding: 28px 36px 36px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .prof-section-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a1a1aa;
          margin-bottom: 4px;
        }

        /* individual field row */
        .prof-field {
          background: #fafafa;
          border: 1.5px solid #f1f5f9;
          border-radius: 14px;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: border-color 0.18s, box-shadow 0.18s;
        }
        .prof-field:hover {
          border-color: #dbeafe;
          box-shadow: 0 2px 12px rgba(59,97,255,0.07);
        }

        .prof-field-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .prof-field-icon.blue {
          background: #eff6ff;
          color: #3b61ff;
        }
        .prof-field-icon.cyan {
          background: #ecfeff;
          color: #0891b2;
        }

        .prof-field-content { flex: 1; min-width: 0; }
        .prof-field-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 2px;
        }
        .prof-field-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* verified badge */
        .prof-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #166534;
          background: #f0fdf4;
          border: 1.5px solid #bbf7d0;
          padding: 4px 10px;
          border-radius: 99px;
          margin-top: 14px;
          align-self: center;
        }
        .prof-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #16a34a;
          animation: badge-pulse 2s ease-in-out infinite;
        }
        @keyframes badge-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.4); }
          50%      { box-shadow: 0 0 0 5px rgba(22,163,74,0); }
        }
      `}</style>

      <div className="prof-root">
        <div className="prof-card">

          {/* Top gradient band */}
          <div className="prof-band" />

          {/* Header */}
          <div className="prof-header">
            <div className="prof-avatar">
              {user?.name?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <div className="prof-greeting">User Profile</div>
            <div className="prof-name">{user?.name}</div>
          </div>

          {/* Body */}
          <div className="prof-body">

            <div className="prof-section-label">Account Details</div>

            {/* Name field */}
            <div className="prof-field">
              <div className="prof-field-icon blue">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="prof-field-content">
                <div className="prof-field-label">Full Name</div>
                <div className="prof-field-value">{user?.name}</div>
              </div>
            </div>

            {/* Email field */}
            <div className="prof-field">
              <div className="prof-field-icon cyan">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="prof-field-content">
                <div className="prof-field-label">Email Address</div>
                <div className="prof-field-value">{user?.email}</div>
              </div>
            </div>

            {/* Verified badge */}
            <div className="prof-badge">
              <span className="prof-badge-dot" />
              Verified Account
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Profile