import multer from 'multer'
import fs from 'fs'

fs.mkdirSync('uploads', { recursive: true })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage })

export default upload