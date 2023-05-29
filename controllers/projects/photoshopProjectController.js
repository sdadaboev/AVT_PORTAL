import photoshsopScheme from '../../models/projects/photoshopScheme.js'

import path from 'path'
export const projectPhotoshop = async (req, res, next) => {
    try {
        const { projectTitle, projectText, projectLink } = req.body
        let uploadedfile = await req.uploadedFile

        const file = {
            projectTitle,
            projectText,
            projectPath: `http://127.0.0.1:3000/uploads/photoshop/${uploadedfile.originalname}`,
            projectLink,
            projectFileName: uploadedfile.originalname,
        }
        const fileToMongoDB = await photoshsopScheme.create(file)

        console.log('file is uploaded: ', fileToMongoDB)
        res.redirect('http://localhost:3000/project-photoshop/photoshop')
    } catch (error) {
        console.log(error)
    }
}
export const getUploadedFilesToFrontPhotoshop = async (req, res, next) => {
    try {
        let uploadedFiles = await photoshsopScheme.find()
        res.render('my page/loyihalar/photoshopProject.ejs', {
            title: "Adobe Photoshop bo'yicha loyihalar",
            files: uploadedFiles,
        })
    } catch (error) {
        console.log(error)
    }
}
export const downloadFileFromFrontPhotoshop = async (req, res, next) => {
    try {
        const fileID = req.params.id
        const foundedFileByID = await photoshsopScheme.findOne({ _id: fileID })
        console.log(foundedFileByID)
        const filePath = path.join(
            process.cwd(),
            '/uploads/photoshop',
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
