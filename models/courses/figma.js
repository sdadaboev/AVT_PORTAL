import { Schema, model } from 'mongoose'
const figmaCourse = new Schema(
    {
        name: { type: String, trim: true, required: true },
        language: {
            type: String,
            trim: true,
            required: true,
            default: 'til kiritilmagan',
            enum: ['INGLIZ', 'RUS', "O'ZBEK"],
        },
        youtubePlaylistURL: { type: String, trim: true },
        youtubeVideoURL: { type: String, trim: true },
        url: { type: String, trim: true },
        year: { type: String, trim: true },
        manba: { type: String, trim: true },
        mavzu: { type: String, trim: true },
    },
    {
        timestamps: {
            createdAt: 'yaratilgan vaqt',
            updatedAt: 'yangilangan vaqt',
        },
    },
)

export default model('Course/figma', figmaCourse)
