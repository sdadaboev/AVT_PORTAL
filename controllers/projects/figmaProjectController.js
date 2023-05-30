import figmaScheme from '../../models/projects/figmaProjectScheme.js'
import path from 'path'
export const projectFigma = async (req, res, next) => {
    try {
        const { projectTitle, projectText, projectLink } = req.body
        let uploadedfile = await req.uploadedFile

        const file = {
            projectTitle,
            projectText,
            projectPath: `http://127.0.0.1:3000/uploads/figma/${uploadedfile.originalname}`,
            projectLink,
            projectFileName: uploadedfile.originalname,
        }
        const fileToMongoDB = await figmaScheme.create(file)

        console.log('file is uploaded: ', fileToMongoDB)
        res.redirect('/project-figma/figma')
    } catch (error) {
        console.log(error)
    }
}
export const getUploadedFilesToFrontFigma = async (req, res, next) => {
    try {
        let uploadedFiles = await figmaScheme.find()
        res.render('my page/loyihalar/figmaProject.ejs', {
            title: "Figma bo'yicha loyihalar",
            files: uploadedFiles,
        })
    } catch (error) {
        console.log(error)
    }
}
export const downloadFileFromFrontFigma = async (req, res, next) => {
    try {
        const fileID = req.params.id
        const foundedFileByID = await figmaScheme.findOne({ _id: fileID })
        console.log(foundedFileByID)
        const filePath = path.join(
            process.cwd(),
            '/uploads/figma',
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
