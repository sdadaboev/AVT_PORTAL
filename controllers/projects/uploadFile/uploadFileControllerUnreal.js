import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/unreal')
    },
    filename: function (req, file, cb) {
        // console.log(file.originalname)
        // console.log(file.fieldname)
        cb(null, file.originalname)
    },
})
const uploadUnreal = multer({ storage: storage })

export default uploadUnreal
