// function StoriesSection() {
//   const stories = [
//     {
//       name: 'Riya Sharma',
//       text: 'This platform helped me raise money for my father surgery.',
//     },

//     {
//       name: 'Aman Verma',
//       text: 'Verified NGOs increased donor trust.',
//     },

//     {
//       name: 'Kajal Singh',
//       text: 'Beautiful and secure fundraising experience.',
//     },
//   ]

//   return (
//     <div className='py-24 bg-white dark:bg-slate-900'>
//       <div className='max-w-7xl mx-auto px-6'>
//         <h1 className='text-6xl font-bold text-center mb-20 dark:text-white'>
//           Success Stories ❤️
//         </h1>

//         <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
//           {stories.map(
//             (story, index) => (
//               <div
//                 key={index}
//                 className='bg-gray-100 dark:bg-slate-800 p-8 rounded-3xl shadow-xl'
//               >
//                 <h2 className='text-3xl font-bold dark:text-white'>
//                   {story.name}
//                 </h2>

//                 <p className='mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed'>
//                   {story.text}
//                 </p>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StoriesSection

function StoriesSection() {
  const stories = [
    {
      name: 'Riya Sharma',
      text: 'This platform helped me raise money for my father surgery.',
    },
    {
      name: 'Aman Verma',
      text: 'Verified NGOs increased donor trust.',
    },
    {
      name: 'Kajal Singh',
      text: 'Beautiful and secure fundraising experience.',
    },
  ]

  const avatarColors = [
    'linear-gradient(135deg,#1a56c4,#0f4c81)',
    'linear-gradient(135deg,#0ea5e9,#0284c7)',
    'linear-gradient(135deg,#ec4899,#db2777)',
  ]

  const quotes = ['"', '"', '"']

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Lora:ital,wght@1,500&display=swap');

        .ss-section {
          font-family: 'Sora', sans-serif;
          padding: 100px 24px;
          background: #f7f9ff;
          position: relative;
          overflow: hidden;
        }

        /* subtle background blobs */
        .ss-blob-1 {
          position: absolute;
          top: -100px; left: -80px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(14,165,233,0.09) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .ss-blob-2 {
          position: absolute;
          bottom: -120px; right: -80px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .ss-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .ss-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .ss-eyebrow-line {
          width: 40px; height: 1.5px;
          background: linear-gradient(90deg, transparent, #0ea5e9);
        }
        .ss-eyebrow-line.right {
          background: linear-gradient(90deg, #0ea5e9, transparent);
        }
        .ss-eyebrow-text {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0f4c81;
        }

        .ss-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #18181b;
          text-align: center;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .ss-heading em {
          font-family: 'Lora', serif;
          font-style: italic;
          font-weight: 500;
          color: #0f4c81;
        }
        .ss-heading-sub {
          text-align: center;
          font-size: 0.95rem;
          color: #71717a;
          font-weight: 400;
          margin-bottom: 64px;
        }

        /* ── Grid ── */
        .ss-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 860px) { .ss-grid { grid-template-columns: 1fr; } }

        /* ── Card ── */
        .ss-card {
          background: #fff;
          border: 1.5px solid #e4e4e7;
          border-radius: 24px;
          padding: 32px 28px 28px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;
        }
        .ss-card:hover {
          box-shadow: 0 12px 40px rgba(15,76,129,0.11);
          transform: translateY(-4px);
          border-color: #c7d7f5;
        }

        /* large decorative quote mark */
        .ss-quote-mark {
          font-family: 'Lora', serif;
          font-size: 5rem;
          line-height: 1;
          color: #e0e7ff;
          position: absolute;
          top: 16px; right: 24px;
          pointer-events: none;
          user-select: none;
        }

        /* story text */
        .ss-text {
          font-size: 1rem;
          color: #3f3f46;
          line-height: 1.75;
          font-weight: 400;
          flex: 1;
          margin-bottom: 28px;
          padding-top: 4px;
        }

        /* divider */
        .ss-divider {
          height: 1px;
          background: #f4f4f5;
          margin-bottom: 20px;
        }

        /* author row */
        .ss-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ss-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(0,0,0,0.15);
        }
        .ss-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #18181b;
          letter-spacing: -0.01em;
        }
        .ss-role {
          font-size: 0.72rem;
          color: #a1a1aa;
          font-weight: 500;
          margin-top: 1px;
        }

        /* star row */
        .ss-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 14px;
        }
        .ss-star {
          color: #f59e0b;
          font-size: 0.85rem;
        }
      `}</style>

      <div className="ss-section">
        <div className="ss-blob-1" />
        <div className="ss-blob-2" />

        <div className="ss-inner">

          {/* Header */}
          <div className="ss-eyebrow">
            <div className="ss-eyebrow-line" />
            <span className="ss-eyebrow-text">Testimonials</span>
            <div className="ss-eyebrow-line right" />
          </div>

          <h1 className="ss-heading">
            Success <em>Stories</em> ❤️
          </h1>
          <p className="ss-heading-sub">
            Real people, real impact — hear from those who made a difference.
          </p>

          {/* Cards */}
          <div className="ss-grid">
            {stories.map((story, index) => (
              <div key={index} className="ss-card">

                {/* Decorative quote */}
                <div className="ss-quote-mark">"</div>

                {/* Stars */}
                <div className="ss-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="ss-star">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="ss-text">{story.text}</p>

                <div className="ss-divider" />

                {/* Author */}
                <div className="ss-author">
                  <div
                    className="ss-avatar"
                    style={{ background: avatarColors[index % avatarColors.length] }}
                  >
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="ss-name">{story.name}</div>
                    <div className="ss-role">Campaign Supporter</div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default StoriesSection