// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import api from '../services/api'
// import { useAuth } from '../context/AuthContext'

// function Login() {
//   const navigate = useNavigate()

//   const { setUser } = useAuth()

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
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
//       const { data } = await api.post(
//         '/auth/login',
//         formData
//       )

//       localStorage.setItem(
//         'user',
//         JSON.stringify(data)
//       )

//       setUser(data)

//       navigate('/')
//     } catch (error) {
//       alert(error.response.data.message)
//     }
//   }

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gray-100'>
//       <form
//         onSubmit={handleSubmit}
//         className='bg-white p-10 rounded-2xl shadow-xl w-full max-w-md'
//       >
//         <h2 className='text-4xl font-bold text-center text-blue-700 mb-8'>
//           Login
//         </h2>

//         <input
//           type='email'
//           name='email'
//           placeholder='Email'
//           onChange={handleChange}
//           className='w-full border p-4 rounded-xl mb-5'
//         />

//         <input
//           type='password'
//           name='password'
//           placeholder='Password'
//           onChange={handleChange}
//           className='w-full border p-4 rounded-xl mb-5'
//         />

//         <button className='w-full bg-blue-700 text-white py-4 rounded-xl hover:bg-blue-800 transition-all'>
//           Login
//         </button>

//         <p className='mt-5 text-center'>
//           New user?{' '}
//           <Link
//             to='/register'
//             className='text-blue-700 font-semibold'
//           >
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   )
// }

// export default Login

//new 
// import { useState } from 'react'

// import {
//   useNavigate,
//   Link,
// } from 'react-router-dom'

// import toast from 'react-hot-toast'

// import { useAuth } from '../context/AuthContext'

// function Login() {
//   const navigate =
//     useNavigate()

//   const { login } =
//     useAuth()

//   const [formData, setFormData] =
//     useState({
//       email: '',
//       password: '',
//     })

//   const [loading, setLoading] =
//     useState(false)

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]:
//         e.target.value,
//     })
//   }

//   const handleSubmit =
//     async (e) => {
//       e.preventDefault()

//       setLoading(true)

//       const result =
//         await login(
//           formData.email,
//           formData.password
//         )

//       setLoading(false)

//       if (result.success) {
//         toast.success(
//           'Login successful ❤️'
//         )

//         navigate('/')
//       } else {
//         toast.error(
//           result.message
//         )
//       }
//     }

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-950 px-6'>
//       <form
//         onSubmit={handleSubmit}
//         className='bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-2xl w-full max-w-md'
//       >
//         <h2 className='text-5xl font-bold text-center text-blue-700 mb-10'>
//           Welcome Back
//         </h2>

//         <input
//           type='email'
//           name='email'
//           placeholder='Enter email'
//           onChange={handleChange}
//           className='w-full border p-4 rounded-2xl mb-5 dark:bg-slate-800 dark:text-white'
//           required
//         />

//         <input
//           type='password'
//           name='password'
//           placeholder='Enter password'
//           onChange={handleChange}
//           className='w-full border p-4 rounded-2xl mb-6 dark:bg-slate-800 dark:text-white'
//           required
//         />

//         <button
//           disabled={loading}
//           className='w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl transition-all duration-300 text-lg font-semibold'
//         >
//           {loading
//             ? 'Please wait...'
//             : 'Login'}
//         </button>

//         <p className='mt-6 text-center dark:text-gray-300'>
//           New user?{' '}
//           <Link
//             to='/register'
//             className='text-blue-700 font-semibold'
//           >
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   )
// }

// export default Login

//new cluade

import { useState } from 'react'

import {
  useNavigate,
  Link,
} from 'react-router-dom'

import toast from 'react-hot-toast'

import { useAuth } from '../context/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const result = await login(formData.email, formData.password)
    setLoading(false)

    if (result.success) {
      toast.success('Login successful ❤️')
      navigate('/')
    } else {
      toast.error(result.message)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .login-root {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: #f0f4ff;
          position: relative;
          overflow: hidden;
        }

        /* soft background blobs */
        .login-root::before,
        .login-root::after {
          content: '';
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          pointer-events: none;
        }
        .login-root::before {
          width: 520px; height: 520px;
          background: radial-gradient(circle, #c7d7fd 0%, transparent 70%);
          top: -120px; left: -120px;
        }
        .login-root::after {
          width: 420px; height: 420px;
          background: radial-gradient(circle, #dbeafe 0%, transparent 70%);
          bottom: -100px; right: -100px;
        }

        .login-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 440px;
          background: #ffffff;
          border-radius: 28px;
          padding: 52px 44px 44px;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.04),
            0 8px 24px rgba(59,97,255,0.08),
            0 32px 64px rgba(59,97,255,0.10);
          border: 1px solid rgba(255,255,255,0.9);
        }

        /* icon mark */
        .login-icon {
          width: 52px; height: 52px;
          background: linear-gradient(135deg, #3b61ff, #1d3fc9);
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 24px;
          box-shadow: 0 6px 20px rgba(59,97,255,0.35);
        }

        .login-heading {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f172a;
          text-align: center;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 6px;
        }
        .login-sub {
          font-size: 0.875rem;
          color: #64748b;
          text-align: center;
          font-weight: 400;
          margin-bottom: 36px;
        }

        /* field group */
        .login-field {
          margin-bottom: 16px;
        }
        .login-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 8px;
        }
        .login-input {
          width: 100%;
          padding: 14px 16px;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
          box-sizing: border-box;
        }
        .login-input::placeholder { color: #94a3b8; }
        .login-input:focus {
          border-color: #3b61ff;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(59,97,255,0.10);
        }

        /* submit button */
        .login-btn {
          width: 100%;
          margin-top: 28px;
          padding: 15px;
          background: linear-gradient(135deg, #3b61ff 0%, #1d3fc9 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
          box-shadow: 0 4px 16px rgba(59,97,255,0.35);
        }
        .login-btn:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(59,97,255,0.4);
        }
        .login-btn:active:not(:disabled) { transform: translateY(0); }
        .login-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        /* loading spinner inside button */
        .login-btn-inner {
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .btn-spinner {
          width: 17px; height: 17px;
          border: 2.5px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: btn-spin 0.75s linear infinite;
        }
        @keyframes btn-spin { to { transform: rotate(360deg); } }

        /* divider */
        .login-divider {
          display: flex; align-items: center; gap: 12px;
          margin: 28px 0 0;
        }
        .login-divider-line {
          flex: 1; height: 1px; background: #e2e8f0;
        }
        .login-divider-text {
          font-size: 0.78rem; color: #94a3b8; font-weight: 500;
        }

        /* footer link */
        .login-footer {
          margin-top: 20px;
          text-align: center;
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 400;
        }
        .login-footer a {
          color: #3b61ff;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.15s;
        }
        .login-footer a:hover { color: #1d3fc9; }
      `}</style>

      <div className="login-root">
        <div className="login-card">

          {/* Brand icon */}
          <div className="login-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>

          <h2 className="login-heading">Welcome Back</h2>
          <p className="login-sub">Sign in to your account to continue</p>

          <form onSubmit={handleSubmit}>

            <div className="login-field">
              <label className="login-label">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>

            <div className="login-field">
              <label className="login-label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>

            <button
              disabled={loading}
              className="login-btn"
            >
              <span className="login-btn-inner">
                {loading && <span className="btn-spinner" />}
                {loading ? 'Please wait...' : 'Sign In'}
              </span>
            </button>

          </form>

          <div className="login-divider">
            <div className="login-divider-line" />
            <span className="login-divider-text">New here?</span>
            <div className="login-divider-line" />
          </div>

          <p className="login-footer">
            Don't have an account?{' '}
            <Link to="/register">Create one</Link>
          </p>

        </div>
      </div>
    </>
  )
}

export default Login