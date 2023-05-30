import { Router } from 'express'

import {
    projectAfterEffects,
    downloadFileFromFrontAfterEffects,
    getUploadedFilesToFrontAfterEffects,
} from '../../../controllers/projects/afterEffectsProjectController.js'

import uploadAfterEffects from '../../../controllers/projects/uploadFile/uploadFileControllerAfterEffects.js'

const projectRouterAfterEffects = Router()

projectRouterAfterEffects.get(
    '/after-effects',
    getUploadedFilesToFrontAfterEffects,
)
projectRouterAfterEffects.post(
    '/upload',
    uploadAfterEffects.single('projectFile'),
    async function (req, res, next) {
        if (req.file) {
            console.log('all nice , files uploaded')
            req.uploadedFile = req.file
            next()
        } else {
            console.log('error from post request {singleUPLOAD}')
        }
    },
    projectAfterEffects,
)
projectRouterAfterEffects.get(
    '/download/after/:id',
    downloadFileFromFrontAfterEffects,
)

export default projectRouterAfterEffects
