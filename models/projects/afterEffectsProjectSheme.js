import { Schema, model } from 'mongoose'
const afterEffectsProjectScheme = new Schema(
    {
        projectTitle: { type: String, trim: true, required: true },
        projectText: { type: String, trim: true },
        projectPath: { type: String, trim: true, required: true },
        projectFileName: { type: String, trim: true, required: true },
        projectOwner: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
        },
    },
)

export default model(
    'Project/afterEffectsProjectScheme',
    afterEffectsProjectScheme,
)
