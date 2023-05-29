import unrealProjectScheme from '../../models/projects/unrealProjectScheme.js'
import path from 'path'
export const projectUnreal = async (req, res, next) => {
    try {
        const { projectTitle, projectText, projectLink } = req.body
        let uploadedfile = await req.uploadedFile

        const file = {
            projectTitle,
            projectText,
            projectPath: `http://127.0.0.1:3000/uploads/unreal/${uploadedfile.originalname}`,
            projectLink,
            projectFileName: uploadedfile.originalname,
        }
        const fileToMongoDB = await unrealProjectScheme.create(file)

        console.log('file is uploaded: ', fileToMongoDB)
        res.redirect('/project/unreal')
    } catch (error) {
        console.log(error)
    }
}
export const getUploadedFilesToFrontUnreal = async (req, res, next) => {
    try {
        let uploadedFiles = await unrealProjectScheme.find()
        res.render('my page/loyihalar/unrealProject.ejs', {
            title: "Unreal Enginebo'yicha loyihalar",
            files: uploadedFiles,
        })
    } catch (error) {
        console.log(error)
    }
}
export const downloadFileFromFrontUnreal = async (req, res, next) => {
    try {
        const fileID = req.params.id
        const foundedFileByID = await unrealProjectScheme.findOne({
            _id: fileID,
        })
        console.log(foundedFileByID)
        const filePath = path.join(
            process.cwd(),
            '/uploads/unreal',
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
