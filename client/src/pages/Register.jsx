// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import api from '../services/api'

// function Register() {
//   const navigate = useNavigate()

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address: '',
//     pincode: '',
//   })

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       await api.post('/auth/register', formData)

//       navigate('/login')
//     } catch (error) {
//       alert(error.response.data.message)
//     }
//   }

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gray-100'>
//       <form
//         onSubmit={handleSubmit}
//         className='bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg'
//       >
//         <h2 className='text-4xl font-bold text-center text-blue-700 mb-8'>
//           Register
//         </h2>

//         <input
//           type='text'
//           name='name'
//           placeholder='Full Name'
//           onChange={handleChange}
//           className='w-full border p-4 rounded-xl mb-4'
//         />

//         <input
//           type='email'
//           name='email'
//           placeholder='Email'
//           onChange={handleChange}
//           className='w-full border p-4 rounded-xl mb-4'
//         />

//         <input
//           type='password'
//           name='password'
//           placeholder='Password'
//           onChange={handleChange}
//           className='w-full border p-4 rounded-xl mb-4'
//         />

//         <input
//           type='text'
//           name='phone'
//           placeholder='Phone'
//           onChange={handleChange}
//           className='w-full border p-4 rounded-xl mb-4'
//         />

//         <input
//           type='text'
//           name='address'
//           placeholder='Address'
//           onChange={handleChange}
//           className='w-full border p-4 rounded-xl mb-4'
//         />

//         <input
//           type='text'
//           name='pincode'
//           placeholder='Pincode'
//           onChange={handleChange}
//           className='w-full border p-4 rounded-xl mb-6'
//         />

//         <button className='w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-all'>
//           Register
//         </button>

//         <p className='mt-5 text-center'>
//           Already have account?{' '}
//           <Link
//             to='/login'
//             className='text-blue-700 font-semibold'
//           >
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   )
// }

// export default Register

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'

function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    pincode: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await api.post('/auth/register', formData)
      navigate('/login')
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .reg-root {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          background: #f0f4ff;
          position: relative;
          overflow: hidden;
        }

        .reg-root::before,
        .reg-root::after {
          content: '';
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          z-index: 0;
          pointer-events: none;
        }
        .reg-root::before {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #c7d7fd 0%, transparent 70%);
          top: -140px; right: -100px;
        }
        .reg-root::after {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #d1fae5 0%, transparent 70%);
          bottom: -100px; left: -80px;
        }

        .reg-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 480px;
          background: #fff;
          border-radius: 28px;
          padding: 48px 44px 44px;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.04),
            0 8px 24px rgba(59,97,255,0.08),
            0 32px 64px rgba(59,97,255,0.10);
          border: 1px solid rgba(255,255,255,0.9);
        }

        .reg-icon {
          width: 52px; height: 52px;
          background: linear-gradient(135deg, #16a34a, #15803d);
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 22px;
          box-shadow: 0 6px 20px rgba(22,163,74,0.32);
        }

        .reg-heading {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f172a;
          text-align: center;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 6px;
        }
        .reg-sub {
          font-size: 0.875rem;
          color: #64748b;
          text-align: center;
          font-weight: 400;
          margin-bottom: 32px;
        }

        /* two-column grid for some fields */
        .reg-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .reg-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 14px;
        }
        .reg-field-full {
          grid-column: 1 / -1;
        }
        .reg-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #475569;
        }
        .reg-input {
          padding: 13px 15px;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.925rem;
          font-weight: 400;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
          width: 100%;
          box-sizing: border-box;
        }
        .reg-input::placeholder { color: #94a3b8; }
        .reg-input:focus {
          border-color: #16a34a;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(22,163,74,0.10);
        }

        .reg-btn {
          width: 100%;
          margin-top: 24px;
          padding: 15px;
          background: linear-gradient(135deg, #22c55e 0%, #15803d 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
          box-shadow: 0 4px 16px rgba(22,163,74,0.32);
        }
        .reg-btn:hover {
          opacity: 0.91;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(22,163,74,0.38);
        }
        .reg-btn:active { transform: translateY(0); }

        .reg-divider {
          display: flex; align-items: center; gap: 12px;
          margin: 24px 0 0;
        }
        .reg-divider-line { flex: 1; height: 1px; background: #e2e8f0; }
        .reg-divider-text { font-size: 0.78rem; color: #94a3b8; font-weight: 500; }

        .reg-footer {
          margin-top: 18px;
          text-align: center;
          font-size: 0.875rem;
          color: #64748b;
        }
        .reg-footer a {
          color: #3b61ff;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.15s;
        }
        .reg-footer a:hover { color: #1d3fc9; }

        @media (max-width: 480px) {
          .reg-card { padding: 36px 24px 32px; }
          .reg-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="reg-root">
        <div className="reg-card">

          {/* Icon */}
          <div className="reg-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/>
              <line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
          </div>

          <h2 className="reg-heading">Create Account</h2>
          <p className="reg-sub">Fill in your details to get started</p>

          <form onSubmit={handleSubmit}>
            <div className="reg-grid">

              {/* Full Name */}
              <div className="reg-field reg-field-full">
                <label className="reg-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="reg-input"
                />
              </div>

              {/* Email */}
              <div className="reg-field reg-field-full">
                <label className="reg-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  onChange={handleChange}
                  className="reg-input"
                />
              </div>

              {/* Password */}
              <div className="reg-field reg-field-full">
                <label className="reg-label">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a strong password"
                  onChange={handleChange}
                  className="reg-input"
                />
              </div>

              {/* Phone */}
              <div className="reg-field">
                <label className="reg-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 00000 00000"
                  onChange={handleChange}
                  className="reg-input"
                />
              </div>

              {/* Pincode */}
              <div className="reg-field">
                <label className="reg-label">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="000000"
                  onChange={handleChange}
                  className="reg-input"
                />
              </div>

              {/* Address */}
              <div className="reg-field reg-field-full">
                <label className="reg-label">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Street, City, State"
                  onChange={handleChange}
                  className="reg-input"
                />
              </div>

            </div>

            <button className="reg-btn">Create Account</button>
          </form>

          <div className="reg-divider">
            <div className="reg-divider-line" />
            <span className="reg-divider-text">Already registered?</span>
            <div className="reg-divider-line" />
          </div>

          <p className="reg-footer">
            Already have an account?{' '}
            <Link to="/login">Sign in</Link>
          </p>

        </div>
      </div>
    </>
  )
}

export default Register