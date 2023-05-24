import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/afterEffects')
    },
    filename: function (req, file, cb) {
        // console.log(file.originalname)
        // console.log(file.fieldname)
        cb(null, file.originalname)
    },
})
const uploadafterEffects = multer({ storage: storage })

export default uploadafterEffects
