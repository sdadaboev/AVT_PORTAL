import { Router } from 'express'

import {
    projectFigma,
    downloadFileFromFrontFigma,
    getUploadedFilesToFrontFigma,
} from '../../../controllers/projects/figmaProjectController.js'

import uploadFigma from '../../../controllers/projects/uploadFile/uploadFileControlelrFigma.js'

const projectRouterFigma = Router()

projectRouterFigma.get('/figma', getUploadedFilesToFrontFigma)
projectRouterFigma.post(
    '/uploadFigma',
    uploadFigma.single('projectFile'),
    async function (req, res, next) {
        if (req.file) {
            console.log('all nice , files uploaded')
            req.uploadedFile = req.file
            next()
        } else {
            console.log('error from post request {singleUPLOAD}')
        }
    },
    projectFigma,
)
projectRouterFigma.get('/download/figma/:id', downloadFileFromFrontFigma)

export default projectRouterFigma
