import corelDraw from '../../models/projects/corelProjectScheme.js'

import path from 'path'
export const projectCorelDraw = async (req, res, next) => {
    try {
        const { projectTitle, projectText, projectLink } = req.body
        let uploadedfile = await req.uploadedFile

        const file = {
            projectTitle,
            projectText,
            projectPath: `http://127.0.0.1:3000/uploads/corel/${uploadedfile.originalname}`,
            projectLink,
            projectFileName: uploadedfile.originalname,
        }
        const fileToMongoDB = await corelDraw.create(file)

        console.log('file is uploaded: ', fileToMongoDB)
        res.redirect('/project-corel/corel')
    } catch (error) {
        console.log(error)
    }
}
export const getUploadedFilesToFrontCorel = async (req, res, next) => {
    try {
        let uploadedFiles = await corelDraw.find()
        res.render('my page/loyihalar/corelProject.ejs', {
            title: "Corel Draw bo'yicha loyihalar",
            files: uploadedFiles,
        })
    } catch (error) {
        console.log(error)
    }
}
export const downloadFileFromFrontCorel = async (req, res, next) => {
    try {
        const fileID = req.params.id
        const foundedFileByID = await corelDraw.findOne({ _id: fileID })
        console.log(foundedFileByID)
        const filePath = path.join(
            process.cwd(),
            '/uploads/corel',
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
