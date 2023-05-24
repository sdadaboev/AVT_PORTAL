import express from 'express'
import cors from 'cors'
// import authRouter from './routers/pages/router.js'
import { mongoConnect } from './database/connect.js'

// import roleRouter from './routers/userRole/roleRouter.js'
// import { addingRole } from './controllers/userRole/userRoleController.js'
import allRouter from './routers/allRouter.js'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
const PORT = process.env.DOSKIN_PORT || 3001
app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use('/', allRouter)
// app.use('/auth', authRouter)
// app.use('/admin', addingRole)

app.listen(PORT, () => {
    mongoConnect()
    console.log(`listen on port: ${PORT}`)
})
