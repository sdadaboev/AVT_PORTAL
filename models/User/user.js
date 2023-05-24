import { Schema, model } from 'mongoose'
const User = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    importantUserProfile: {
        username: { type: String, unique: true, required: true, trim: true },
        password: { type: String, required: true, trim: true },
        roles: [{ type: String, ref: 'Role' }],
    },
    personalUserProfile: {
        name: { type: String, required: false },
        surname: { type: String, required: false },
    },
    universityUserProfile: {
        faculty: { type: String, required: false },
        specialization: { type: String, required: false },
        group: { type: String, required: false },
    },
    universityUserData: {
        projects: {
            project: {
                title: { type: String, required: false },
                text: { type: String, required: false },
                path: { type: String, required: false },
            },
        },
    },
})

export default model('User', User)
