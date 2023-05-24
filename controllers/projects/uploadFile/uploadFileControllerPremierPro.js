import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/premierPro')
    },
    filename: function (req, file, cb) {
        // console.log(file.originalname)
        // console.log(file.fieldname)
        cb(null, file.originalname)
    },
})
const uploadPremierPro = multer({ storage: storage })

export default uploadPremierPro
