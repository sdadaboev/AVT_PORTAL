import { Router } from 'express'
import {
    project3DSMAX,
    getUploadedFilesToFront,
    downloadFileFromFront,
} from '../../controllers/projects/3dsmaxProjectController.js'
/////////////////////////////////////////////////////////////////////
import {
    projectUnreal,
    getUploadedFilesToFrontUnreal,
    downloadFileFromFrontUnreal,
} from '../../controllers/projects/unrealProjectController.js'
import upload from '../../controllers/projects/uploadFileController.js'
import uploadUnreal from '../../controllers/projects/uploadFile/uploadFileControllerUnreal.js'

const projectRouter = Router()

projectRouter.get('/3dsmax', getUploadedFilesToFront)
projectRouter.post(
    '/upload',
    upload.single('projectFile'),
    async function (req, res, next) {
        if (req.file) {
            console.log('all nice , files uploaded')
            req.uploadedFile = req.file
            next()
        } else {
            console.log('error from post request {singleUPLOAD}')
        }
    },
    project3DSMAX,
)
projectRouter.get('/download/3dmax/:id', downloadFileFromFront)

/////////////////////////////////        UNREAL ENGINE     ////////////////////////////////
projectRouter.get('/unreal', getUploadedFilesToFrontUnreal)
projectRouter.post(
    '/uploadUnreal',
    uploadUnreal.single('projectFile'),
    async function (req, res, next) {
        if (req.file) {
            console.log('all nice , files uploaded')
            req.uploadedFile = req.file
            next()
        } else {
            console.log('error from post request {singleUPLOAD}')
        }
    },
    projectUnreal,
)
projectRouter.get('/download/unreal/:id', downloadFileFromFrontUnreal)

//////////////
export default projectRouter
