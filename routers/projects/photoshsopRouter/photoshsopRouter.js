import { Router } from 'express'

import {
    projectPhotoshop,
    downloadFileFromFrontPhotoshop,
    getUploadedFilesToFrontPhotoshop,
} from '../../../controllers/projects/photoshopProjectController.js'

import uploadPhotoshop from '../../../controllers/projects/uploadFile/uploadFileControllerPhotoshop.js'

const projectRouterPhotoshop = Router()

projectRouterPhotoshop.get('/photoshop', getUploadedFilesToFrontPhotoshop)
projectRouterPhotoshop.post(
    '/upload',
    uploadPhotoshop.single('projectFile'),
    async function (req, res, next) {
        if (req.file) {
            console.log('all nice , files uploaded')
            req.uploadedFile = req.file
            next()
        } else {
            console.log('error from post request {singleUPLOAD}')
        }
    },
    projectPhotoshop,
)
projectRouterPhotoshop.get('/download/photoshop/:id', downloadFileFromFrontPhotoshop)

export default projectRouterPhotoshop
