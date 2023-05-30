import illustratorScheme from '../../models/projects/illustratorProjectSheme.js'

import path from 'path'
export const projectIllustrator = async (req, res, next) => {
    try {
        const { projectTitle, projectText, projectLink } = req.body
        let uploadedfile = await req.uploadedFile

        const file = {
            projectTitle,
            projectText,
            projectPath: `http://127.0.0.1:3000/uploads/illustrator/${uploadedfile.originalname}`,
            projectLink,
            projectFileName: uploadedfile.originalname,
        }
        const fileToMongoDB = await illustratorScheme.create(file)

        console.log('file is uploaded: ', fileToMongoDB)
        res.redirect('/project-illustrator/illustrator')
    } catch (error) {
        console.log(error)
    }
}
export const getUploadedFilesToFrontIllustrator = async (req, res, next) => {
    try {
        let uploadedFiles = await illustratorScheme.find()
        res.render('my page/loyihalar/illustrator.ejs', {
            title: "Adobe Illustrator bo'yicha loyihalar",
            files: uploadedFiles,
        })
    } catch (error) {
        console.log(error)
    }
}
export const downloadFileFromFrontIllustrator = async (req, res, next) => {
    try {
        const fileID = req.params.id
        const foundedFileByID = await illustratorScheme.findOne({ _id: fileID })
        console.log(foundedFileByID)
        const filePath = path.join(
            process.cwd(),
            '/uploads/illustrator',
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
