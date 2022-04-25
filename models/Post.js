import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, 'Please provide post title'],
            maxlength: 50,
        },
        // image: {
        //     data: Buffer,
        //     contentType: String
        // },
        type: {
            type: String,
            enum: ['setup', 'advice', 'modern builds', 'retro builds'],
            default: 'setup',
            maxlength: 100,
        },
        description: {
            type: String,
            default: 'my setup',
            maxlength: 400,
        },
        postLocation: {
            type: String,
            default: 'my city',
            required: true,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user']
        },
    },
    {timestamps: true}
)

export default mongoose.model('Post', PostSchema)









