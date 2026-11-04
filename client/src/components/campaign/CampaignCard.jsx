// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'

// function CampaignCard({ campaign }) {
//   const percentage = (campaign.raised / campaign.goal) * 100

//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
//     >
//       <img
//         src={campaign.image}
//         alt='campaign'
//         className='w-full h-64 object-cover'
//       />

//       <div className='p-5'>
//         <h2 className='text-3xl font-bold text-slate-800'>
//           {campaign.title}
//         </h2>

//         <div className='mt-3'>
//           <span className='bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold'>
//             Verified Campaign
//           </span>
//         </div>

//         <p className='mt-4 text-gray-600 text-lg'>
//           Raised: ₹{campaign.raised} / ₹{campaign.goal}
//         </p>

//         <div className='w-full bg-gray-200 h-3 rounded-full mt-4'>
//           <div
//             className='bg-green-600 h-3 rounded-full'
//             style={{ width: `${percentage}%` }}
//           ></div>
//         </div>

//         <Link to={`/campaign/${campaign.id}`}>
//           <button className='w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-xl font-semibold transition-all duration-300'>
//             Donate Now
//           </button>
//         </Link>
//       </div>
//     </motion.div>
//   )
// }

// export default CampaignCard

//new 

// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'

// function CampaignCard({ campaign }) {
//   const percentage = (campaign.raised / campaign.goal) * 100

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

//         .cc-card {
//           font-family: 'Sora', sans-serif;
//           background: #ffffff;
//           border: 1.5px solid #e4e4e7;
//           border-radius: 24px;
//           overflow: hidden;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.05);
//           transition: box-shadow 0.25s ease, border-color 0.25s ease;
//           display: flex;
//           flex-direction: column;
//         }
//         .cc-card:hover {
//           box-shadow: 0 12px 40px rgba(15,76,129,0.12);
//           border-color: #c7d7f5;
//         }

//         /* ── Image ── */
//         .cc-img-wrap {
//           position: relative;
//           overflow: hidden;
//           height: 220px;
//           flex-shrink: 0;
//         }
//         .cc-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.5s ease;
//         }
//         .cc-card:hover .cc-img {
//           transform: scale(1.05);
//         }
//         .cc-img-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.45) 100%);
//           pointer-events: none;
//         }
//         .cc-badge {
//           position: absolute;
//           top: 14px;
//           left: 14px;
//           display: flex;
//           align-items: center;
//           gap: 5px;
//           background: rgba(255,255,255,0.92);
//           backdrop-filter: blur(8px);
//           border: 1px solid rgba(255,255,255,0.6);
//           color: #166534;
//           font-size: 0.68rem;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           padding: 5px 11px;
//           border-radius: 99px;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.08);
//         }
//         .cc-badge-dot {
//           width: 6px; height: 6px;
//           background: #16a34a;
//           border-radius: 50%;
//           flex-shrink: 0;
//           box-shadow: 0 0 0 2px rgba(22,163,74,0.25);
//           animation: cc-pulse 2s ease-in-out infinite;
//         }
//         @keyframes cc-pulse {
//           0%, 100% { box-shadow: 0 0 0 2px rgba(22,163,74,0.25); }
//           50%       { box-shadow: 0 0 0 5px rgba(22,163,74,0.1); }
//         }

//         /* ── Body ── */
//         .cc-body {
//           padding: 22px 22px 20px;
//           display: flex;
//           flex-direction: column;
//           flex: 1;
//         }

//         .cc-title {
//           font-size: 1.05rem;
//           font-weight: 700;
//           color: #18181b;
//           letter-spacing: -0.025em;
//           line-height: 1.35;
//           margin-bottom: 16px;
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         /* ── Progress ── */
//         .cc-progress-nums {
//           display: flex;
//           justify-content: space-between;
//           align-items: baseline;
//           margin-bottom: 8px;
//         }
//         .cc-raised-amt {
//           font-size: 1.15rem;
//           font-weight: 800;
//           color: #166534;
//           letter-spacing: -0.03em;
//           line-height: 1;
//         }
//         .cc-raised-label {
//           font-size: 0.68rem;
//           font-weight: 500;
//           color: #71717a;
//           display: block;
//           margin-top: 1px;
//         }
//         .cc-goal-amt {
//           font-size: 0.78rem;
//           color: #a1a1aa;
//           font-weight: 500;
//           text-align: right;
//         }
//         .cc-goal-amt strong {
//           display: block;
//           font-size: 0.875rem;
//           font-weight: 700;
//           color: #52525b;
//         }

//         .cc-bar-bg {
//           width: 100%;
//           height: 6px;
//           background: #f0fdf4;
//           border: 1px solid #dcfce7;
//           border-radius: 99px;
//           overflow: hidden;
//           margin-bottom: 6px;
//         }
//         .cc-bar-fill {
//           height: 100%;
//           background: linear-gradient(90deg, #4ade80, #16a34a);
//           border-radius: 99px;
//           transition: width 0.6s cubic-bezier(0.4,0,0.2,1);
//         }
//         .cc-pct {
//           font-size: 0.72rem;
//           font-weight: 700;
//           color: #16a34a;
//           text-align: right;
//           margin-bottom: 16px;
//         }

//         /* ── CTA ── */
//         .cc-cta {
//           display: block;
//           width: 100%;
//           padding: 13px;
//           background: linear-gradient(135deg, #22c55e, #15803d);
//           color: #fff;
//           border: none;
//           border-radius: 14px;
//           font-family: 'Sora', sans-serif;
//           font-size: 0.9rem;
//           font-weight: 700;
//           letter-spacing: 0.01em;
//           cursor: pointer;
//           text-align: center;
//           text-decoration: none;
//           transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
//           box-shadow: 0 3px 12px rgba(22,163,74,0.28);
//           margin-top: auto;
//         }
//         .cc-cta:hover {
//           opacity: 0.92;
//           transform: translateY(-1px);
//           box-shadow: 0 6px 20px rgba(22,163,74,0.35);
//         }
//         .cc-cta:active { transform: translateY(0); }
//       `}</style>

//       <motion.div
//         whileHover={{ scale: 1.03 }}
//         className="cc-card"
//       >
//         {/* Image */}
//         <div className="cc-img-wrap">
//           <img
//             src={campaign.image}
//             alt="campaign"
//             className="cc-img"
//           />
//           <div className="cc-img-overlay" />
//           <div className="cc-badge">
//             <span className="cc-badge-dot" />
//             Verified Campaign
//           </div>
//         </div>

//         {/* Body */}
//         <div className="cc-body">
//           <h2 className="cc-title">{campaign.title}</h2>

//           {/* Progress */}
//           <div className="cc-progress-nums">
//             <div>
//               <span className="cc-raised-amt">
//                 ₹{campaign.raised.toLocaleString('en-IN')}
//               </span>
//               <span className="cc-raised-label">raised</span>
//             </div>
//             <div className="cc-goal-amt">
//               Goal
//               <strong>₹{campaign.goal.toLocaleString('en-IN')}</strong>
//             </div>
//           </div>

//           <div className="cc-bar-bg">
//             <div
//               className="cc-bar-fill"
//               style={{ width: `${Math.min(percentage, 100)}%` }}
//             />
//           </div>
//           <div className="cc-pct">{Math.round(percentage)}% funded</div>

//           {/* CTA */}
//           <Link to={`/campaign/${campaign.id}`}>
//             <button className="cc-cta">Donate Now ❤️</button>
//           </Link>
//         </div>
//       </motion.div>
//     </>
//   )
// }

// export default CampaignCard

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function CampaignCard({ campaign }) {
  const percentage = (campaign.raised / campaign.goal) * 100

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .cc-card {
          font-family: 'Sora', sans-serif;
          background: #ffffff;
          border: 1.5px solid #e4e4e7;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 320px;
          margin: 0;
        }
        .cc-card:hover {
          box-shadow: 0 12px 40px rgba(15,76,129,0.12);
          border-color: #c7d7f5;
        }

        /* Image */
        .cc-img-wrap {
          position: relative;
          overflow: hidden;
          height: 200px;
          flex-shrink: 0;
        }
        .cc-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .cc-card:hover .cc-img {
          transform: scale(1.05);
        }
        .cc-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.45) 100%);
          pointer-events: none;
        }
        .cc-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.6);
          color: #166534;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 11px;
          border-radius: 99px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .cc-badge-dot {
          width: 6px; height: 6px;
          background: #16a34a;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 0 2px rgba(22,163,74,0.25);
          animation: cc-pulse 2s ease-in-out infinite;
        }
        @keyframes cc-pulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(22,163,74,0.25); }
          50%       { box-shadow: 0 0 0 5px rgba(22,163,74,0.1); }
        }

        /* Body */
        .cc-body {
          padding: 18px 18px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .cc-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: #18181b;
          letter-spacing: -0.025em;
          line-height: 1.35;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Progress */
        .cc-progress-nums {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
        }
        .cc-raised-amt {
          font-size: 1.05rem;
          font-weight: 800;
          color: #166534;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .cc-raised-label {
          font-size: 0.65rem;
          font-weight: 500;
          color: #71717a;
          display: block;
          margin-top: 1px;
        }
        .cc-goal-amt {
          font-size: 0.75rem;
          color: #a1a1aa;
          font-weight: 500;
          text-align: right;
        }
        .cc-goal-amt strong {
          display: block;
          font-size: 0.825rem;
          font-weight: 700;
          color: #52525b;
        }

        .cc-bar-bg {
          width: 100%;
          height: 6px;
          background: #f0fdf4;
          border: 1px solid #dcfce7;
          border-radius: 99px;
          overflow: hidden;
          margin-bottom: 5px;
        }
        .cc-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #4ade80, #16a34a);
          border-radius: 99px;
          transition: width 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .cc-pct {
          font-size: 0.7rem;
          font-weight: 700;
          color: #16a34a;
          text-align: right;
          margin-bottom: 14px;
        }

        /* CTA */
        .cc-cta {
          display: block;
          width: 100%;
          padding: 11px;
          background: linear-gradient(135deg, #22c55e, #15803d);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'Sora', sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
          box-shadow: 0 3px 12px rgba(22,163,74,0.28);
          margin-top: auto;
        }
        .cc-cta:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(22,163,74,0.35);
        }
        .cc-cta:active { transform: translateY(0); }
      `}</style>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="cc-card"
      >
        {/* Image */}
        <div className="cc-img-wrap">
          <img
            src={campaign.image}
            alt="campaign"
            className="cc-img"
          />
          <div className="cc-img-overlay" />
          <div className="cc-badge">
            <span className="cc-badge-dot" />
            Verified Campaign
          </div>
        </div>

        {/* Body */}
        <div className="cc-body">
          <h2 className="cc-title">{campaign.title}</h2>

          {/* Progress */}
          <div className="cc-progress-nums">
            <div>
              <span className="cc-raised-amt">
                ₹{campaign.raised.toLocaleString('en-IN')}
              </span>
              <span className="cc-raised-label">raised</span>
            </div>
            <div className="cc-goal-amt">
              Goal
              <strong>₹{campaign.goal.toLocaleString('en-IN')}</strong>
            </div>
          </div>

          <div className="cc-bar-bg">
            <div
              className="cc-bar-fill"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
          <div className="cc-pct">{Math.round(percentage)}% funded</div>

          {/* CTA */}
          <Link to={`/campaign/${campaign.id}`}>
            <button className="cc-cta">Donate Now ❤️</button>
          </Link>
        </div>
      </motion.div>
    </>
  )
}

export default CampaignCard