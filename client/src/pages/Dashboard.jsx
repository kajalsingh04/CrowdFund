// import {
//   useEffect,
//   useState,
// } from 'react'

// import Navbar from '../components/navbar/Navbar'

// import api from '../services/api'

// import { useAuth } from '../context/AuthContext'

// import toast from 'react-hot-toast'

// function Dashboard() {
//   const { user } = useAuth()

//   const [campaigns, setCampaigns] =
//     useState([])

//   const [showModal, setShowModal] =
//     useState(false)

//   const [selectedCampaign,
//     setSelectedCampaign] =
//     useState(null)

//   const [formData, setFormData] =
//     useState({
//       title: '',
//       story: '',
//       category: '',
//       targetAmount: '',
//       image: null,
//       validIdProof: null,
//     })

//   useEffect(() => {
//     fetchCampaigns()
//   }, [])

//   const fetchCampaigns = async () => {
//     try {
//       const { data } = await api.get(
//         '/campaign/my-campaigns',
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       )

//       setCampaigns(data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   // DELETE
//   const deleteCampaign = async (
//     id
//   ) => {
//     try {
//       await api.delete(
//         `/campaign/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       )

//       toast.success(
//         'Campaign deleted'
//       )

//       fetchCampaigns()
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   // OPEN EDIT MODAL
//   const openEditModal = (
//     campaign
//   ) => {
//     setSelectedCampaign(campaign)

//     setFormData({
//       title: campaign.title,
//       story: campaign.story,
//       category:
//         campaign.category,
//       targetAmount:
//         campaign.targetAmount,
//       image: null,
//       validIdProof: null,
//     })

//     setShowModal(true)
//   }

//   // INPUT CHANGE
//   const handleChange = (e) => {
//     const {
//       name,
//       value,
//       files,
//     } = e.target

//     if (files) {
//       setFormData({
//         ...formData,
//         [name]: files[0],
//       })
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       })
//     }
//   }

//   // UPDATE
//   const updateCampaign =
//     async (e) => {
//       e.preventDefault()

//       try {
//         const data =
//           new FormData()

//         Object.keys(
//           formData
//         ).forEach((key) => {
//           if (formData[key]) {
//             data.append(
//               key,
//               formData[key]
//             )
//           }
//         })

//         await api.put(
//           `/campaign/${selectedCampaign._id}`,
//           data,
//           {
//             headers: {
//               Authorization: `Bearer ${user.token}`,
//               'Content-Type':
//                 'multipart/form-data',
//             },
//           }
//         )

//         toast.success(
//           'Campaign updated ❤️'
//         )

//         setShowModal(false)

//         fetchCampaigns()
//       } catch (error) {
//         console.log(error)

//         toast.error(
//           error.response?.data
//             ?.message ||
//             'Update failed'
//         )
//       }
//     }

//   return (
//     <>
//       <Navbar />

//       <div className='min-h-screen bg-gray-100 dark:bg-slate-950 py-20 px-6'>
//         <div className='max-w-7xl mx-auto'>

//           <h1 className='text-5xl font-bold mb-10 dark:text-white'>
//             My Campaigns
//           </h1>

//           <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
//             {campaigns.map(
//               (campaign) => (
//                 <div
//                   key={campaign._id}
//                   className='bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl'
//                 >

//                   <img
//                     src={`http://localhost:5000/${campaign.image}`}
//                     alt='campaign'
//                     className='w-full h-60 object-cover rounded-2xl'
//                   />

//                   <h2 className='text-3xl font-bold mt-6 dark:text-white'>
//                     {campaign.title}
//                   </h2>

//                   <p className='mt-4 text-gray-600 dark:text-gray-300'>
//                     ₹
//                     {
//                       campaign.raisedAmount
//                     }
//                     /
//                     ₹
//                     {
//                       campaign.targetAmount
//                     }
//                   </p>

//                   <div className='flex gap-4 mt-6'>

//                     {/* UPDATE */}
//                     <button
//                       onClick={() =>
//                         openEditModal(
//                           campaign
//                         )
//                       }
//                       className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl'
//                     >
//                       Update
//                     </button>

//                     {/* DELETE */}
//                     <button
//                       onClick={() =>
//                         deleteCampaign(
//                           campaign._id
//                         )
//                       }
//                       className='flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl'
//                     >
//                       Delete
//                     </button>

//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       {/* EDIT MODAL */}
//       {showModal && (
//         <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-6'>

//           <div className='bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl p-8'>

//             <h2 className='text-4xl font-bold mb-8 dark:text-white'>
//               Update Campaign
//             </h2>

//             <form
//               onSubmit={
//                 updateCampaign
//               }
//               className='space-y-5'
//             >

//               <input
//                 type='text'
//                 name='title'
//                 value={
//                   formData.title
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder='Title'
//                 className='w-full border p-4 rounded-2xl'
//               />

//               <textarea
//                 name='story'
//                 value={
//                   formData.story
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder='Story'
//                 rows='4'
//                 className='w-full border p-4 rounded-2xl'
//               ></textarea>

//               <input
//                 type='text'
//                 name='category'
//                 value={
//                   formData.category
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder='Category'
//                 className='w-full border p-4 rounded-2xl'
//               />

//               <input
//                 type='number'
//                 name='targetAmount'
//                 value={
//                   formData.targetAmount
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 placeholder='Target Amount'
//                 className='w-full border p-4 rounded-2xl'
//               />

//               <div>
//                 <label className='font-semibold'>
//                   Update Image
//                 </label>

//                 <input
//                   type='file'
//                   name='image'
//                   onChange={
//                     handleChange
//                   }
//                   className='mt-2'
//                 />
//               </div>

//               <div>
//                 <label className='font-semibold'>
//                   Update ID Proof
//                 </label>

//                 <input
//                   type='file'
//                   name='validIdProof'
//                   onChange={
//                     handleChange
//                   }
//                   className='mt-2'
//                 />
//               </div>

//               <div className='flex gap-4 pt-4'>

//                 <button
//                   type='submit'
//                   className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl'
//                 >
//                   Save Changes
//                 </button>

//                 <button
//                   type='button'
//                   onClick={() =>
//                     setShowModal(
//                       false
//                     )
//                   }
//                   className='flex-1 bg-gray-300 py-4 rounded-2xl'
//                 >
//                   Cancel
//                 </button>

//               </div>

//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Dashboard

import { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import api from '../services/api'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

function Dashboard() {
  const { user } = useAuth()
  const [campaigns, setCampaigns] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [formData, setFormData] = useState({
    title: '', story: '', category: '', targetAmount: '', image: null, validIdProof: null,
  })

  useEffect(() => { fetchCampaigns() }, [])

  const fetchCampaigns = async () => {
    try {
      const { data } = await api.get('/campaign/my-campaigns', {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      setCampaigns(data)
    } catch (error) { console.log(error) }
  }

  const deleteCampaign = async (id) => {
    try {
      await api.delete(`/campaign/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      toast.success('Campaign deleted')
      fetchCampaigns()
    } catch (error) { console.log(error) }
  }

  const openEditModal = (campaign) => {
    setSelectedCampaign(campaign)
    setFormData({
      title: campaign.title, story: campaign.story,
      category: campaign.category, targetAmount: campaign.targetAmount,
      image: null, validIdProof: null,
    })
    setShowModal(true)
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      setFormData({ ...formData, [name]: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const updateCampaign = async (e) => {
    e.preventDefault()
    try {
      const data = new FormData()
      Object.keys(formData).forEach((key) => { if (formData[key]) data.append(key, formData[key]) })
      await api.put(`/campaign/${selectedCampaign._id}`, data, {
        headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'multipart/form-data' },
      })
      toast.success('Campaign updated ❤️')
      setShowModal(false)
      fetchCampaigns()
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Update failed')
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .db-page {
          font-family: 'Sora', sans-serif;
          min-height: 100vh;
          background: #f7f9ff;
          position: relative;
          overflow-x: hidden;
        }
        .db-page::before {
          content: '';
          position: fixed;
          top: -120px; right: -100px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,97,255,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .db-page::after {
          content: '';
          position: fixed;
          bottom: -100px; left: -80px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .db-wrap {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 56px 28px 100px;
        }

        /* ── Header ── */
        .db-header {
          margin-bottom: 40px;
        }
        .db-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .db-eyebrow-line {
          width: 32px; height: 1.5px;
          background: linear-gradient(90deg, transparent, #3b61ff);
        }
        .db-eyebrow-text {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #3b61ff;
        }
        .db-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #18181b;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }
        .db-title span {
          background: linear-gradient(135deg, #3b61ff, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .db-count {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
          background: #f1f5f9;
          border: 1.5px solid #e2e8f0;
          border-radius: 99px;
          padding: 5px 14px;
          margin-top: 14px;
        }

        /* ── Grid ── */
        .db-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        @media (max-width: 720px) { .db-grid { grid-template-columns: 1fr; } }

        /* ── Campaign card ── */
        .db-card {
          background: #fff;
          border: 1.5px solid #e4e4e7;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: box-shadow 0.22s, border-color 0.22s, transform 0.22s;
        }
        .db-card:hover {
          box-shadow: 0 10px 36px rgba(59,97,255,0.10);
          border-color: #c7d7f5;
          transform: translateY(-3px);
        }

        .db-card-img-wrap { position: relative; }
        .db-card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .db-card:hover .db-card-img { transform: scale(1.04); }
        .db-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.38) 100%);
          pointer-events: none;
        }

        /* status badge on image */
        .db-status-badge {
          position: absolute;
          top: 12px; right: 12px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 99px;
          backdrop-filter: blur(8px);
        }
        .db-status-badge.approved {
          background: rgba(240,253,244,0.92);
          color: #166534;
          border: 1px solid rgba(187,247,208,0.8);
        }
        .db-status-badge.pending {
          background: rgba(255,251,235,0.92);
          color: #92400e;
          border: 1px solid rgba(253,230,138,0.8);
        }

        .db-card-body { padding: 20px 22px 22px; }

        .db-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #18181b;
          letter-spacing: -0.025em;
          line-height: 1.3;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* progress */
        .db-progress-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 7px;
        }
        .db-raised {
          font-size: 1.05rem;
          font-weight: 800;
          color: #166534;
          letter-spacing: -0.03em;
        }
        .db-goal {
          font-size: 0.78rem;
          color: #a1a1aa;
          font-weight: 500;
        }
        .db-goal strong { color: #52525b; font-weight: 700; }
        .db-bar-bg {
          height: 5px;
          background: #f0fdf4;
          border: 1px solid #dcfce7;
          border-radius: 99px;
          overflow: hidden;
          margin-bottom: 16px;
        }
        .db-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #4ade80, #16a34a);
          border-radius: 99px;
        }

        /* action buttons */
        .db-actions {
          display: flex;
          gap: 10px;
        }
        .db-btn-edit {
          flex: 1;
          padding: 11px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #3b61ff, #1d3fc9);
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 7px;
          transition: opacity 0.18s, transform 0.18s;
          box-shadow: 0 3px 12px rgba(59,97,255,0.25);
        }
        .db-btn-edit:hover { opacity: 0.9; transform: translateY(-1px); }

        .db-btn-delete {
          flex: 1;
          padding: 11px;
          border: 1.5px solid #fecaca;
          border-radius: 12px;
          background: #fff5f5;
          color: #dc2626;
          font-family: 'Sora', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 7px;
          transition: background 0.18s, border-color 0.18s, transform 0.18s;
        }
        .db-btn-delete:hover { background: #fee2e2; border-color: #fca5a5; transform: translateY(-1px); }

        /* ── Empty state ── */
        .db-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 64px 24px;
          background: #fff;
          border: 1.5px dashed #e4e4e7;
          border-radius: 24px;
          color: #a1a1aa;
        }
        .db-empty-icon { font-size: 2.5rem; margin-bottom: 12px; }
        .db-empty-title { font-size: 1rem; font-weight: 700; color: #52525b; margin-bottom: 6px; }
        .db-empty-sub { font-size: 0.85rem; }

        /* ── Modal overlay ── */
        .db-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,15,30,0.62);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 24px;
          animation: db-fade 0.2s ease;
        }
        @keyframes db-fade { from { opacity: 0; } to { opacity: 1; } }

        .db-modal {
          width: 100%;
          max-width: 560px;
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.22);
          animation: db-slide 0.28s cubic-bezier(0.34,1.4,0.64,1);
          max-height: 90vh;
          overflow-y: auto;
        }
        @keyframes db-slide {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .db-modal-band {
          height: 5px;
          background: linear-gradient(90deg, #3b61ff, #06b6d4);
        }
        .db-modal-header {
          padding: 28px 32px 22px;
          border-bottom: 1px solid #f1f5f9;
          background: linear-gradient(160deg, #f0f4ff 0%, #fff 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .db-modal-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #18181b;
          letter-spacing: -0.03em;
        }
        .db-modal-close {
          width: 32px; height: 32px;
          border: none;
          border-radius: 8px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s, color 0.15s;
        }
        .db-modal-close:hover { background: #fee2e2; color: #dc2626; }

        .db-modal-body {
          padding: 28px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* form fields */
        .db-field { display: flex; flex-direction: column; gap: 7px; }
        .db-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #64748b;
        }
        .db-input, .db-textarea {
          font-family: 'Sora', sans-serif;
          font-size: 0.9rem;
          color: #18181b;
          background: #fafafa;
          border: 1.5px solid #e4e4e7;
          border-radius: 12px;
          padding: 12px 15px;
          outline: none;
          width: 100%;
          box-sizing: border-box;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        }
        .db-input::placeholder, .db-textarea::placeholder { color: #a1a1aa; }
        .db-input:focus, .db-textarea:focus {
          border-color: #3b61ff;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(59,97,255,0.08);
        }
        .db-textarea { resize: none; line-height: 1.6; }

        .db-file-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 7px;
          display: block;
        }
        .db-file-input {
          font-family: 'Sora', sans-serif;
          font-size: 0.8rem;
          color: #64748b;
          width: 100%;
          cursor: pointer;
        }
        .db-file-input::file-selector-button {
          font-family: 'Sora', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 6px 14px;
          border: 1.5px solid #e4e4e7;
          border-radius: 8px;
          background: #fff;
          color: #18181b;
          cursor: pointer;
          margin-right: 10px;
          transition: background 0.15s;
        }
        .db-file-input::file-selector-button:hover { background: #f1f5f9; }

        .db-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        /* modal buttons */
        .db-modal-actions { display: flex; gap: 12px; margin-top: 4px; }
        .db-modal-save {
          flex: 1;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #3b61ff, #1d3fc9);
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 3px 14px rgba(59,97,255,0.28);
          transition: opacity 0.18s, transform 0.18s;
        }
        .db-modal-save:hover { opacity: 0.9; transform: translateY(-1px); }
        .db-modal-cancel {
          flex: 1;
          padding: 14px;
          border: 1.5px solid #e4e4e7;
          border-radius: 12px;
          background: transparent;
          color: #71717a;
          font-family: 'Sora', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
        }
        .db-modal-cancel:hover { background: #f4f4f5; border-color: #d4d4d8; }
      `}</style>

      <Navbar />

      <div className="db-page">
        <div className="db-wrap">

          {/* Header */}
          <div className="db-header">
            <div className="db-eyebrow">
              <div className="db-eyebrow-line" />
              <span className="db-eyebrow-text">Dashboard</span>
            </div>
            <h1 className="db-title">My <span>Campaigns</span></h1>
            <div className="db-count">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
              </svg>
              {campaigns.length} campaign{campaigns.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Grid */}
          <div className="db-grid">
            {campaigns.length === 0 ? (
              <div className="db-empty">
                <div className="db-empty-icon">📋</div>
                <div className="db-empty-title">No campaigns yet</div>
                <div className="db-empty-sub">Your created campaigns will appear here.</div>
              </div>
            ) : (
              campaigns.map((campaign) => {
                const pct = Math.min((campaign.raisedAmount / campaign.targetAmount) * 100, 100)
                return (
                  <div key={campaign._id} className="db-card">

                    <div className="db-card-img-wrap">
                      <img
                        src={`http://localhost:5000/${campaign.image}`}
                        alt="campaign"
                        className="db-card-img"
                      />
                      <div className="db-card-img-overlay" />
                      <div className={`db-status-badge ${campaign.status === 'approved' ? 'approved' : 'pending'}`}>
                        {campaign.status === 'approved' ? '✓ Approved' : '⏳ Pending'}
                      </div>
                    </div>

                    <div className="db-card-body">
                      <h2 className="db-card-title">{campaign.title}</h2>

                      <div className="db-progress-row">
                        <span className="db-raised">₹{campaign.raisedAmount.toLocaleString('en-IN')}</span>
                        <span className="db-goal">Goal <strong>₹{campaign.targetAmount.toLocaleString('en-IN')}</strong></span>
                      </div>
                      <div className="db-bar-bg">
                        <div className="db-bar-fill" style={{ width: `${pct}%` }} />
                      </div>

                      <div className="db-actions">
                        <button onClick={() => openEditModal(campaign)} className="db-btn-edit">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                          Update
                        </button>
                        <button onClick={() => deleteCampaign(campaign._id)} className="db-btn-delete">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>

                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="db-modal-overlay">
          <div className="db-modal">
            <div className="db-modal-band" />

            <div className="db-modal-header">
              <div className="db-modal-title">Update Campaign</div>
              <button className="db-modal-close" onClick={() => setShowModal(false)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <form onSubmit={updateCampaign}>
              <div className="db-modal-body">

                <div className="db-field">
                  <label className="db-label">Title</label>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Campaign title" className="db-input" />
                </div>

                <div className="db-field">
                  <label className="db-label">Story</label>
                  <textarea name="story" value={formData.story} onChange={handleChange} placeholder="Campaign story" rows="4" className="db-textarea" />
                </div>

                <div className="db-2col">
                  <div className="db-field">
                    <label className="db-label">Category</label>
                    <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="e.g. Medical" className="db-input" />
                  </div>
                  <div className="db-field">
                    <label className="db-label">Target Amount (₹)</label>
                    <input type="number" name="targetAmount" value={formData.targetAmount} onChange={handleChange} placeholder="50000" className="db-input" />
                  </div>
                </div>

                <div className="db-2col">
                  <div>
                    <span className="db-file-label">Update Image</span>
                    <input type="file" name="image" onChange={handleChange} className="db-file-input" />
                  </div>
                  <div>
                    <span className="db-file-label">Update ID Proof</span>
                    <input type="file" name="validIdProof" onChange={handleChange} className="db-file-input" />
                  </div>
                </div>

                <div className="db-modal-actions">
                  <button type="submit" className="db-modal-save">Save Changes</button>
                  <button type="button" onClick={() => setShowModal(false)} className="db-modal-cancel">Cancel</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard