import mongoose, { Schema } from 'mongoose'

export interface VehicleInterface extends mongoose.Document {
    _id?: string,
    _userId: string,
    type: string,
    pattern: string,
    manufacturer: string,
    plate: string,
    color: string
    updatedAt?: Date,
    createdAt?: Date
}
export const VehicleSchema = new mongoose.Schema({
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    type: {
        type: String,
        required: true
    },
    pattern: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)
const Vehicle = mongoose.model('Vehicle', VehicleSchema)

export { Vehicle }