import afterEffectsScheme from '../../models/projects/afterEffectsProjectSheme.js'

import path from 'path'
export const projectAfterEffects = async (req, res, next) => {
    try {
        const { projectTitle, projectText } = req.body
        let uploadedfile = await req.uploadedFile

        const file = {
            projectTitle,
            projectText,
            projectPath: `http://127.0.0.1:3000/uploads/afterEffects/${uploadedfile.originalname}`,
            projectFileName: uploadedfile.originalname,
        }
        const fileToMongoDB = await afterEffectsScheme.create(file)

        console.log('file is uploaded: ', fileToMongoDB)
        res.redirect(
            'http://localhost:3000/project-after-effects/after-effects',
        )
    } catch (error) {
        console.log(error)
    }
}
export const getUploadedFilesToFrontAfterEffects = async (req, res, next) => {
    try {
        let uploadedFiles = await afterEffectsScheme.find()
        res.render('my page/loyihalar/afterEffectsProject.ejs', {
            title: "Adobe Photoshop bo'yicha loyihalar",
            files: uploadedFiles,
        })
    } catch (error) {
        console.log(error)
    }
}
export const downloadFileFromFrontAfterEffects = async (req, res, next) => {
    try {
        const fileID = req.params.id
        const foundedFileByID = await afterEffectsScheme.findOne({
            _id: fileID,
        })
        console.log(foundedFileByID)
        const filePath = path.join(
            process.cwd(),
            '/uploads/afterEffects',
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
