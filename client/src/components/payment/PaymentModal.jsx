// import { useState } from 'react'

// import api from '../../services/api'

// import { useAuth } from '../../context/AuthContext'

// function PaymentModal({
//   campaignId,
//   closeModal,
// }) {
//   const { user } = useAuth()

//   const [amount, setAmount] =
//     useState('')

//   const [loading, setLoading] =
//     useState(false)

//   const handlePayment = async () => {
//     setLoading(true)

//     setTimeout(async () => {
//       try {
//         await api.post(
//           `/donation/${campaignId}`,
//           { amount },
//           {
//             headers: {
//               Authorization: `Bearer ${user.token}`,
//             },
//           }
//         )

//         alert(
//           'Payment Successful ❤️'
//         )

//         closeModal()
//       } catch (error) {
//         alert(
//           error.response.data.message
//         )
//       }

//       setLoading(false)
//     }, 2500)
//   }

//   return (
//     <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
//       <div className='bg-white p-10 rounded-3xl w-full max-w-md'>
//         <h2 className='text-4xl font-bold text-center text-blue-700 mb-8'>
//           Donate Now ❤️
//         </h2>

//         <input
//           type='number'
//           placeholder='Enter Amount'
//           value={amount}
//           onChange={(e) =>
//             setAmount(e.target.value)
//           }
//           className='w-full border p-4 rounded-xl mb-6'
//         />

//         <div className='space-y-4'>
//           <button
//             onClick={handlePayment}
//             className='w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-xl'
//           >
//             {loading
//               ? 'Processing Payment...'
//               : 'Pay Now'}
//           </button>

//           <button
//             onClick={closeModal}
//             className='w-full bg-gray-300 py-4 rounded-xl'
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PaymentModal

import { useState } from 'react'
import api from '../../services/api'
import { useAuth } from '../../context/AuthContext'

function PaymentModal({ campaignId, closeModal }) {
  const { user } = useAuth()
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    setLoading(true)
    setTimeout(async () => {
      try {
        await api.post(
          `/donation/${campaignId}`,
          { amount },
          { headers: { Authorization: `Bearer ${user.token}` } }
        )
        alert('Payment Successful ❤️')
        closeModal()
      } catch (error) {
        alert(error.response.data.message)
      }
      setLoading(false)
    }, 2500)
  }

  const quickAmounts = [100, 500, 1000, 5000]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .pm-overlay {
          font-family: 'Sora', sans-serif;
          position: fixed;
          inset: 0;
          background: rgba(10, 15, 30, 0.6);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 24px;
          animation: pm-fade-in 0.2s ease;
        }
        @keyframes pm-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Modal card ── */
        .pm-card {
          width: 100%;
          max-width: 420px;
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 4px 8px rgba(0,0,0,0.06),
            0 24px 64px rgba(0,0,0,0.22);
          animation: pm-slide-up 0.28s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes pm-slide-up {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* gradient band */
        .pm-band {
          height: 5px;
          background: linear-gradient(90deg, #22c55e, #15803d);
        }

        /* header */
        .pm-header {
          padding: 32px 36px 24px;
          text-align: center;
          border-bottom: 1px solid #f1f5f9;
          background: linear-gradient(160deg, #f0fdf4 0%, #fff 100%);
          position: relative;
        }
        .pm-close {
          position: absolute;
          top: 18px; right: 18px;
          width: 32px; height: 32px;
          border: none;
          border-radius: 8px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s, color 0.15s;
        }
        .pm-close:hover { background: #fee2e2; color: #dc2626; }

        .pm-icon-wrap {
          width: 60px; height: 60px;
          margin: 0 auto 16px;
          border-radius: 18px;
          background: linear-gradient(135deg, #22c55e, #15803d);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 20px rgba(22,163,74,0.32);
        }
        .pm-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 4px;
        }
        .pm-subtitle {
          font-size: 0.82rem;
          color: #64748b;
          font-weight: 400;
        }

        /* body */
        .pm-body {
          padding: 28px 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* quick amounts */
        .pm-quick-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 10px;
        }
        .pm-quick-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        .pm-quick-btn {
          padding: 9px 4px;
          border: 1.5px solid #e4e4e7;
          border-radius: 10px;
          background: #fafafa;
          font-family: 'Sora', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: #3f3f46;
          cursor: pointer;
          transition: all 0.15s;
          text-align: center;
        }
        .pm-quick-btn:hover {
          border-color: #16a34a;
          background: #f0fdf4;
          color: #15803d;
          transform: translateY(-1px);
        }
        .pm-quick-btn.active {
          border-color: #16a34a;
          background: #f0fdf4;
          color: #15803d;
          box-shadow: 0 0 0 3px rgba(22,163,74,0.12);
        }

        /* divider */
        .pm-divider {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pm-divider-line { flex: 1; height: 1px; background: #f1f5f9; }
        .pm-divider-text { font-size: 0.72rem; color: #a1a1aa; font-weight: 600; letter-spacing: 0.08em; }

        /* amount input */
        .pm-input-wrap {
          position: relative;
        }
        .pm-input-prefix {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.1rem;
          font-weight: 700;
          color: #16a34a;
          pointer-events: none;
        }
        .pm-input {
          width: 100%;
          box-sizing: border-box;
          padding: 15px 16px 15px 34px;
          background: #fafafa;
          border: 1.5px solid #e4e4e7;
          border-radius: 14px;
          font-family: 'Sora', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        }
        .pm-input::placeholder { color: #a1a1aa; font-weight: 400; font-size: 0.9rem; }
        .pm-input:focus {
          border-color: #16a34a;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(22,163,74,0.10);
        }

        /* pay button */
        .pm-pay-btn {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(135deg, #22c55e, #15803d);
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(22,163,74,0.32);
          transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .pm-pay-btn:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(22,163,74,0.38);
        }
        .pm-pay-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        /* spinner */
        .pm-spinner {
          width: 17px; height: 17px;
          border: 2.5px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: pm-spin 0.75s linear infinite;
          flex-shrink: 0;
        }
        @keyframes pm-spin { to { transform: rotate(360deg); } }

        /* cancel button */
        .pm-cancel-btn {
          width: 100%;
          padding: 14px;
          border: 1.5px solid #e4e4e7;
          border-radius: 14px;
          background: transparent;
          font-family: 'Sora', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #71717a;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }
        .pm-cancel-btn:hover {
          background: #f4f4f5;
          border-color: #d4d4d8;
          color: #3f3f46;
        }

        /* secure note */
        .pm-secure {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.72rem;
          color: #a1a1aa;
          font-weight: 500;
        }
      `}</style>

      <div className="pm-overlay">
        <div className="pm-card">

          {/* Green band */}
          <div className="pm-band" />

          {/* Header */}
          <div className="pm-header">
            <button className="pm-close" onClick={closeModal} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="pm-icon-wrap">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h2 className="pm-title">Donate Now ❤️</h2>
            <p className="pm-subtitle">Your contribution makes a real difference</p>
          </div>

          {/* Body */}
          <div className="pm-body">

            {/* Quick amounts */}
            <div>
              <div className="pm-quick-label">Quick Select</div>
              <div className="pm-quick-grid">
                {quickAmounts.map((q) => (
                  <button
                    key={q}
                    className={`pm-quick-btn ${Number(amount) === q ? 'active' : ''}`}
                    onClick={() => setAmount(String(q))}
                  >
                    ₹{q.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="pm-divider">
              <div className="pm-divider-line" />
              <span className="pm-divider-text">or enter custom</span>
              <div className="pm-divider-line" />
            </div>

            {/* Amount input */}
            <div className="pm-input-wrap">
              <span className="pm-input-prefix">₹</span>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pm-input"
              />
            </div>

            {/* Pay button */}
            <button
              onClick={handlePayment}
              disabled={loading}
              className="pm-pay-btn"
            >
              {loading && <span className="pm-spinner" />}
              {loading ? 'Processing Payment…' : 'Pay Now'}
            </button>

            {/* Cancel */}
            <button onClick={closeModal} className="pm-cancel-btn">
              Cancel
            </button>

            {/* Secure note */}
            <div className="pm-secure">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              100% secure & encrypted payment
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentModal