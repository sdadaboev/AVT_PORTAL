import { Router } from 'express'

import {
    projectPremierPro,
    downloadFileFromFrontPremierPRro,
    getUploadedFilesToFrontPremierPro,
} from '../../../controllers/projects/premierProProjectController.js'
import uploadPremier from '../../../controllers/projects/uploadFile/uploadFileControllerPremierPro.js'

const projectRouterPremierPro = Router()

projectRouterPremierPro.get('/premier-pro', getUploadedFilesToFrontPremierPro)
projectRouterPremierPro.post(
    '/upload',
    uploadPremier.single('projectFile'),
    async function (req, res, next) {
        if (req.file) {
            console.log('all nice , files uploaded')
            req.uploadedFile = req.file
            next()
        } else {
            console.log('error from post request {singleUPLOAD}')
        }
    },
    projectPremierPro,
)
projectRouterPremierPro.get('/download/:id', downloadFileFromFrontPremierPRro)

export default projectRouterPremierPro
