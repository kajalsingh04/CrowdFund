// function TopDonors() {
//   const donors = [
//     {
//       name: 'Rahul Sharma',
//       amount: '₹50,000',
//     },

//     {
//       name: 'Priya Verma',
//       amount: '₹25,000',
//     },

//     {
//       name: 'Aman Singh',
//       amount: '₹10,000',
//     },
//   ]

//   return (
//     <div className='py-24 bg-gray-100 dark:bg-slate-950'>
//       <div className='max-w-7xl mx-auto px-6'>
//         <h1 className='text-6xl font-bold text-center mb-20 dark:text-white'>
//           Top Donors ❤️
//         </h1>

//         <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
//           {donors.map(
//             (donor, index) => (
//               <div
//                 key={index}
//                 className='bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl text-center'
//               >
//                 <div className='w-24 h-24 bg-blue-700 rounded-full mx-auto mb-6'></div>

//                 <h2 className='text-3xl font-bold dark:text-white'>
//                   {donor.name}
//                 </h2>

//                 <p className='text-2xl text-green-600 mt-4'>
//                   {
//                     donor.amount
//                   }
//                 </p>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TopDonors

function TopDonors() {
  const donors = [
    {
      name: 'Rahul Sharma',
      amount: '₹50,000',
    },
    {
      name: 'Priya Verma',
      amount: '₹25,000',
    },
    {
      name: 'Aman Singh',
      amount: '₹10,000',
    },
  ]

  const ranks = [
    {
      medal: '🥇',
      label: '1st Place',
      ring: 'linear-gradient(135deg,#f59e0b,#d97706)',
      glow: 'rgba(245,158,11,0.25)',
      badge: '#fef3c7',
      badgeText: '#92400e',
      avatar: 'linear-gradient(135deg,#fbbf24,#d97706)',
      scale: true,
    },
    {
      medal: '🥈',
      label: '2nd Place',
      ring: 'linear-gradient(135deg,#94a3b8,#64748b)',
      glow: 'rgba(148,163,184,0.2)',
      badge: '#f1f5f9',
      badgeText: '#475569',
      avatar: 'linear-gradient(135deg,#94a3b8,#64748b)',
      scale: false,
    },
    {
      medal: '🥉',
      label: '3rd Place',
      ring: 'linear-gradient(135deg,#fb923c,#c2410c)',
      glow: 'rgba(251,146,60,0.2)',
      badge: '#fff7ed',
      badgeText: '#9a3412',
      avatar: 'linear-gradient(135deg,#fb923c,#c2410c)',
      scale: false,
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Lora:ital,wght@1,500&display=swap');

        .td-section {
          font-family: 'Sora', sans-serif;
          padding: 100px 24px;
          background: #f7f9ff;
          position: relative;
          overflow: hidden;
        }

        .td-blob-1 {
          position: absolute;
          top: -100px; right: -80px;
          width: 440px; height: 440px;
          background: radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .td-blob-2 {
          position: absolute;
          bottom: -120px; left: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(15,76,129,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .td-inner {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .td-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .td-eyebrow-line {
          width: 40px; height: 1.5px;
          background: linear-gradient(90deg, transparent, #f59e0b);
        }
        .td-eyebrow-line.r {
          background: linear-gradient(90deg, #f59e0b, transparent);
        }
        .td-eyebrow-text {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #92400e;
        }

        .td-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #18181b;
          text-align: center;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 14px;
        }
        .td-heading em {
          font-family: 'Lora', serif;
          font-style: italic;
          font-weight: 500;
          color: #d97706;
        }
        .td-heading-sub {
          text-align: center;
          font-size: 0.95rem;
          color: #71717a;
          font-weight: 400;
          margin-bottom: 64px;
        }

        /* ── Grid ── */
        .td-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: end;
        }
        @media (max-width: 760px) {
          .td-grid { grid-template-columns: 1fr; align-items: stretch; }
          .td-card-featured { transform: none !important; }
        }

        /* ── Card ── */
        .td-card {
          background: #fff;
          border: 1.5px solid #e4e4e7;
          border-radius: 24px;
          padding: 36px 24px 28px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;
          position: relative;
          overflow: hidden;
        }
        .td-card:hover {
          box-shadow: 0 14px 44px rgba(0,0,0,0.1);
          transform: translateY(-4px) !important;
        }
        .td-card-featured {
          transform: translateY(-12px);
          border-color: rgba(245,158,11,0.35);
          box-shadow: 0 8px 32px rgba(245,158,11,0.15);
        }

        /* shimmer top bar */
        .td-card-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          border-radius: 24px 24px 0 0;
        }

        /* rank badge */
        .td-rank-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 99px;
          margin-bottom: 20px;
        }

        /* avatar ring */
        .td-avatar-wrap {
          position: relative;
          margin-bottom: 20px;
        }
        .td-avatar-ring {
          width: 80px; height: 80px;
          border-radius: 50%;
          padding: 3px;
          display: flex; align-items: center; justify-content: center;
        }
        .td-avatar {
          width: 74px; height: 74px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.6rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          border: 3px solid #fff;
        }
        .td-medal {
          position: absolute;
          bottom: -4px; right: -4px;
          font-size: 1.3rem;
          line-height: 1;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }

        /* name & amount */
        .td-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #18181b;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }
        .td-amount {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #16a34a;
          margin-bottom: 16px;
        }
        .td-amount-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a1a1aa;
        }

        /* divider */
        .td-card-div {
          width: 100%;
          height: 1px;
          background: #f4f4f5;
          margin: 16px 0 14px;
        }

        /* heart row */
        .td-hearts {
          font-size: 0.85rem;
          letter-spacing: 2px;
          color: #fca5a5;
        }
      `}</style>

      <div className="td-section">
        <div className="td-blob-1" />
        <div className="td-blob-2" />

        <div className="td-inner">

          {/* Header */}
          <div className="td-eyebrow">
            <div className="td-eyebrow-line" />
            <span className="td-eyebrow-text">Leaderboard</span>
            <div className="td-eyebrow-line r" />
          </div>

          <h1 className="td-heading">
            Top <em>Donors</em> ❤️
          </h1>
          <p className="td-heading-sub">
            Celebrating the generous hearts who made the biggest impact.
          </p>

          {/* Cards */}
          <div className="td-grid">
            {donors.map((donor, index) => {
              const r = ranks[index]
              return (
                <div
                  key={index}
                  className={`td-card ${index === 0 ? 'td-card-featured' : ''}`}
                >
                  {/* Top color bar */}
                  <div className="td-card-bar" style={{ background: r.ring }} />

                  {/* Rank badge */}
                  <div
                    className="td-rank-badge"
                    style={{ background: r.badge, color: r.badgeText }}
                  >
                    {r.medal} {r.label}
                  </div>

                  {/* Avatar */}
                  <div className="td-avatar-wrap">
                    <div className="td-avatar-ring" style={{ background: r.ring }}>
                      <div className="td-avatar" style={{ background: r.avatar }}>
                        {donor.name.charAt(0)}
                      </div>
                    </div>
                    <span className="td-medal">{r.medal}</span>
                  </div>

                  {/* Name */}
                  <div className="td-name">{donor.name}</div>

                  {/* Amount */}
                  <div className="td-amount">{donor.amount}</div>
                  <div className="td-amount-label">Total Donated</div>

                  <div className="td-card-div" />

                  {/* Hearts */}
                  <div className="td-hearts">♥ ♥ ♥</div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}

export default TopDonors