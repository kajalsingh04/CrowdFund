// import {
//   useEffect,
//   useState,
// } from 'react'

// import {
//   useParams,
// } from 'react-router-dom'

// import api from '../services/api'

// import Navbar from '../components/navbar/Navbar'

// import PaymentModal from '../components/payment/PaymentModal'
// import CommentSection from '../components/comment/CommentSection'

// import socket from '../socket/socket'

// function CampaignDetails() {
//   const { id } = useParams()

//   const [campaign, setCampaign] =
//     useState(null)

//   const [showModal, setShowModal] =
//     useState(false)

//   useEffect(() => {
//     fetchCampaign()

//     socket.on(
//       'donationUpdated',
//       (data) => {
//         if (
//           data.campaignId === id
//         ) {
//           setCampaign((prev) => ({
//             ...prev,
//             raisedAmount:
//               data.raisedAmount,
//           }))
//         }
//       }
//     )

//     return () => {
//       socket.off('donationUpdated')
//     }
//   }, [])

//   const fetchCampaign = async () => {
//     try {
//       const { data } = await api.get(
//         `/campaign/${id}`
//       )

//       setCampaign(data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   if (!campaign) {
//     return (
//       <h1 className='text-center mt-20 text-4xl'>
//         Loading...
//       </h1>
//     )
//   }

//   const percentage =
//     (campaign.raisedAmount /
//       campaign.targetAmount) *
//     100

//   return (
//     <>
//       <Navbar />

//       <div className='max-w-6xl mx-auto py-20 px-6'>
//         <img
//           src={`http://localhost:5000/${campaign.image}`}
//           alt='campaign'
//           className='w-full h-[500px] object-cover rounded-3xl shadow-xl'
//         />

//         <div className='mt-10'>
//           <h1 className='text-6xl font-bold text-slate-800'>
//             {campaign.title}
//           </h1>

//           <p className='mt-8 text-2xl text-gray-600 leading-relaxed'>
//             {campaign.story}
//           </p>

//           <div className='mt-10 bg-white p-8 rounded-3xl shadow-lg'>
//             <div className='flex justify-between text-2xl font-semibold'>
//               <span>
//                 ₹
//                 {campaign.raisedAmount}
//               </span>

//               <span>
//                 Goal ₹
//                 {campaign.targetAmount}
//               </span>
//             </div>

//             <div className='w-full bg-gray-200 h-5 rounded-full mt-5'>
//               <div
//                 className='bg-green-600 h-5 rounded-full transition-all duration-500'
//                 style={{
//                   width: `${percentage}%`,
//                 }}
//               ></div>
//             </div>

//             <button
//               onClick={() =>
//                 setShowModal(true)
//               }
//               className='w-full mt-10 bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl text-2xl font-bold transition-all'
//             >
//               Donate Now ❤️
//             </button>
//             <button
//               onClick={() => {
//                 navigator.clipboard.writeText(
//                   window.location.href
//                 )

//                 alert(
//                   'Campaign link copied ❤️'
//                 )
//               }}
//               className='w-full mt-5 bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-2xl text-2xl font-bold'
//             >
//               Share Campaign
//             </button>
//           </div>
//           <CommentSection campaignId={campaign._id} />

//           <div className='mt-12 bg-blue-50 p-8 rounded-3xl'>
//             <h2 className='text-4xl font-bold text-blue-700 mb-5'>
//               Trust & Verification
//             </h2>

//             <p className='text-xl'>
//               Verified NGO:
//               {' '}
//               {campaign.ngo?.name}
//             </p>

//             <p className='text-xl mt-3'>
//               Campaign Owner:
//               {' '}
//               {
//                 campaign.creator
//                   ?.name
//               }
//             </p>
//           </div>
//         </div>
//       </div>

//       {showModal && (
//         <PaymentModal
//           campaignId={campaign._id}
//           closeModal={() =>
//             setShowModal(false)
//           }
//         />
//       )}
//     </>
//   )
// }

// export default CampaignDetails

import {
  useEffect,
  useState,
} from 'react'

import {
  useParams,
} from 'react-router-dom'

import api from '../services/api'

import Navbar from '../components/navbar/Navbar'

import PaymentModal from '../components/payment/PaymentModal'
import CommentSection from '../components/comment/CommentSection'

import socket from '../socket/socket'

function CampaignDetails() {
  const { id } = useParams()

  const [campaign, setCampaign] =
    useState(null)

  const [showModal, setShowModal] =
    useState(false)

  useEffect(() => {
    fetchCampaign()

    socket.on(
      'donationUpdated',
      (data) => {
        if (
          data.campaignId === id
        ) {
          setCampaign((prev) => ({
            ...prev,
            raisedAmount:
              data.raisedAmount,
          }))
        }
      }
    )

    return () => {
      socket.off('donationUpdated')
    }
  }, [])

  const fetchCampaign = async () => {
    try {
      const { data } = await api.get(
        `/campaign/${id}`
      )

      setCampaign(data)
    } catch (error) {
      console.log(error)
    }
  }

  if (!campaign) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          .loader-wrap {
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #faf9f7;
            gap: 20px;
          }
          .loader-ring {
            width: 56px; height: 56px;
            border: 3px solid #e5e1d8;
            border-top-color: #2d6a4f;
            border-radius: 50%;
            animation: spin 0.9s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
          .loader-text {
            font-size: 1rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #999;
            font-weight: 400;
          }
        `}</style>
        <div className="loader-wrap">
          <div className="loader-ring"></div>
          <p className="loader-text">Loading Campaign</p>
        </div>
      </>
    )
  }

  const percentage =
    (campaign.raisedAmount /
      campaign.targetAmount) *
    100

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        :root {
          --cream: #faf9f7;
          --warm-white: #f5f3ef;
          --forest: #2d6a4f;
          --forest-dark: #1b4332;
          --forest-light: #40916c;
          --gold: #b7843f;
          --gold-light: #e9c46a;
          --ink: #1a1a1a;
          --muted: #6b6560;
          --border: #e8e3da;
          --sky: #1d3557;
          --sky-hover: #14213d;
        }

        .cd-page {
          font-family: 'Inter', sans-serif;
          background: var(--cream);
          min-height: 100vh;
          color: var(--ink);
        }

        /* ── Hero ── */
        .cd-hero {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
        }
        .cd-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .cd-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.05) 0%,
            rgba(0,0,0,0.55) 100%
          );
        }
        .cd-hero-badge {
          position: absolute;
          top: 32px;
          left: 40px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 7px 16px;
          border-radius: 40px;
        }
        .cd-hero-title {
          position: absolute;
          bottom: 44px;
          left: 40px;
          right: 40px;
          font-family: 'Inter', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        /* ── Layout ── */
        .cd-body {
          max-width: 1160px;
          margin: 0 auto;
          padding: 64px 24px 100px;
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .cd-body { grid-template-columns: 1fr; }
          .cd-hero { height: 380px; }
        }

        /* ── Story ── */
        .cd-section-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--forest);
          margin-bottom: 16px;
        }
        .cd-story {
          font-family: 'Inter', sans-serif;
          font-size: 1.45rem;
          line-height: 1.75;
          color: #3d3730;
          font-weight: 400;
        }

        /* ── Divider ── */
        .cd-divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 44px 0;
        }

        /* ── Trust card ── */
        .cd-trust {
          background: var(--warm-white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px;
        }
        .cd-trust-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--sky);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cd-trust-icon {
          width: 28px; height: 28px;
          background: var(--sky);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }
        .cd-trust-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }
        .cd-trust-row:last-child { border-bottom: none; }
        .cd-trust-dot {
          width: 8px; height: 8px;
          background: var(--forest);
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }
        .cd-trust-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 2px;
        }
        .cd-trust-value {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--ink);
        }

        /* ── Sticky sidebar card ── */
        .cd-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.07);
          position: sticky;
          top: 32px;
        }

        /* ── Progress ── */
        .cd-progress-nums {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 12px;
        }
        .cd-raised {
          font-family: 'Inter', sans-serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--forest-dark);
          line-height: 1;
        }
        .cd-raised span {
          font-size: 1rem;
          font-weight: 400;
          color: var(--muted);
          font-family: 'Inter', sans-serif;
        }
        .cd-goal {
          font-size: 0.82rem;
          color: var(--muted);
          text-align: right;
          font-weight: 400;
        }
        .cd-goal strong {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          color: var(--ink);
          font-weight: 600;
        }
        .cd-bar-bg {
          width: 100%;
          height: 8px;
          background: #ede9e0;
          border-radius: 99px;
          overflow: hidden;
        }
        .cd-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--forest-light), var(--forest-dark));
          border-radius: 99px;
          transition: width 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .cd-pct-label {
          font-size: 0.8rem;
          color: var(--forest);
          font-weight: 600;
          margin-top: 8px;
          text-align: right;
        }

        /* ── Buttons ── */
        .cd-btn-donate {
          display: block;
          width: 100%;
          margin-top: 28px;
          padding: 18px;
          background: linear-gradient(135deg, var(--forest-light), var(--forest-dark));
          color: #fff;
          border: none;
          border-radius: 14px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          box-shadow: 0 4px 20px rgba(45,106,79,0.35);
        }
        .cd-btn-donate:hover { opacity: 0.9; transform: translateY(-1px); }
        .cd-btn-donate:active { transform: translateY(0); }

        .cd-btn-share {
          display: block;
          width: 100%;
          margin-top: 12px;
          padding: 16px;
          background: transparent;
          color: var(--sky);
          border: 1.5px solid var(--sky);
          border-radius: 14px;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .cd-btn-share:hover {
          background: var(--sky);
          color: #fff;
        }

        /* ── Comments wrapper ── */
        .cd-comments { margin-top: 56px; }
      `}</style>

      <div className="cd-page">
        <Navbar />

        {/* Hero */}
        <div className="cd-hero">
          <img
            src={`http://localhost:5000/${campaign.image}`}
            alt="campaign"
            className="cd-hero-img"
          />
          <div className="cd-hero-overlay" />
          <span className="cd-hero-badge">🌿 Active Campaign</span>
          <h1 className="cd-hero-title">{campaign.title}</h1>
        </div>

        {/* Body grid */}
        <div className="cd-body">

          {/* Left col */}
          <div>
            {/* Story */}
            <p className="cd-section-label">Our Story</p>
            <p className="cd-story">{campaign.story}</p>

            <hr className="cd-divider" />

            {/* Trust */}
            <div className="cd-trust">
              <div className="cd-trust-title">
                <div className="cd-trust-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                Trust &amp; Verification
              </div>

              <div className="cd-trust-row">
                <div className="cd-trust-dot" />
                <div>
                  <div className="cd-trust-label">Verified NGO</div>
                  <div className="cd-trust-value">{campaign.ngo?.name}</div>
                </div>
              </div>

              <div className="cd-trust-row">
                <div className="cd-trust-dot" />
                <div>
                  <div className="cd-trust-label">Campaign Owner</div>
                  <div className="cd-trust-value">{campaign.creator?.name}</div>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="cd-comments">
              <CommentSection campaignId={campaign._id} />
            </div>
          </div>

          {/* Right sticky card */}
          <div className="cd-card">
            {/* Numbers */}
            <div className="cd-progress-nums">
              <div>
                <div className="cd-raised">
                  ₹{campaign.raisedAmount.toLocaleString('en-IN')}
                  <span> raised</span>
                </div>
              </div>
              <div className="cd-goal">
                Goal<br />
                <strong>₹{campaign.targetAmount.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            {/* Bar */}
            <div className="cd-bar-bg">
              <div
                className="cd-bar-fill"
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>
            <div className="cd-pct-label">{Math.round(percentage)}% funded</div>

            {/* Buttons – logic unchanged */}
            <button
              onClick={() => setShowModal(true)}
              className="cd-btn-donate"
            >
              ❤️ &nbsp;Donate Now
            </button>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                alert('Campaign link copied ❤️')
              }}
              className="cd-btn-share"
            >
              Share Campaign
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <PaymentModal
          campaignId={campaign._id}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default CampaignDetails