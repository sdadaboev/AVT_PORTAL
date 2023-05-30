import premierProProjectScheme from '../../models/projects/premierProProjectScheme.js'
import path from 'path'
export const projectPremierPro = async (req, res, next) => {
    try {
        const { projectTitle, projectText, projectLink } = req.body
        let uploadedfile = await req.uploadedFile

        const file = {
            projectTitle,
            projectText,
            projectPath: `http://127.0.0.1:3000/uploads/premier-pro/${uploadedfile.originalname}`,
            projectLink,
            projectFileName: uploadedfile.originalname,
        }
        const fileToMongoDB = await premierProProjectScheme.create(file)

        console.log('file is uploaded: ', fileToMongoDB)
        res.redirect('/project-premier-pro/premier-pro')
    } catch (error) {
        console.log(error)
    }
}
export const getUploadedFilesToFrontPremierPro = async (req, res, next) => {
    try {
        let uploadedFiles = await premierProProjectScheme.find()
        res.render('my page/loyihalar/premierProProject.ejs', {
            title: "Adobe Premier Pro bo'yicha loyihalar",
            files: uploadedFiles,
        })
    } catch (error) {
        console.log(error)
    }
}
export const downloadFileFromFrontPremierPRro = async (req, res, next) => {
    try {
        const fileID = req.params.id
        const foundedFileByID = await premierProProjectScheme.findOne({
            _id: fileID,
        })
        console.log(foundedFileByID)
        const filePath = path.join(
            process.cwd(),
            '/uploads/premierPro',
            foundedFileByID.projectFileName,
        )

        const fileName = foundedFileByID.projectFileName
        res.download(filePath, fileName, (err) => {
            if (err) {
                console.log(err)
                res.send('file not found')
            }
        })
    } catch (error) {
        console.log(error)
    }
}
