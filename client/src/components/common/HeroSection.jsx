// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

// function HeroSection() {
//   return (
//     <section className='relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 min-h-[90vh] flex items-center justify-center px-6 lg:px-12 py-28'>
      
//       {/* Background Blur */}
//       <div className='absolute top-0 left-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl'></div>

//       <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl'></div>

//       {/* Main Content */}
//       <div className='relative z-10 max-w-6xl mx-auto text-center'>
        
//         {/* Heading */}
//         <motion.h1
//           initial={{
//             opacity: 0,
//             y: -50,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className='text-5xl md:text-7xl font-extrabold leading-tight text-slate-800 dark:text-white'
//         >
//           Raise Funds For
//           <span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
//             {' '}What Matters
//           </span>
//           <span className='ml-3'>
//             ❤️
//           </span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1.2,
//           }}
//           className='text-lg md:text-2xl text-slate-600 dark:text-slate-300 mt-8 leading-relaxed max-w-5xl mx-auto font-medium'
//         >
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Start meaningful fundraising campaigns,
//           support verified NGOs, and help people
//           who truly need it through a secure,
//           transparent, and trusted crowdfunding platform.
//         </motion.p>
//           <br/>
//         {/* Buttons */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1.5,
//           }}
//           className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-24 mb-28'
//         >
          
//           {/* Start Campaign */}
//           <Link to='/create-campaign'>
//             <motion.button
//               whileHover={{
//                 scale: 1.06,
//               }}
//               whileTap={{
//                 scale: 0.95,
//               }}
//               className='group relative overflow-hidden px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg md:text-xl font-semibold shadow-2xl transition-all duration-300'
//             >
//               <span className='relative z-10 flex items-center gap-2'>
//                 &nbsp;&nbsp;🚀 Start Campaign &nbsp;&nbsp;
//               </span>

//               <div className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
//             </motion.button>
//           </Link>

//           {/* Donate Button */}
//           <Link to='/explore'>
//             <motion.button
//               whileHover={{
//                 scale: 1.06,
//               }}
//               whileTap={{
//                 scale: 0.95,
//               }}
//               className='px-10 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white text-lg md:text-xl font-semibold shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 '
//             >
//               &nbsp;&nbsp;❤️ Donate Now &nbsp;&nbsp;
//             </motion.button>
//           </Link>
//         </motion.div>

//         {/* Stats */}
//         <br/><br/>
//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           animate={{
//             opacity: 1,
//           }}
//           transition={{
//             duration: 2,
//           }}
//           className='grid grid-cols-1 sm:grid-cols-3 gap-6'
//         >
          
//           <div className='bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/40 dark:border-slate-800'>
//             <h2 className='text-3xl font-bold text-blue-600'>
//               500+
//             </h2>

//             <p className='text-slate-600 dark:text-slate-300 mt-2'>
//               Successful Campaigns
//             </p>
//           </div>

//           <div className='bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/40 dark:border-slate-800'>
//             <h2 className='text-3xl font-bold text-cyan-500'>
//               ₹10L+
//             </h2>

//             <p className='text-slate-600 dark:text-slate-300 mt-2'>
//               Funds Raised
//             </p>
//           </div>

//           <div className='bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/40 dark:border-slate-800'>
//             <h2 className='text-3xl font-bold text-pink-500'>
//               1000+
//             </h2>

//             <p className='text-slate-600 dark:text-slate-300 mt-2'>
//               Trusted Donors
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Lora:ital,wght@1,500;1,600&display=swap');

        :root {
          --accent: #0f4c81;
          --accent2: #0ea5e9;
          --ink: #18181b;
          --muted: #52525b;
          --border: rgba(228,228,231,0.7);
          --surface: rgba(255,255,255,0.72);
        }

        .hero-section {
          font-family: 'Sora', sans-serif;
          position: relative;
          overflow: hidden;
          min-height: 95vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 96px 32px 80px;
          background: #f7f9ff;
        }

        /* ── Background layers ── */
        .hero-blob-1 {
          position: absolute;
          top: -160px; left: -120px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(14,165,233,0.13) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-blob-2 {
          position: absolute;
          bottom: -180px; right: -140px;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(15,76,129,0.10) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-blob-3 {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 900px; height: 480px;
          background: radial-gradient(ellipse, rgba(224,231,255,0.45) 0%, transparent 70%);
          pointer-events: none;
        }

        /* subtle grid texture */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(15,76,129,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,76,129,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* ── Content ── */
        .hero-inner {
          position: relative;
          z-index: 10;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        /* eyebrow */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.85);
          border: 1.5px solid rgba(14,165,233,0.25);
          backdrop-filter: blur(8px);
          border-radius: 99px;
          padding: 7px 18px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 32px;
          box-shadow: 0 2px 12px rgba(15,76,129,0.08);
        }
        .hero-eyebrow-dot {
          width: 7px; height: 7px;
          background: #0ea5e9;
          border-radius: 50%;
          animation: hero-pulse 2s ease-in-out infinite;
        }
        @keyframes hero-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(14,165,233,0.4); }
          50%      { box-shadow: 0 0 0 6px rgba(14,165,233,0); }
        }

        /* heading */
        .hero-h1 {
          font-size: clamp(2.6rem, 6vw, 5rem);
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.04em;
          line-height: 1.08;
          margin-bottom: 6px;
        }
        .hero-h1-accent {
          font-family: 'Lora', serif;
          font-style: italic;
          font-weight: 600;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-h1-emoji {
          font-style: normal;
          -webkit-text-fill-color: initial;
          margin-left: 8px;
          font-size: 0.85em;
        }

        /* subtitle */
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--muted);
          line-height: 1.75;
          max-width: 640px;
          margin: 24px auto 0;
          font-weight: 400;
        }

        /* ── Buttons ── */
        .hero-btns {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 52px;
          margin-bottom: 0;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 34px;
          background: linear-gradient(135deg, #1a56c4 0%, var(--accent) 100%);
          color: #fff;
          border: none;
          border-radius: 14px;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.01em;
          box-shadow: 0 4px 20px rgba(15,76,129,0.3);
          transition: box-shadow 0.2s;
          white-space: nowrap;
        }
        .hero-btn-primary:hover {
          box-shadow: 0 8px 30px rgba(15,76,129,0.38);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 14px 32px;
          background: rgba(255,255,255,0.9);
          color: var(--ink);
          border: 1.5px solid rgba(15,76,129,0.18);
          border-radius: 14px;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.01em;
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: background 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .hero-btn-secondary:hover {
          background: #fff;
          border-color: rgba(15,76,129,0.32);
        }

        /* ── Stats ── */
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 72px;
        }
        @media (max-width: 640px) {
          .hero-stats { grid-template-columns: 1fr; }
          .hero-h1 { letter-spacing: -0.03em; }
        }

        .hero-stat {
          background: var(--surface);
          backdrop-filter: blur(16px);
          border: 1.5px solid var(--border);
          border-radius: 20px;
          padding: 24px 20px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.05);
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
        }
        .hero-stat:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 32px rgba(15,76,129,0.1);
          border-color: rgba(14,165,233,0.3);
        }

        .hero-stat-num {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .hero-stat-num.blue  { color: var(--accent); }
        .hero-stat-num.cyan  { color: #0ea5e9; }
        .hero-stat-num.pink  { color: #ec4899; }

        .hero-stat-label {
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-stat-icon {
          font-size: 1.4rem;
          margin-bottom: 10px;
          display: block;
        }
      `}</style>

      <section className="hero-section">
        {/* Background */}
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />
        <div className="hero-blob-3" />
        <div className="hero-grid" />

        <div className="hero-inner">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Trusted Crowdfunding Platform
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-h1"
          >
            Raise Funds For
            <br />
            <span className="hero-h1-accent">What Matters</span>
            <span className="hero-h1-emoji">❤️</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="hero-sub"
          >
            Start meaningful fundraising campaigns, support verified NGOs,
            and help people who truly need it through a secure, transparent,
            and trusted crowdfunding platform.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="hero-btns"
          >
            <Link to="/create-campaign">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="hero-btn-primary"
              >
                🚀 Start Campaign
              </motion.button>
            </Link>

            <Link to="/explore">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="hero-btn-secondary"
              >
                ❤️ Donate Now
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="hero-stats"
          >
            <div className="hero-stat">
              <span className="hero-stat-icon">🏆</span>
              <div className="hero-stat-num blue">500+</div>
              <div className="hero-stat-label">Successful Campaigns</div>
            </div>

            <div className="hero-stat">
              <span className="hero-stat-icon">💰</span>
              <div className="hero-stat-num cyan">₹10L+</div>
              <div className="hero-stat-label">Funds Raised</div>
            </div>

            <div className="hero-stat">
              <span className="hero-stat-icon">🤝</span>
              <div className="hero-stat-num pink">1000+</div>
              <div className="hero-stat-label">Trusted Donors</div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default HeroSection
