// import {
//   useEffect,
//   useState,
// } from 'react'

// import toast from 'react-hot-toast'

// import api from '../../services/api'

// import { useAuth } from '../../context/AuthContext'

// function CommentSection({
//   campaignId,
// }) {
//   const { user } = useAuth()

//   const [comments, setComments] =
//     useState([])

//   const [text, setText] =
//     useState('')

//   useEffect(() => {
//     fetchComments()
//   }, [])

//   const fetchComments =
//     async () => {
//       try {
//         const { data } =
//           await api.get(
//             `/comment/${campaignId}`
//           )

//         setComments(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//   const addComment =
//     async () => {
//       try {
//         const { data } =
//           await api.post(
//             `/comment/${campaignId}`,
//             { text },
//             {
//               headers: {
//                 Authorization: `Bearer ${user.token}`,
//               },
//             }
//           )

//         setComments([
//           data,
//           ...comments,
//         ])

//         setText('')

//         toast.success(
//           'Comment added ❤️'
//         )
//       } catch (error) {
//         toast.error(
//           'Failed to comment'
//         )
//       }
//     }

//   return (
//     <div className='mt-16'>
//       <h1 className='text-4xl font-bold dark:text-white mb-8'>
//         Comments
//       </h1>

//       <div className='bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl'>
//         <textarea
//           rows='4'
//           placeholder='Write a comment...'
//           value={text}
//           onChange={(e) =>
//             setText(e.target.value)
//           }
//           className='w-full border p-4 rounded-2xl dark:bg-slate-800 dark:text-white'
//         ></textarea>

//         <button
//           onClick={addComment}
//           className='mt-5 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl'
//         >
//           Add Comment
//         </button>
//       </div>

//       <div className='mt-10 space-y-6'>
//         {comments.map(
//           (comment) => (
//             <div
//               key={comment._id}
//               className='bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg'
//             >
//               <h2 className='text-2xl font-bold dark:text-white'>
//                 {
//                   comment.user
//                     ?.name
//                 }
//               </h2>

//               <p className='mt-4 text-gray-600 dark:text-gray-300'>
//                 {comment.text}
//               </p>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   )
// }

// export default CommentSection

// new 

import {
  useEffect,
  useState,
} from 'react'

import toast from 'react-hot-toast'

import api from '../../services/api'

import { useAuth } from '../../context/AuthContext'

function CommentSection({ campaignId }) {
  const { user } = useAuth()

  const [comments, setComments] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      const { data } = await api.get(`/comment/${campaignId}`)
      setComments(data)
    } catch (error) {
      console.log(error)
    }
  }

  const addComment = async () => {
    try {
      const { data } = await api.post(
        `/comment/${campaignId}`,
        { text },
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      setComments([data, ...comments])
      setText('')
      toast.success('Comment added ❤️')
    } catch (error) {
      toast.error('Failed to comment')
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .cs-root {
          font-family: 'Sora', sans-serif;
          margin-top: 64px;
        }

        /* ── Section heading ── */
        .cs-heading-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }
        .cs-heading-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, #e4e4e7, transparent);
        }
        .cs-heading {
          font-size: 1.35rem;
          font-weight: 800;
          color: #18181b;
          letter-spacing: -0.03em;
          white-space: nowrap;
        }
        .cs-count {
          font-size: 0.75rem;
          font-weight: 700;
          color: #0f4c81;
          background: #e8f0fb;
          padding: 3px 10px;
          border-radius: 99px;
          letter-spacing: 0.04em;
        }

        /* ── Compose box ── */
        .cs-compose {
          background: #fff;
          border: 1.5px solid #e4e4e7;
          border-radius: 20px;
          padding: 20px 24px 18px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }

        .cs-compose-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .cs-user-avatar {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, #1a56c4, #0f4c81);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }
        .cs-compose-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #52525b;
        }

        .cs-textarea {
          font-family: 'Sora', sans-serif;
          width: 100%;
          box-sizing: border-box;
          padding: 14px 16px;
          background: #fafafa;
          border: 1.5px solid #e4e4e7;
          border-radius: 14px;
          font-size: 0.9rem;
          color: #18181b;
          line-height: 1.6;
          resize: none;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        }
        .cs-textarea::placeholder { color: #a1a1aa; }
        .cs-textarea:focus {
          border-color: #0f4c81;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(15,76,129,0.08);
        }

        .cs-compose-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 12px;
        }
        .cs-submit-btn {
          font-family: 'Sora', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          background: linear-gradient(135deg, #1a56c4, #0f4c81);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
          box-shadow: 0 3px 12px rgba(15,76,129,0.25);
          letter-spacing: 0.01em;
        }
        .cs-submit-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(15,76,129,0.3);
        }
        .cs-submit-btn:active { transform: translateY(0); }

        /* ── Comment list ── */
        .cs-list {
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cs-empty {
          text-align: center;
          padding: 44px 20px;
          background: #fafafa;
          border: 1.5px dashed #e4e4e7;
          border-radius: 18px;
          color: #a1a1aa;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .cs-empty-icon {
          font-size: 1.8rem;
          margin-bottom: 8px;
          opacity: 0.5;
        }

        /* ── Single comment card ── */
        .cs-card {
          background: #fff;
          border: 1.5px solid #e4e4e7;
          border-radius: 18px;
          padding: 18px 22px;
          box-shadow: 0 1px 6px rgba(0,0,0,0.04);
          transition: box-shadow 0.18s, border-color 0.18s;
        }
        .cs-card:hover {
          border-color: #d4dff5;
          box-shadow: 0 4px 16px rgba(15,76,129,0.07);
        }

        .cs-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .cs-card-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
        }
        .cs-card-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #18181b;
          letter-spacing: -0.01em;
        }
        .cs-card-dot {
          width: 3px; height: 3px;
          background: #d4d4d8;
          border-radius: 50%;
        }
        .cs-card-label {
          font-size: 0.72rem;
          color: #a1a1aa;
          font-weight: 500;
        }

        .cs-card-divider {
          height: 1px;
          background: #f4f4f5;
          margin-bottom: 12px;
        }

        .cs-card-text {
          font-size: 0.9rem;
          color: #3f3f46;
          line-height: 1.7;
          font-weight: 400;
        }

        /* avatar color rotation */
        .cs-card-avatar.c0 { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
        .cs-card-avatar.c1 { background: linear-gradient(135deg, #0ea5e9, #0f4c81); }
        .cs-card-avatar.c2 { background: linear-gradient(135deg, #10b981, #059669); }
        .cs-card-avatar.c3 { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .cs-card-avatar.c4 { background: linear-gradient(135deg, #ec4899, #db2777); }
      `}</style>

      <div className="cs-root">

        {/* Heading */}
        <div className="cs-heading-row">
          <h2 className="cs-heading">Comments</h2>
          <span className="cs-count">{comments.length}</span>
          <div className="cs-heading-line" />
        </div>

        {/* Compose */}
        <div className="cs-compose">
          <div className="cs-compose-header">
            <div className="cs-user-avatar">
              {user?.name?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <span className="cs-compose-label">
              {user?.name || 'Guest'} · Leave a comment
            </span>
          </div>

          <textarea
            rows="4"
            placeholder="Write a comment…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="cs-textarea"
          />

          <div className="cs-compose-footer">
            <button onClick={addComment} className="cs-submit-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Post Comment
            </button>
          </div>
        </div>

        {/* Comments list */}
        <div className="cs-list">
          {comments.length === 0 ? (
            <div className="cs-empty">
              <div className="cs-empty-icon">💬</div>
              No comments yet. Be the first to share your thoughts!
            </div>
          ) : (
            comments.map((comment, i) => (
              <div key={comment._id} className="cs-card">
                <div className="cs-card-header">
                  <div className={`cs-card-avatar c${i % 5}`}>
                    {comment.user?.name?.charAt(0)?.toUpperCase() || '?'}
                  </div>
                  <div>
                    <div className="cs-card-name">{comment.user?.name}</div>
                  </div>
                  <div className="cs-card-dot" />
                  <span className="cs-card-label">Supporter</span>
                </div>
                <div className="cs-card-divider" />
                <p className="cs-card-text">{comment.text}</p>
              </div>
            ))
          )}
        </div>

      </div>
    </>
  )
}

export default CommentSection