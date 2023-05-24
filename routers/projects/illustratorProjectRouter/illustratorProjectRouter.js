import { Router } from 'express'
import {
    projectIllustrator,
    downloadFileFromFrontIllustrator,
    getUploadedFilesToFrontIllustrator,
} from '../../../controllers/projects/illustratorProjectController.js'

import uploadIllustrator from '../../../controllers/projects/uploadFile/uploadFileControllerIllustrator.js'

const projectRouterIllustrator = Router()

projectRouterIllustrator.get('/illustrator', getUploadedFilesToFrontIllustrator)
projectRouterIllustrator.post(
    '/upload',
    uploadIllustrator.single('projectFile'),
    async function (req, res, next) {
        if (req.file) {
            console.log('all nice , files uploaded')
            req.uploadedFile = req.file
            next()
        } else {
            console.log('error from post request {singleUPLOAD}')
        }
    },
    projectIllustrator,
)
projectRouterIllustrator.get('/download/:id', downloadFileFromFrontIllustrator)

export default projectRouterIllustrator
