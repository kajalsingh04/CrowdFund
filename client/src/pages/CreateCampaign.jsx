// // import {
// //   useEffect,
// //   useState,
// // } from 'react'

// // import api from '../services/api'

// // import { useAuth } from '../context/AuthContext'

// // import { useNavigate } from 'react-router-dom'

// // function CreateCampaign() {
// //   const { user } = useAuth()
// //   const navigate = useNavigate()
// //   const [ngos, setNgos] = useState([])
// //   const [preview, setPreview] = useState(null)
// //   const [validIdProof,setValidIdProof] =useState(null)
// //   const [formData, setFormData] =
// //     useState({
// //       title: '',
// //       story: '',
// //       category: '',
// //       targetAmount: '',
// //       pincode: '',
// //       ngo: '',
// //       image: null,
// //       validIdProof: null,
// //     })

// //   useEffect(() => {
// //     if (!user) {
// //       navigate('/login')
// //     }
// //   }, [user])

// //   const handleChange = async (e) => {
// //     if (
// //       e.target.name === 'image' ||
// //       e.target.name === 'validIdProof'
// //     ) {
// //       setFormData({
// //         ...formData,
// //         [e.target.name]:
// //           e.target.files[0],
// //       })
// //     } else {
// //       setFormData({
// //         ...formData,
// //         [e.target.name]:
// //           e.target.value,
// //       })
// //     }

// //     if (e.target.name === 'pincode') {
// //       if (e.target.value.length === 6) {
// //         try {
// //           const { data } = await api.get(
// //             `/ngo/${e.target.value}`
// //           )

// //           setNgos(data)
// //         } catch (error) {
// //           console.log(error)
// //         }
// //       }
// //     }
// //   }

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()

// //     const data = new FormData()

// //     Object.keys(formData).forEach((key) => {
// //       data.append(key, formData[key])
// //     })

// //     try {
// //       await api.post('/campaign', data, {
// //         headers: {
// //           Authorization: `Bearer ${user.token}`,
// //         },
// //       })

// //       alert(
// //         'Campaign submitted successfully'
// //       )

// //       navigate('/')
// //     } catch (error) {
// //       alert(error.response.data.message)
// //     }
// //   }
// //   return (
// //   <div className='min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50'>

// //     {/* Main Form Container */}
// //     <div className='w-full max-w-3xl mx-auto'>

// //       {/* Card */}
// //       <div className='bg-white/90 backdrop-blur-xl border border-slate-200 rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-12'>

// //         {/* Heading */}
// //         <div className='text-center mb-16'>
// //           <h1 className='text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight'>
// //             Create
// //             <span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
// //               {' '}Campaign
// //             </span>
// //           </h1>

// //           <p className='mt-5 text-lg text-slate-500 leading-relaxed max-w-xl mx-auto'>
// //             Share your story and raise support for a meaningful cause.
// //           </p>
// //         </div>

// //         {/* Form */}
// //         <form
// //           onSubmit={handleSubmit}
// //           className='space-y-12 px-6 md:px-10'
// //         >

// //           {/* Campaign Title */}
// //           <div className='space-y-4'>
// //             <label className='block text-md font-semibold text-slate-700'>
// //               Campaign Title
// //             </label>

// //             <input
// //               type='text'
// //               name='title'
// //               placeholder='Enter campaign title'
// //               onChange={handleChange}
// //               className='w-[94%] mx-auto block h-12 px-6 rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300'
// //             />
// //           </div>

// //           {/* Campaign Story */}
// //           <div className='space-y-4'>
// //             <label className='block text-md font-semibold text-slate-700'>
// //               Campaign Story
// //             </label>

// //             <textarea
// //               name='story'
// //               placeholder='Write your campaign story...'
// //               rows='4'
// //               onChange={handleChange}
// //               className='w-[94%] mx-auto block px-6 py-5 rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300'
// //             ></textarea>
// //           </div>

// //           {/* Grid Inputs */}
// //           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-2'>

// //             {/* Category */}
// //             <div className='space-y-4'>
// //               <label className='block text-md font-semibold text-slate-700'>
// //                 Category
// //               </label>

// //               <input
// //                 type='text'
// //                 name='category'
// //                 placeholder='Medical / Education'
// //                 onChange={handleChange}
// //                 className='w-[94%] mx-auto block h-12 px-6 rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300'
// //               />
// //             </div>

// //             {/* Target Amount */}
// //             <div className='space-y-4'>
// //               <label className='block text-md font-semibold text-slate-700'>
// //                 Target Amount
// //               </label>

// //               <input
// //                 type='number'
// //                 name='targetAmount'
// //                 placeholder='Enter target amount'
// //                 onChange={handleChange}
// //                 className='w-[94%] mx-auto block h-12 px-6 rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300'
// //               />
// //             </div>

// //             {/* Pincode */}
// //             <div className='space-y-4'>
// //               <label className='block text-md font-semibold text-slate-700'>
// //                 Pincode
// //               </label>

// //               <input
// //                 type='text'
// //                 name='pincode'
// //                 placeholder='Enter pincode'
// //                 onChange={handleChange}
// //                 className='w-[94%] mx-auto block  h-12 px-6 rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300'
// //               />
// //             </div>

// //             {/* NGO */}
// //             <div className='space-y-4'>
// //               <label className='block text-md font-semibold text-slate-700'>
// //                 Nearby NGO
// //               </label>

// //               <select
// //                 name='ngo'
// //                 onChange={handleChange}
// //                 className='w-[94%] mx-auto block  h-12 px-6 rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300'
// //               >
// //                 <option value=''>
// //                   Select Nearby NGO
// //                 </option>

// //                 {ngos.map((ngo) => (
// //                   <option
// //                     key={ngo._id}
// //                     value={ngo._id}
// //                   >
// //                     {ngo.name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           </div>

// //           {/* Upload Section */}
// //           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-2'>

// //             {/* Campaign Image */}
// //             <div className='space-y-4'>
// //               <label className='block text-md font-semibold text-slate-700'>
// //                 Campaign Image
// //               </label>

// //               <div className='border-2 border-dashed border-cyan-300 rounded-3xl p-8 bg-cyan-50/40 hover:border-cyan-400 transition-all duration-300'>

// //                 <input
// //                   type='file'
// //                   name='image'
// //                   onChange={handleChange}
// //                   className='w-[94%] mx-auto block  text-slate-600 text-sm'
// //                 />

// //                 <p className='mt-4 text-sm text-slate-500'>
// //                   Upload a clear campaign image.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Valid ID Proof */}
// //             <div className='space-y-4'>
// //               <label className='block text-md font-semibold text-slate-700'>
// //                 Valid ID Proof
// //               </label>

// //               <div className='border-2 border-dashed border-green-300 rounded-3xl p-8 bg-green-50/40 hover:border-green-400 transition-all duration-300'>

// //                 <input
// //                   type='file'
// //                   onChange={(e) => {
// //                     setImage(e.target.files[0])

// //                     setPreview(
// //                       URL.createObjectURL(
// //                         e.target.files[0]
// //                       )
// //                     )
// //                   }}
// //                   className='w-[94%] mx-auto block text-sm text-slate-600'
// //                 />

// //                 <p className='mt-4 text-sm text-slate-500'>
// //                   Upload Aadhaar, PAN or Passport.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Preview */}
// //           {preview && (
// //             <div className='pt-2'>
// //               <img
// //                 src={preview}
// //                 alt='preview'
// //                 className='w-full h-72 object-cover rounded-3xl border border-slate-200 shadow-lg'
// //               />
// //             </div>
// //           )}

// //           {/* Submit Button */}
// //           <div className='pt-4'>
// //             <button className='w-full h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-xl font-semibold shadow-xl transition-all duration-300 hover:scale-[1.01]'>
// //               Submit Campaign
// //             </button>
// //           </div>

// //         </form>
// //       </div>
// //     </div>
// //   </div>
// // )
// // }

// // export default CreateCampaign

// //new 
// import {
//   FaBullhorn,
//   FaImage,
//   FaMapMarkerAlt,
//   FaHandHoldingHeart,
// } from "react-icons/fa";
// import {
//   useEffect,
//   useState,
// } from 'react'

// import api from '../services/api'

// import { useAuth } from '../context/AuthContext'

// import { useNavigate } from 'react-router-dom'

// import toast from 'react-hot-toast'

// function CreateCampaign() {
//   const { user } = useAuth()

//   const navigate = useNavigate()

//   const [ngos, setNgos] =
//     useState([])

//   const [preview, setPreview] =
//     useState(null)

//   const [
//     proofPreview,
//     setProofPreview,
//   ] = useState(null)

//   const [loading, setLoading] =
//     useState(false)

//   const [formData, setFormData] =
//     useState({
//       title: '',
//       story: '',
//       category: '',
//       targetAmount: '',
//       pincode: '',
//       ngo: '',
//       image: null,
//       validIdProof: null,
//     })

//   useEffect(() => {
//     if (!user) {
//       navigate('/login')
//     }
//   }, [user])

//   const handleChange = async (
//     e
//   ) => {
//     const { name, value, files } =
//       e.target

//     // Campaign Image
//     if (name === 'image') {
//       setFormData({
//         ...formData,
//         image: files[0],
//       })

//       setPreview(
//         URL.createObjectURL(
//           files[0]
//         )
//       )

//       return
//     }

//     // Valid ID Proof
//     if (
//       name === 'validIdProof'
//     ) {
//       setFormData({
//         ...formData,
//         validIdProof: files[0],
//       })

//       setProofPreview(
//         URL.createObjectURL(
//           files[0]
//         )
//       )

//       return
//     }

//     // Other Fields
//     setFormData({
//       ...formData,
//       [name]: value,
//     })

//     // NGO Fetch by Pincode
//     if (
//       name === 'pincode' &&
//       value.length === 6
//     ) {
//       try {
//         const { data } =
//           await api.get(
//             `/ngo/${value}`
//           )

//         setNgos(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       setLoading(true)

//       const data =
//         new FormData()

//       Object.keys(
//         formData
//       ).forEach((key) => {
//         data.append(
//           key,
//           formData[key]
//         )
//       })

//       await api.post(
//         '/campaign',
//         data,
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//             'Content-Type':
//               'multipart/form-data',
//           },
//         }
//       )

//       toast.success(
//         'Campaign created successfully ❤️'
//       )

//       navigate('/dashboard')
//     } catch (error) {
//       toast.error(
//         error.response?.data
//           ?.message ||
//         'Something went wrong'
//       )

//       console.log(error)
//     } finally {
//       setLoading(false)
//     }
//   };
//   // old 
//   // return (
//   //   <div className='min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950'>

//   //     <div className='w-full max-w-4xl mx-auto'>

//   //       <div className='bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-12'>

//   //         {/* Heading */}
//   //         <div className='text-center mb-16'>
//   //           <h1 className='text-5xl md:text-6xl font-extrabold text-slate-800 dark:text-white tracking-tight'>
//   //             Create
//   //             <span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
//   //               {' '}
//   //               Campaign
//   //             </span>
//   //           </h1>

//   //           <p className='mt-5 text-lg text-slate-500 dark:text-slate-300 leading-relaxed max-w-xl mx-auto'>
//   //             Share your story and raise support for a meaningful cause.
//   //           </p>
//   //         </div>

//   //         {/* Form */}
//   //         <form
//   //           onSubmit={
//   //             handleSubmit
//   //           }
//   //           className='space-y-12 px-4 md:px-10'
//   //         >

//   //           {/* Title */}
//   //           <div className='space-y-4'>
//   //             <label className='block text-md font-semibold text-slate-700 dark:text-white'>
//   //               Campaign Title
//   //             </label>

//   //             <input
//   //               type='text'
//   //               name='title'
//   //               placeholder='Enter campaign title'
//   //               onChange={
//   //                 handleChange
//   //               }
//   //               required
//   //               className='w-full h-14 px-6 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400'
//   //             />
//   //           </div>

//   //           {/* Story */}
//   //           <div className='space-y-4'>
//   //             <label className='block text-md font-semibold text-slate-700 dark:text-white'>
//   //               Campaign Story
//   //             </label>

//   //             <textarea
//   //               name='story'
//   //               placeholder='Write your campaign story...'
//   //               rows='5'
//   //               onChange={
//   //                 handleChange
//   //               }
//   //               required
//   //               className='w-full px-6 py-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400'
//   //             ></textarea>
//   //           </div>

//   //           {/* Grid */}
//   //           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

//   //             {/* Category */}
//   //             <div className='space-y-4'>
//   //               <label className='block text-md font-semibold text-slate-700 dark:text-white'>
//   //                 Category
//   //               </label>

//   //               <select
//   //                 name='category'
//   //                 onChange={
//   //                   handleChange
//   //                 }
//   //                 required
//   //                 className='w-full h-14 px-6 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white text-sm'
//   //               >
//   //                 <option value=''>
//   //                   Select Category
//   //                 </option>

//   //                 <option value='Medical'>
//   //                   Medical
//   //                 </option>

//   //                 <option value='Education'>
//   //                   Education
//   //                 </option>

//   //                 <option value='Animal'>
//   //                   Animal
//   //                 </option>

//   //                 <option value='Disaster'>
//   //                   Disaster
//   //                 </option>
//   //               </select>
//   //             </div>

//   //             {/* Amount */}
//   //             <div className='space-y-4'>
//   //               <label className='block text-md font-semibold text-slate-700 dark:text-white'>
//   //                 Target Amount
//   //               </label>

//   //               <input
//   //                 type='number'
//   //                 name='targetAmount'
//   //                 placeholder='Enter target amount'
//   //                 onChange={
//   //                   handleChange
//   //                 }
//   //                 required
//   //                 className='w-full h-14 px-6 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white text-sm'
//   //               />
//   //             </div>

//   //             {/* Pincode */}
//   //             <div className='space-y-4'>
//   //               <label className='block text-md font-semibold text-slate-700 dark:text-white'>
//   //                 Pincode
//   //               </label>

//   //               <input
//   //                 type='text'
//   //                 name='pincode'
//   //                 placeholder='Enter pincode'
//   //                 onChange={
//   //                   handleChange
//   //                 }
//   //                 required
//   //                 className='w-full h-14 px-6 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white text-sm'
//   //               />
//   //             </div>

//   //             {/* NGO */}
//   //             <div className='space-y-4'>
//   //               <label className='block text-md font-semibold text-slate-700 dark:text-white'>
//   //                 Nearby NGO
//   //               </label>

//   //               <select
//   //                 name='ngo'
//   //                 onChange={
//   //                   handleChange
//   //                 }
//   //                 required
//   //                 className='w-full h-14 px-6 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white text-sm'
//   //               >
//   //                 <option value=''>
//   //                   Select NGO
//   //                 </option>

//   //                 {ngos.map(
//   //                   (ngo) => (
//   //                     <option
//   //                       key={
//   //                         ngo._id
//   //                       }
//   //                       value={
//   //                         ngo._id
//   //                       }
//   //                     >
//   //                       {ngo.name}
//   //                     </option>
//   //                   )
//   //                 )}
//   //               </select>
//   //             </div>
//   //           </div>

//   //           {/* Upload Section */}
//   //           <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

//   //             {/* Campaign Image */}
//   //             <div>
//   //               <label className='block mb-4 font-semibold text-slate-700 dark:text-white'>
//   //                 Campaign Image
//   //               </label>

//   //               <div className='border-2 border-dashed border-cyan-300 rounded-3xl p-6 bg-cyan-50 dark:bg-slate-800'>

//   //                 <input
//   //                   type='file'
//   //                   name='image'
//   //                   accept='image/*'
//   //                   onChange={
//   //                     handleChange
//   //                   }
//   //                   required
//   //                 />

//   //                 <p className='mt-4 text-sm text-slate-500'>
//   //                   Upload campaign image
//   //                 </p>
//   //               </div>

//   //               {preview && (
//   //                 <img
//   //                   src={preview}
//   //                   alt='preview'
//   //                   className='w-full h-56 object-cover rounded-3xl mt-5'
//   //                 />
//   //               )}
//   //             </div>

//   //             {/* Valid ID Proof */}
//   //             <div>
//   //               <label className='block mb-4 font-semibold text-slate-700 dark:text-white'>
//   //                 Valid ID Proof
//   //               </label>

//   //               <div className='border-2 border-dashed border-green-300 rounded-3xl p-6 bg-green-50 dark:bg-slate-800'>

//   //                 <input
//   //                   type='file'
//   //                   name='validIdProof'
//   //                   accept='image/*,.pdf'
//   //                   onChange={
//   //                     handleChange
//   //                   }
//   //                   required
//   //                 />

//   //                 <p className='mt-4 text-sm text-slate-500'>
//   //                   Upload PAN / Aadhaar / Passport
//   //                 </p>
//   //               </div>

//   //               {proofPreview && (
//   //                 <img
//   //                   src={
//   //                     proofPreview
//   //                   }
//   //                   alt='proof'
//   //                   className='w-full h-56 object-cover rounded-3xl mt-5'
//   //                 />
//   //               )}
//   //             </div>
//   //           </div>

//   //           {/* Submit */}
//   //           <button
//   //             disabled={loading}
//   //             className='w-full h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-xl font-semibold shadow-xl transition-all duration-300'
//   //           >
//   //             {loading
//   //               ? 'Creating Campaign...'
//   //               : 'Submit Campaign'}
//   //           </button>

//   //         </form>
//   //       </div>
//   //     </div>
//   //   </div>
//   // )

//   //new 
//   //   return (
//   //   <div className='min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-black px-4 md:px-8 py-6 md:py-10 overflow-y-auto relative'>
//   //     {/* Background Blur Effects */}
//   //     <div className='absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl'></div>
//   //     <div className='absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl'></div>

//   //     <div className='w-full max-w-5xl relative z-10 mx-auto my-8 md:my-12'>

//   //       <div className='backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-white/20 dark:border-slate-700 rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.15)] overflow-hidden mx-2 md:mx-4'>
//   //         {/* Top Banner */}
//   //         <div className='relative px-8 md:px-16 py-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500'>

//   //           <div className='absolute inset-0 opacity-20'>
//   //             <div className='absolute top-5 left-10 w-32 h-32 bg-white rounded-full blur-3xl'></div>
//   //             <div className='absolute bottom-0 right-10 w-40 h-40 bg-cyan-200 rounded-full blur-3xl'></div>
//   //           </div>

//   //           <div className='relative z-10 text-center'>
//   //             <h1 className='text-4xl md:text-6xl font-black text-white tracking-tight leading-tight'>
//   //               Start Your
//   //               <span className='block text-cyan-100'>
//   //                 Fundraising Journey
//   //               </span>
//   //             </h1>

//   //             <p className='mt-5 text-base md:text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed'>
//   //               Tell your story, upload your documents, and connect with supporters who care about your cause.
//   //             </p>
//   //           </div>
//   //         </div>

//   //         {/* Form Section */}
//   //         <form
//   //           onSubmit={handleSubmit}
//   //           className='px-6 md:px-14 py-10 md:py-14 space-y-10'
//   //         >

//   //           {/* Title */}
//   //           <div className='space-y-3'>
//   //             <label className='block text-sm font-bold tracking-wide text-slate-700 dark:text-slate-200 uppercase'>
//   //               Campaign Title
//   //             </label>

//   //             <input
//   //               type='text'
//   //               name='title'
//   //               placeholder='Enter campaign title'
//   //               onChange={handleChange}
//   //               required
//   //               className='w-full h-14 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800 transition-all duration-300'
//   //             />
//   //           </div>

//   //           {/* Story */}
//   //           <div className='space-y-3'>
//   //             <label className='block text-sm font-bold tracking-wide text-slate-700 dark:text-slate-200 uppercase'>
//   //               Campaign Story
//   //             </label>

//   //             <textarea
//   //               name='story'
//   //               placeholder='Describe why you are raising funds...'
//   //               rows='4'
//   //               onChange={handleChange}
//   //               required
//   //               className='w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-white shadow-sm resize-none focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800 transition-all duration-300'
//   //             ></textarea>
//   //           </div>

//   //           {/* Input Grid */}
//   //           <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>

//   //             {/* Category */}
//   //             <div className='space-y-3'>
//   //               <label className='block text-sm font-bold tracking-wide text-slate-700 dark:text-slate-200 uppercase'>
//   //                 Category
//   //               </label>

//   //               <select
//   //                 name='category'
//   //                 onChange={handleChange}
//   //                 required
//   //                 className='w-full h-14 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800 transition-all duration-300'
//   //               >
//   //                 <option value=''>
//   //                   Select Category
//   //                 </option>

//   //                 <option value='Medical'>
//   //                   Medical
//   //                 </option>

//   //                 <option value='Education'>
//   //                   Education
//   //                 </option>

//   //                 <option value='Animal'>
//   //                   Animal
//   //                 </option>

//   //                 <option value='Disaster'>
//   //                   Disaster
//   //                 </option>
//   //               </select>
//   //             </div>

//   //             {/* Amount */}
//   //             <div className='space-y-3'>
//   //               <label className='block text-sm font-bold tracking-wide text-slate-700 dark:text-slate-200 uppercase'>
//   //                 Target Amount
//   //               </label>

//   //               <input
//   //                 type='number'
//   //                 name='targetAmount'
//   //                 placeholder='₹ Enter target amount'
//   //                 onChange={handleChange}
//   //                 required
//   //                 className='w-full h-14 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800 transition-all duration-300'
//   //               />
//   //             </div>

//   //             {/* Pincode */}
//   //             <div className='space-y-3'>
//   //               <label className='block text-sm font-bold tracking-wide text-slate-700 dark:text-slate-200 uppercase'>
//   //                 Pincode
//   //               </label>

//   //               <input
//   //                 type='text'
//   //                 name='pincode'
//   //                 placeholder='Enter pincode'
//   //                 onChange={handleChange}
//   //                 required
//   //                 className='w-full h-14 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800 transition-all duration-300'
//   //               />
//   //             </div>

//   //             {/* NGO */}
//   //             <div className='space-y-3'>
//   //               <label className='block text-sm font-bold tracking-wide text-slate-700 dark:text-slate-200 uppercase'>
//   //                 Nearby NGO
//   //               </label>

//   //               <select
//   //                 name='ngo'
//   //                 onChange={handleChange}
//   //                 required
//   //                 className='w-full h-14 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800 transition-all duration-300'
//   //               >
//   //                 <option value=''>
//   //                   Select NGO
//   //                 </option>

//   //                 {ngos.map((ngo) => (
//   //                   <option
//   //                     key={ngo._id}
//   //                     value={ngo._id}
//   //                   >
//   //                     {ngo.name}
//   //                   </option>
//   //                 ))}
//   //               </select>
//   //             </div>
//   //           </div>

//   //           {/* Upload Cards */}
//   //           <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

//   //             {/* Campaign Image */}
//   //             <div className='bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 hover:shadow-xl transition-all duration-300'>

//   //               <label className='block mb-4 text-lg font-bold text-slate-700 dark:text-white'>
//   //                 Campaign Image
//   //               </label>

//   //               <div className='border-2 border-dashed border-cyan-300 rounded-2xl p-6 bg-cyan-50/80 dark:bg-slate-900 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-cyan-500'>

//   //                 <input
//   //                   type='file'
//   //                   name='image'
//   //                   accept='image/*'
//   //                   onChange={handleChange}
//   //                   required
//   //                   className='text-sm text-slate-600 dark:text-slate-300'
//   //                 />

//   //                 <p className='mt-3 text-sm text-slate-500'>
//   //                   Upload a high-quality campaign image
//   //                 </p>
//   //               </div>

//   //               {preview && (
//   //                 <img
//   //                   src={preview}
//   //                   alt='preview'
//   //                   className='w-full h-60 object-cover rounded-2xl mt-5 shadow-lg'
//   //                 />
//   //               )}
//   //             </div>

//   //             {/* Valid ID */}
//   //             <div className='bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 hover:shadow-xl transition-all duration-300'>

//   //               <label className='block mb-4 text-lg font-bold text-slate-700 dark:text-white'>
//   //                 Valid ID Proof
//   //               </label>

//   //               <div className='border-2 border-dashed border-emerald-300 rounded-2xl p-6 bg-emerald-50/80 dark:bg-slate-900 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-emerald-500'>

//   //                 <input
//   //                   type='file'
//   //                   name='validIdProof'
//   //                   accept='image/*,.pdf'
//   //                   onChange={handleChange}
//   //                   required
//   //                   className='text-sm text-slate-600 dark:text-slate-300'
//   //                 />

//   //                 <p className='mt-3 text-sm text-slate-500'>
//   //                   PAN Card, Aadhaar, Passport etc.
//   //                 </p>
//   //               </div>

//   //               {proofPreview && (
//   //                 <img
//   //                   src={proofPreview}
//   //                   alt='proof'
//   //                   className='w-full h-60 object-cover rounded-2xl mt-5 shadow-lg'
//   //                 />
//   //               )}
//   //             </div>
//   //           </div>

//   //           {/* Submit */}
//   //           <button
//   //             disabled={loading}
//   //             className='group relative w-full h-16 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 hover:scale-[1.01] transition-all duration-300 shadow-[0_15px_40px_rgba(14,165,233,0.35)]'
//   //           >

//   //             <span className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300'></span>

//   //             <span className='relative z-10 text-lg md:text-xl font-bold text-white tracking-wide'>
//   //               {loading
//   //                 ? 'Creating Campaign...'
//   //                 : 'Submit Campaign'}
//   //             </span>
//   //           </button>

//   //         </form>
//   //       </div>
//   //     </div>
//   //   </div>
//   // )

//   // 30-05-2026
//   // return (
//   //   <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-10 px-4">
//   //     <div className="max-w-5xl mx-auto">
//   //       <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white p-8 md:p-12">

//   //         {/* Heading */}
//   //         <div className="text-center mb-10">
//   //           <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
//   //             Create Your
//   //             <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//   //               {" "}Campaign
//   //             </span>
//   //           </h1>

//   //           <p className="text-gray-500 mt-3 text-lg">
//   //             Share your story and raise support for a meaningful cause.
//   //           </p>
//   //         </div>

//   //         <form onSubmit={handleSubmit} className="space-y-8">

//   //           {/* Campaign Title */}
//   //           <div>
//   //             <label className="block mb-2 font-semibold text-gray-700">
//   //               Campaign Title
//   //             </label>

//   //             <input
//   //               type="text"
//   //               name="title"
//   //               placeholder="Enter campaign title"
//   //               onChange={handleChange}
//   //               required
//   //               className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//   //             />
//   //           </div>

//   //           {/* Campaign Story */}
//   //           <div>
//   //             <label className="block mb-2 font-semibold text-gray-700">
//   //               Campaign Story
//   //             </label>

//   //             <textarea
//   //               name="story"
//   //               placeholder="Write your campaign story..."
//   //               rows="5"
//   //               onChange={handleChange}
//   //               required
//   //               className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//   //             />
//   //           </div>

//   //           {/* Grid Section */}
//   //           <div className="grid md:grid-cols-2 gap-6">

//   //             {/* Category */}
//   //             <div>
//   //               <label className="block mb-2 font-semibold text-gray-700">
//   //                 Category
//   //               </label>

//   //               <select
//   //                 name="category"
//   //                 onChange={handleChange}
//   //                 required
//   //                 className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//   //               >
//   //                 <option value="">Select Category</option>
//   //                 <option value="Medical">Medical</option>
//   //                 <option value="Education">Education</option>
//   //                 <option value="Animal">Animal</option>
//   //                 <option value="Disaster">Disaster</option>
//   //               </select>
//   //             </div>

//   //             {/* Target Amount */}
//   //             <div>
//   //               <label className="block mb-2 font-semibold text-gray-700">
//   //                 Target Amount
//   //               </label>

//   //               <input
//   //                 type="number"
//   //                 name="targetAmount"
//   //                 placeholder="Enter target amount"
//   //                 onChange={handleChange}
//   //                 required
//   //                 className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//   //               />
//   //             </div>

//   //             {/* Pincode */}
//   //             <div>
//   //               <label className="block mb-2 font-semibold text-gray-700">
//   //                 Pincode
//   //               </label>

//   //               <input
//   //                 type="text"
//   //                 name="pincode"
//   //                 placeholder="Enter pincode"
//   //                 onChange={handleChange}
//   //                 required
//   //                 className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//   //               />
//   //             </div>

//   //             {/* NGO */}
//   //             <div>
//   //               <label className="block mb-2 font-semibold text-gray-700">
//   //                 Nearby NGO
//   //               </label>

//   //               <select
//   //                 name="ngo"
//   //                 onChange={handleChange}
//   //                 required
//   //                 className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//   //               >
//   //                 <option value="">Select NGO</option>

//   //                 {ngos.map((ngo) => (
//   //                   <option key={ngo._id} value={ngo._id}>
//   //                     {ngo.name}
//   //                   </option>
//   //                 ))}
//   //               </select>
//   //             </div>

//   //           </div>

//   //           {/* Upload Section */}
//   //           <div className="grid md:grid-cols-2 gap-8">

//   //             {/* Campaign Image */}
//   //             <div>
//   //               <div className="border-2 border-dashed border-blue-300 rounded-2xl p-6 text-center bg-blue-50 hover:bg-blue-100 transition">

//   //                 <label className="block font-semibold text-gray-700 mb-3">
//   //                   Campaign Image
//   //                 </label>

//   //                 <input
//   //                   type="file"
//   //                   name="image"
//   //                   accept="image/*"
//   //                   onChange={handleChange}
//   //                   required
//   //                   className="w-full text-sm"
//   //                 />

//   //                 <p className="text-sm text-gray-500 mt-2">
//   //                   Upload campaign image
//   //                 </p>
//   //               </div>

//   //               {preview && (
//   //                 <img
//   //                   src={preview}
//   //                   alt="preview"
//   //                   className="w-full h-56 object-cover rounded-2xl mt-4 shadow-lg"
//   //                 />
//   //               )}
//   //             </div>

//   //             {/* Valid ID Proof */}
//   //             <div>
//   //               <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 text-center bg-green-50 hover:bg-green-100 transition">

//   //                 <label className="block font-semibold text-gray-700 mb-3">
//   //                   Valid ID Proof
//   //                 </label>

//   //                 <input
//   //                   type="file"
//   //                   name="validIdProof"
//   //                   accept="image/*,.pdf"
//   //                   onChange={handleChange}
//   //                   required
//   //                   className="w-full text-sm"
//   //                 />

//   //                 <p className="text-sm text-gray-500 mt-2">
//   //                   Upload PAN / Aadhaar / Passport
//   //                 </p>
//   //               </div>

//   //               {proofPreview && (
//   //                 <img
//   //                   src={proofPreview}
//   //                   alt="proof"
//   //                   className="w-full h-56 object-cover rounded-2xl mt-4 shadow-lg"
//   //                 />
//   //               )}
//   //             </div>

//   //           </div>

//   //           {/* Submit Button */}
//   //           <button
//   //             type="submit"
//   //             disabled={loading}
//   //             className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 disabled:opacity-70"
//   //           >
//   //             {loading
//   //               ? "Creating Campaign..."
//   //               : "Submit Campaign"}
//   //           </button>

//   //         </form>

//   //       </div>
//   //     </div>
//   //   </div>
//   // )

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-cyan-100  relative overflow-hidden">

//       {/* Background Effects */}
//       <div className="absolute top-1/2 left-1/2 h-80 w-80 bg-purple-100 blur-[150px] opacity-50" />
//       <div className="absolute bottom-0 right-0 h-96 w-96 bg-blue-200 blur-[140px] opacity-60" />

//       <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">

//         {/* Header */}
//         <div className="text-center mb-10">
//           <span className="px-4 py-2 text-purple-400 text-lg font-bold">
//             Start Fundraising Today
//           </span>

//           <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-slate-800">
//             Create Your Campaign
//           </h1>

//           <p className="mt-3 text-slate-600 text-lg">
//             Share your story and connect with supporters.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8 ">

//           {/* FORM */}
//           <div className="lg:col-span-2 p-6 ml-6">

//             <form
//               onSubmit={handleSubmit}
//               className="bg-white backdrop-blur-xl border border-slate-200 shadow-2xl rounded-[32px]"
//             >

//               <div className="p-8 md:p-12 lg:p-12 space-y-8">
//                 {/* Title */}
//                 <div>
//                   <label className="text-slate-700 font-md-semibold mb-2 block">
//                     Campaign Title
//                   </label>

//                   <input
//                     type="text"
//                     name="title"
//                     onChange={handleChange}
//                     placeholder="Help for medical treatment"
//                     required
//                     className="w-full h-8 px-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all"
//                   />
//                 </div>

//                 {/* Story */}
//                 <div>
//                   <label className="text-slate-700 font-md-semibold mb-2 block">
//                     Campaign Story
//                   </label>

//                   <textarea
//                     name="story"
//                     rows="4"
//                     onChange={handleChange}
//                     placeholder="Tell people why you need support..."
//                     required
//                     className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-sm placeholder:text-slate-400 resize-none focus:outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500"
//                   />
//                 </div>

//                 {/* Grid */}
//                 <div className="grid md:grid-cols-2 gap-5">

//                   <div>
//                     <label className="text-slate-700 font-md-semibold mb-2 block">
//                       Category
//                     </label>

//                     <select
//                       name="category"
//                       onChange={handleChange}
//                       required
//                       className="w-full h-8 px-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-500"
//                     >
//                       <option className="text-black">
//                         Select Category
//                       </option>

//                       <option className="text-black">
//                         Medical
//                       </option>

//                       <option className="text-black">
//                         Education
//                       </option>

//                       <option className="text-black">
//                         Animal
//                       </option>

//                       <option className="text-black">
//                         Disaster
//                       </option>

//                       <option className="text-black">
//                         Other
//                       </option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="text-slate-700 font-md-semibold mb-2 block">
//                       Target Amount
//                     </label>

//                     <input
//                       type="number"
//                       name="targetAmount"
//                       onChange={handleChange}
//                       required
//                       placeholder="50000"
//                       className="w-full h-8 px-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-slate-700 font-md-semibold mb-2 block">
//                       Pincode
//                     </label>

//                     <input
//                       type="text"
//                       name="pincode"
//                       onChange={handleChange}
//                       required
//                       placeholder="462001"
//                       className="w-full h-8 px-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-slate-700 font-md-semibold mb-2 block">
//                       Nearby NGO
//                     </label>

//                     <select
//                       name="ngo"
//                       onChange={handleChange}
//                       required
//                       className="w-full h-8 px-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-500"
//                     >
//                       <option value="" className="text-black">
//                         Select NGO
//                       </option>

//                       {ngos.map((ngo) => (
//                         <option
//                           key={ngo._id}
//                           value={ngo._id}
//                           className="text-black"
//                         >
//                           {ngo.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                 </div>

//                 {/* Uploads */}
//                 <div className="grid md:grid-cols-2 gap-5">

//                   <div className="border-2 border-dashed border-cyan-300 rounded-3xl p-8 text-center bg-cyan-50 hover:bg-cyan-100 transition-all">
//                     <FaImage className="mx-auto text-cyan-400 text-3xl mb-3" />

//                     <p className="text-slate-700 font-semibold">
//                       Campaign Image
//                     </p>

//                     <input
//                       type="file"
//                       name="image"
//                       accept="image/*"
//                       onChange={handleChange}
//                       required
//                       className="w-full h-8 px-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all"
//                     />

//                     {preview && (
//                       <img
//                         src={preview}
//                         alt="preview"
//                         className="mt-4 rounded-2xl h-48 w-full object-cover"
//                       />
//                     )}
//                   </div>

//                   <div className="border-2 border-dashed border-green-300 rounded-3xl p-8 text-center bg-green-50 hover:bg-green-100 transition-all">
//                     <FaHandHoldingHeart className="mx-auto text-green-400 text-3xl mb-3" />

//                     <p className="text-slate-700 font-semibold">
//                       ID Verification
//                     </p>

//                     <input
//                       type="file"
//                       name="validIdProof"
//                       accept="image/*,.pdf"
//                       onChange={handleChange}
//                       required
//                       className="w-full h-8 px-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all"
//                     />

//                     {proofPreview && (
//                       <img
//                         src={proofPreview}
//                         alt="proof"
//                         className="mt-4 rounded-2xl h-48 w-full object-cover"
//                       />
//                     )}
//                   </div>

//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:scale-[1.02] transition"
//                 >
//                   {loading
//                     ? "Creating Campaign..."
//                     : "Launch Campaign 🚀"}
//                 </button>

//               </div>
//             </form>
//           </div>

//           {/* LIVE PREVIEW */}
//           <div>

//             <div className="sticky top-8">

//               <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[32px] p-[2px]">

//                 <div className="bg-white rounded-[30px] p-5 shadow-xl">

//                   <img
//                     src={
//                       preview ||
//                       "https://placehold.co/600x400"
//                     }
//                     alt="preview"
//                     className="w-full h-56 object-cover rounded-2xl"
//                   />

//                   <h3 className="text-slate-800 text-2xl font-bold mt-5">
//                     {formData.title ||
//                       "Campaign Title"}
//                   </h3>

//                   <p className="text-slate-600 mt-3">
//                     {formData.story
//                       ? formData.story.slice(
//                         0,
//                         120
//                       ) + "..."
//                       : "Campaign description preview"}
//                   </p>

//                   <div className="mt-6">

//                     <div className="flex justify-between text-sm text-slate-600">
//                       <span>₹0 Raised</span>

//                       <span>
//                         ₹
//                         {formData.targetAmount ||
//                           0}
//                       </span>
//                     </div>

//                     <div className="h-3 bg-slate-200 rounded-full mt-2">
//                       <div className="h-3 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
//                     </div>

//                   </div>

//                   <div className="mt-6 flex items-center gap-2 text-slate-400">
//                     <FaMapMarkerAlt />
//                     <span>
//                       {formData.pincode ||
//                         "Pincode"}
//                     </span>
//                   </div>

//                   <button className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
//                     Support This Cause ❤️
//                   </button>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default CreateCampaign

import {
  FaBullhorn,
  FaImage,
  FaMapMarkerAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";
import {
  useEffect,
  useState,
} from 'react'

import api from '../services/api'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function CreateCampaign() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [ngos, setNgos] = useState([])
  const [preview, setPreview] = useState(null)
  const [proofPreview, setProofPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    story: '',
    category: '',
    targetAmount: '',
    pincode: '',
    ngo: '',
    image: null,
    validIdProof: null,
  })

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user])

  const handleChange = async (e) => {
    const { name, value, files } = e.target

    if (name === 'image') {
      setFormData({ ...formData, image: files[0] })
      setPreview(URL.createObjectURL(files[0]))
      return
    }

    if (name === 'validIdProof') {
      setFormData({ ...formData, validIdProof: files[0] })
      setProofPreview(URL.createObjectURL(files[0]))
      return
    }

    setFormData({ ...formData, [name]: value })

    if (name === 'pincode' && value.length === 6) {
      try {
        const { data } = await api.get(`/ngo/${value}`)
        setNgos(data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const data = new FormData()
      Object.keys(formData).forEach((key) => data.append(key, formData[key]))
      await api.post('/campaign', data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      toast.success('Campaign created successfully ❤️')
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

        :root {
          --bg: #f7f5f2;
          --surface: #ffffff;
          --ink: #18181b;
          --muted: #71717a;
          --border: #e4e4e7;
          --accent: #0f4c81;
          --accent-light: #e8f0fb;
          --accent-glow: rgba(15,76,129,0.12);
          --green: #166534;
          --green-light: #dcfce7;
          --amber: #92400e;
          --amber-light: #fef3c7;
          --radius: 20px;
        }

        .cc-page {
          font-family: 'Sora', sans-serif;
          min-height: 100vh;
          background: var(--bg);
          background-image:
            radial-gradient(ellipse 800px 600px at 10% 0%, rgba(15,76,129,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 600px 500px at 90% 100%, rgba(22,101,52,0.05) 0%, transparent 60%);
        }

        .cc-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 32px 100px;
        }

        /* ── Header ── */
        .cc-header {
          margin-bottom: 52px;
        }
        .cc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-light);
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 20px;
        }
        .cc-h1 {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 12px;
        }
        .cc-h1 em {
          font-style: italic;
          font-family: 'Lora', serif;
          font-weight: 500;
          color: var(--accent);
        }
        .cc-sub {
          font-size: 1rem;
          color: var(--muted);
          font-weight: 400;
          line-height: 1.6;
        }

        /* ── Grid ── */
        .cc-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .cc-grid { grid-template-columns: 1fr; }
        }

        /* ── Form card ── */
        .cc-form-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.06);
        }
        .cc-form-header {
          padding: 28px 36px 24px;
          border-bottom: 1px solid var(--border);
          background: linear-gradient(135deg, #fafafa 0%, #f0f4ff 100%);
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .cc-form-icon {
          width: 42px; height: 42px;
          background: var(--accent);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          font-size: 1rem;
          flex-shrink: 0;
          box-shadow: 0 4px 12px var(--accent-glow);
        }
        .cc-form-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.02em;
        }
        .cc-form-title-sub {
          font-size: 0.8rem;
          color: var(--muted);
          margin-top: 2px;
        }
        .cc-form-body {
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* ── Field ── */
        .cc-field { display: flex; flex-direction: column; gap: 8px; }
        .cc-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #52525b;
        }
        .cc-input, .cc-textarea, .cc-select {
          font-family: 'Sora', sans-serif;
          font-size: 0.9rem;
          color: var(--ink);
          background: #fafafa;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          padding: 13px 16px;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
          width: 100%;
          box-sizing: border-box;
        }
        .cc-input::placeholder, .cc-textarea::placeholder { color: #a1a1aa; }
        .cc-input:focus, .cc-textarea:focus, .cc-select:focus {
          border-color: var(--accent);
          background: #fff;
          box-shadow: 0 0 0 4px var(--accent-glow);
        }
        .cc-textarea { resize: none; line-height: 1.6; }
        .cc-select { color: #52525b; cursor: pointer; appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2371717a' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        /* two-col grid */
        .cc-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 580px) { .cc-2col { grid-template-columns: 1fr; } }

        /* ── Upload zones ── */
        .cc-upload-zone {
          border: 2px dashed var(--border);
          border-radius: 16px;
          padding: 24px 16px;
          text-align: center;
          transition: border-color 0.18s, background 0.18s;
          cursor: pointer;
        }
        .cc-upload-zone:hover { border-color: var(--accent); background: var(--accent-light); }
        .cc-upload-zone.green:hover { border-color: var(--green); background: var(--green-light); }

        .cc-upload-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 10px;
          font-size: 1.1rem;
        }
        .cc-upload-icon.blue { background: var(--accent-light); color: var(--accent); }
        .cc-upload-icon.green { background: var(--green-light); color: var(--green); }

        .cc-upload-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 4px;
        }
        .cc-upload-hint {
          font-size: 0.75rem;
          color: var(--muted);
          margin-bottom: 12px;
        }
        .cc-file-input {
          font-family: 'Sora', sans-serif;
          font-size: 0.78rem;
          color: var(--muted);
          width: 100%;
          cursor: pointer;
        }
        .cc-file-input::file-selector-button {
          font-family: 'Sora', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 6px 14px;
          border: 1.5px solid var(--border);
          border-radius: 8px;
          background: #fff;
          color: var(--ink);
          cursor: pointer;
          margin-right: 10px;
          transition: background 0.15s;
        }
        .cc-file-input::file-selector-button:hover { background: var(--bg); }

        .cc-img-preview {
          margin-top: 14px;
          border-radius: 12px;
          height: 160px;
          width: 100%;
          object-fit: cover;
          border: 1px solid var(--border);
        }

        /* ── Submit ── */
        .cc-submit {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(135deg, #1a56c4 0%, var(--accent) 100%);
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
          box-shadow: 0 4px 18px var(--accent-glow);
          margin-top: 4px;
        }
        .cc-submit:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(15,76,129,0.25);
        }
        .cc-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        /* ── Preview card ── */
        .cc-preview-wrap { position: sticky; top: 32px; }
        .cc-preview-tag {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 12px;
          padding-left: 4px;
        }
        .cc-preview-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .cc-preview-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          background: linear-gradient(135deg, #e0e7ff, #e0f2fe);
          display: block;
        }
        .cc-preview-img-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #f0f4ff, #e0f7fa);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #a1a1aa;
          font-size: 0.8rem;
        }
        .cc-preview-body { padding: 24px; }
        .cc-preview-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.02em;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .cc-preview-story {
          font-size: 0.825rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .cc-preview-bar-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--muted);
          margin-bottom: 8px;
        }
        .cc-preview-bar-bg {
          height: 6px;
          background: var(--border);
          border-radius: 99px;
          overflow: hidden;
        }
        .cc-preview-bar-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #1a56c4, var(--accent));
          border-radius: 99px;
        }
        .cc-preview-loc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--muted);
          margin-top: 14px;
          font-weight: 500;
        }
        .cc-preview-cta {
          width: 100%;
          margin-top: 18px;
          padding: 12px;
          background: linear-gradient(135deg, #1a56c4, var(--accent));
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'Sora', sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          cursor: default;
          letter-spacing: 0.01em;
        }

        /* steps sidebar */
        .cc-steps {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px;
          margin-top: 20px;
        }
        .cc-steps-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
        }
        .cc-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid var(--border);
        }
        .cc-step:last-child { border-bottom: none; }
        .cc-step-num {
          width: 26px; height: 26px;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.72rem;
          font-weight: 800;
          flex-shrink: 0;
        }
        .cc-step-text {
          font-size: 0.8rem;
          color: #52525b;
          line-height: 1.5;
          padding-top: 2px;
        }
        .cc-step-text strong {
          display: block;
          color: var(--ink);
          font-weight: 600;
          margin-bottom: 1px;
        }
      `}</style>

      <div className="cc-page">
        <div className="cc-wrap">

          {/* Header */}
          <div className="cc-header">
            <div className="cc-eyebrow">
              <FaBullhorn style={{ fontSize: '0.65rem' }} />
              Start Fundraising Today
            </div>
            <h1 className="cc-h1">Create Your <em>Campaign</em></h1>
            <p className="cc-sub">Share your story and connect with supporters who care.</p>
          </div>

          <div className="cc-grid">

            {/* ── FORM ── */}
            <div className="cc-form-card">
              <div className="cc-form-header">
                <div className="cc-form-icon"><FaBullhorn /></div>
                <div>
                  <div className="cc-form-title">Campaign Details</div>
                  <div className="cc-form-title-sub">All fields are required</div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="cc-form-body">

                  {/* Title */}
                  <div className="cc-field">
                    <label className="cc-label">Campaign Title</label>
                    <input
                      type="text"
                      name="title"
                      onChange={handleChange}
                      placeholder="Help for medical treatment"
                      required
                      className="cc-input"
                    />
                  </div>

                  {/* Story */}
                  <div className="cc-field">
                    <label className="cc-label">Campaign Story</label>
                    <textarea
                      name="story"
                      rows="5"
                      onChange={handleChange}
                      placeholder="Tell people why you need support. Be honest and specific — the more detail, the more trust you build."
                      required
                      className="cc-textarea"
                    />
                  </div>

                  {/* Row: Category + Target */}
                  <div className="cc-2col">
                    <div className="cc-field">
                      <label className="cc-label">Category</label>
                      <select name="category" onChange={handleChange} required className="cc-select">
                        <option>Select Category</option>
                        <option className="text-black">Medical</option>
                        <option className="text-black">Education</option>
                        <option className="text-black">Animal</option>
                        <option className="text-black">Disaster</option>
                        <option className="text-black">Other</option>
                      </select>
                    </div>
                    <div className="cc-field">
                      <label className="cc-label">Target Amount (₹)</label>
                      <input
                        type="number"
                        name="targetAmount"
                        onChange={handleChange}
                        required
                        placeholder="50000"
                        className="cc-input"
                      />
                    </div>
                  </div>

                  {/* Row: Pincode + NGO */}
                  <div className="cc-2col">
                    <div className="cc-field">
                      <label className="cc-label">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        onChange={handleChange}
                        required
                        placeholder="462001"
                        className="cc-input"
                      />
                    </div>
                    <div className="cc-field">
                      <label className="cc-label">Nearby NGO</label>
                      <select name="ngo" onChange={handleChange} required className="cc-select">
                        <option value="">Select NGO</option>
                        {ngos.map((ngo) => (
                          <option key={ngo._id} value={ngo._id} className="text-black">
                            {ngo.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Uploads */}
                  <div className="cc-2col">

                    {/* Campaign Image */}
                    <div className="cc-upload-zone">
                      <div className="cc-upload-icon blue"><FaImage /></div>
                      <div className="cc-upload-label">Campaign Image</div>
                      <div className="cc-upload-hint">JPG, PNG or WEBP</div>
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        required
                        className="cc-file-input"
                      />
                      {preview && (
                        <img src={preview} alt="preview" className="cc-img-preview" />
                      )}
                    </div>

                    {/* ID Proof */}
                    <div className="cc-upload-zone green">
                      <div className="cc-upload-icon green"><FaHandHoldingHeart /></div>
                      <div className="cc-upload-label">ID Verification</div>
                      <div className="cc-upload-hint">Image or PDF</div>
                      <input
                        type="file"
                        name="validIdProof"
                        accept="image/*,.pdf"
                        onChange={handleChange}
                        required
                        className="cc-file-input"
                      />
                      {proofPreview && (
                        <img src={proofPreview} alt="proof" className="cc-img-preview" />
                      )}
                    </div>

                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={loading} className="cc-submit">
                    {loading ? 'Creating Campaign…' : 'Launch Campaign 🚀'}
                  </button>

                </div>
              </form>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="cc-preview-wrap">

              {/* Live Preview */}
              <div className="cc-preview-tag">Live Preview</div>
              <div className="cc-preview-card">
                {preview
                  ? <img src={preview} alt="preview" className="cc-preview-img" />
                  : (
                    <div className="cc-preview-img-placeholder">
                      <FaImage style={{ fontSize: '2rem', opacity: 0.3 }} />
                      <span>Campaign image preview</span>
                    </div>
                  )
                }
                <div className="cc-preview-body">
                  <div className="cc-preview-title">
                    {formData.title || 'Your Campaign Title'}
                  </div>
                  <div className="cc-preview-story">
                    {formData.story
                      ? formData.story.slice(0, 110) + '…'
                      : 'Your campaign description will appear here…'
                    }
                  </div>
                  <div className="cc-preview-bar-row">
                    <span>₹0 raised</span>
                    <span>Goal ₹{formData.targetAmount || '0'}</span>
                  </div>
                  <div className="cc-preview-bar-bg">
                    <div className="cc-preview-bar-fill" />
                  </div>
                  <div className="cc-preview-loc">
                    <FaMapMarkerAlt />
                    <span>{formData.pincode || 'Pincode'}</span>
                  </div>
                  <button className="cc-preview-cta">Support This Cause ❤️</button>
                </div>
              </div>

              {/* Steps */}
              <div className="cc-steps">
                <div className="cc-steps-title">How it works</div>
                {[
                  ['Fill the form', 'Provide your campaign details and story.'],
                  ['Upload documents', 'Add an image and valid ID proof.'],
                  ['Get verified', 'Our team reviews your campaign.'],
                  ['Start receiving', 'Share and collect donations.'],
                ].map(([title, desc], i) => (
                  <div className="cc-step" key={i}>
                    <div className="cc-step-num">{i + 1}</div>
                    <div className="cc-step-text">
                      <strong>{title}</strong>
                      {desc}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CreateCampaign