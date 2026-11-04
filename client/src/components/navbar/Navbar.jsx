// import { Link } from 'react-router-dom'

// import { useAuth } from '../../context/AuthContext'
// import { useTheme } from '../../context/ThemeContext'

// import { FaMoon, FaSun } from 'react-icons/fa'
// import { HiOutlineMenuAlt3 } from 'react-icons/hi'

// function Navbar() {
//   const { user, logout } = useAuth()

//   const { darkMode, toggleTheme } = useTheme()

//   return (
//     <nav className='sticky top-0 z-50 backdrop-blur-xl  bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 shadow-lg'>
//       <div className='max-w-7xl mx-auto px-10 lg:px-14 h-[95px] flex items-center'>
        
//         {/* Left Logo */}
//         <div className='w-[45%] flex items-center justify-start pl-6'>
//           <Link to='/'>
//             <h1 className='text-3xl lg:text-[38px] font-bold tracking-wide bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap'>
//               CrowdFund
//             </h1>
//           </Link>
//         </div>

//         {/* Center Nav */}
//         <div className='hidden md:flex w-[115%] items-center justify-center gap-10'>
//           <Link
//             to='/'
//             className='text-[16px] font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition duration-300 whitespace-nowrap'
//           >
//             Home
//           </Link>

//           <Link
//             to='/explore'
//             className='text-[16px] font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition duration-300 whitespace-nowrap'
//           >
//             Explore
//           </Link>

//           <Link
//             to='/create-campaign'
//             className='text-[16px] font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition duration-300 whitespace-nowrap'
//           >
//             Start Campaign
//           </Link>

//           <Link
//             to='/dashboard'
//             className='text-[16px] font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition duration-300 whitespace-nowrap'
//           >
//             Dashboard
//           </Link>
//         </div>

//         {/* Right Side */}
//         <div className='w-[2%] flex items-center  gap-5 pr-2'>
          
//           {/* Theme Toggle */}
//           <button
//             onClick={toggleTheme}
//             className='w-11 h-11 flex items-center justify-center rounded-full bg-purple-100 dark:bg-blue-800 text-lg text-slate-700 dark:text-yellow-300 hover:scale-110 transition-all duration-300 shadow-sm'
//           >
//             &nbsp;&nbsp;&nbsp;{darkMode ?  <FaSun /> : <FaMoon />}&nbsp;&nbsp;
//           </button>

//           {user ? (
//             <div className='hidden sm:flex items-center gap-4'>
              
//               {/* Profile */}
//               <Link
//                 to='/profile'
//                 className='px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 whitespace-nowrap'
//               >
//                 &nbsp;&nbsp;{user.name}&nbsp;&nbsp;
//               </Link>

//               {/* Logout */}
//               <button
//                 onClick={logout}
//                 className='px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-200 text-black font-medium shadow-md hover:scale-105 transition-all duration-300 whitespace-nowrap'
//               >
//                 &nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;
//               </button>
//             </div>
//           ) : (
//             <Link to='/login'>
//               <button className='hidden sm:block ml-2 px-7 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-md hover:scale-105 transition-all duration-300 whitespace-nowrap'>
//                 &nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;
//               </button>
//             </Link>
//           )}

//           {/* Mobile Menu */}
//           <div className='md:hidden'>
//             <button className='w-11 h-11 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-2xl text-slate-700 dark:text-white shadow-sm hover:scale-110 transition-all duration-300'>
//               <HiOutlineMenuAlt3 />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

// new
import { Link } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

import { FaMoon, FaSun } from 'react-icons/fa'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

function Navbar() {
  const { user, logout } = useAuth()
  const { darkMode, toggleTheme } = useTheme()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .nb-root {
          font-family: 'Inter', sans-serif;
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(255,255,255,0.82);
          border-bottom: 1px solid rgba(226,232,240,0.8);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(59,97,255,0.06);
        }
        .dark .nb-root {
          background: rgba(10,15,30,0.85);
          border-bottom-color: rgba(30,41,59,0.8);
        }

        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ── Logo ── */
        .nb-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .nb-logo-mark {
          width: 34px; height: 34px;
          background: linear-gradient(135deg, #3b61ff, #06b6d4);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 10px rgba(59,97,255,0.3);
          flex-shrink: 0;
        }
        .nb-logo-text {
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #3b61ff, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
        }

        /* ── Nav links ── */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }
        @media (max-width: 768px) { .nb-links { display: none; } }

        .nb-link {
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          color: #475569;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }
        .nb-link:hover {
          color: #3b61ff;
          background: rgba(59,97,255,0.07);
        }
        .dark .nb-link { color: #94a3b8; }
        .dark .nb-link:hover { color: #67e8f9; background: rgba(6,182,212,0.08); }

        /* ── Right actions ── */
        .nb-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        /* Theme toggle */
        .nb-theme-btn {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          border: none;
          border-radius: 10px;
          background: #f1f5f9;
          color: #475569;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background 0.15s, transform 0.15s, color 0.15s;
          flex-shrink: 0;
        }
        .nb-theme-btn:hover { background: #e2e8f0; transform: scale(1.08); }
        .dark .nb-theme-btn { background: rgba(30,41,59,0.8); color: #fbbf24; }
        .dark .nb-theme-btn:hover { background: rgba(51,65,85,0.8); }

        /* Profile pill */
        .nb-profile {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px 6px 8px;
          border-radius: 99px;
          background: #f1f5f9;
          border: 1.5px solid #e2e8f0;
          font-size: 0.845rem;
          font-weight: 600;
          color: #334155;
          transition: background 0.15s, border-color 0.15s;
          white-space: nowrap;
        }
        .nb-profile:hover { background: #e2e8f0; border-color: #cbd5e1; }
        .dark .nb-profile { background: rgba(30,41,59,0.8); border-color: rgba(51,65,85,0.8); color: #e2e8f0; }
        .dark .nb-profile:hover { background: rgba(51,65,85,0.8); }

        .nb-avatar {
          width: 26px; height: 26px;
          background: linear-gradient(135deg, #3b61ff, #06b6d4);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }

        /* Logout */
        .nb-logout-btn {
          padding: 7px 16px;
          border: none;
          border-radius: 99px;
          background: #fff0f0;
          color: #dc2626;
          font-family: 'Inter', sans-serif;
          font-size: 0.845rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s, transform 0.15s;
          white-space: nowrap;
          border: 1.5px solid #fecaca;
        }
        .nb-logout-btn:hover { background: #fee2e2; transform: scale(1.03); }

        /* Login CTA */
        .nb-login-btn {
          text-decoration: none;
          display: inline-block;
          padding: 8px 20px;
          border-radius: 99px;
          background: linear-gradient(135deg, #3b61ff, #06b6d4);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
          transition: opacity 0.15s, transform 0.15s;
          box-shadow: 0 3px 12px rgba(59,97,255,0.3);
          letter-spacing: -0.01em;
        }
        .nb-login-btn:hover { opacity: 0.9; transform: scale(1.03); }

        /* Mobile hamburger */
        .nb-hamburger {
          display: none;
          width: 38px; height: 38px;
          align-items: center; justify-content: center;
          border: none;
          border-radius: 10px;
          background: #f1f5f9;
          color: #475569;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background 0.15s;
          flex-shrink: 0;
        }
        .dark .nb-hamburger { background: rgba(30,41,59,0.8); color: #e2e8f0; }
        .nb-hamburger:hover { background: #e2e8f0; }
        @media (max-width: 768px) {
          .nb-hamburger { display: flex; }
          .nb-profile, .nb-logout-btn, .nb-login-btn { display: none; }
        }
      `}</style>

      <nav className="nb-root">
        <div className="nb-inner">

          {/* Logo */}
          <Link to="/" className="nb-logo">
            <div className="nb-logo-mark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="nb-logo-text">CrowdFund</span>
          </Link>

          {/* Center nav links */}
          <div className="nb-links">
            <Link to="/" className="nb-link">Home</Link>
            <Link to="/explore" className="nb-link">Explore</Link>
            <Link to="/create-campaign" className="nb-link">Start Campaign</Link>
            <Link to="/dashboard" className="nb-link">Dashboard</Link>
          </div>

          {/* Right actions */}
          <div className="nb-actions">

            {/* Theme toggle */}
            <button onClick={toggleTheme} className="nb-theme-btn">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {user ? (
              <>
                <Link to="/profile" className="nb-profile">
                  <div className="nb-avatar">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  {user.name}
                </Link>
                <button onClick={logout} className="nb-logout-btn">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="nb-login-btn">
                Sign In
              </Link>
            )}

            {/* Mobile hamburger */}
            <button className="nb-hamburger">
              <HiOutlineMenuAlt3 />
            </button>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar