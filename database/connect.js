import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
export const mongoConnect = () => {
    const url = 'mongodb://127.0.0.1/TUIT_BMI'
    const uri = process.env.DOSKIN_MONGODB_URI

    mongoose.set('strictQuery', false)
    try {
        mongoose
            .connect(uri)
            .then(() => {
                console.log('connected to mongoDB')
            })
            .catch((err) => {
                console.error('App starting error:', err)
            })
    } catch (error) {
        console.log(error)
    }
}
