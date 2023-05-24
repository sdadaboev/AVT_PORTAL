import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/figma')
    },
    filename: function (req, file, cb) {
        // console.log(file.originalname)
        // console.log(file.fieldname)
        cb(null, file.originalname)
    },
})
const uploadFigma = multer({ storage: storage })

export default uploadFigma
