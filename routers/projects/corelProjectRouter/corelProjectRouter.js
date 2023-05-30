import { Router } from 'express'

import {
    projectCorelDraw,
    downloadFileFromFrontCorel,
    getUploadedFilesToFrontCorel,
} from '../../../controllers/projects/corelProjectController.js'

import uploadCorel from '../../../controllers/projects/uploadFile/uploadFileControllerCorel.js'

const projectRouterCorel = Router()

projectRouterCorel.get('/corel', getUploadedFilesToFrontCorel)
projectRouterCorel.post(
    '/upload',
    uploadCorel.single('projectFile'),
    async function (req, res, next) {
        if (req.file) {
            console.log('all nice , files uploaded')
            req.uploadedFile = req.file
            next()
        } else {
            console.log('error from post request {singleUPLOAD}')
        }
    },
    projectCorelDraw,
)
projectRouterCorel.get('/download/corel/:id', downloadFileFromFrontCorel)

export default projectRouterCorel
