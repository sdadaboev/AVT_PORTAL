import threeDSMAX from '../../models/projects/3dMaxProjectScheme.js'
import path from 'path'
export const project3DSMAX = async (req, res, next) => {
    try {
        const { projectTitle, projectText, projectLink } = req.body
        let uploadedfile = await req.uploadedFile

        const file = {
            projectTitle,
            projectText,
            projectPath: `http://127.0.0.1:3000/uploads/3dsmax/${uploadedfile.originalname}`,
            projectLink,
            projectFileName: uploadedfile.originalname,
        }
        const fileToMongoDB = await threeDSMAX.create(file)

        console.log('file is uploaded: ', fileToMongoDB)
        res.redirect('/project/3dsmax')
    } catch (error) {
        console.log(error)
    }
}
export const getUploadedFilesToFront = async (req, res, next) => {
    try {
        let uploadedFiles = await threeDSMAX.find()
        res.render('my page/loyihalar/3dsMaxProject.ejs', {
            title: "3DS Max bo'yicha loyihalar",
            files: uploadedFiles,
        })
    } catch (error) {
        console.log(error)
    }
}
export const downloadFileFromFront = async (req, res, next) => {
    try {
        const fileID = req.params.id
        const foundedFileByID = await threeDSMAX.findOne({ _id: fileID })
        console.log('mana haqiqat', foundedFileByID)
        const filePath = path.join(
            process.cwd(),
            '/uploads/3dsmax',
            foundedFileByID.projectFileName,
        )

        const fileName = foundedFileByID.projectFileName
        res.download(filePath, fileName, (err) => {
            if (err) {
                console.log(err)
                res.send('file not found')
            }
        })
        // console.log('KIRDIM KKIRDIM KIRDKM')
        // const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
        // console.log('fullUrl:', fullUrl)
        // // let filePath = req.url
        // // res.download()
    } catch (error) {
        console.log(error)
    }
}
